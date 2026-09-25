import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Captions, CaptionsOff, Clapperboard, Pause, Play, RotateCcw, X } from 'lucide-react';
import { findAuthoredCinema, type AuthoredCinema } from './cinema/authored';
import { cueAt, fadeAt, shotAt } from './cinema/authored/define';
import { CINEMA_DURATION, type Cinema } from './cinema/cinemaKit';

export type CinemaParagraph = {
  index: number;
  source: string;
  text: string;
  cast: string[];
};

type Lang = 'en' | 'zh';

// Whether subtitles are shown is a per-reader preference; storage may be unavailable (private mode).
const SUBTITLES_KEY = 'phbj-cinema-subtitles';
const readSubtitlesPreference = () => { try { return localStorage.getItem(SUBTITLES_KEY) !== 'off'; } catch { return true; } };
const writeSubtitlesPreference = (on: boolean) => { try { localStorage.setItem(SUBTITLES_KEY, on ? 'on' : 'off'); } catch { /* not persisted */ } };

export function ParagraphCinema({ paragraph, chapterId, lang, onClose }: {
  paragraph: CinemaParagraph;
  chapterId: number;
  lang: Lang;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  // Only paragraphs with an authored film (cinema/authored/chNN/pNN) have anything to play.
  const story = findAuthoredCinema(chapterId, paragraph.index + 1);
  const zh = lang === 'zh';

  useEffect(() => {
    const dialog = dialogRef.current!;
    const opener = document.activeElement as HTMLElement | null;
    dialog.showModal();
    // Handle keys before the reader/app's global chapter and overlay shortcuts.
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); event.stopImmediatePropagation(); closeRef.current(); }
      else if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') event.stopPropagation();
    };
    window.addEventListener('keydown', keydown, true);
    return () => {
      window.removeEventListener('keydown', keydown, true);
      dialog.close();
      if (opener?.isConnected) opener.focus();
    };
  }, []);

  return createPortal(
    <dialog ref={dialogRef} aria-labelledby="paragraph-cinema-title" aria-describedby={story ? 'paragraph-cinema-description' : undefined}
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) onClose(); }}
      data-overlay-scroll="true"
      // .parchment sets position: relative, which would otherwise override the modal's fixed placement.
      style={{ position: 'fixed' }}
      className={`parchment m-auto w-[calc(100%-1rem)] ${story ? 'max-w-5xl' : 'max-w-lg'} max-h-[94dvh] overflow-y-auto rounded-sm border-4 border-double border-[var(--paper-border)] p-0 text-[var(--ink-main)] shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm`}>
      <div className={`flex items-start justify-between gap-4 px-5 pt-5 sm:px-8 sm:pt-7 ${story ? 'pb-4' : 'pb-6 sm:pb-8'}`}>
        <div className="min-w-0">
          <p className="mb-1.5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]"><Clapperboard size={14} />{zh ? '段落光影' : 'Paragraph cinema'}<span className="font-normal text-[var(--ink-dim-text)]">{zh ? `第${chapterId}回 · 第${paragraph.index + 1}段` : `Chapter ${chapterId} · Paragraph ${paragraph.index + 1}`}</span></p>
          {story
            ? <h2 id="paragraph-cinema-title" className="text-xl font-semibold text-[var(--ink-title)] sm:text-2xl">{story.title[lang]}</h2>
            : <h2 id="paragraph-cinema-title" className="text-base text-[var(--ink-title)]">{zh ? '本段影片尚未推出。' : 'The film for this paragraph is not available yet.'}</h2>}
        </div>
        <button autoFocus type="button" onClick={onClose} aria-label={zh ? '关闭光影演绎' : 'Close cinema'} className="tap-44 shrink-0 rounded-full p-2 text-[var(--ink-title)] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"><X size={20} /></button>
      </div>
      {story && <AuthoredFilm story={story} paragraph={paragraph} lang={lang} />}
    </dialog>, document.body,
  );
}

