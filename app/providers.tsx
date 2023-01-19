'use client'
import { ThemeProvider } from 'styled-components'
import StyledComponentsRegistry from './(styles)/registry'
import GlobalStyle from './(styles)/globalStyle.styled'
import { dark, light } from './(styles)/themes'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <StyledComponentsRegistry>
        <ThemeProvider theme={dark}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </>
  )
}
