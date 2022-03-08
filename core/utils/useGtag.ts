declare const gtag: GTag

export type GTag = (command: 'event', action: string, params: EventParams) => void

interface EventParams {
  event_category: string
  event_label?: string
  value?: string
}

export const useGtag =
  (): typeof gtag =>
  (...args) =>
    gtag(...args)
