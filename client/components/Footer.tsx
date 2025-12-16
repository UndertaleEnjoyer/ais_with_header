import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-white mt-8">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg text-primary mb-4">AIS</h3>
            <p className="text-sm text-muted-foreground">
              Платформа для управления и представления университетских проектов
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Основное</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Проекты
                </Link>
              </li>
              <li>
                <Link
                  to="/cases"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Кейсы
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Ресурсы</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/events"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Мероприятия
                </Link>
              </li>
              <li>
                <Link
                  to="/opd"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ОПД
                </Link>
              </li>
              <li>
                <Link
                  to="/hosting"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  Хостинг
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-sm mb-4">Связь</h4>
            <p className="text-sm text-muted-foreground mb-2">
              Свяжитесь с нами для вопросов и поддержки
            </p>
            <a
              href="mailto:support@ais.edu"
              className="text-sm text-primary hover:underline"
            >
              support@ais.edu
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © 2024 AIS. Все права защищены.
            </p>
            <div className="flex gap-6">
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Политика конфиденциальности
              </a>
              <a
                href="#"
                className="text-xs text-muted-foreground hover:text-primary transition-colors"
              >
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
