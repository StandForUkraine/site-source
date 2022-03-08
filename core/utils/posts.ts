export interface PostItem {
  segment: string
  text: string
  image: string
  imageAlt: string
  hidden?: boolean
}

export const posts: PostItem[] = [
  {
    segment: 'kid-on-chair',
    text: '#StandForUkraine',
    image: '/posts/kid-on-chair.png',
    imageAlt: 'You can help war-thorn Ukraine',
  },
  {
    segment: 'broken-buildings',
    text: '#StandForUkraine',
    image: '/posts/broken-buildings.png',
    imageAlt: 'You can help war-thorn Ukraine',
  },
  {
    segment: 'support-army',
    text: '#StandForUkraine',
    image: '/posts/support-army.png',
    imageAlt: 'I support the Armed Forces of Ukraine. Join me!',
  },
  {
    segment: 'support-fund',
    text: '#StandForUkraine',
    image: '/posts/support-fund.png',
    imageAlt: 'I support Ukrainian humanitarian fund. Join me!',
  },
  {
    segment: 'tribunal-for-putin',
    text: '#StandForUkraine',
    image: '/posts/tribunal-for-putin.png',
    imageAlt: "We demand putin's tribunal",
  },
  {
    segment: 'stop-dictators',
    text: '#StandForUkraine',
    image: '/posts/stop-dictators.png',
    imageAlt: "Stop Europe's last dictators",
  },
  {
    segment: 'red-cross',
    text: '#StandForUkraine',
    image: '/posts/red-cross.png',
    imageAlt: 'I support Ukrainian Red Cross Society. Join me!',
  },
  {
    segment: 'no-fly-zone',
    text: '#StandForUkraine',
    image: '/posts/no-fly-zone.png',
    imageAlt: 'Ukraine needs a no-fly zone',
  },
  {
    segment: 'kick-off-russia',
    text: '#StandForUkraine',
    image: '/posts/kick-off-russia.png',
    imageAlt: 'Kick russia off the security council',
  },
  {
    segment: 'female-fighters',
    text: '#StandForUkraine',
    image: '/posts/female-fighters.png',
    imageAlt: 'You can help war-thorn Ukraine',
  },
  {
    segment: 'family',
    text: '#StandForUkraine',
    image: '/posts/family.png',
    imageAlt: 'You can help war-thorn Ukraine',
  },
  {
    segment: 'come-back-alive',
    text: '#StandForUkraine',
    image: '/posts/come-back-alive.png',
    imageAlt: 'I support Come Back Alive foundation. Join me!',
  },
  {
    segment: 'aggresion',
    text: '#StandForUkraine',
    image: '/posts/aggresion.png',
    imageAlt: 'RUSSIAN AGGRESION WILL BE STOPPED',
  },
  {
    segment: 'declared-war',
    text: '#StandForUkraine',
    image: '/posts/declared-war.png',
    imageAlt: 'russia & belarus Declared War on Ukraine.',
  },
  {
    segment: 'savelife',
    text: '#StandForUkraine',
    image: '/posts/savelife.png',
    imageAlt: 'I support Come Back Alive Fuoundation. Join me.',
    hidden: true,
  },
  {
    segment: 'savelife-ua-army',
    text: '#StandForUkraine',
    image: '/posts/savelife-ua-army.png',
    imageAlt: 'I support Come Back Alive Foundation & Ukraninan Armed Forces. Join Me!',
    hidden: true,
  },
]
