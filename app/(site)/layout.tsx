import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      {children}
      <Footer />
    </div>
  );
}
