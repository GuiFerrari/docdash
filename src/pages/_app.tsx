import { AppProps } from 'next/app';

import '@/styles/global.scss';

import AppLayout from '@/layout/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppLayout>  
      <Component {...pageProps} />
    </AppLayout>
  )
}

export default App;