import Head from 'next/head';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AppLayout({ children }) {
  return (
    <>
      <Head>
        <title>Doc Dash</title>
      </Head>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  )
}