export type NavItem = {
  href: string
  label: string
}

export type Dish = {
  title: string
  description: string
  price: number
  imageSrc: string
  imageAlt?: string
  accent: string
  tags: string[]
}

export type ContactLink = {
  label: string
  href: string
}

export type WorkingHours = {
  days: string
  hours: string
}

export type Highlight = {
  value: string
  label: string
}

export type Feature = {
  title: string
  description: string
}

export type VisitStep = {
  title: string
  description: string
}

export const siteName = 'LaboratoryBar'
export const siteDescription =
  'Коктейльный бар в Микашевичах с авторскими миксами, вечерними сетами и понятным меню закусок.'

export const navItems: NavItem[] = [
  { href: '#about', label: 'О нас' },
  { href: '#menu', label: 'Меню' },
  { href: '#contacts', label: 'Контакты' },
]

export const address = 'г. Микашевичи, ул. Первомайская, 9Б'

export const contacts: ContactLink[] = [
  { label: '+375 44 761-81-21', href: 'tel:+375447618121' },
  { label: '+375 29 321-81-21', href: 'tel:+375293218121' },
]

export const workingHours: WorkingHours[] = [
  { days: 'Воскресенье — четверг', hours: '19:00 — 02:00' },
  { days: 'Пятница — суббота', hours: '19:00 — 04:00' },
]

export const hero = {
  eyebrow: 'Бар, куда приходят за атмосферой',
  subtitle:
    'Laboratory собирает друзей за одним столом: миксуем фирменные напитки, быстро отдаём закуски и держим ритм вечера без пафоса.',
  primaryAction: {
    href: '#menu',
    label: 'Открыть меню',
  },
  secondaryAction: {
    href: 'tel:+375447618121',
    label: 'Забронировать стол',
  },
}

export const highlights: Highlight[] = [
  { value: '19:00', label: 'открываем бар каждый вечер' },
  { value: '2 зала', label: 'для компаний и более камерных встреч' },
  { value: 'DJ sets', label: 'по пятницам и субботам' },
]

export const about = {
  title: 'Место для встреч, а не просто точка на карте',
  text: 'Мы строим вечер вокруг деталей: чистые вкусы в бокале, свет без клубной усталости и музыка, которая помогает разговору, а не мешает ему.',
}

export const features: Feature[] = [
  {
    title: 'Барная карта без перегруза',
    description:
      'Фирменные коктейли, классика и понятные рекомендации, если хочется выбрать быстро.',
  },
  {
    title: 'Ночной ритм без суеты',
    description:
      'Живые сеты и DJ-вечера добавляют энергии, но пространство остаётся удобным для общения.',
  },
  {
    title: 'Закуски, которые действительно берут к напиткам',
    description:
      'Бургеры, крылышки, картофель и сырные палочки собраны как короткое и честное меню.',
  },
]

export const visitSteps: VisitStep[] = [
  {
    title: 'Выберите формат вечера',
    description: 'Ужин с друзьями, поздний коктейль или пятничный сет.',
  },
  {
    title: 'Позвоните или приходите',
    description: 'Мы подскажем по столам, времени и текущей загрузке.',
  },
  {
    title: 'Оставайтесь дольше',
    description: 'После первых коктейлей вечер обычно только начинается.',
  },
]

export const menu = {
  title: 'Меню',
  subtitle:
    'Небольшой список популярных позиций, чтобы быстро выбрать закуску и не выпадать из общения.',
}

export const dishes: Dish[] = [
  {
    title: 'Бургер «Лабораторный»',
    description: 'Сочная котлета, фирменный соус и булочка с мягкой карамельной корочкой.',
    price: 18,
    imageSrc: '/images/burger.webp',
    accent: 'Хит вечера',
    tags: ['сытно', 'к мясу'],
  },
  {
    title: 'Картофель фри',
    description: 'Хрустящая подача с солью и соусом, который не забивает вкус напитка.',
    price: 7,
    imageSrc: '/images/fri.webp',
    accent: 'Быстрая подача',
    tags: ['классика', 'на компанию'],
  },
  {
    title: 'Куриные крылышки',
    description: 'Пряная глазурь и плотный вкус для более насыщенного стола.',
    price: 16,
    imageSrc: '/images/chicken.webp',
    accent: 'К крепким миксам',
    tags: ['острое', 'горячее'],
  },
  {
    title: 'Сырные палочки',
    description: 'Золотистая корочка, тягучий сыр и предсказуемо хороший выбор к первому раунду.',
    price: 12,
    imageSrc: '/images/cheese.webp',
    accent: 'Комфортный выбор',
    tags: ['делиться', 'без лишнего'],
  },
]
