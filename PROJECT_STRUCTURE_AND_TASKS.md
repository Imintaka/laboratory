# Ресторан Бар: структура проекта и задачи

## 1. Проверка ошибок (текущее состояние)

- `npm run build`: успешно, production-сборка проходит.
- `npm run lint`: без ошибок, есть 1 предупреждение:
  - `postcss.config.mjs:1` (`import/no-anonymous-default-export`).

## 2. Рекомендуемая структура проекта (Next.js App Router)

```text
laba-site/
  public/
    images/
    icons/
  src/
    app/
      (marketing)/
        page.tsx
      menu/
        page.tsx
      contacts/
        page.tsx
      booking/
        page.tsx
      layout.tsx
      globals.css
    components/
      layout/
        Header.tsx
        Footer.tsx
        Container.tsx
      sections/
        HeroSection.tsx
        AboutSection.tsx
        MenuPreviewSection.tsx
        EventsSection.tsx
        ContactsSection.tsx
        BookingSection.tsx
      ui/
        Button.tsx
        DishCard.tsx
        SectionTitle.tsx
        Input.tsx
    lib/
      constants.ts
      seo.ts
      utils.ts
    data/
      menu.ts
      events.ts
      testimonials.ts
    types/
      menu.ts
      booking.ts
      common.ts
    hooks/
      useScrollState.ts
  .gitignore
  package.json
  README.md
```

## 3. Обязательные задачи для проекта

### A. MVP (критично для запуска)

- [ ] Главная страница: hero, УТП, кнопка бронирования.
- [ ] Раздел "Меню": категории, карточки блюд/напитков, цены.
- [ ] Раздел "Контакты": адрес, телефон, часы работы, карта.
- [ ] Форма бронирования (минимум: имя, телефон, дата, время, гости).
- [ ] Адаптивность: корректная верстка на 360px, 768px, 1280px.
- [ ] Базовая доступность: `aria-label`, контраст, видимый `focus`.

### B. Контент и бренд

- [ ] Единый тон текстов (ресторан-бар, стиль коммуникации).
- [ ] Актуальные фото блюд, интерьера, барной карты.
- [ ] Логотип, фавикон, Open Graph изображение.
- [ ] Страница/блок "О нас" с историей и концепцией.

### C. Техническое качество

- [ ] Исправить предупреждение ESLint в `postcss.config.mjs`.
- [ ] Настроить `metadata` для всех страниц (title, description, OG).
- [ ] Добавить `sitemap` и `robots`.
- [ ] Оптимизировать изображения (`next/image`, размеры, приоритеты).
- [ ] Проверить Core Web Vitals (LCP/CLS/INP) и убрать просадки.

### D. Операционные задачи

- [ ] Подключить аналитику (например, GA4/Яндекс Метрика).
- [ ] Настроить отправку формы бронирования (email/CRM/Telegram).
- [ ] Добавить страницу 404 и пользовательские сообщения об ошибках.
- [ ] Подготовить деплой-процесс (Vercel + env-переменные).

### E. После запуска

- [ ] События/афиша (живые выступления, DJ-сеты, акции).
- [ ] Онлайн-резерв с подтверждением и ограничением слотов.
- [ ] Мультиязычность (RU/EN при необходимости).
- [ ] Блог/новости для SEO и повторных визитов.

## 4. Рекомендуемый порядок выполнения

1. Закрыть блок A (полностью).
2. Закрыть минимум 2 пункта из блока B.
3. Закрыть блок C (без предупреждений и с базовым SEO).
4. Закрыть блок D и выкатить релиз.
5. Планомерно развивать блок E.
