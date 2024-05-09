export const worksListsData = [
  {
    title: 'Види фасадних робіт',
    works: [
      { workTitle: 'Обклеювання стін пінопластом (50 мм.)', price: '160 грн/м2' },
      { workTitle: 'Обклеювання стін пінопластом (100 мм.)', price: '190 грн/м2' },
      { workTitle: 'Утеплення стін мінеральною ватою (50 мм)', price: '200 грн/м2' },
      { workTitle: 'Обклеювання стін мінеральною ватою (80 мм.)', price: '190 грн/м2' },
      { workTitle: 'Обклеювання стін мінеральною ватою (100 мм.)', price: '210 грн/м2' },
      { workTitle: 'Виконання армуючого шару ( склосітка, 2 клейові шари )', price: '120 грн/м2' },
      { workTitle: 'Облаштування відкосів з пінопласту', price: '140 грн/м/п' },
      { workTitle: 'Облаштування відкосів з мінеральної вати', price: '180 грн/м/п' },
      { workTitle: 'Декоративна штукатурка (короїд, камінчик)', price: '200 грн/м2' },
      { workTitle: 'Фарбування стін', price: '100 грн/м2' },
      { workTitle: 'Фарбування стін структурною фарбою', price: '150 грн/м2' },
      { workTitle: 'Облаштування пілонів, фризів, колон', price: '140 грн/м/п' },
    ],
  },
  {
    title: 'Сумарна ціна під ключ (ваш матеріал)',
    works: [
      { workTitle: 'Фасад (мінвата 50 мм)', price: '480 грн/м2' },
      { workTitle: 'Фасад (мінвата 80 мм)', price: '500 грн/м2' },
      { workTitle: 'Фасад (мінвата 100 мм)', price: '550 грн/м2' },
      { workTitle: 'Фасад (пінопласт 50 мм)', price: '450 грн/м2' },
      { workTitle: 'Фасад (пінопласт 100 мм)', price: '550 грн/м2' },
    ],
  },
  {
    title: 'Сумарна ціна під ключ (наш матеріал)',
    works: [
      {
        workTitle:
          'Робота і матеріали фасада (50мм. Пінопласт-25 (економ), суміші і фарби MajsterPol)',
        price: '1000 грн/м2',
      },
      {
        workTitle:
          'Робота і матеріали фасада (100мм. Пінопласт-25 (економ), суміші і фарби MajsterPol)',
        price: '1170 грн/м2',
      },
      {
        workTitle: 'Робота і матеріали фасада (50мм. Мінвата, суміші і фарби MajsterPol)',
        price: '1400 грн/м2',
      },
      {
        workTitle: 'Робота і матеріали фасада (100мм. Мінвата, суміші і фарби MajsterPol)',
        price: '1650 грн/м2',
      },
    ],
  },
]

export const orderTypeData = {
  mainTitle: 'Типи замовлень штукатурних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'замовлення від 150 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
    {
      title: 'Звичайне',
      subtitle: 'замовлення від 400 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'замовлення від 900 м2',
      works: [
        'Консультація',
        'Виїзд Спеціаліста',
        'Поклейка Сітки',
        'Захисні Заходи',
        'Монтаж Маяків',
        'Нанесення Штукатурки',
      ],
      isTrend: false,
    },
  ],
}

export const accordionData = [
  {
    id: 'One',
    question: 'Чи можна наносити клейові і фінішні суміші без використання утеплювача?',
    answer:
      'Звичайно можна, якщо не проводиться утеплення будинку, а тільки штукатуриться фасад базовими клейовими сумішами і декоративною штукатуркою. Тобто, коли вирішується питання не в утепленні, а тільки в декоративній обробці фасаду.',
  },
  {
    id: 'Two',
    question: 'При якій температурі повітря можна монтувати фасад з тонким штукатурним шаром?',
    answer:
      'Рекомендується проводити роботи при середньодобовій температурі від +5 ° С до +30 ° С і швидкості вітру менше 10 м / с. При проведенні монтажних робіт взимку необхідно закрити будівельні ліси одним або двома шарами плівки по всьому периметру і встановити теплові гармати для підтримки позитивної температури не нижче +5 ° С.',
  },
]

export const galleryImages = [
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-1-min_olxfkt.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980460/RRGroup/images/facadeWorks/facade-2-min_siojtq.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980460/RRGroup/images/facadeWorks/facade-3-min_qw1clf.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980457/RRGroup/images/facadeWorks/facade-4-min_zpicw7.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980457/RRGroup/images/facadeWorks/facade-5-min_godzy4.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-6-min_oqahly.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980457/RRGroup/images/facadeWorks/facade-7-min_n1vu4c.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980457/RRGroup/images/facadeWorks/facade-8-min_pdcuhv.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-9-min_kev4te.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-10-min_u6dgaf.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-11-min_g2734y.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-12-min_m0n7it.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-13-min_pxi3ug.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980458/RRGroup/images/facadeWorks/facade-14-min_w6fqby.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-15-min_t2n6aw.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-16-min_nsvrau.jpg',
]

export const slideImages = [
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-slide-2-min_esyhmi.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-slide-1-min_wft6ga.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980459/RRGroup/images/facadeWorks/facade-slide-3-min_dlynri.jpg',
]
