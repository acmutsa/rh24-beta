import { Oswald } from "next/font/google";
import "./globals.css";
import { Provider } from "react-wrap-balancer";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Provider>
        <body className={`${oswald.variable} max-w-[100vw] overflow-x-hidden`}>
          {children}
        </body>
      </Provider>
    </html>
  );
}

export const metadata = {
  title: "RowdyHacks IX",
  description:
    "A Land Before RowdyHacks. Feb 24th-25th. RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA!",
};

export const viewport = {
  themeColor: "#7D9037",
};
