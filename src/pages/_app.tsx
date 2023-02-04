import '@/styles/globals.css'
//import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'
import type { AppProps } from 'next/app'
import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';
const theme = createTheme({
  palette: {
   mode:'dark'
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme} >
      <CssBaseline>
  <Component {...pageProps} />
  </CssBaseline>
  </ThemeProvider>
  )
}
