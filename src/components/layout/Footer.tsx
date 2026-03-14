import { Container } from '@/components/layout/Container'
import { address, contacts, siteDescription, siteName, workingHours } from '@/data/home'

export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/50 bg-[linear-gradient(180deg,_rgba(24,24,24,0.96)_0%,_rgba(64,28,18,0.96)_100%)] text-white">
      <Container>
        <div className="py-12 sm:py-14">
          <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
            <div>
              <div className="inline-flex rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-amber-200">
                Вечер начинается здесь
              </div>
              <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">{siteName}</h3>
              <p className="mt-3 max-w-md text-sm leading-6 text-white/72">{siteDescription}</p>
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-white">Контакты</h3>
              <ul className="mt-3 space-y-2 text-sm text-white/72">
                <li>{address}</li>
                {contacts.map((contact) => (
                  <li key={contact.href}>
                    <a
                      href={contact.href}
                      className="font-medium text-white underline-offset-4 hover:text-amber-200 hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                      {contact.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-base font-semibold tracking-tight text-white">Время работы</h3>
              <div className="mt-3 space-y-1 text-sm text-white/72">
                {workingHours.map((item) => (
                  <p key={item.days}>
                    {item.days} {item.hours}
                  </p>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} {siteName}. Все права защищены.
            </div>
            <div className="flex items-center gap-4">
              <a
                href="#menu"
                className="underline-offset-4 hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Меню
              </a>
              <a
                href="#contacts"
                className="underline-offset-4 hover:text-white hover:underline focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Контакты
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}
