"use client";

import { Check, ChevronDown } from "lucide-react";
import { useBi } from "@/lib/i18n";
import { celebrationOccasions } from "@/lib/content";

export function CelebrationField({
  label,
  open,
  onToggle,
  selected,
  onToggleOccasion,
}: {
  label: string;
  open: boolean;
  onToggle: () => void;
  selected: string[];
  onToggleOccasion: (key: string) => void;
}) {
  const t = useBi();

  return (
    <div className="rounded-lg border border-white/15">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-3 text-left text-sm text-white"
      >
        {label}
        <ChevronDown size={18} className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="grid grid-cols-2 gap-x-4 gap-y-3 px-4 pb-4">
          {celebrationOccasions.map((occasion) => {
            const checked = selected.includes(occasion.key);
            return (
              <label
                key={occasion.key}
                className="flex cursor-pointer items-center gap-2.5 text-sm text-white"
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border transition-colors ${
                    checked ? "border-copper-2 bg-copper-2" : "border-white/30 bg-transparent"
                  }`}
                >
                  {checked && <Check size={14} strokeWidth={3} className="text-white" />}
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={checked}
                  onChange={() => onToggleOccasion(occasion.key)}
                />
                {t(occasion.label)}
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
