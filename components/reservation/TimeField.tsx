"use client";

import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { usePopover } from "../ui/usePopover";

/** 30-minute slots covering the lounge's booking window, 05:00-20:00. */
function buildTimeSlots(): string[] {
  const slots: string[] = [];
  for (let minutes = 5 * 60; minutes <= 20 * 60; minutes += 30) {
    const h = Math.floor(minutes / 60)
      .toString()
      .padStart(2, "0");
    const m = (minutes % 60).toString().padStart(2, "0");
    slots.push(`${h}:${m}`);
  }
  return slots;
}
export const TIME_SLOTS = buildTimeSlots();

export function TimeField({
  id,
  value,
  onChange,
  placeholder,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  invalid?: boolean;
}) {
  const { open, setOpen, ref } = usePopover();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (!open) return;
    const active = listRef.current?.querySelector('[aria-selected="true"]');
    active?.scrollIntoView({ block: "center" });
  }, [open]);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        id={id}
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white/5 px-4 py-3 text-left text-base outline-none transition-colors focus:border-copper-1 focus:bg-white/10 ${
          invalid ? "border-copper-1" : "border-white/20"
        }`}
      >
        <span className={value ? "text-white" : "text-gray-light/50"}>
          {value ? `${value} hrs` : placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-light transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 w-full overflow-hidden rounded-xl border border-black/10 bg-white shadow-2xl">
          <ul
            ref={listRef}
            role="listbox"
            aria-labelledby={id}
            className="max-h-[15.5rem] snap-y snap-mandatory overflow-y-auto py-1"
          >
            {TIME_SLOTS.map((slot) => {
              const active = slot === value;
              return (
                <li key={slot} className="snap-center">
                  <button
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => {
                      onChange(slot);
                      setOpen(false);
                    }}
                    className={`block w-full cursor-pointer px-5 py-2.5 text-center text-sm font-medium transition-colors ${
                      active ? "bg-copper-2 text-white" : "text-navy hover:bg-gray-light"
                    }`}
                  >
                    {slot} hrs
                  </button>
                </li>
              );
            })}
          </ul>
          <div
            aria-hidden="true"
            className="pointer-events-none flex justify-center border-t border-black/5 bg-white py-1"
          >
            <ChevronDown size={14} className="text-gray-medium" />
          </div>
        </div>
      )}
    </div>
  );
}
