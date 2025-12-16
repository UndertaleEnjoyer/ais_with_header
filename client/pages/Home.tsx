import Layout from "@/components/Layout";

const Bullet = ({ className = "" }) => (
  <span
    className={[
      "mt-[7px] inline-block",
      "w-[10px] h-[10px] rotate-45",
      "border border-current rounded-[2px]",
      "flex-shrink-0",
      className,
    ].join(" ")}
  />
);

const ArrowPill = ({ text, dark = false }) => (
  <button
    className={[
      "inline-flex items-center gap-4",
      "font-normal",
      dark ? "text-[#3B3B3B]" : "text-white",
      "select-none",
    ].join(" ")}
  >
    <span className="text-[18px] leading-[22px]">{text}</span>
    <span
      className={[
        "w-[44px] h-[44px] rounded-full",
        "border",
        dark ? "border-[#3B3B3B]/70" : "border-white/80",
        "flex items-center justify-center",
      ].join(" ")}
    >
      <span className="text-[18px] leading-none">↗</span>
    </span>
  </button>
);

const Home = () => {
  const heroContainer = "mx-auto w-full max-w-[1440px] px-6";
  const container = "mx-auto w-full max-w-[1200px] px-6 lg:px-0";

  return (
    <Layout>
      {/* HERO */}
      <section className="w-full pb-24">
        <div className={heroContainer}>
          <div className="text-center">
            <h1 className="mx-auto w-full max-w-[1200px] font-extrabold text-[#3B3B3B] tracking-[-0.02em] mb-6 text-[44px] leading-[52px] sm:text-[60px] sm:leading-[70px] lg:text-[72px] lg:leading-[82px]">
              Цифровая среда для проектной
              <br />
              <span className="whitespace-nowrap">деятельности СурГУ</span>
            </h1>

            <div className="mt-6 mb-12">
              <p className="text-[#3B3B3B] font-semibold text-[20px] leading-[24px]">
                АИС «Проекты СурГУ»
              </p>
              <p className="text-gray-500 text-[16px] leading-[20px]">
                платформа, где учебные кейсы становятся реальными проектами
              </p>
            </div>

            <div className="hidden lg:flex w-full items-end justify-center gap-[10px]">
              <div className="relative w-[393px] h-[350px]">
                <img
                  src="/images/Subtract.svg"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <img
                  src="/images/woman.svg"
                  className="absolute left-[6px] bottom-[-6px] w-[380px] h-[365px] object-contain z-10"
                />
              </div>
              <div className="relative w-[394px] h-[222px]">
                <img
                  src="/images/Subtract_2.svg"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <img
                  src="/images/2_woman.svg"
                  className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[395px] h-[295px] object-contain z-10"
                />
              </div>
              <div className="relative w-[393px] h-[350px]">
                <img
                  src="/images/Subtract_3.svg"
                  className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                />
                <img
                  src="/images/man.svg"
                  className="absolute right-[-8px] bottom-[-6px] w-[393px] h-[402px] object-contain z-10"
                />
              </div>
            </div>

            <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-4 max-w-[1200px] mx-auto">
              <button className="h-[80px] rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition text-[18px]">
                Начать проект
              </button>
              <button className="h-[80px] rounded-full border border-gray-900/70 text-gray-900 hover:bg-gray-100 font-semibold transition text-[18px]">
                Возможности платформы
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 lg:py-24">
        <div className={container}>
          <h2
            className="
              text-center font-extrabold text-[#3B3B3B]
              text-[40px] leading-[48px]
              sm:text-[54px] sm:leading-[62px]
              lg:text-[60px] lg:leading-[70px]
            "
          >
            Для кого эта платформа
          </h2>
        </div>
      </section>
      <section className="w-full pb-20">
        <div className={container}>
          <div className="rounded-[40px] border-2 border-orange-500 overflow-hidden grid grid-cols-1 lg:grid-cols-[520px_1fr] lg:min-h-[650px]">
            <div className="relative bg-white px-10 py-10 sm:p-12 lg:px-14 lg:pt-14 lg:pb-10">
              <div className="relative z-10">
                <h3 className="text-[#3B3B3B] font-extrabold mb-5 text-[30px] sm:text-[38px] lg:text-[44px] leading-[1.15]">
                  [01] Студентам
                </h3>

                <p className="text-[#3B3B3B] font-semibold mb-5 text-[18px] sm:text-[20px] leading-[1.35]">
                  Создавайте и управляйте
                  <br />
                  реальными проектами:
                </p>

                <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[22px] max-w-[460px]">
                  единая рабочая среда, понятные роли, задачи и сроки, плюс
                  удобная публичная страница, которую можно отправить
                  работодателю.
                </p>
              </div>
              <img
                src="/images/4.png"
                alt=""
                className="
                  pointer-events-none
                  absolute left-[0px] bottom-[-28px]
                  w-[760px]
                  object-contain
                  z-0
                "
              />

              <div className="h-[250px] lg:h-[280px]" />
            </div>
            <div
              className="
                bg-orange-500 text-white
                flex flex-col
                px-10 py-10 sm:p-12
                lg:px-16 lg:pt-14 lg:pb-10
                rounded-l-[15px]
                -ml-[2px]
              "
            >
              <h4 className="font-semibold mb-8 text-[18px] sm:text-[20px]">
                Что станет доступно:
              </h4>

              <ul className="space-y-5 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6]">
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>публичные страницы проектов в 1 клик;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>трекинг задач, дедлайнов и ролей внутри команды;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>электронные сертификаты и дипломы;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>опыт командной работы, как в реальном проекте;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>
                    бронировать лаборатории, телестудии, коворкинги,
                    оборудование, необходимое для реализации проекта;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>
                    участвовать в конкурсах проекта и привлекать инвестиции в
                    проект.
                  </span>
                </li>
              </ul>

              <div className="mt-auto pt-10 flex justify-end">
                <ArrowPill text="Начать проект" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-24">
        <div className={container}>
          <div className="relative overflow-hidden rounded-[48px] bg-blue-700 text-white px-10 py-10 sm:p-12 lg:px-14 lg:py-14 lg:min-h-[650px]">
            <h3 className="font-extrabold mb-6 text-[28px] sm:text-[34px] lg:text-[44px] leading-[1.1]">
              [02] Наставникам и преподавателям
            </h3>

            <p className="text-white/95 mb-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.55] max-w-[920px]">
              Организуйте и курируйте проекты структурированно и без лишней
              нагрузки:
            </p>

            <ol className="list-decimal list-inside mb-8 space-y-1 text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] max-w-[920px]">
              <li>
                Система сама отображает прогресс, распределение ролей и
                результаты.
              </li>
              <li>Процессы становятся удобными и прозрачными.</li>
            </ol>

            <h4 className="font-semibold mb-6 text-[20px] sm:text-[22px] lg:text-[26px]">
              Что появляется в работе:
            </h4>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65]">
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>прозрачная картина по всем командам;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>автоматическая генерация сертификатов;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>единая база проектов и прогресса;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>
                    формулирование задач для команды и назначение их конкретным
                    участникам;
                  </span>
                </li>
              </ul>

              <ul className="space-y-6">
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>меньше ручной нагрузки за счёт автоматизации;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>
                    доступ к реальным кейсам для проектной деятельности;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>инструменты управления ролями и сроками;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/85" />
                  <span>
                    просмотр статуса проекта, прогресса, комментариев и
                    загруженных материалов.
                  </span>
                </li>
              </ul>
            </div>

            <div className="pt-10 flex justify-end">
              <ArrowPill text="Приступить к работе" />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-24">
        <div className={container}>
          <div className="grid grid-cols-1 lg:grid-cols-[590px_590px] gap-10 lg:gap-[20px]">
            <div className="relative rounded-[40px] bg-[#3F3F3F] text-white px-10 py-10 sm:p-12 lg:p-[56px] lg:h-[850px] overflow-hidden">
              <h3 className="font-extrabold mb-5 text-[34px] sm:text-[40px] leading-[1.05]">
                [03] Компаниям
              </h3>

              <p className="text-white/95 mb-4 text-[16px] sm:text-[17px] leading-[1.55] font-semibold max-w-[470px]">
                А так же учреждениям, организациям
                <br />и представителям бизнеса.
              </p>

              <p className="text-white/75 text-[14px] sm:text-[15px] leading-[22px] max-w-[470px] mb-5">
                Запускайте реальные задачи для студентов прямо через платформу.
                Быстро, удобно и в единой структуре.
              </p>

              <p className="text-white/75 text-[14px] sm:text-[15px] leading-[22px] max-w-[470px] mb-8">
                Команды получают чёткий бриф, работают в общей среде, фиксируют
                процесс, а вы видите ход работы и итоговое решение.
              </p>

              <h4 className="font-semibold mb-6 text-[20px] sm:text-[22px]">
                Что даёт платформа:
              </h4>

              <ul className="space-y-6 text-white/85 text-[14px] sm:text-[15px] leading-[1.6] max-w-[500px]">
                <li className="flex gap-4">
                  <Bullet className="border-white/70" />
                  <span>
                    участие в образовательном процессе без лишней бюрократии;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/70" />
                  <span>
                    повышение узнаваемости компании или бизнеса среди студентов
                    и преподавателей;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/70" />
                  <span>
                    возможность сформировать кадровый резерв из талантливых
                    студентов и преподавателей;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-white/70" />
                  <span>
                    получить решение, новый взгляд на актуальную задачу.
                  </span>
                </li>
              </ul>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-[34px]">
                <ArrowPill text="Разместить кейс" />
              </div>
            </div>
            <div className="relative rounded-[40px] bg-white text-[#3B3B3B] px-10 py-10 sm:p-12 lg:p-[56px] lg:h-[850px] border-2 border-[#3B3B3B]/70 overflow-hidden">
              <h3 className="font-extrabold mb-5 text-[34px] sm:text-[40px] leading-[1.05]">
                [04] Университетам
                <br />и партнёрам
              </h3>

              <p className="mb-4 text-[16px] sm:text-[17px] leading-[1.55] font-semibold max-w-[480px]">
                Масштабируйте и создавайте
                <br />
                современную модель проектного обучения:
              </p>

              <p className="text-gray-500 text-[14px] sm:text-[15px] leading-[22px] max-w-[500px] mb-8">
                цифровая среда, аналитика, учёт и инструменты, которые легко
                масштабировать на факультеты и другие вузы.
              </p>

              <h4 className="font-semibold mb-6 text-[20px] sm:text-[22px]">
                Ключевые возможности:
              </h4>

              <ul className="space-y-6 text-gray-500 text-[14px] sm:text-[15px] leading-[1.6] max-w-[510px]">
                <li className="flex gap-4">
                  <Bullet className="border-[#3B3B3B]/35" />
                  <span>
                    рабочая экосистема для проектной деятельности совместно со
                    студентами;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-[#3B3B3B]/35" />
                  <span>
                    статистика, учёт, отчёты и прозрачность процессов;
                  </span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-[#3B3B3B]/35" />
                  <span>AI-модули для оценки проектных заявок;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-[#3B3B3B]/35" />
                  <span>готовая модель, которую можно тиражировать;</span>
                </li>
                <li className="flex gap-4">
                  <Bullet className="border-[#3B3B3B]/35" />
                  <span>платформа, готовая к внедрению «под ключ».</span>
                </li>
              </ul>

              <div className="absolute left-1/2 -translate-x-1/2 bottom-[34px]">
                <ArrowPill text="Запросить демонстрацию платформы" dark />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full pb-28">
        <div className={container}>
          <h2 className="text-center font-extrabold text-[#3B3B3B] mb-14 text-[40px] sm:text-[54px] lg:text-[60px]">
            О платформе
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
            <div className="lg:col-span-5">
              <div className="text-blue-700 font-extrabold leading-none text-[96px] sm:text-[110px] lg:text-[130px]">
                АИС
              </div>
              <div className="text-[#3B3B3B] font-extrabold mt-3 text-[28px] sm:text-[34px] lg:text-[38px]">
                «Проекты СурГУ»
              </div>
            </div>

            <div className="lg:col-span-7 lg:pt-8 text-gray-500 text-[14px] sm:text-[15px] lg:text-[16px] leading-[24px] max-w-[560px]">
              — единое пространство для управления проектами, взаимодействия и
              развития навыков студентов
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 rounded-[28px] bg-orange-500 text-white p-8 sm:p-10 min-h-[170px]">
              <p className="text-[13px] sm:text-[14px] leading-[20px] max-w-[420px]">
                Платформа собирает проектную работу в единую понятную систему:
                общий процесс, единая логика и цельная история каждого проекта
                вместо разрозненных файлов и бесконечных переписок.
              </p>
            </div>
            <div className="lg:col-span-7 rounded-[28px] overflow-hidden min-h-[320px]">
              <img
                src="/images/6.png"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="lg:col-span-12 relative rounded-[28px] overflow-hidden min-h-[420px]">
              <img
                src="/images/surgu_subtract.svg"
                alt=""
                className="absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="/images/woman_3.svg"
                alt=""
                className="
                  pointer-events-none
                  absolute left-[-10px] bottom-[-6px]
                  w-[520px] max-w-none
                  object-contain
                  z-10
                "
              />
              <p
                className="
                  absolute right-[46px] bottom-[36px]
                  text-white
                  text-[14px] sm:text-[15px] lg:text-[16px]
                  leading-[24px]
                  max-w-[520px]
                  z-20
                "
              >
                Это основа для современного проектного обучения, которое удобно
                студентам, понятно наставникам, открыто партнёрам и устойчиво
                для университетов.
              </p>
            </div>
          </div>

          <div className="mt-14 flex justify-center">
            <button className="w-full h-[80px] rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold transition text-[16px] sm:text-[18px]">
              Предложить сотрудничество
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
