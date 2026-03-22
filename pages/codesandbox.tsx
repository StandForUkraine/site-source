import * as React from 'react'
import styled, { createGlobalStyle } from 'styled-components';
import type { NextPageWithLayout } from './_app'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    font-weight: 400;
  }
`

const CodeSandboxPage: NextPageWithLayout = () => {
  return (
    <>
      <GlobalStyles />
      <SiteContent>Widget has been removed.</SiteContent>
    </>
  )
}

const SiteContent = styled.h2`
  padding: 0 20px;
`;

CodeSandboxPage.getLayout = (page) => page;

export default CodeSandboxPage;
