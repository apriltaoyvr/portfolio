import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    palette: {
      bg: string
      fg: string
    }
    typography: {
      family: {
        heading: string
        body: string
      }
      scale: {
        sm: '0.8rem'
        md: '1.414rem'
        lg: '1.999rem'
        xl: '2.827rem'
        xxl: '3.998rem'
        xxxl: '5.653rem'
      }
    }
  }
}
