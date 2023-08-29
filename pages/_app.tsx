// import Main from '@/layouts/Main'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@/styles/globals.css'
// import type { AppProps } from 'next/app'

// export default function App({ Component, pageProps }: AppProps) {
//   return <>
//   <Main>
//     <Component {...pageProps} />
//   </Main>
//   </>
// }


import Main from "@/layouts/Main";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: any) {
  return (
    <>
      {/* <Main>
  <Component {...pageProps} />
  </Main> */}

      {Component.PageLayout ? (
        <Component.PageLayout>
          <Component {...pageProps} />
        </Component.PageLayout>
      ) : (
        <Component {...pageProps} />
      )}
    </>
  );
}