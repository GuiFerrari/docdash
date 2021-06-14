import { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';

import '@/styles/global.scss';
import 'react-toastify/dist/ReactToastify.css';

import AppLayout from '@/layout/index';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <AppLayout>  
      <Component {...pageProps} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </AppLayout>
  )
}

export default App;