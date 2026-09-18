"use client";

import { ChevronDown } from "lucide-react";
import { usePopover } from "../ui/usePopover";

type Option = { value: string; label: string };

export function Listbox({
  id,
  value,
  onChange,
  options,
  placeholder,
  invalid,
}: {
  id: string;
  value: string;
  onChange: (v: string) => void;
  options: Option[];
  placeholder?: string;
  invalid?: boolean;
}) {
  const { open, setOpen, ref } = usePopover();
  const selectedLabel = options.find((o) => o.value === value)?.label;

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
        <span className={selectedLabel ? "text-white" : "text-gray-light/50"}>
          {selectedLabel ?? placeholder}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-gray-light transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-labelledby={id}
          className="absolute z-20 mt-2 max-h-64 w-full overflow-y-auto rounded-lg border border-white/10 bg-[#0A1533] py-1 shadow-2xl"
        >
          {options.map((opt) => {
            const active = opt.value === value;
            return (
              <li key={opt.value}>
                <button
                  type="button"
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    onChange(opt.value);
                    setOpen(false);
                  }}
                  className={`block w-full cursor-pointer px-4 py-2.5 text-left text-sm transition-colors ${
                    active ? "bg-copper-2 text-white" : "text-white hover:bg-white/10"
                  }`}
                >
                  {opt.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
