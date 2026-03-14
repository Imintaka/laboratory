import Image from 'next/image'

type DishCardProps = {
  title: string
  description: string
  price: number
  currency?: string
  imageSrc?: string
  imageAlt?: string
  accent?: string
  tags?: string[]
}

const priceFormatters = new Map<string, Intl.NumberFormat>()

const getPriceFormatter = (currency: string) => {
  const existingFormatter = priceFormatters.get(currency)
  if (existingFormatter) {
    return existingFormatter
  }

  const formatter = new Intl.NumberFormat('ru-BY', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  })

  priceFormatters.set(currency, formatter)
  return formatter
}

const formatPrice = (price: number, currency: string) => getPriceFormatter(currency).format(price)

export function DishCard({
  title,
  description,
  price,
  currency = 'BYN',
  imageSrc,
  imageAlt,
  accent,
  tags = [],
}: DishCardProps) {
  return (
    <article className="group overflow-hidden rounded-[1.75rem] border border-white/70 bg-white/88 p-4 shadow-[var(--shadow-soft)] backdrop-blur motion-safe:transition motion-safe:duration-200 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-[var(--shadow-panel)]">
      {imageSrc ? (
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-[1.25rem] bg-zinc-100">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover motion-safe:transition-transform motion-safe:duration-300 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
          {accent ? (
            <div className="absolute left-3 top-3 rounded-full bg-white/88 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-950">
              {accent}
            </div>
          ) : null}
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-xl font-semibold leading-snug text-zinc-950">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-zinc-600">{description}</p>
        </div>
        <div className="shrink-0 text-right">
          <div className="rounded-full bg-amber-100 px-3 py-2 text-lg font-bold text-amber-800">
            {formatPrice(price, currency)}
          </div>
        </div>
      </div>
      {tags.length > 0 ? (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium text-amber-900"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}
    </article>
  )
}
