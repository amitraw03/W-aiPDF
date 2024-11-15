import localFont from "next/font/local";
import "./globals.css";
import {Sour_Gummy} from "next/font/google"  // custom font
import Provider from "./provider";          // to get the convex server config on each children
import { ClerkProvider } from "@clerk/nextjs";   // now have to enclose HTML tag in ClerkProvider


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const customFont = Sour_Gummy({subsets:['latin']})

export default function RootLayout({ children }) {
  return (
    <ClerkProvider >
    <html lang="en">
      <body
        className={customFont.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
