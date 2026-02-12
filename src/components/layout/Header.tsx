'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const navItems = [
  { href: '#about', label: 'О нас' },
  { href: '#menu', label: 'Меню' },
  { href: '#contacts', label: 'Контакты' },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isSlidingUp, setIsSlidingUp] = useState(false)
  const prevIsScrolledRef = useRef(false)
  const slideUpTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const onScroll = () => {
      const nextIsScrolled = window.scrollY > 24

      if (prevIsScrolledRef.current && !nextIsScrolled) {
        setIsSlidingUp(true)

        if (slideUpTimeoutRef.current !== null) {
          window.clearTimeout(slideUpTimeoutRef.current)
        }

        slideUpTimeoutRef.current = window.setTimeout(() => {
          setIsSlidingUp(false)
          slideUpTimeoutRef.current = null
        }, 700)
      }

      prevIsScrolledRef.current = nextIsScrolled
      setIsScrolled(nextIsScrolled)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (slideUpTimeoutRef.current !== null) {
        window.clearTimeout(slideUpTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header
      className={'sticky top-0 z-50 overflow-hidden transition-colors duration-700 ease-out '}
    >
      <div
        className={
          'absolute inset-0 -z-10 ' +
          (isScrolled || isSlidingUp ? 'bg-[#e4b257]/90 backdrop-blur' : 'bg-transparent') +
          (isScrolled ? ' header-slide-down' : '') +
          (isSlidingUp ? ' header-slide-up' : '')
        }
        aria-hidden="true"
      />

      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 relative">
        <Link
          href="/"
          className={
            'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-out ' +
            (isScrolled
              ? 'opacity-100 scale-100 delay-200'
              : 'opacity-0 scale-95 pointer-events-none delay-0')
          }
          aria-label="CoffeePlace — главная страница"
        >
          <Image src="/images/laba_logo2.png" alt="Laba" width={150} height={150} priority />
        </Link>

        <nav
          className="hidden md:block absolute right-4 top-1/2 -translate-y-1/2"
          aria-label="Главная навигация"
        >
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={
                    'w-25 h-13 inline-flex items-center justify-center bg-[#d3c157]/90 rounded-none border-[#d3c157]/70 shadow-[0_0_1px_1px_rgba(0,0,0,0.12)] px-4 py-2 text-sm font-medium tracking-wide uppercase text-black transition-colors hover:bg-[#ccb73d]'
                  }
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          className={
            'absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium tracking-wide md:hidden ' +
            (isScrolled
              ? 'border border-zinc-300 bg-white text-zinc-900'
              : 'border border-white/30 bg-white/10 text-white backdrop-blur')
          }
          aria-label="Открыть меню"
        >
          Меню
        </button>
      </div>
    </header>
  )
}
