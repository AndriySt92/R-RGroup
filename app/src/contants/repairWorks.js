export const worksListsData = [
  {
    title: 'Підлога',
    works: [
      { workTitle: 'Стяжка підлоги', price: '300 грн/м2' },
      { workTitle: 'Укладання плитки(з підрізкою та затиркою швів)', price: '500 грн/м2' },
      { workTitle: 'Укладання ламінату', price: '300 грн/м2' },
      { workTitle: 'Монтаж плінтуса', price: '100 грн/пог/м' },
      { workTitle: 'Монтаж плінтуса з плитки', price: '200 грн/пог/м' },
    ],
  },
  {
    title: 'Стіни',
    works: [
      { workTitle: 'Стіни комплексно: грунтування, армування, шпаклювання', price: ' 240 грн/м2' },
      { workTitle: 'Вирізання та штукатурка шторб', price: '150 грн/пог/м' },
      { workTitle: 'Оздоблення стін спрей-фактурою та фарбування', price: '400 грн/м2' },
      { workTitle: 'Підготовка стін під фарбування', price: '310 грн/м2' },
      { workTitle: 'Фарбування стін', price: '240 грн/м2' },
      { workTitle: 'Виготовлення та фарбування укосів вікон', price: '230 грн/пог/м' },
      { workTitle: 'Монтаж перфорованого кутника', price: '75 грн/пог/м' },
      { workTitle: 'Укоси вхідних дверей', price: '230 грн/пог/м' },
      { workTitle: 'Укладання плитки(з підрізкою та затиркою швів)', price: '500 грн/м2' },
      { workTitle: 'Монтаж міжкімнатних дверей(комплексно)', price: '1500 грн/шт.' },
      { workTitle: 'Монтаж підвіконня', price: '200 грн/шт.' },
      { workTitle: 'Короб гіпсокартонний для каналізації', price: '300 грн/пог/м' },
    ],
  },
  {
    title: 'Стеля',
    works: [
      { workTitle: 'Стеля комплексно: шліфування, шпаклювання, фарбування', price: '390 грн/м2' },
      { workTitle: 'Монтаж натяжної стелі', price: '280 грн/м2' },
      { workTitle: 'Поклейка та фарбування багета', price: '110 грн/пог/м' },
    ],
  },
  {
    title: 'Електромонтажні роботи',
    works: [
      { workTitle: 'Електроточка з монтажем коробки та підключення', price: '200 грн/шт.' },
      { workTitle: 'Монтаж розеток, вимикачів', price: '160 грн/шт' },
      { workTitle: 'Монтаж світильників', price: 'від 300 грн/шт.' },
    ],
  },
  {
    title: 'Сантехнічні роботи',
    works: [
      { workTitle: 'Розведення точок сантехніки', price: '550 грн/шт.' },
      { workTitle: 'Монтаж радіатора отоплення', price: '1500 грн/шт.' },
      { workTitle: 'Фарбування газової труби', price: '120 грн/пог/м​​​​​​​​​​​​​​' },
      { workTitle: 'Монтаж лючка ревізії', price: '200 грн/шт.' },
      { workTitle: 'Монтаж ванни', price: '1800 грн/шт.' },
      { workTitle: 'Монтаж унітаза', price: '1200 грн/шт.' },
      { workTitle: 'Мотаж рушникосушарки', price: '600 грн/шт.' },
    ],
  },
  {
    title: 'Підсобні роботи',
    works: [
      { workTitle: 'Закупка та доставка буд матеріалів', price: '2000 грн/од.​​​​​​​' },
      { workTitle: 'Занесення буд матеріалів', price: '2000 грн/од.​​​​​​​' },
      { workTitle: 'Винесення будівельного сміття', price: '1000 грн/од.​​​​​​​' },
      { workTitle: 'Миття вікон', price: '200 грн/​​​​​​од.​' },
      { workTitle: 'Прибирання приміщень', price: '20 грн/м2' },
    ],
  },
]

