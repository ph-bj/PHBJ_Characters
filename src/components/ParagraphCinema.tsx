import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Clapperboard, Pause, Play, RotateCcw, X } from 'lucide-react';
import { CINEMA_DURATION, planParagraphScene, sceneLabels } from './cinema/paragraphScene';
import { STORIES, fadeAt, shotAt } from './cinema/stories';
import type { Cinema } from './cinema/createParagraphCinema';

export type CinemaParagraph = {
  index: number;
  source: string;
  text: string;
  cast: string[];
};

export function ParagraphCinema({ paragraph, chapterId, lang, onClose }: {
  paragraph: CinemaParagraph;
  chapterId: number;
  lang: 'en' | 'zh';
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const cinemaRef = useRef<Cinema | null>(null);
  const closeRef = useRef(onClose);
  closeRef.current = onClose;
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [playing, setPlaying] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const playingRef = useRef(playing);
  playingRef.current = playing;
  const [seconds, setSeconds] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const plan = useMemo(() => planParagraphScene(paragraph.source, { chapterId, paragraphIndex: paragraph.index }), [paragraph.source, paragraph.index, chapterId]);
  // Authored paragraphs have a shot list; the rest get the generic miniature.
  const story = plan.sequence ? STORIES[plan.sequence] : undefined;
  const shotIndex = story ? shotAt(story.shots, seconds) : 0;
  const shot = story?.shots[shotIndex];
  const zh = lang === 'zh';
  const duration = CINEMA_DURATION;
  const finished = seconds >= duration;

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

  useEffect(() => {
    let cancelled = false;
    let cinema: Cinema | undefined;
    setStatus('loading');
    import('./cinema/createParagraphCinema').then(({ createParagraphCinema }) => {
      if (cancelled || !hostRef.current) return;
      cinema = createParagraphCinema(hostRef.current, plan, paragraph.cast.length, value => {
        setSeconds(value);
        if (value >= duration) setPlaying(false);
      }, () => { setStatus('error'); setPlaying(false); });
      cinemaRef.current = cinema;
      cinema.setPlaying(playingRef.current);
      setStatus('ready');
    }).catch(() => { if (!cancelled) { setStatus('error'); setPlaying(false); } });
    return () => { cancelled = true; cinema?.dispose(); cinemaRef.current = null; };
  }, [plan, paragraph.cast.length, attempt]);

  useEffect(() => { cinemaRef.current?.setPlaying(playing); }, [playing]);
  const seek = (value: number) => { cinemaRef.current?.seek(value); };
  const replay = () => { cinemaRef.current?.replay(); setPlaying(true); };
  const time = (value: number) => `${Math.floor(value / 60)}:${String(Math.floor(value % 60)).padStart(2, '0')}`;
  // Controls share the app's paper-and-ink vocabulary: square-cornered, paper borders, accent on hover.
  const buttonStyle = 'inline-flex min-h-10 items-center justify-center gap-2 rounded-sm border border-[var(--paper-border)] bg-[var(--paper-bg)]/60 px-4 text-sm text-[var(--ink-title)] transition-colors hover:border-[var(--accent)]/50 hover:bg-[var(--accent)]/5 hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-40';
  const stageLabel = story && shot
    ? `${String(shotIndex + 1).padStart(2, '0')} / ${String(story.shots.length).padStart(2, '0')} · ${shot.title[lang]}`
    : `${sceneLabels.mood[plan.mood][lang]} / ${sceneLabels.weather[plan.weather][lang]}`;

  return createPortal(
    <dialog ref={dialogRef} aria-labelledby="paragraph-cinema-title" aria-describedby="paragraph-cinema-description"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) onClose(); }}
      data-overlay-scroll="true"
      // .parchment sets position: relative, which would otherwise override the modal's fixed placement.
      style={{ position: 'fixed' }}
      className="parchment m-auto w-[calc(100%-1rem)] max-w-5xl max-h-[94dvh] overflow-y-auto rounded-sm border-4 border-double border-[var(--paper-border)] p-0 text-[var(--ink-main)] shadow-2xl backdrop:bg-black/50 backdrop:backdrop-blur-sm">
      <div className="flex items-start justify-between gap-4 px-5 pt-5 pb-4 sm:px-8 sm:pt-7">
        <div className="min-w-0">
          <p className="mb-1.5 flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-widest text-[var(--accent)]"><Clapperboard size={14} />{zh ? '段落光影' : 'Paragraph cinema'}<span className="font-normal text-[var(--ink-dim-text)]">{zh ? `第${chapterId}回 · 第${paragraph.index + 1}段` : `Chapter ${chapterId} · Paragraph ${paragraph.index + 1}`}</span></p>
          <h2 id="paragraph-cinema-title" className="text-xl font-semibold text-[var(--ink-title)] sm:text-2xl">{plan.title[lang]}</h2>
        </div>
        <button autoFocus type="button" onClick={onClose} aria-label={zh ? '关闭光影演绎' : 'Close cinema'} className="tap-44 shrink-0 rounded-full p-2 text-[var(--ink-title)] transition-colors hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-[var(--accent)]"><X size={20} /></button>
      </div>
      {/* The film is mounted like a painting on the page: a paper mat, then a thin ink rule. */}
      <div className="mx-3 border border-[var(--paper-border)] bg-[var(--paper-bg)] p-1.5 shadow-[inset_0_0_12px_var(--accent-inset)] sm:mx-8 sm:p-2">
        <div className="relative overflow-hidden bg-[var(--art-ink-deep)] ring-1 ring-[var(--ink-title)]/40">
          <div ref={hostRef} data-testid="paragraph-cinema-canvas" role="img" aria-label={`${plan.title[lang]} · ${sceneLabels.mood[plan.mood][lang]} · ${sceneLabels.weather[plan.weather][lang]}`} className="h-[40dvh] min-h-60 w-full sm:h-[48dvh] sm:min-h-80" />
          {story && <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[var(--art-ink-deep)]" style={{ opacity: fadeAt(story.shots, seconds) }} />}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_45%,rgba(10,8,6,0.45)_100%)]" />
          {status === 'loading' && <div role="status" className="absolute inset-0 flex items-center justify-center bg-[var(--art-ink-deep)] text-sm text-[var(--art-paper)]/80">{zh ? '正在布景…' : 'Setting the scene…'}</div>}
          {status === 'error' && <div role="alert" className="parchment absolute inset-0 flex flex-col items-center justify-center gap-4 px-8 text-center text-sm text-[var(--ink-dim)]"><p>{zh ? '无法显示三维场景。请检查浏览器是否启用了 WebGL，或重试。' : 'The 3D scene could not be displayed. Check that WebGL is enabled in your browser, or try again.'}</p><button type="button" className={buttonStyle} onClick={() => { setSeconds(0); setAttempt(value => value + 1); }}>{zh ? '重试' : 'Try again'}</button></div>}
        </div>
      </div>
      <div className="mx-3 mt-1.5 flex items-center justify-between gap-4 text-xs uppercase tracking-widest text-[var(--ink-dim-text)] sm:mx-8">
        <span>{stageLabel}</span><span className="hidden sm:inline">{zh ? '光影意境' : 'A literary miniature'}</span>
      </div>
      <div className="px-5 pt-4 pb-6 sm:px-8 sm:pb-8">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className={buttonStyle} disabled={status !== 'ready'} onClick={() => finished ? replay() : setPlaying(value => !value)}>{playing ? <Pause size={15} /> : <Play size={15} />}{playing ? zh ? '暂停' : 'Pause' : finished ? zh ? '重播' : 'Replay' : zh ? '播放' : 'Play'}</button>
          <button type="button" className={buttonStyle} disabled={status !== 'ready'} aria-label={zh ? '从头播放' : 'Restart cinema'} onClick={replay}><RotateCcw size={15} /></button>
          <progress aria-label={zh ? '播放进度' : 'Cinema progress'} max={duration} value={seconds}
            className="h-1.5 min-w-16 flex-1 appearance-none overflow-hidden rounded-full bg-[var(--paper-border)] [&::-moz-progress-bar]:bg-[var(--accent)] [&::-webkit-progress-bar]:bg-[var(--paper-border)] [&::-webkit-progress-value]:bg-[var(--accent)]" />
          <span className="text-xs tabular-nums text-[var(--ink-dim-text)]">{time(seconds)} / {time(duration)}</span>
        </div>
        {story && shot && <div className="mt-5">
          <div aria-label={zh ? '选择分镜' : 'Choose a scene'} className={`grid grid-cols-2 gap-2 ${story.shots.length === 5 ? 'sm:grid-cols-5' : 'sm:grid-cols-4'}`}>
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
        </div>}
        <p id="paragraph-cinema-description" className="mt-5 text-sm text-[var(--ink-dim-text)]">{story ? story.description[lang] : zh ? '依本段文字中的场景与情绪营造的风格化意境。' : 'A stylized interpretation of the setting and mood suggested by this paragraph.'}</p>
        {paragraph.cast.length > 0 && <p className="mt-2 text-sm text-[var(--accent)]">{zh ? '本段人物：' : 'In this passage: '}{paragraph.cast.join(zh ? '、' : ' · ')}</p>}
        <details className="mt-5 border-t border-[var(--paper-border)] pt-3">
          <summary className="text-sm font-medium text-[var(--accent)]">{zh ? '阅读本段' : 'Read the passage'}</summary>
          <p className="mt-3 max-h-48 overflow-y-auto whitespace-pre-line text-base text-[var(--ink-main)]">{paragraph.text.replace(/[▉□]/g, '').replace(/\*([^*]+)\*/g, '$1')}</p>
        </details>
      </div>
    </dialog>, document.body,
  );
}
