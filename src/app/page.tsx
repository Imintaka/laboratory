import { Container } from '@/components/layout/Container'
import { DishCard } from '@/components/ui/DishCard'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  const dishes = [
    { title: 'Бургер “Лабораторный”', price: 18, imageSrc: '/images/laba_logo2.png' },
    { title: 'Картофель фри', price: 7, imageSrc: '/images/laba_logo.png' },
    { title: 'Куриные крылышки', price: 16, imageSrc: '/images/laba-logo12.png' },
    { title: 'Сырные палочки', price: 12, imageSrc: '/images/laba_logo2.png' },
  ]

  return (
    <>
      <section className="relative -mt-24 min-h-dvh pt-24">
        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/rosario.webp"
            alt="LaboratoryBar"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
        </div>

        <Container>
          <div className="flex min-h-dvh justify-center items-center py-16">
            <div className="max-w-2xl">
              <Link
                href="/"
                className="flex items-center gap-2"
                aria-label="CoffeePlace — главная страница"
              >
                <Image src="/images/laba_logo2.png" alt="Laba" width={500} height={500} priority />
              </Link>

              {/*<div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">*/}
              {/*  <a*/}
              {/*    href="#menu"*/}
              {/*    className="inline-flex justify-center rounded-md bg-amber-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-amber-500"*/}
              {/*  >*/}
              {/*    Посмотреть меню*/}
              {/*  </a>*/}
              {/*  <a*/}
              {/*    href="tel:+375447618121"*/}
              {/*    className="inline-flex justify-center rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/15"*/}
              {/*  >*/}
              {/*    Забронировать стол*/}
              {/*  </a>*/}
              {/*  <a*/}
              {/*    href="#contacts"*/}
              {/*    className="inline-flex justify-center rounded-md bg-white/10 px-4 py-2.5 text-sm font-semibold text-white shadow-sm ring-1 ring-inset ring-white/30 backdrop-blur transition hover:bg-white/15"*/}
              {/*  >*/}
              {/*    Как добраться*/}
              {/*  </a>*/}
              {/*</div>*/}
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <section id="menu" className="scroll-mt-24 pb-20 pt-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl">Меню</h2>
            <p className="mt-4 text-zinc-600">Выберите закуски к напиткам — быстро и вкусно.</p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {dishes.map((dish) => (
              <DishCard
                key={dish.title}
                title={dish.title}
                price={dish.price}
                imageSrc={dish.imageSrc}
                imageAlt={dish.title}
              />
            ))}
          </div>
        </section>

        <section id="contacts" className="scroll-mt-24 pb-24">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold text-zinc-900">Контакты</h2>
            <div className="mt-3 text-sm text-zinc-600">г. Микашевичи, ул. Первомайская 9б</div>
            <div className="mt-2 text-sm">
              <a
                href="tel:+375447618121"
                className="font-medium text-zinc-900 underline-offset-4 hover:underline"
              >
                +375-44-7618121
              </a>
            </div>
          </div>
        </section>
      </Container>
    </>
  )
}
