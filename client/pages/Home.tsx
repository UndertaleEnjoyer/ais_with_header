import Layout from "@/components/Layout";

const Bullet = ({ className = "" }: { className?: string }) => (
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

const ArrowCircle = ({ dark = false }) => (
  <span
    className={[
      "w-[44px] h-[44px] rounded-full",
      "border-2",
      dark
        ? "border-[#3B3B3B]/70 text-[#3B3B3B]"
        : "border-white/85 text-white",
      "flex items-center justify-center",
    ].join(" ")}
  >
    <span className="text-[20px] leading-none font-black -translate-y-[1px]">
      {"↗︎"}
    </span>
  </span>
);

const ArrowPill = ({
  text,
  dark = false,
}: {
  text: string;
  dark?: boolean;
}) => (
  <button
    className={[
      "inline-flex items-center gap-4",
      dark ? "text-[#3B3B3B]" : "text-white",
      "select-none",
    ].join(" ")}
  >
    <span className="text-[18px] leading-[22px]">{text}</span>
    <ArrowCircle dark={dark} />
  </button>
);

const Home = () => {
  const heroContainer = "mx-auto w-full max-w-[1440px] px-6";
  const container = "mx-auto w-full max-w-[1200px] px-6 lg:px-0";

  return (
    <Layout>
      <div className="font-medium bg-white w-full">
        <section className="w-full pb-24">
          <div className={heroContainer}>
            <div className="text-center">
              <h1 className="mx-auto w-full max-w-[1200px] font-extrabold text-[#3B3B3B] tracking-[-0.02em] mb-6 text-[44px] leading-[52px] sm:text-[60px] sm:leading-[70px] lg:text-[72px] lg:leading-[82px]">
                Цифровая среда для проектной
                <br />
                <span className="whitespace-nowrap">деятельности СурГУ</span>
              </h1>
              <div className="relative mx-auto w-full max-w-[1200px] mt-10 lg:mt-12 pt-[5px]">
                <div className="absolute top-100 left-1/2 -translate-x-1/2 w-full text-center">
                  <p className="text-[#3B3B3B] font-semibold text-[20px] leading-[24px]">
                    АИС «Проекты СурГУ»
                  </p>
                  <p className="text-gray-500 text-[16px] leading-[20px] font-normal">
                    платформа, где учебные кейсы становятся реальными проектами
                  </p>
                </div>

                <div className="hidden lg:flex w-full items-end justify-center gap-[10px]">
                  <div className="relative w-[393px] h-[350px]">
                    <img
                      src="/images/Subtract.svg"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                      draggable={false}
                      alt=""
                    />
                    <img
                      src="/images/woman.svg"
                      className="absolute left-[6px] bottom-[-6px] w-[380px] h-[365px] object-contain z-10"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative w-[394px] h-[222px]">
                    <img
                      src="/images/Subtract_2.svg"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                      draggable={false}
                      alt=""
                    />
                    <img
                      src="/images/2_woman.svg"
                      className="absolute left-1/2 -translate-x-1/2 bottom-[-6px] w-[395px] h-[295px] object-contain z-10"
                      draggable={false}
                      alt=""
                    />
                  </div>
                  <div className="relative w-[393px] h-[350px]">
                    <img
                      src="/images/Subtract_3.svg"
                      className="absolute inset-0 w-full h-full object-cover rounded-3xl"
                      draggable={false}
                      alt=""
                    />
                    <img
                      src="/images/man.svg"
                      className="absolute right-[-8px] bottom-[-6px] w-[393px] h-[402px] object-contain z-10"
                      draggable={false}
                      alt=""
                    />
                  </div>
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
            <h2 className="text-center font-extrabold text-[#3B3B3B] text-[40px] leading-[48px] sm:text-[54px] sm:leading-[62px] lg:text-[60px] lg:leading-[70px]">
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

                  <p className="text-gray-600 text-[14px] sm:text-[15px] leading-[22px] max-w-[460px] font-normal">
                    единая рабочая среда, понятные роли, задачи и сроки, плюс
                    удобная публичная страница, которую можно отправить
                    работодателю.
                  </p>
                </div>

                <img
                  src="/images/4.png"
                  alt=""
                  draggable={false}
                  className="pointer-events-none absolute left-[0px] bottom-[-28px] w-[760px] object-contain z-0"
                />

                <div className="h-[250px] lg:h-[280px]" />
              </div>

              <div className="bg-orange-500 text-white flex flex-col px-10 py-10 sm:p-12 lg:px-16 lg:pt-14 lg:pb-10 rounded-l-[15px] -ml-[2px]">
                <h4 className="font-semibold mb-8 text-[18px] sm:text-[20px]">
                  Что станет доступно:
                </h4>

                <ul className="space-y-5 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.6] font-normal">
                  <li className="flex gap-4">
                    <Bullet className="border-white/85" />
                    <span>публичные страницы проектов в 1 клик;</span>
                  </li>
                  <li className="flex gap-4">
                    <Bullet className="border-white/85" />
                    <span>
                      трекинг задач, дедлайнов и ролей внутри команды;
                    </span>
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

              <p className="text-white/95 mb-4 text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.55] max-w-[920px] font-semibold">
                Организуйте и курируйте проекты структурированно и без лишней
                нагрузки:
              </p>

              <ol className="list-decimal list-inside mb-8 space-y-1 text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] max-w-[920px] font-normal">
                <li>
                  Система сама отображает прогресс, распределение ролей и
                  результаты.
                </li>
                <li>Процессы становятся удобными и прозрачными.</li>
              </ol>

              <h4 className="font-semibold mb-6 text-[20px] sm:text-[22px] lg:text-[26px]">
                Что появляется в работе:
              </h4>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 text-white/90 text-[14px] sm:text-[15px] lg:text-[16px] leading-[1.65] font-normal">
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
                      формулирование задач для команды и назначение их
                      конкретным участникам;
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5">
              <div className="relative rounded-[40px] bg-[#3F3F3F] text-white lg:h-[850px] p-10 sm:p-12 lg:p-[56px] flex flex-col font-normal">
                <div>
                  <h3 className="relative font-extrabold tracking-[-0.02em] text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.06] pl-[92px]">
                    <span className="absolute left-0 top-0">[03]</span>
                    Компаниям
                  </h3>

                  <p className="mt-[40px] text-white/95 font-semibold text-[18px] sm:text-[20px] leading-[1.4] max-w-[520px]">
                    А так же учреждениям, организация
                    <br />и представителям бизнеса.
                  </p>

                  <p className="mt-[24px] max-w-[560px] text-white/70 text-[14px] sm:text-[15px] leading-[22px]">
                    Запускайте реальные задачи для студентов прямо через
                    платформу. Быстро, удобно и в единой структуре.
                  </p>

                  <p className="mt-[22px] max-w-[560px] text-white/70 text-[14px] sm:text-[15px] leading-[22px]">
                    Команды получают чёткий бриф, работают в общей среде,
                    фиксируют процесс, а вы видите ход работы и итоговое
                    решение.
                  </p>

                  <h4 className="mt-[56px] font-semibold text-[20px] sm:text-[22px] mt-10 pt-[10px] ">
                    Что даёт платформа:
                  </h4>

                  <ul className="mt-[32px] space-y-[28px] text-white/85 text-[14px] sm:text-[15px] leading-[1.65] max-w-[560px]">
                    <li className="flex gap-4">
                      <Bullet className="border-white/70" />
                      <span>
                        участие в образовательном процессе без лишней
                        бюрократии;
                      </span>
                    </li>
                    <li className="flex gap-4">
                      <Bullet className="border-white/70" />
                      <span>
                        повышение узнаваемости компании или бизнеса среди
                        студентов и преподавателей;
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
                </div>

                <div className="absolute right-[56px] bottom-[34px]">
                  <ArrowPill text="Разместить кейс" />
                </div>
              </div>

              <div className="relative rounded-[40px] bg-white text-[#3B3B3B] lg:h-[850px] p-10 sm:p-12 lg:p-[56px] flex flex-col border-2 border-[#3B3B3B]/70 font-normal">
                <div>
                  <h3 className="relative font-extrabold tracking-[-0.02em] text-[34px] sm:text-[40px] lg:text-[44px] leading-[1.06] pl-[92px]">
                    <span className="absolute left-0 top-0">[04]</span>
                    Университетам
                    <br />и партнёрам
                  </h3>

                  <p className="mt-[40px] font-semibold text-[18px] sm:text-[20px] leading-[1.4] max-w-[560px]">
                    Масштабируйте и создавайте
                    <br />
                    современную модель проектного
                    <br />
                    обучения:
                  </p>

                  <p className="mt-[24px] max-w-[560px] text-gray-500 text-[14px] sm:text-[15px] leading-[22px]">
                    цифровая среда, аналитика, учёт и инструменты, которые легко
                    масштабировать на факультеты и другие вузы.
                  </p>

                  <h4 className="mt-[56px] font-semibold text-[20px] sm:text-[22px]">
                    Ключевые возможности:
                  </h4>

                  <ul className="mt-[32px] space-y-[28px] text-gray-500 text-[14px] sm:text-[15px] leading-[1.65] max-w-[600px]">
                    <li className="flex gap-4">
                      <Bullet className="border-[#3B3B3B]/35" />
                      <span>
                        рабочая экосистема для проектной деятельности совместно
                        со студентами;
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
                </div>

                <div className="absolute right-[56px] bottom-[34px]">
                  <ArrowPill text="Запросить демонстрацию платформы" dark />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full pb-20">
          <div className={container}>
            <h2 className="text-center font-extrabold text-[#3B3B3B] mb-10 text-[60px]">
              О платформе
            </h2>
            <div className="relative grid grid-cols-12 mb-24">
              <div className="col-span-5">
                <div className="text-blue-700 font-extrabold leading-none text-[130px]">
                  АИС
                </div>
                <div className="text-[#3B3B3B] font-extrabold mt-4 text-[38px]">
                  «Проекты СурГУ»
                </div>
              </div>

              <div className="col-span-7 relative">
                <div className="absolute top-1/3 -translate-y-1/2">
                  <p className="text-gray-500 text-[22px] leading-[30px] max-w-[620px]">
                    — единое пространство для управления проектами,
                    взаимодействия и развития навыков студентов
                  </p>
                </div>
              </div>
            </div>
            <div className="relative w-full h-[725px] overflow-visible">
              <div className="absolute left-0 top-[24px] w-[590px] h-[200px] rounded-[32px] overflow-hidden z-30">
                <img
                  src="/images/Subtract_2.svg"
                  alt=""
                  draggable={false}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <p className="absolute top-[46px] left-[85px] right-[48px] text-white text-[16px] leading-[26px] font-normal">
                  Платформа&nbsp;собирает проектную работу в&nbsp;единую
                  <br />
                  понятную систему: общий процесс, единая логика
                  <br />
                  и&nbsp;цельная история каждого проекта вместо разрозненных{" "}
                  <br />
                  файлов и&nbsp;бесконечных переписок.
                </p>
              </div>
              <div className="absolute right-[0px] top-[32px] w-[590px] h-[431px] rounded-[32px] overflow-hidden z-20">
                <img
                  src="/images/6.png"
                  alt=""
                  draggable={false}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute left-0 top-[248px] w-full h-[446px] z-10">
                <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                  <img
                    src="/images/surgu_subtract.svg"
                    alt=""
                    draggable={false}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="absolute right-[56px] bottom-[60px] text-white text-[16px] leading-[24px] max-w-[520px] z-30 font-normal">
                  Это основа для современного проектного обучения, которое
                  удобно студентам, понятно наставникам, открыто партнёрам и
                  устойчиво для университетов.
                </p>
              </div>
              <img
                src="/images/woman_3.svg"
                alt=""
                className="
      absolute
      left-[-10px]
      top-[112px]
      w-[1320px]
      h-[620px]
      object-contain
      scale-x-[-1]
      z-[40]
      pointer-events-none
    "
                draggable={false}
              />
            </div>
            <div className="mt-0">
              <button className="w-full h-[80px] rounded-full bg-blue-700 hover:bg-blue-800 text-white font-semibold text-[18px]">
                Предложить сотрудничество
              </button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Home;
