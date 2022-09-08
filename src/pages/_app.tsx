import { PropsWithChildren,useState,useEffect } from 'react';
import '../assets/styles/style.global.scss';
import type { AppProps } from 'next/app';
import Footer from 'components/footer';
import Modal from '../components/modals/location';
import Loader from '../components/loaders/lottie/';


interface CustomProps extends AppProps {
  pageProps: PropsWithChildren<unknown>;
}

function MyApp({ Component, pageProps }: CustomProps) {
  const [isLoading,setIsLoading] =useState(true);
  useEffect(() =>{

    setTimeout(() => {
      setIsLoading(false);
    }, 3000)

  },[])
  return (
    <>{
      isLoading?
      <Loader/>:
      <div
      style={{
        position: 'relative',
        backgroundColor: '#fff'
        }}>
       <Component {...pageProps} />
       {/*<Footer/>
       <Modal />*/}
    </div>
      }</>
  )

}

export default MyApp;
