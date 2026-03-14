import Image from 'next/image'
import Link from 'next/link'

import { navItems, siteName } from '@/data/home'

export function Header() {
  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div className="mx-auto flex h-17 max-w-6xl items-center justify-between rounded-[1.75rem] border border-white/65 bg-white/78 px-4 shadow-[var(--shadow-soft)] backdrop-blur md:px-5">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${siteName} — главная страница`}
        >
          <Image src="/images/laba_logo2.png" alt={siteName} width={150} height={150} priority />
        </Link>

        <div className="flex items-center gap-3">
          <nav aria-label="Главная навигация">
            <ul className="flex items-center gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-flex h-11 items-center justify-center whitespace-nowrap rounded-full border border-zinc-200/80 bg-white/65 px-4 text-xs font-semibold tracking-[0.16em] text-zinc-800 shadow-sm hover:border-amber-300 hover:bg-amber-50 hover:text-zinc-950 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:text-sm"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="tel:+375447618121"
            className="hidden rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:inline-flex"
          >
            Забронировать
          </a>
        </div>
      </div>
    </header>
  )
}
