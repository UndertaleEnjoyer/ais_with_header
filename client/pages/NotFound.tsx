import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Layout from "@/components/Layout";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
        <p className="text-xl text-foreground mb-2">Страница не найдена</p>
        <p className="text-muted-foreground mb-8">
          К сожалению, страница, которую вы ищете, не существует.
        </p>
        <Link
          to="/"
          className="px-6 py-2 bg-primary text-primary-foreground rounded font-medium hover:bg-primary-600 transition-colors"
        >
          Вернуться на главную
        </Link>
      </div>
    </Layout>
  );
};

export default NotFound;
