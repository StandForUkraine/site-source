export interface PostItem {
  segment: string
  text: string
  image: string
  imageAlt: string
}

export const posts: PostItem[] = [
  {
    segment: 'declared-war',
    text: '#StandForUkraine',
    image: '/posts/declared-war.png',
    imageAlt: 'Russia & Belarus Officially Declared War on Ukraine.',
  },
  {
    segment: 'aggresion',
    text: '#StandForUkraine',
    image: '/posts/aggresion.png',
    imageAlt: 'RUSSIAN AGGRESION WILL BE STOPPED',
  },
  {
    segment: 'savelife',
    text: '#StandForUkraine',
    image: '/posts/savelife.png',
    imageAlt: 'I support Come Back Alive Fuoundation. Join me.',
  },
  {
    segment: 'savelife-ua-army',
    text: '#StandForUkraine',
    image: '/posts/savelife-ua-army.png',
    imageAlt: 'I support Come Back Alive Foundation & Ukraninan Armed Forces. Join Me!',
  },
]
