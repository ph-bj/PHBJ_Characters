import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { X } from "lucide-react";
import { QuestionAnswer } from "../QuestionAnswer";
import { questions, getQuestions, getQuestionsSync, type Question } from "../questions";
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
  const [qList, setQList] = useState<Question[]>(getQuestionsSync());

  useEffect(() => {
    getQuestions().then(setQList);
  }, []);

  const question = qList.find((q) => q.slug === questionSlug) || questions.find((q) => q.slug === questionSlug);
  if (!question) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4"
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
        className="relative z-10 w-full max-w-4xl max-h-[calc(100dvh-0.75rem)] sm:max-h-[90dvh] overflow-hidden parchment rounded-sm border-2 sm:border-4 border-double border-[var(--paper-border)] shadow-2xl flex flex-col"
      >
        <div className="px-3.5 py-2.5 sm:px-5 sm:py-3.5 border-b border-[var(--paper-border)] bg-[var(--paper-bg)] flex flex-col gap-1.5 sm:gap-2">
          <div className="flex items-center justify-between gap-2 w-full">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="text-xs uppercase tracking-widest font-bold text-[var(--ink-dim-text)]">
                {lang === "zh" ? "问题" : "Question"}
              </span>
              <span className="text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 rounded-sm bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/30 font-bold font-sans">
                {lang === "zh" ? question.categoryZh : question.categoryEn}
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
              <LanguageSwitch lang={lang} setLang={setLang} />
              <PermalinkButton
                lang={lang}
                link={{ kind: "question", slug: questionSlug }}
              />
              <button
                onClick={onClose}
                className="tap-44 p-1.5 sm:p-2 rounded-full hover:bg-black/5 transition-colors text-[var(--ink-title)]"
                aria-label="Close questions modal"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          <h3 className="text-sm sm:text-base md:text-lg font-bold text-[var(--ink-title)] leading-snug sm:leading-normal w-full">
            {lang === "zh" ? question.questionZh : question.questionEn}
          </h3>
        </div>

        <div
          data-overlay-scroll="true"
          className="p-3 sm:p-6 overflow-y-auto space-y-4"
        >
          <section
            aria-labelledby="question-answer-heading"
            className="relative border border-[var(--paper-border)] rounded-sm p-3.5 sm:p-7 bg-[var(--paper-bg)]/65 shadow-[inset_0_1px_0_rgba(255,255,255,0.55)]"
          >
            <div className="mb-3 sm:mb-5 flex items-center gap-3" aria-hidden="true">
              <span className="h-px flex-1 bg-[var(--paper-border)]/70" />
              <h4
                id="question-answer-heading"
                className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[var(--ink-dim-text)]"
              >
                {lang === "zh" ? "经核校的回答" : "Reviewed answer"}
              </h4>
              <span className="h-px flex-1 bg-[var(--paper-border)]/70" />
            </div>
            <QuestionAnswer
              content={lang === "zh" ? question.answerZh : question.answerEn}
            />
          </section>
        </div>
      </motion.div>
    </div>
  );
}
