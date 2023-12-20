import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDR7aofnavkoDm1FPYVAKLNYFl6MsWpgpI",
  authDomain: "game-vortex-ecommerce.firebaseapp.com",
  projectId: "game-vortex-ecommerce",
  storageBucket: "game-vortex-ecommerce.appspot.com",
  messagingSenderId: "982345687301",
  appId: "1:982345687301:web:5246c1f98429152859976c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function App({ Component, pageProps }: AppProps) {

  return( 
      <Component {...pageProps} />
  )
}
