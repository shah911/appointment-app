import Footer from "@/components/Footer";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={montserrat.className}>
      <Component {...pageProps} />
      <div
        className="relative  h-[840px] md:h-[600px] 2xl:h-screen"
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className="fixed bottom-0  h-[840px] md:h-[600px] 2xl:h-screen w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