/** The stage, controls, shots and captions of an authored film. */
function AuthoredFilm({ story, paragraph, lang }: { story: AuthoredCinema; paragraph: CinemaParagraph; lang: Lang }) {
  const hostRef = useRef<HTMLDivElement>(null);
  const cinemaRef = useRef<Cinema | null>(null);
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const playingRef = useRef(playing);
  playingRef.current = playing;
  const [seconds, setSeconds] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const [subtitlesOn, setSubtitlesOn] = useState(readSubtitlesPreference);
  const shotIndex = shotAt(story.shots, seconds);
  const shot = story.shots[shotIndex];
  const cue = subtitlesOn ? cueAt(story.subtitles, seconds) : undefined;
  const zh = lang === 'zh';
  const duration = CINEMA_DURATION;
  const finished = seconds >= duration;

  useEffect(() => {
    let cancelled = false;
    let cinema: Cinema | undefined;
    setStatus('loading');
    const onProgress = (value: number) => {
      setSeconds(value);
      if (value >= duration) setPlaying(false);
    };
    const onError = () => { setStatus('error'); setPlaying(false); };
    // Each scene is its own chunk, loaded when its film is first opened.
    story.loadScene().then(create => {
      if (cancelled || !hostRef.current) return;
      cinema = create(hostRef.current, story, onProgress, onError);
      cinemaRef.current = cinema;
      cinema.setPlaying(playingRef.current);
      setStatus('ready');
    }).catch(() => { if (!cancelled) { setStatus('error'); setPlaying(false); } });
    return () => { cancelled = true; cinema?.dispose(); cinemaRef.current = null; };
  }, [story, attempt]);

  useEffect(() => { cinemaRef.current?.setPlaying(playing); }, [playing]);
  const seek = (value: number) => { cinemaRef.current?.seek(value); };
  const replay = () => { cinemaRef.current?.replay(); setPlaying(true); };
  const time = (value: number) => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  // Controls share the app's paper-and-ink vocabulary: square-cornered, paper borders, accent on hover.
  const buttonStyle = 'inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/60 px-4 text-sm text-[var(--ink-title)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-40';
  // Static class names so Tailwind generates them; stories may have two to six shots.
  const shotColumns = ['sm:grid-cols-2', 'sm:grid-cols-2', 'sm:grid-cols-2', 'sm:grid-cols-3', 'sm:grid-cols-4', 'sm:grid-cols-5', 'sm:grid-cols-3'][Math.min(story.shots.length, 6)];

  return <>
    {/* The film is mounted like a painting on the page: a paper mat, then a thin ink rule. */}
    <div className="mx-3 border border-[var(--paper-border)] bg-[var(--paper-bg)] p-1.5 shadow-[inset_0_0_12px_var(--accent-inset)] sm:mx-8 sm:p-2">
      <div className="relative overflow-hidden bg-[var(--art-ink-deep)] ring-1 ring-[var(--ink-title)]/40">
        <div ref={hostRef} data-testid="paragraph-cinema-canvas" role="img" aria-label={`${story.title[lang]} · ${shot.title[lang]}`} className="h-[40dvh] min-h-60 w-full sm:h-[48dvh] sm:min-h-80" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[var(--art-ink-deep)]" style={{ opacity: fadeAt(story.shots, seconds) }} />
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.45)_100%)]" />
        {/* Subtitles: the words of the passage being staged, in the reading language. The full text
            is also available below, so they are hidden from screen readers to avoid repetition. */}
        {cue && status === 'ready' && <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex justify-center px-4 pb-3 sm:px-10 sm:pb-5">
          <p key={cue.start} data-testid="cinema-subtitle" className={`max-w-3xl rounded-sm bg-[rgba(20,16,14,0.62)] px-3 py-1.5 text-center text-[var(--art-paper)] shadow-sm ${zh ? 'text-base sm:text-lg tracking-wide' : 'text-sm sm:text-base'}`}>{zh ? cue.zh : cue.en}</p>
        </div>}
        {status === 'loading' && <div role="status" className="absolute inset-0 flex items-center justify-center bg-[var(--art-ink-deep)] text-sm text-[var(--art-paper)]/80">{zh ? '正在布景…' : 'Setting the scene…'}</div>}
        {status === 'error' && <div role="alert" className="parchment absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center text-sm text-[var(--ink-dim)]"><p>{zh ? '无法显示三维场景。请检查浏览器是否启用了 WebGL，或重试。' : 'The 3D scene could not be displayed. Check that WebGL is enabled in your browser, or try again.'}</p><button type="button" className={buttonStyle} onClick={() => { setSeconds(0); setAttempt(value => value + 1); }}>{zh ? '重试' : 'Try again'}</button></div>}
      </div>
    </div>
    <div className="mx-3 mt-1.5 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-[var(--ink-dim-text)] sm:mx-8">
      <span>{`${String(shotIndex + 1).padStart(2, '0')} / ${String(story.shots.length).padStart(2, '0')} · ${shot.title[lang]}`}</span><span className="hidden sm:inline">{zh ? '光影意境' : 'A literary miniature'}</span>
    </div>
    <div className="px-5 pt-4 pb-6 sm:px-8 sm:pb-8">
      <div className="flex flex-wrap items-center gap-3">
        <button type="button" className={buttonStyle} disabled={status !== 'ready'} onClick={() => finished ? replay() : setPlaying(value => !value)}>{playing ? <Pause size={15} /> : <Play size={15} />}{playing ? zh ? '暂停' : 'Pause' : finished ? zh ? '重播' : 'Replay' : zh ? '播放' : 'Play'}</button>
        <button type="button" className={buttonStyle} disabled={status !== 'ready'} aria-label={zh ? '从头播放' : 'Restart cinema'} onClick={replay}><RotateCcw size={15} /></button>
        <button type="button" className={buttonStyle} aria-pressed={subtitlesOn} aria-label={zh ? '字幕' : 'Subtitles'} title={zh ? (subtitlesOn ? '关闭字幕' : '显示字幕') : (subtitlesOn ? 'Hide subtitles' : 'Show subtitles')}
          onClick={() => setSubtitlesOn(on => { writeSubtitlesPreference(!on); return !on; })}>{subtitlesOn ? <Captions size={15} /> : <CaptionsOff size={15} />}</button>
        <progress aria-label={zh ? '播放进度' : 'Cinema progress'} max={duration} value={seconds}
          className="h-1.5 min-w-16 flex-1 appearance-none overflow-hidden rounded-full bg-[var(--paper-border)] [&::-moz-progress-bar]:bg-[var(--accent)] [&::-webkit-progress-bar]:bg-[var(--paper-border)] [&::-webkit-progress-value]:bg-[var(--accent)]" />
        <span className="text-xs tabular-nums text-[var(--ink-dim-text)]">{time(seconds)} / {time(duration)}</span>
      </div>
      <div className="mt-5">
        <div data-testid="cinema-shots" aria-label={zh ? '选择分镜' : 'Choose a scene'} className={`grid grid-cols-2 gap-2 ${shotColumns}`}>
          {story.shots.map((item, index) => <button key={item.start} type="button" disabled={status !== 'ready'}
            aria-pressed={shotIndex === index} onClick={() => seek(item.start + 0.6)}
            className={`rounded-sm border px-3 py-2 text-left text-sm leading-snug transition-colors focus-visible:outline-2 focus-visible:outline-[var(--accent)] disabled:opacity-40 ${shotIndex === index ? 'border-[var(--accent)]/50 bg-[var(--accent)]/10 font-medium text-[var(--accent)]' : 'border-[var(--paper-border)] text-[var(--ink-dim-text)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)]'}`}>
            <span className="mr-2 text-xs tabular-nums opacity-70">{String(index + 1).padStart(2, '0')}</span>{item.title[lang]}
          </button>)}
        </div>
        <div data-testid="cinema-story-caption" className="mt-5 border-l-2 border-[var(--accent)]/60 pl-4">
          <p className="text-lg text-[var(--ink-title)]">{shot.quote}</p>
          <p className="mt-1 text-sm text-[var(--ink-dim-text)]">{shot.caption[lang]}</p>
        </div>
      </div>
      <p id="paragraph-cinema-description" className="mt-5 text-sm text-[var(--ink-dim-text)]">{story.description[lang]}</p>
      {paragraph.cast.length > 0 && <p className="mt-2 text-sm text-[var(--accent)]">{zh ? '本段人物：' : 'In this passage: '}{paragraph.cast.join(zh ? '、' : ' · ')}</p>}
      <details className="mt-5 border-t border-[var(--paper-border)] pt-3">
        <summary className="text-sm font-medium text-[var(--accent)]">{zh ? '阅读本段' : 'Read the passage'}</summary>
        <p className="mt-3 max-h-48 overflow-y-auto whitespace-pre-line text-base text-[var(--ink-main)]">{paragraph.text.replace(/[▉□]/g, '').replace(/\*([^*]+)\*/g, '$1')}</p>
      </details>
    </div>
  </>;
}
