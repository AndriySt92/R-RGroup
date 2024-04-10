export const servicesItems = [
  { title: 'Ремонтні роботи', linkTo: '/repairWorks' },
  { title: 'Штукатурні роботи', linkTo: '/plasterWorks' },
  { title: 'Фасадні роботи', linkTo: '/facadeWorks' },
  { title: 'Монолітні роботи', linkTo: '/concreteWorks' },
  { title: 'Декоративна штукатурка', linkTo: '/decorativePlaster' },
  { title: 'Покрівельні роботи', linkTo: '/roofingWorks' },
  { title: 'Укладання бруківки', linkTo: '/pavingWorks' },
  { title: 'Розробка проектів', linkTo: '/projectDevelopment' },
]

export const menuItems = [
  { linkTo: '/', title: 'Будинки під ключ' },
  { linkTo: '/services', title: 'Ремонтні роботи', servicesItems: servicesItems},
  { linkTo: '/price', title: 'Ціни'},
  { linkTo: '/portfolio', title: 'Портфоліо'},
  { linkTo: '/tips', title: 'Поради'},
  { linkTo: '/contacts', title: 'Контакти'},
]
