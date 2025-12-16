import Navigation from "./Navigation";
import Footer from "./Footer";
import ChatWidget from "./ChatWidget";

interface LayoutProps {
  children: React.ReactNode;
  fullWidth?: boolean; // добавили
}

const Layout = ({ children, fullWidth = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main
        className={
          fullWidth
            ? "flex-1 w-full px-4 py-8 pb-0"  // полный экран, НЕ ограничиваем ширину
            : "flex-1 container mx-auto px-4 py-8 pb-0"  // как раньше
        }
      >
        {children}
      </main>

      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;
