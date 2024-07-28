import "@/styles/globals.css";
import { NextUIProvider } from "@nextui-org/react";
import type { AppProps } from "next/app";
import { Roboto_Slab } from "next/font/google";

const roboto_slab = Roboto_Slab({
  subsets: ["latin"],
  variable: "--roboto_slab",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${roboto_slab.variable} font-roboto_slab`}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </main>
  );
}
