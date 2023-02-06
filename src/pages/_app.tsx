import '@/styles/globals.css'
import { ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import { lightTheme,darkTheme } from '../../themes/';
import { UIProvider } from 'context/ui';
import { EntriesProvider } from 'context/entries';





export default function App({ Component, pageProps }: AppProps) {
  return (
  <EntriesProvider>
    <UIProvider>   
      <ThemeProvider theme={ darkTheme } >
        <CssBaseline>
        <Component {...pageProps} />
        </CssBaseline>
      </ThemeProvider>
    </UIProvider>
  </EntriesProvider>
  )
}
