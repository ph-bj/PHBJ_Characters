import { motion } from "motion/react";
import { X } from "lucide-react";
import { QuestionAnswer } from "../QuestionAnswer";
import { questions } from "../questions";
import { PermalinkButton } from "./PermalinkButton";
import { LanguageSwitch } from "./LanguageSwitch";

export function QuestionsModal({
  questionSlug,
  onClose,
  lang,
  setLang,
}: {
  questionSlug: string;
  onClose: () => void;
  lang: "en" | "zh";
  setLang: (lang: "en" | "zh") => void;
}) {
  const question = questions.find((q) => q.slug === questionSlug);
  if (!question) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        aria-hidden
        className="absolute inset-0 z-0 bg-black/55 backdrop-blur-sm pointer-events-none"
      />

      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full max-w-3xl max-h-[88vh] overflow-hidden parchment rounded-sm border-4 border-double border-[var(--paper-border)] shadow-2xl flex flex-col"
      >
        <div className="p-4 sm:p-5 border-b border-[var(--paper-border)] bg-[var(--paper-bg)] flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[var(--ink-dim-text)]">
                {lang === "zh" ? "问题" : "Question"}
              </span>
              <span className="text-[9px] px-2 py-0.5 rounded-sm bg-amber-900/10 text-amber-800 border border-amber-800/30 font-bold font-sans">
                {lang === "zh" ? question.categoryZh : question.categoryEn}
              </span>
            </div>
            <h3 className="text-lg font-bold text-[var(--ink-title)]">
              {lang === "zh" ? question.questionZh : question.questionEn}
            </h3>
          </div>
          <div className="flex items-center gap-1.5 shrink-0">
            <LanguageSwitch lang={lang} setLang={setLang} />
            <PermalinkButton
              lang={lang}
              link={{ kind: "question", slug: questionSlug }}
            />
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-[var(--ink-title)]"
              aria-label="Close questions modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        <div
          data-overlay-scroll="true"
          className="p-5 sm:p-6 overflow-y-auto space-y-4"
        >
          <div className="border border-[var(--paper-border)] rounded-sm p-5 sm:p-6 bg-black/5">
            <QuestionAnswer
              content={lang === "zh" ? question.answerZh : question.answerEn}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
