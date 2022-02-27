export const allTags = [
  'Military',
  'Non-government',
  'Medical',
  'Humanitarian',
  'Non-lethal',
  'Refugees',
  'Human Rights',
] as const

export type Tag = typeof allTags[number]

export type TagOrAll = Tag | 'All'
