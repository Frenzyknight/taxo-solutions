"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { navItems } from "@/components/nav-items";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  return (
    <header className="flex items-center justify-between px-5 py-5 md:px-8 lg:hidden">
      <a href="#home" aria-label="Taxosolution home">
        <BrandMark wordmarkClassName="font-normal" />
      </a>
      <MenuButton />
    </header>
  );
}

type MenuButtonProps = {
  className?: string;
  style?: React.CSSProperties;
  buttonStyle?: React.CSSProperties;
  iconStyle?: React.CSSProperties;
};

export function MenuButton({
  className,
  style,
  buttonStyle,
  iconStyle,
}: MenuButtonProps) {
  const [open, setOpen] = useState(false);
  const Icon = open ? X : Menu;

  return (
    <div className={cn("relative", className)} style={style}>
      <button
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex size-10 items-center justify-center rounded-[3px] bg-[#111] text-white transition-opacity hover:opacity-85"
        style={buttonStyle}
      >
        <Icon className="size-4" style={iconStyle} aria-hidden="true" />
      </button>

      <div
        className={cn(
          "absolute top-full right-0 z-50 mt-2 w-56 origin-top-right rounded-2xl border border-border bg-white p-2 shadow-xl transition-all",
          open
            ? "visible scale-100 opacity-100"
            : "invisible scale-95 opacity-0",
        )}
      >
        <nav className="flex flex-col" aria-label="Menu">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-muted"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
