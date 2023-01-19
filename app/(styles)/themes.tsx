import { Space_Grotesk, DM_Sans } from '@next/font/google'
const SG = Space_Grotesk({ subsets: ['latin'] })
const DM = DM_Sans({
  style: 'normal',
  weight: ['400', '500', '700'],
  subsets: ['latin'],
})
import type { DefaultTheme } from 'styled-components'

export const light: DefaultTheme = {
  palette: { bg: 'white', fg: 'black' },
  typography: {
    family: {
      heading: SG.style.fontFamily,
      body: DM.style.fontFamily,
    },
    scale: {
      sm: '0.8rem',
      md: '1.414rem',
      lg: '1.999rem',
      xl: '2.827rem',
      xxl: '3.998rem',
      xxxl: '5.653rem',
    },
  },
}

export const dark: DefaultTheme = {
  palette: { bg: 'black', fg: 'white' },
  typography: {
    family: {
      heading: SG.style.fontFamily,
      body: DM.style.fontFamily,
    },
    scale: {
      sm: '0.8rem',
      md: '1.414rem',
      lg: '1.999rem',
      xl: '2.827rem',
      xxl: '3.998rem',
      xxxl: '5.653rem',
    },
  },
}
