import styled from 'styled-components'

export type Tab = 'donate' | 'inform'

export const PageTabs = ({
  currentTab,
  onTabChange,
}: {
  currentTab: Tab
  onTabChange: (value: Tab) => any
}) => (
  <TabsWrapper>
    <Tab isActive={currentTab === 'donate'} onClick={() => onTabChange('donate')}>
      Donate
    </Tab>
    <Tab isActive={currentTab === 'inform'} onClick={() => onTabChange('inform')}>
      Inform
    </Tab>
  </TabsWrapper>
)

export default PageTabs

const TabsWrapper = styled.div`
  width: 100%;
  background: #ffe600;
  height: 64px;
  display: flex;
`

const Tab = styled.button<{ isActive?: boolean }>`
  text-decoration: underline;
  font-size: 32px;
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
`