export const orderTypeData = {
  mainTitle: 'Типи замовлень ремонтних робіт у нас',
  ordersTypeList: [
    {
      title: 'Мінімальне',
      subtitle: 'косметичний ремонт',
      works: [
        'Видалення Cтарих Шпалер',
        'Поклейка Нових Шпалер',
        'Установка/заміна Сантехніки',
        'Заміна/укладання Підлоги',
        'Заміна Розеток',
        'Утеплення Вікон/дверей',
        'Карнізи, Плінтуси',
      ],
      isTrend: false,
    },
    {
      title: 'Під ключ',
      subtitle: 'дизайнерський ремонт',
      works: [
        'Унікальний Дизайн-проект',
        'Авторський Нагляд',
        'Монтаж Демонтаж',
        'Електромонтажні Роботи',
        'Розводка Комунікацій',
        'Чорнові Роботи',
        'Монтаж Підлоги',
        'Чистова Обробка Стін',
        'Інсталяційні Системи',
        'Прибирання Приміщення',
      ],
      isTrend: true,
    },
    {
      title: 'Велике',
      subtitle: 'капітальний ремонт',
      works: [
        'Монтаж Демонтаж',
        'Електромонтажні Роботи',
        'Розводка комунікацій',
        'Підбір Матеріалів',
        'Чорнові Роботи',
        'Монтаж Підлоги/Плитки',
        'Чистова Обробка Стін',
        'Установка Сантехніки',
        'Прибирання Приміщення',
      ],
      isTrend: false,
    },
  ],
}

export const accordionData = [
  {
    id: 'One',
    question: 'Чи укладається офіційний договір?',
    answer:
      'Звичайно. Ми працюємо за офіційним договором і беремо на себе повну відповідальність за виконані роботи. Ми дорожимо своєю репутацією і намагаємося зробити все від нас залежне, щоб угода була максимально прозорою і безпечною для Вас.',
  },
  {
    id: 'Two',
    question: 'Які терміни виконання ремонту?',
    answer:
      'Це залежить від виду ремонту і складності дизайн-проекту. Косметичний ремонт може бути виконаний всього за 20-30 днів, дизайнерський - за 2-3 місяці.',
  },
  {
    id: 'Three',
    question: 'Як швидко ви можете приступити до виконання ремонту?',
    answer:
      'Як тільки підпишемо договір. Ми не вітаємо затримки, в тому числі і на початковому етапі співпраці. Приступаємо до роботи на протязі 2-3 днів.',
  },
  {
    id: 'Four',
    question: 'Кваліфіковані у вас співробітники?',
    answer:
      'Наші співробітники - професіонали своєї справи. Багато хто працює в своїй галузі 15 років і більше, за плечима у них по кілька десятків реалізованих проектів.',
  },
  {
    id: 'Fifth',
    question: 'Я можу бути впевнений(а), що не буде ніяких доплат в процесі ремонту?',
    answer:
      'Перед початком співпраці ми складаємо зрозумілу і прозорий кошторис, в якому відразу намагаємося врахувати всі можливі витрати. Звичайно, бувають винятки, коли замовник приймає рішення змінити щось по ходу робіт. Але, як правило, несподіваних сюрпризів у вигляді екстра платежів не виникає.',
  },
]

export const galleryImages = [
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-img-1-min_duxhro.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-2-min_b3o1gj.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-3-min_t3vlbt.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-4-min_mmady8.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-5-min_kxddbi.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-6-min_qmfvll.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-7-min_p0gy6s.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980838/RRGroup/images/repairWorks/repair-img-8-min_q9ongj.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-img-9-min_x7ogrs.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-img-10-min_rfnqwu.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-img-11-min_ibzp2d.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-img-12-min_o7xdog.jpg',
]

export const slideImages = [
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-slide-1-min_sgskqp.jpg',
  'https://res.cloudinary.com/drcptrml4/image/upload/v1669980839/RRGroup/images/repairWorks/repair-slide-2-min_o6lvq4.jpg',
]
