import { createGlobalStyle } from 'styled-components';

const Global = createGlobalStyle`
  /** Josh W Comeau CSS Reset **/
  /*
    1. Use a more-intuitive box-sizing model.
  */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  /*
    2. Remove default margin
  */
  * {
    margin: 0;
  }
  /*
    3. Allow percentage-based heights in the application
  */
  html, body {
    height: 100%;
    scroll-behavior: smooth;

    @media (prefers-reduced-motion) {
      scroll-behavior: auto;
    }
  }

  /*
    6. Improve media defaults
  */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    user-drag: none;
  }

  /*
    7. Remove built-in form typography styles
  */
  input, button, textarea, select {
    font: inherit;
  }
  
  /*
    8. Avoid text overflows
  */
  p, h1, h2, h3, h4, h5, h6 {
    text-overflow: ellipsis;
    white-space: pre-wrap;
    word-break: break-word;
    word-wrap: break-word;
  }
  /*
    9. Create a root stacking context
  */
  #root, #__next {
    isolation: isolate;
  }
  /** End of CSS Reset **/

  /** Global Styles **/
  body {
    background: ${({ theme }) => theme.main.bg};
    line-height: 1.5;
    color: ${({ theme }) => theme.main.fgSecondary};
    font-family: 'IBM Plex Mono', 'Fira Code', 'Consolas', monospace;
    -webkit-font-smoothing: antialiased;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    background: ${({ theme }) => theme.main.bg};
    width: 5px;

    &-thumb  {
      background: ${({ theme }) => theme.main.accent};

      &:hover {
        background: ${({ theme }) => theme.main.accentSecondary};
      }
    }
  }

  /* Text Select */
  ::selection {
    background: ${({ theme }) => theme.main.accentSecondary}; 
    color: ${({ theme }) => theme.main.bg};
  }


  /* Font Import */
  @font-face {
    font-family: 'Vartek';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652501658/April%20Tao/Fonts/Vartek-ExpandedBold_gm8y80.otf') format('opentype');
    font-weight: bolder;
    font-display: swap;

  }

  @font-face {
    font-family: 'Vartek';
    src: url('https://res.cloudinary.com/dsbhmynmq/raw/upload/v1652501658/April%20Tao/Fonts/Vartek-SemiExpandedBold_sduq5b.otf') format('opentype');
    font-weight: bold;
    font-display: swap;
  }
  
  /* Text */
  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.24) 0px 3px 1px;
  }
  
  h1, h2 {
    color: ${({ theme }) => theme.main.accent};
  } 
  
  h1 {
    font-family: 'Vartek', sans-serif;
    font-size: clamp(3rem, 2.5055rem + 2.1978vw, 8rem);
    font-weight: bolder;
    
  }
  
  h2 {
    font-family: 'Vartek', sans-serif;
    font-size: clamp(3rem, 2.9011rem + 0.4396vw, 4rem);
    font-weight: bolder;
  }

  h3 {
    color: transparent;
    font-family: 'Vartek', sans-serif;
    font-size: clamp(2rem, 1.9011rem + 0.4396vw, 3rem);
    font-weight: bold;
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accentSecondary};
  }

  h4 {
    color: transparent;
    font-family: 'Vartek', sans-serif;
    font-size: clamp(1.875rem, 1.8503rem + 0.1099vw, 2.125rem);
    -webkit-text-stroke: 1.5px ${({ theme }) => theme.main.accentSecondary};
}

  h5 {
    color: ${({ theme }) => theme.main.accentSecondary};
    font-size: clamp(1.25rem, 1.2253rem + 0.1099vw, 1.5rem);
  }

  h6 {
    color: ${({ theme }) => theme.main.accentSecondary};
    font-size: clamp(1rem, 0.9753rem + 0.1099vw, 1.25rem);
  }

  p {
    max-width: 65ch;
    font-size: 1rem;

    @media (min-width: 2560px) {
      font-size: 2rem;
    }
  }

  a, span, em, strong {
    text-decoration: none;
    color: ${({ theme }) => theme.main.accent};
  }

  main {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    padding: 5rem 0;
  }
  
  section {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
  }
`;

export default Global;
