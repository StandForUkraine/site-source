export const allTags = [
  'Military',
  'Non-government',
  'Medical',
  'Humanitarian',
  'Non-lethal',
  'Refugees',
  'Human Rights',
  'Press',
  // 'Veterancy',
] as const

export type Tag = typeof allTags[number]
