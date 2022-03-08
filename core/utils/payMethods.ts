export const payMethods = [
  'IBAN',
  'Credit Card',
  'PayPal',
  'Patreon',
  'Bitcoin',
  'Kuna',
  'Western Union',
] as const

export type PayMethod = typeof payMethods[number]
