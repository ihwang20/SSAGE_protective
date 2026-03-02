import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, HelpCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

interface MultipleChoiceOption {
  id: string;
  label: string;
  correct: boolean;
  explanation: string;
}

interface MultipleChoiceProps {
  question: string;
  options: MultipleChoiceOption[];
}

export default function MultipleChoice({ question, options }: MultipleChoiceProps) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const revealed = selectedId !== null;
  const selectedOption = options.find((o) => o.id === selectedId);

  return (
    <ScrollReveal>
      <div className="my-8 rounded-card border border-border bg-white shadow-elevation-1 overflow-hidden">
        <div className="border-l-[6px] border-l-primary p-5">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3">
            <HelpCircle size={18} className="text-primary" />
            <span className="text-sm font-bold uppercase tracking-wider text-primary">
              Multiple Choice
            </span>
          </div>

          {/* Question */}
          <p className="text-text-primary font-medium leading-relaxed mb-4">{question}</p>

          {/* Options */}
          <div className="space-y-2">
            {options.map((opt) => {
              const isSelected = selectedId === opt.id;
              let borderClass = 'border-border hover:border-primary/50 hover:shadow-sm hover:-translate-y-0.5 cursor-pointer';
              let bgClass = 'bg-white';

              if (revealed) {
                if (opt.correct) {
                  borderClass = 'border-success';
                  bgClass = 'bg-success/5';
                } else if (isSelected) {
                  borderClass = 'border-error';
                  bgClass = 'bg-error/5';
                } else {
                  borderClass = 'border-border opacity-60';
                }
              } else if (isSelected) {
                borderClass = 'border-primary';
                bgClass = 'bg-primary/5';
              }

              return (
                <button
                  key={opt.id}
                  onClick={() => !revealed && setSelectedId(opt.id)}
                  disabled={revealed}
                  className={`w-full text-left p-3.5 rounded-card border-2 transition-all duration-200 ${borderClass} ${bgClass}`}
                >
                  <div className="flex items-start gap-3">
                    {/* Radio indicator */}
                    <div
                      className={`mt-0.5 w-4 h-4 rounded-full border-2 flex-shrink-0 transition-colors ${
                        revealed && opt.correct
                          ? 'border-success bg-success'
                          : revealed && isSelected && !opt.correct
                          ? 'border-error bg-error'
                          : isSelected
                          ? 'border-primary bg-primary'
                          : 'border-text-secondary/40 bg-white'
                      }`}
                    />

                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-text-primary">{opt.label}</p>

                      <AnimatePresence>
                        {revealed && (
                          <motion.p
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            transition={{ duration: 0.25, ease: 'easeOut' }}
                            className="text-xs text-text-secondary mt-1.5 leading-relaxed overflow-hidden"
                          >
                            {opt.explanation}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {revealed && opt.correct && (
                      <CheckCircle2 size={16} className="text-success flex-shrink-0 mt-0.5" />
                    )}
                    {revealed && isSelected && !opt.correct && (
                      <XCircle size={16} className="text-error flex-shrink-0 mt-0.5" />
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Result message */}
          <AnimatePresence>
            {revealed && (
              <motion.div
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className={`mt-4 px-4 py-2.5 rounded-card text-sm font-medium ${
                  selectedOption?.correct
                    ? 'bg-success/10 text-success'
                    : 'bg-error/10 text-error'
                }`}
              >
                {selectedOption?.correct
                  ? 'Correct — well done.'
                  : 'Not quite — review the explanations above.'}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Reset */}
          {revealed && (
            <button
              onClick={() => setSelectedId(null)}
              className="mt-3 text-xs text-text-secondary hover:text-primary underline transition-colors"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}
