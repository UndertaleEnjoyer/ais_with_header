import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-[#E5E5E5]">
      <div className="mx-auto max-w-[1200px] px-6 pt-[88px] pb-[56px]">
        {/* Верхняя сетка */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr_1fr] gap-[120px]">
          {/* Левая колонка */}
          <div>
            {/* Лого */}
            <img
              src="/logo-surgu.svg"
              alt="СурГУ"
              className="w-[293px] h-[144px] -ml-[23px] -mt-[10px]"
            />

            {/* Кнопки */}
            <div className="mt-[32px] flex flex-col gap-[16px] max-w-[360px]">
              <button className="h-[56px] rounded-full bg-[#1E4ED8] text-white font-medium text-[16px] hover:bg-[#1A45C0] transition">
                Предложить сотрудничество
              </button>

              <button className="h-[56px] rounded-full border border-[#3A3A3A] text-[#3A3A3A] font-medium text-[16px] flex items-center justify-center gap-[12px] hover:bg-gray-50 transition">
                Войти в личный кабинет
                <img
                  src="/arrow-right.svg" // ← ты подменишь файл
                  alt="arrow"
                  className="w-[18px] h-[18px]"
                />
              </button>
            </div>

            {/* Соцсети */}
            <div className="mt-[28px] flex gap-[28px]">
              <a href="#" className="flex items-center gap-[12px]">
                <img
                  src="/telegram.svg" // ← иконка 45×45
                  alt="Telegram"
                  className="w-[45px] h-[45px]"
                />
                <span className="text-[16px] text-[#3A3A3A]">Telegram</span>
              </a>

              <a href="#" className="flex items-center gap-[12px]">
                <img
                  src="/vk.svg" // ← иконка 45×45
                  alt="VK"
                  className="w-[45px] h-[45px]"
                />
                <span className="text-[16px] text-[#3A3A3A]">Вконтакте</span>
              </a>
            </div>
          </div>

          {/* Навигация */}
          <div className="pt-[32px]">
            <h4 className="text-[16px] font-medium text-[#1A1A1A] mb-[20px]">
              Навигация
            </h4>

            <ul className="space-y-[14px] text-[16px] text-[#3A3A3A80]">
              <li>
                <Link to="/">Главная</Link>
              </li>
              <li>
                <Link to="/projects">Проекты</Link>
              </li>
              <li>
                <Link to="/events">Мероприятия</Link>
              </li>
              <li>
                <Link to="/cases">Кейсы</Link>
              </li>
              <li>
                <Link to="/resources">Ресурсы для реализации проектов</Link>
              </li>
            </ul>
          </div>

          {/* Контакты */}
          <div className="pt-[32px]">
            <h4 className="text-[16px] font-medium text-[#1A1A1A] mb-[20px]">
              Контакты
            </h4>

            <ul className="space-y-[18px] text-[16px] text-[#3A3A3A80]">
              <li className="flex gap-[12px]">
                <img
                  src="/location_.svg"
                  alt=""
                  className="w-[20px] h-[20px]"
                />
                <span>
                  628412, Ханты-Мансийский автономный округ — Югра, г. Сургут,
                  пр. Ленина, 1
                </span>
              </li>

              <li className="flex gap-[12px]">
                <img src="/phone.svg" alt="" className="w-[20px] h-[20px]" />
                <span>+7 (3462) 762-800 (внт. 2292)</span>
              </li>

              <li className="flex gap-[12px]">
                <img src="/mail.svg" alt="" className="w-[20px] h-[20px]" />
                <a href="mailto:kuripanova_eva@surgu.ru">
                  kuripanova_eva@surgu.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="mt-[96px] text-center text-[14px] text-[#3A3A3A40]">
          <p className="max-w-[920px] mx-auto mb-[24px]">
            Бюджетное учреждение высшего образования Ханты-Мансийского
            автономного округа — Югры «Сургутский государственный университет»
          </p>

          <div className="flex flex-wrap justify-center gap-[32px] mb-[24px]">
            <span>ИНН: 8602200001</span>
            <span>КПП: 860201001</span>
            <span>ОГРН: 1028600609180</span>
            <span>ОКПО: 27387694</span>
          </div>

          <div className="flex justify-center gap-[32px]">
            <a href="#">Политика конфиденциальности</a>
            <a href="#">Согласие на обработку персональных данных</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
