import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/layout/Container'
import { DishCard } from '@/components/ui/DishCard'
import {
  about,
  address,
  contacts,
  dishes,
  features,
  hero,
  highlights,
  menu,
  visitSteps,
} from '@/data/home'

const heroPrimaryActionClass =
  'inline-flex justify-center rounded-full bg-amber-400 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-lg shadow-amber-950/15 hover:bg-amber-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

const heroSecondaryActionClass =
  'inline-flex justify-center rounded-full border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur hover:bg-white/16 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'

export default function HomePage() {
  return (
    <>
      <section className="relative -mt-24 overflow-hidden pt-28">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/rosario.webp"
            alt="Гостевой зал LaboratoryBar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(217,164,65,0.34),_transparent_34%),linear-gradient(180deg,_rgba(16,16,16,0.66)_0%,_rgba(16,16,16,0.6)_38%,_rgba(16,16,16,0.88)_100%)]" />
        </div>

        <Container>
          <div className="grid min-h-[calc(100dvh-4rem)] items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
            <div className="max-w-3xl">
              <Link
                href="/"
                className="mt-6 inline-flex items-center gap-3"
                aria-label="LaboratoryBar"
              >
                <Image src="/images/laba_logo2.png" alt="Laba" width={300} height={300} priority />
              </Link>
              <div className="eyebrow text-white">{hero.eyebrow}</div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a href={hero.primaryAction.href} className={heroPrimaryActionClass}>
                  {hero.primaryAction.label}
                </a>
                <a href={hero.secondaryAction.href} className={heroSecondaryActionClass}>
                  {hero.secondaryAction.label}
                </a>
                <a href="#contacts" className={heroSecondaryActionClass}>
                  Как добраться
                </a>
              </div>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[1.5rem] border border-white/12 bg-white/8 p-4 backdrop-blur"
                  >
                    <div className="text-2xl font-semibold text-white">{item.value}</div>
                    <div className="mt-2 text-sm leading-6 text-white/70">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section id="about" className="scroll-mt-28 pb-8 pt-6 sm:pb-12">
          <div className="section-panel grid gap-10 p-8 md:grid-cols-[1.15fr_0.85fr] md:items-center lg:p-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                О пространстве
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
                {about.title}
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-zinc-600">{about.text}</p>
            </div>
            <div className="grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-[1.5rem] border border-amber-100 bg-amber-50/70 p-5 text-sm text-zinc-700 shadow-sm"
                >
                  <div className="font-semibold text-zinc-900">{feature.title}</div>
                  <p className="mt-2 leading-6">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="menu" className="scroll-mt-28 pb-20 pt-10">
          <div className="mx-auto max-w-3xl text-center">
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
              Популярные позиции
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">
              {menu.title}
            </h2>
            <p className="mt-4 text-base leading-7 text-zinc-600">{menu.subtitle}</p>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-2">
            {dishes.map((dish) => (
              <DishCard
                key={dish.title}
                title={dish.title}
                description={dish.description}
                price={dish.price}
                imageSrc={dish.imageSrc}
                imageAlt={dish.imageAlt}
                accent={dish.accent}
                tags={dish.tags}
              />
            ))}
          </div>
        </section>

        <section id="contacts" className="scroll-mt-28 pb-24">
          <div className="section-panel grid gap-6 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-amber-700">
                Контакты
              </div>
              <h2 className="mt-4 text-3xl font-semibold text-zinc-950">
                Легко найти, удобно связаться
              </h2>
              <div className="mt-4 max-w-md text-base leading-7 text-zinc-600">{address}</div>
              <div className="mt-6 space-y-3 text-sm">
                {contacts.map((contact) => (
                  <a
                    key={contact.href}
                    href={contact.href}
                    className="block font-medium text-zinc-900 underline-offset-4 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-900"
                  >
                    {contact.label}
                  </a>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] bg-zinc-950 p-6 text-white shadow-[var(--shadow-soft)]">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-2xl font-semibold text-white">План на вечер</h3>
                <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                  Стол по звонку
                </span>
              </div>
              <p className="mt-4 text-sm leading-6 text-white/72">
                Если нужен стол на компанию, лучше позвонить заранее. Для быстрых встреч можно
                заглянуть без брони.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                <a href="tel:+375447618121" className={heroPrimaryActionClass}>
                  Позвонить сейчас
                </a>
                <a href="#menu" className={heroSecondaryActionClass}>
                  Выбрать закуску
                </a>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
