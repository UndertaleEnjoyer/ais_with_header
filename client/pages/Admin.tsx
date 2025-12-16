import Layout from "@/components/Layout";
import { Boxes, Users, Brain, FileText, ArrowRight } from "lucide-react";

const Admin = () => {
  const adminSections = [
    {
      id: 1,
      title: "Управление пользователями",
      description: "Просмотр, редактирование и удаление пользователей",
      icon: <Users className="w-8 h-8" />,
      link: "/admin/users",
      color: "from-blue-500 to-blue-600",
    },
    {
      id: 2,
      title: "Управление подразделениями",
      description: "Редактирование, добавление, управление подразделениями",
      icon: <FileText className="w-8 h-8" />,
      link: "/admin/departments",
      color: "from-purple-500 to-purple-600",
    },
    {
      id: 3,
      title: "Студенческие группы",
      description: "Редактирование, добавление, управление студенческими группами",
      icon: <Boxes className="w-8 h-8" />,
      link: "/admin/separation",
      color: "from-green-500 to-green-600",
    },
    {
      id: 4,
      title: "ОПД",
      description: "Мониторинг, настройка, управление ОПД",
      icon: <Brain className="w-8 h-8" />,
      link: "/admin/opd",
      color: "from-orange-500 to-orange-600",
    },
  ];

  const stats = [
    { label: "Всего пользователей", value: "1,234"},
    { label: "Активных проектов", value: "567"},
    { label: "Всего кейсов", value: "89"},
    { label: "На модерации", value: "12"},
  ];

  return (
    <Layout>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">Админ-панель</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {adminSections.map((section) => (
          <a
            key={section.id}
            href={section.link}
            className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 group cursor-pointer"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              {section.icon}
            </div>
            <h3 className="font-bold text-foreground mb-2 text-base group-hover:text-primary transition-colors">
              {section.title}
            </h3>
            <p className="text-sm text-muted-foreground">
              {section.description}
            </p>
          </a>
        ))}
      </div>

      {/* Statistics Grid */}
      <div className="bg-white rounded-2xl p-8 border border-border">
        <h2 className="text-2xl font-bold mb-8">Информация системы</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-muted hover:bg-primary-50 transition-all"
            >
              <div className="text-4xl mb-3"></div>
              <p className="text-sm text-muted-foreground font-medium mb-2">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-primary">{stat.value}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Admin;
