import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
	variable: "--font-oswald",
	subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${oswald.variable} max-w-[100vw] overflow-x-hidden`}>{children}</body>
		</html>
	);
}
