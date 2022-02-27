import Link from 'next/link'
import styled from 'styled-components'
import { defaultLang, langs } from 'texts'
import { useLang } from 'utils/lang'

export const Langs = () => {
  const { lang } = useLang()
  return (
    <LangsWrapper>
      {langs.map((langKey) => (
        <Link key={langKey} href={langKey === defaultLang ? '/' : `/${langKey}/`}>
          <Lang isActive={langKey === lang}>{langKey}</Lang>
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
  justify-content: center;
`

const Lang = styled.button<{ isActive?: boolean }>`
  background: #f2f2f2;
  border-radius: 40px;
  padding: 8px 12px;
  border: none;
  margin-right: 5px;

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
