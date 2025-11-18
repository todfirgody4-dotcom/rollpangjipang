import "./globals.css";

export const metadata = {
  title: "롤팡지팡",
  description: "전용 OP.GG 시스템",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-900 text-white">{children}</body>
    </html>
  );
}
