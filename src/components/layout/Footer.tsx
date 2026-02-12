export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-[#e4b257]/90 from-white to-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">LaboratoryBar</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              Добро пожаловать в самый сумасшедший бар нашего города. Наслаждайтесь общением с
              друзьями, вкусными напитками и закусками из нашего меню.
            </p>
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">Контакты</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>г. Микашевичи, ул. Первомайская 9б</li>
              <li>
                <a
                  href="tel:+375447618121"
                  className="font-medium text-zinc-800 underline-offset-4 transition hover:text-amber-700 hover:underline"
                >
                  +375-44-7618121
                </a>
              </li>
              <li>
                <a
                  href="tel:+375293218121"
                  className="font-medium text-zinc-800 underline-offset-4 transition hover:text-amber-700 hover:underline"
                >
                  +375-29-3218121
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-base font-semibold tracking-tight text-zinc-900">Время работы</h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600">
              ВС-ЧТ 19:00–02:00 <br />
              ПТ-СБ 19:00-04:00
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-zinc-200 pt-6 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} LaboratoryBar. Все права защищены.</div>
          <div className="flex items-center gap-4">
            <a
              href="#menu"
              className="underline-offset-4 transition hover:text-zinc-700 hover:underline"
            >
              Меню
            </a>
            <a
              href="#contacts"
              className="underline-offset-4 transition hover:text-zinc-700 hover:underline"
            >
              Контакты
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
