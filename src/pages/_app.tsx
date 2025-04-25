import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat, Source_Serif_4 } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });
const serif = Source_Serif_4({ subsets: ['latin'] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={montserrat.className}>
      <div className={serif.className}>
        <Component {...pageProps} />
      </div>
    </main>
  );
}
