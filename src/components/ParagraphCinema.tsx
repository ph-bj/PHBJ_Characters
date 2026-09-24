import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Clapperboard, Pause, Play, RotateCcw, X } from 'lucide-react';
import { CINEMA_DURATION, planParagraphScene, sceneLabels } from './cinema/paragraphScene';
import { CAPITAL_PROLOGUE_SHOTS, capitalPrologueShotAt, capitalPrologueFadeAt } from './cinema/capitalPrologueStory';
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
  const isPrologue = plan.sequence === 'capital-prologue';
  const shotIndex = capitalPrologueShotAt(seconds);
  const shot = CAPITAL_PROLOGUE_SHOTS[shotIndex];
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
  const buttonStyle = 'inline-flex min-h-10 items-center justify-center gap-2 rounded-full border border-white/20 px-4 text-xs text-[#efe5d2] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#edc993] disabled:opacity-40';

  return createPortal(
    <dialog ref={dialogRef} aria-labelledby="paragraph-cinema-title" aria-describedby="paragraph-cinema-description"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { event.stopPropagation(); if (event.target === event.currentTarget) onClose(); }}
      className="m-auto w-[calc(100%-1rem)] max-w-6xl max-h-[94dvh] overflow-y-auto rounded-xl border border-[#b4a284]/30 bg-[#101b22] p-0 text-[#efe5d2] shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm">
      <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4 sm:px-7">
        <div>
          <p className="mb-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-[#c9af85]"><Clapperboard size={13} />{zh ? '段落光影' : 'Paragraph cinema'} · {zh ? `第${chapterId}回 · 第${paragraph.index + 1}段` : `Chapter ${chapterId} · Paragraph ${paragraph.index + 1}`}</p>
          <h2 id="paragraph-cinema-title" className="font-serif text-xl sm:text-2xl">{plan.title[lang]}</h2>
        </div>
        <button autoFocus type="button" onClick={onClose} aria-label={zh ? '关闭光影演绎' : 'Close cinema'} className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/20 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-[#edc993]"><X size={19} /></button>
      </div>
      <div className="relative overflow-hidden bg-[#101b22]">
        <div ref={hostRef} data-testid="paragraph-cinema-canvas" role="img" aria-label={`${plan.title[lang]} · ${sceneLabels.mood[plan.mood][lang]} · ${sceneLabels.weather[plan.weather][lang]}`} className="h-[42dvh] min-h-60 w-full sm:h-[50dvh] sm:min-h-80" />
        {isPrologue && <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-10 bg-[#0a1015]" style={{ opacity: capitalPrologueFadeAt(seconds) }} />}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(5,12,17,0.5)_100%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-5 bg-[#0a1015] sm:h-7" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 flex h-8 items-center justify-between bg-[#0a1015] px-5 text-[9px] uppercase tracking-[0.2em] text-[#c9af85] sm:h-9">
          <span>{isPrologue ? `${String(shotIndex + 1).padStart(2, '0')} / ${String(CAPITAL_PROLOGUE_SHOTS.length).padStart(2, '0')} · ${shot.title[lang]}` : `${sceneLabels.mood[plan.mood][lang]} / ${sceneLabels.weather[plan.weather][lang]}`}</span><span className="hidden sm:inline">{zh ? '光影意境' : 'A literary miniature'}</span>
        </div>
        {status === 'loading' && <div role="status" className="absolute inset-0 flex items-center justify-center bg-[#101b22] text-sm text-[#d6c6a8]">{zh ? '正在布景…' : 'Setting the scene…'}</div>}
        {status === 'error' && <div role="alert" className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#101b22] px-8 text-center text-sm"><p>{zh ? '无法显示三维场景。请检查浏览器是否启用了 WebGL，或重试。' : 'The 3D scene could not be displayed. Check that WebGL is enabled in your browser, or try again.'}</p><button type="button" className={buttonStyle} onClick={() => { setSeconds(0); setAttempt(value => value + 1); }}>{zh ? '重试' : 'Try again'}</button></div>}
      </div>
      <div className="px-5 py-4 sm:px-7">
        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className={buttonStyle} disabled={status !== 'ready'} onClick={() => finished ? replay() : setPlaying(value => !value)}>{playing ? <Pause size={14} /> : <Play size={14} />}{playing ? zh ? '暂停' : 'Pause' : finished ? zh ? '重播' : 'Replay' : zh ? '播放' : 'Play'}</button>
          <button type="button" className={buttonStyle} disabled={status !== 'ready'} aria-label={zh ? '从头播放' : 'Restart cinema'} onClick={replay}><RotateCcw size={14} /></button>
          <progress aria-label={zh ? '播放进度' : 'Cinema progress'} max={duration} value={seconds} className="h-1 min-w-16 flex-1 accent-[#c9af85]" />
          <span className="text-[11px] tabular-nums text-[#bcbbb2]">0:{String(Math.floor(seconds)).padStart(2, '0')} / 0:36</span>
        </div>
        {isPrologue && <div className="mt-4">
          <div aria-label={zh ? '选择分镜' : 'Choose a scene'} className="grid grid-cols-2 gap-2 sm:grid-cols-5">
            {CAPITAL_PROLOGUE_SHOTS.map((item, index) => <button key={item.start} type="button" disabled={status !== 'ready'}
              aria-pressed={shotIndex === index} onClick={() => seek(item.start + 0.6)}
              className={`rounded-md border px-3 py-2 text-left text-xs leading-relaxed transition-colors focus-visible:outline-2 focus-visible:outline-[#edc993] disabled:opacity-40 ${shotIndex === index ? 'border-[#c9af85]/60 bg-[#c9af85]/10 text-[#edc993]' : 'border-white/10 text-[#a7b1b3] hover:bg-white/5'}`}>
              <span className="mr-2 opacity-60">{String(index + 1).padStart(2, '0')}</span>{item.title[lang]}
            </button>)}
          </div>
          <div data-testid="cinema-story-caption" className="mt-4 border-l-2 border-[#c9af85]/50 pl-3">
            <p className="font-serif text-base text-[#ead7b6]">{shot.quote}</p>
            <p className="mt-1 text-xs leading-relaxed text-[#b8c2c5]">{shot.caption[lang]}</p>
          </div>
        </div>}
        <p id="paragraph-cinema-description" className="mt-4 text-xs leading-relaxed text-[#a7b1b3]">{isPrologue ? zh ? '自天边云端降入京城，经杯中月、灯下影、月洞门，终归一个“情”字。画中人物为本段所写的无名君子与优伶。' : 'From the clouds above the capital, through a moon in a wine cup, a shadow-play screen and a moon gate, to a single word: feeling. The figures represent the unnamed gentlemen and performers in this passage.' : zh ? '依本段文字中的场景与情绪营造的风格化意境。' : 'A stylized interpretation of the setting and mood suggested by this paragraph.'}</p>
        {paragraph.cast.length > 0 && <p className="mt-2 text-xs leading-relaxed text-[#c9af85]">{zh ? '本段人物：' : 'In this passage: '}{paragraph.cast.join(zh ? '、' : ' · ')}</p>}
        <details className="mt-4 border-t border-white/10 pt-3">
          <summary className="cursor-pointer text-xs text-[#d6c6a8]">{zh ? '阅读本段' : 'Read the passage'}</summary>
          <p className="mt-3 max-h-44 overflow-y-auto whitespace-pre-line text-sm leading-relaxed text-[#c8cecc]">{paragraph.text.replace(/[▉□]/g, '').replace(/\*([^*]+)\*/g, '$1')}</p>
        </details>
      </div>
    </dialog>, document.body,
  );
}
