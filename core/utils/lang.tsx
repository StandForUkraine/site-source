import { createContext, useContext } from 'react'
import { defaultLang, Lang, Texts, byLang, TextKeys } from 'core/texts'
import { useRouter } from 'next/router'

export interface LangContextValue {
  lang: Lang
  byLang: typeof byLang
  texts: Texts
}

const LangContext = createContext<LangContextValue>({
  lang: defaultLang,
  byLang,
  texts: byLang[defaultLang],
})

export const LangContextProvider = ({ children }: { children: React.ReactElement }) => {
  const router = useRouter()
  const lang = (router.query.lang || defaultLang) as Lang

  return (
    <LangContext.Provider
      value={{
        lang,
        byLang,
        texts: byLang[lang],
      }}
    >
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  return useContext(LangContext)
}

export function useText() {
  const { texts } = useLang()
  return (key: TextKeys) => {
    const t = texts[key] || byLang[defaultLang][key]
    if (!t) console.warn('Wrong translation key:', key)
    return t || key
  }
}
