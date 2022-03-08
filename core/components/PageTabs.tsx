import styled from 'styled-components'
import { useText } from 'core/utils/lang'

export type Tab = 'donate' | 'inform'

export const PageTabs = ({
  currentTab,
  onTabChange,
}: {
  currentTab: Tab
  onTabChange: (value: Tab) => any
}) => {
  const t = useText()
  return (
    <TabsWrapper>
      <Tab isActive={currentTab === 'donate'} onClick={() => onTabChange('donate')}>
        {t('donate')}
      </Tab>
      <Tab isActive={currentTab === 'inform'} onClick={() => onTabChange('inform')}>
        {t('inform')}
      </Tab>
    </TabsWrapper>
  )
}

export default PageTabs

const TabsWrapper = styled.div`
  width: 100%;
  background: #ffe600;
  height: 64px;
  display: flex;
`

const Tab = styled.button<{ isActive?: boolean }>`
  text-decoration: underline;
  font-size: 18px;
  width: 50%;
  background: transparent;
  border: none;
  border-top: 4px solid #ffe600;

  ${({ isActive }) =>
    isActive
      ? `
        background: #fff !important;
        cursor: auto;
        text-decoration: none;`
      : ''}

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (min-width: 400px) {
    font-size: 24px;
  }

  @media (min-width: 768px) {
    font-size: 32px;
  }
`
