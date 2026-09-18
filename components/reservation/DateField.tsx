"use client";

import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { es as esLocale, enUS as enLocale } from "react-day-picker/locale";
import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { usePopover } from "../ui/usePopover";

function minSelectableDate(): Date {
  const d = new Date(Date.now() + 24 * 60 * 60 * 1000);
  d.setHours(0, 0, 0, 0);
  return d;
}

function parseISO(v: string): Date | undefined {
  if (!v) return undefined;
  const [y, m, d] = v.split("-").map(Number);
  return new Date(y, m - 1, d);
}
function toISO(d: Date): string {
  const y = d.getFullYear();
  const m = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate().toString().padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function DateField({
  id,
  value,
  onChange,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  invalid?: boolean;
}) {
  const { lang } = useLanguage();
  const { open, setOpen, ref } = usePopover();

  // Reading the clock is an impure operation React won't allow during
  // render. Computed instead inside the click handler that opens the
  // popover (an event handler, not render) — the calendar only ever
  // mounts once open=true, right after that same click, so this still
  // always reflects "24 hours from whenever the visitor actually opens
  // it," never a value frozen at build time.
  const [minDate, setMinDate] = useState<Date>(() => new Date(0));

  const selected = parseISO(value);
  const label = selected
    ? selected.toLocaleDateString(lang === "es" ? "es-MX" : "en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        id={id}
        onClick={() => {
          setMinDate(minSelectableDate());
          setOpen((o) => !o);
        }}
        aria-haspopup="dialog"
        aria-expanded={open}
        className={`flex w-full cursor-pointer items-center justify-between rounded-lg border bg-white/5 px-4 py-3 text-left text-base outline-none transition-colors focus:border-copper-1 focus:bg-white/10 ${
          invalid ? "border-copper-1" : "border-white/20"
        }`}
      >
        <span className={label ? "text-white" : "text-gray-light/50"}>
          {label ?? (lang === "es" ? "dd/mm/aaaa" : "mm/dd/yyyy")}
        </span>
        <CalendarDays size={18} className="shrink-0 text-gray-light" />
      </button>

      {open && (
        <div className="absolute z-20 mt-2 rounded-xl border border-white/10 bg-[#0A1533] p-3 shadow-2xl">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={(d) => {
              if (d) {
                onChange(toISO(d));
                setOpen(false);
              }
            }}
            disabled={{ before: minDate }}
            defaultMonth={selected ?? minDate}
            locale={lang === "es" ? esLocale : enLocale}
            classNames={{
              root: "text-white",
              month: "space-y-3",
              month_caption: "flex items-center justify-center px-9 py-1",
              caption_label: "text-sm font-medium capitalize",
              nav: "absolute inset-x-2 top-3 flex items-center justify-between",
              button_previous:
                "h-7 w-7 flex items-center justify-center rounded-md hover:bg-white/10 text-white cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent",
              button_next:
                "h-7 w-7 flex items-center justify-center rounded-md hover:bg-white/10 text-white cursor-pointer disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent",
              chevron: "fill-current",
              month_grid: "w-full border-collapse mt-2",
              weekday: "text-gray-light text-[0.7rem] font-medium uppercase w-9 h-8",
              day: "p-0.5 text-center align-middle",
              day_button:
                "h-9 w-9 rounded-full text-sm text-white hover:bg-white/10 transition-colors cursor-pointer",
              today: "[&>button]:text-copper-1 [&>button]:font-semibold",
              selected: "[&>button]:bg-copper-2 [&>button]:text-white [&>button]:hover:bg-copper-2",
              disabled: "[&>button]:text-gray-light/20 [&>button]:cursor-not-allowed [&>button]:hover:bg-transparent",
              outside: "[&>button]:text-gray-light/20",
              hidden: "invisible",
            }}
          />
        </div>
      )}
    </div>
  );
}
