import Image from 'next/image'

type DishCardProps = {
  title: string
  price: number
  currency?: string
  imageSrc?: string
  imageAlt?: string
}

export function DishCard({
  title,
  price,
  currency = 'BYN',
  imageSrc,
  imageAlt,
}: DishCardProps) {
  return (
    <div className="rounded-xl border border-zinc-200 bg-white p-5 shadow-sm">
      {imageSrc ? (
        <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-lg bg-zinc-100">
          <Image
            src={imageSrc}
            alt={imageAlt ?? title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-base font-semibold leading-snug text-zinc-900">{title}</h3>
        <div className="shrink-0 text-right">
          <div className="text-lg font-bold text-amber-700">
            {price} {currency}
          </div>
        </div>
      </div>
    </div>
  )
}
