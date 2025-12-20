function Navigation() {
  return (
    <header className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-[120px]">
        <div className="relative flex items-center h-[118px]">
          {/* LOGO */}
          <div className="absolute left-0 top-[20px] w-[168px] h-[78px]">
            <img
              src="/logo-surgut.svg"
              alt=""
              className="w-full h-full object-contain"
            />
          </div>

          {/* LOGIN */}
          <div className="absolute right-0 top-[32px]">
            <a
              href="https://student.surgu.ru/#/auth/login"
              className="flex items-center gap-2 h-[44px] px-[24px] rounded-full border border-[#3B3B3B]/40 text-[16px] text-[#3B3B3B] hover:bg-gray-100 transition"
            >
              Войти
              <span>→</span>
            </a>
          </div>

          {/* NAV (CENTERED BETWEEN LOGO & LOGIN) */}
          <nav className="absolute left-1/2 -translate-x-1/2 top-[47px] w-[674px] h-[25px]">
            <ul className="flex justify-between items-center text-[18px] leading-[1] font-medium text-[#3A3A3A]/50">
              <li className="cursor-pointer hover:text-black">
                <a href="https://student.surgu.ru/#/projects">Проекты</a>
              </li>
              <li className="cursor-pointer hover:text-black">
                <a href="https://student.surgu.ru/#/events">Мероприятия</a>
              </li>
              <li className="cursor-pointer hover:text-black">
                <a href="https://student.surgu.ru/#/cases">Кейсы</a>
              </li>
              <li className="cursor-pointer hover:text-black whitespace-nowrap">
                <a href="https://student.surgu.ru/#/hosting">
                  Ресурсы для реализации проектов
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
