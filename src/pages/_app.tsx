import '../assets/styles/style.global.scss';
import type { AppProps } from 'next/app';
import { PropsWithChildren } from 'react';
import Footer from 'components/footer';
import Modal from '../components/modals/location';

interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection :'column',
        justifyContent: 'center',
        position: 'relative'
        }}>
       <Component {...pageProps} />
       <Footer/>
       <Modal />
    </div>

  )

}

export default MyApp;
