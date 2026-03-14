'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useEffectEvent, useState } from 'react'

import { navItems, siteName } from '@/data/home'

export function Header() {
  const [isScrolledPastHero, setIsScrolledPastHero] = useState(false)

  const updateHeaderState = useEffectEvent(() => {
    const nextValue = window.scrollY > window.innerHeight * 0.72
    setIsScrolledPastHero((currentValue) => (currentValue === nextValue ? currentValue : nextValue))
  })

  useEffect(() => {
    updateHeaderState()

    window.addEventListener('scroll', updateHeaderState, { passive: true })
    window.addEventListener('resize', updateHeaderState)

    return () => {
      window.removeEventListener('scroll', updateHeaderState)
      window.removeEventListener('resize', updateHeaderState)
    }
  }, [])

  const shellClassName = isScrolledPastHero
    ? 'border-[#9b6b1c]/28 bg-[#7d5416]/82 shadow-[0_18px_45px_rgba(72,45,9,0.24)] backdrop-blur-xl'
    : 'border-white/35 bg-[#e8bf63]/78 shadow-[0_18px_45px_rgba(133,88,16,0.2)] backdrop-blur-md'

  const shellOverlayClassName = isScrolledPastHero ? 'bg-[#f3d389]/10' : 'bg-white/10'

  const navLinkClassName = isScrolledPastHero
    ? 'inline-flex h-7 items-center justify-center whitespace-nowrap rounded-full border border-[#f3d389]/18 bg-[#f1d18c]/10 px-2.5 text-[10px] font-semibold tracking-[0.1em] text-amber-50 shadow-[inset_0_1px_0_rgba(255,243,214,0.12)] backdrop-blur-sm hover:border-[#f3d389]/30 hover:bg-[#f1d18c]/16 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:h-11 md:px-4 md:text-sm md:tracking-[0.16em]'
    : 'inline-flex h-7 items-center justify-center whitespace-nowrap rounded-full border border-white/40 bg-white/24 px-2.5 text-[10px] font-semibold tracking-[0.1em] text-zinc-950 shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] backdrop-blur-sm hover:border-white/55 hover:bg-white/38 hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:h-11 md:px-4 md:text-sm md:tracking-[0.16em]'

  const ctaClassName = isScrolledPastHero
    ? 'hidden rounded-full bg-[#f0c96d] px-5 py-3 text-sm font-semibold text-[#2b1a04] shadow-[0_8px_18px_rgba(32,20,4,0.18)] hover:bg-[#f4d68b] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:inline-flex'
    : 'hidden rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-zinc-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900 md:inline-flex'

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`relative mx-auto  flex h-17 max-w-6xl items-center justify-between overflow-hidden rounded-[1.75rem] px-4 motion-safe:transition-[background-color,border-color,box-shadow,backdrop-filter] motion-safe:duration-300 md:px-5 ${shellClassName}`}
      >
        <div
          className={`pointer-events-none absolute inset-0 motion-safe:transition-colors motion-safe:duration-300 ${shellOverlayClassName}`}
        />
        <Link
          href="/"
          className="relative z-10 flex items-center gap-3"
          aria-label={`${siteName} — главная страница`}
        >
          <Image src="/images/laba_logo2.png" alt={siteName} width={150} height={150} priority />
        </Link>

        <div className="relative z-10 flex items-center gap-3">
          <nav aria-label="Главная навигация">
            <ul className="flex items-center gap-2 overflow-x-auto">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className={navLinkClassName}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a href="tel:+375447618121" className={ctaClassName}>
            Забронировать
          </a>
        </div>
      </div>
    </header>
  )
}
