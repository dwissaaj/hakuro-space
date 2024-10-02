
import { Raleway, Roboto } from "next/font/google";
import "./globals.css";
import { Providers } from "./lib/provider/providers";
import Navigations from './components/nav/Navigations'
import NavFooter from "@/app/components/nav/NavFooter";

const roboto = Roboto({ variable: "--font-roboto", weight: ["100", "300", "500", "700"], subsets: ['latin'] });
const raleway =  Raleway({variable: "--font-raleway",weight: ["100", "300", "500", "700"], subsets: ['latin'] })
export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" className={`${roboto.variable} ${raleway.variable} `}>
      <body>
     
          <Providers>
            <Navigations />
            {children}
            <NavFooter />
          </Providers>
       
      </body>
    </html>
  );
}
