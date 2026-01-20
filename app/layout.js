import "./globals.css";

export const metadata = {
  title: "World Adebiyi's Day | Happy Birthday Kehinde",
  description: "Celebrating a visionary mentor and brother.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}