import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CreateCaseModal } from "@/components/CreateCaseModal";
import { Plus, MessageCircle } from "lucide-react";

const Cases = () => {
  const [isCreateCaseOpen, setIsCreateCaseOpen] = useState(false);
  const cases = [
    {
      id: 1,
      title: "Безопасность в спортивных залах",
      description:
        "В спортивных залах иногда наблюдается случаи необходимости правил техники безопасности. Студенты не зн...",
      author: "Ломбров Давид",
      role: "0 раз назад",
      replies: 3,
    },
    {
      id: 2,
      title: "Азубка безопасности: что делать при ЧС?",
      description:
        "Даже многие взрослые не знают, как вести себя в чрезвычайных ситуациях, что уже говорить о детях. Мы...",
      author: "Полесяй Валентина",
      role: "1 месяц назад",
      replies: 5,
    },
    {
      id: 3,
      title: "Интерактивный тренажер по действиям при ЧС",
      description: "...",
      author: "Анна Тамиплан",
      role: "Месяц назад",
      replies: 2,
    },
    {
      id: 4,
      title: "Дизайнет",
      description:
        "В выхая старой постройки наблюдается отсутствие пожарных системы оповещения. Регулярно физик...",
      author: "Стафиев Станислав",
      role: "Месяц назад",
      replies: 1,
    },
    {
      id: 5,
      title: "Познавательная книжка-раскраска",
      description:
        "В настоящее время существует острая необходимость в качественных материалах, которые...",
      author: "Саразупцева Екатерина Сергеевна",
      role: "2 месяца назад",
      replies: 4,
    },
    {
      id: 6,
      title: "Жажда перемен",
      description:
        "На данный момент кулеры с питьевой водой установлены только на 1-м этаже. Студенты испытывают трудно...",
      author: "Булгакова Дарья",
      role: "2 месяца назад",
      replies: 2,
    },
  ];

  return (
    <Layout>
      <div className="mb-10">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl md:text-5xl font-bold">Кейсы</h1>
          <button className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2">
            <Plus className="w-5 h-5" />
            ДОБАВИТЬ
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cases.map((caseItem) => (
          <Link
            key={caseItem.id}
            to={`/cases/${caseItem.id}`}
            className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 group flex flex-col"
          >
            <h3 className="font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors text-base">
              {caseItem.title}
            </h3>
            <p className="text-sm text-foreground mb-4 line-clamp-3 flex-1 text-justify">
              {caseItem.description}
            </p>

            <div className="flex items-center gap-3 pt-4 border-t border-border mt-auto">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                {caseItem.author.charAt(0)}
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground">
                  {caseItem.author}
                </p>
                <p className="text-xs text-muted-foreground">{caseItem.role}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
              <MessageCircle className="w-4 h-4" />
              <span className="font-medium">
                {caseItem.replies}{" "}
                {caseItem.replies === 1 ? "ответ" : "ответов"}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Cases;
