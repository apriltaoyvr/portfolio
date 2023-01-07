/* Libraries */
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';
import { useState, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { IBM_Plex_Mono } from '@next/font/google';
const IBM = IBM_Plex_Mono({ weight: '400', subsets: ['latin'] });

/* FOUC Workaround
 * https://fontawesome.com/docs/web/use-with/react/use-with
*/
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

/* Other */
import Layout from '@/components/utility/Layout';
import Global from '@/components/styles/globalStyles.styled';
import { dracula } from '@/components/styles/Themes';

function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(dracula);

  useEffect(() => {
    let savedTheme;
    try {
      savedTheme = window.localStorage.getItem('theme');
      if (savedTheme) {
        savedTheme = JSON.parse(savedTheme);
        setTheme(savedTheme);
      }
    } catch {
      window.localStorage.removeItem('theme');
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Global />
      <Layout setTheme={setTheme} className={IBM.className}>
        <Component {...pageProps} />
      </Layout>
      <Analytics />
    </ThemeProvider>
  );
}

// Wrap the App with the Translation provider
export default appWithTranslation(MyApp);
