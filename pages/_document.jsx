import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet} from 'styled-components';

class MyDocument extends Document {
  /* Prevent FOUC with SSR and SC
    https://styled-components.com/docs/advanced#server-side-rendering
  */
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [initialProps.styles, sheet.getStyleElement()],
      };
    } finally {
      sheet.seal();
    }
  }
  
  render() {
    return (
      <Html>
        <Head>
          <meta
            name='description'
            content='Web design, development, and modelling'
          />
          <link rel='icon' type='image/svg' href='/static/images/heart.svg' />
          <link
            rel='image_src'
            href='https://user-images.githubusercontent.com/95392008/168454973-fb5b4042-dad2-4784-b118-7cbc8df1110d.png'
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
