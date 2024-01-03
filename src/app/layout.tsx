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

export const meta: Metadata = {
	title: "RowdyHacks IX",
	description:
		"A Land Before RowdyHacks. Feb 24th-25th. RowdyHacks is a free, weekend-long, overnight hackathon hosted at UTSA!",
	themeColor: "#7D9037",
};
