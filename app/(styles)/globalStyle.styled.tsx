import { createGlobalStyle } from 'styled-components'

/* Prettier Workaround
  https://github.com/styled-components/vscode-styled-components/issues/175#issuecomment-798791843
*/
const styled = { createGlobalStyle }

const GlobalStyle = styled.createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    color: ${(props) => props.theme.palette.fg};

    background: ${(props) => props.theme.palette.bg};
  }

  /* Typography */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.typography.family.heading},
      'Space Grotesk', 'Space Mono', Inter, Chivo, sans-serif;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 0 0 0.625rem 0;
    font-weight: 400;
    line-height: 1.3;
  }

  h2,
  h3,
  h4 {
    font-weight: semibold;
  }

  h1,
  h2,
  h3,
  h4 {
    letter-spacing: -0.05em;
  }

  h5,
  h6 {
    letter-spacing: -0.025em;
  }

  h1 {
    font-size: ${(props) => props.theme.typography.scale.xxxl};
    font-weight: bold;
    line-height: 1.5;
  }

  h2 {
    font-size: ${(props) => props.theme.typography.scale.xxl};
  }

  h3 {
    font-size: ${(props) => props.theme.typography.scale.xl};
  }

  h4 {
    font-size: ${(props) => props.theme.typography.scale.lg};
  }

  h5 {
    font-size: ${(props) => props.theme.typography.scale.md};
  }

  span,
  p {
    font-family: ${(props) => props.theme.typography.family.body}, 'DM Sans',
      Inter, Helvetica, sans-serif;
  }

  p {
    max-width: 65ch;
    line-height: 1.75;
  }
`

export default GlobalStyle
