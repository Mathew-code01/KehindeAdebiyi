import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "World Adebiyi's Day | Happy Birthday",
  description:
    "Celebrating the amazing legacy and birthday of the Adebiyi twins, Taiwo & Kehinde.",
  metadataBase: new URL("https://kehindeadebiyi.org"),
  openGraph: {
    title: "World Adebiyi's Day | Happy Birthday",
    description:
      "A cinematic tribute to the life and influence of the Adebiyi twins.",
    url: "https://kehindeadebiyi.org",
    siteName: "Adebiyi Twins Tribute",
    images: [
      {
        url: "twins-hero.jpg", // Create this 1200x630 image in your public folder
        width: 1200,
        height: 630,
        alt: "Taiwo and Kehinde Adebiyi Birthday Tribute",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World Adebiyi's Day | Happy Birthday",
    description: "Celebrating the incredible Adebiyi twins.",
    images: ["/twins-hero.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${poppins.variable} font-sans antialiased bg-[#FDFCFB] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
