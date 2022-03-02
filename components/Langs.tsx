import Link from 'next/link'
import styled from 'styled-components'
import { defaultLang, Lang as LangKeys, langs } from 'texts'
import { useLang } from 'utils/lang'

const _kFlags: Record<LangKeys, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  fr: '🇫🇷',
  nl: '🇳🇱',
  it: '🇮🇹',
  pl: '🇵🇱',
  ua: '🇺🇦',
}

export const Langs = () => {
  const { lang } = useLang()
  return (
    <LangsWrapper>
      {langs
        .filter((langKey) => langKey !== 'ua')
        .map((langKey) => (
          <Link
            key={langKey}
            href={langKey === defaultLang ? '/' : '/[lang]/'}
            as={langKey === defaultLang ? '/' : `/${langKey}/`}
          >
            <Lang href={langKey === defaultLang ? '/' : `/${langKey}/`} isActive={langKey === lang}>
              {_kFlags[langKey]}&nbsp;{langKey.toUpperCase()}
            </Lang>
          </Link>
        ))}
    </LangsWrapper>
  )
}

export default Langs

const LangsWrapper = styled.div`
  overflow-x: auto;
  padding: 10px;
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  @media (min-width: 600px) {
    justify-content: center;
  }
`

const Lang = styled.a<{ isActive?: boolean }>`
  background: #f2f2f2;
  border-radius: 40px;
  padding: 8px 15px;
  border: none;
  margin-right: 5px;
  cursor: pointer;
  color: #000;
  text-decoration: none;
  font-weight: 500;
  font-size: 14px;

  ${({ isActive }) =>
    isActive
      ? `
        background: #000;
        color: #fff;`
      : ''}

  &:hover {
    background: #999;
  }
`
