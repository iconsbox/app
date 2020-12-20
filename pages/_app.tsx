import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const theme = {};
  return <RecoilRoot>
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </RecoilRoot>
}

export default MyApp
