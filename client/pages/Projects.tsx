import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { CreateProjectModal } from "@/components/CreateProjectModal";
import { CreateCaseModal } from "@/components/CreateCaseModal";
import { Plus, Search, Heart } from "lucide-react";

const Projects = () => {
  const [isCreateProjectOpen, setIsCreateProjectOpen] = useState(false);
  const [isCreateCaseOpen, setIsCreateCaseOpen] = useState(false);
  const [filters, setFilters] = useState({
    name: "",
    teamSize: "",
    date: "",
    type: "",
  });

  const [likes, setLikes] = useState({});
  const [likeCounts, setLikeCounts] = useState({
    6: 12,
    7: 8,
    8: 5,
  });

  const toggleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }));
    setLikeCounts((prev) => ({
      ...prev,
      [id]: prev[id] + (likes[id] ? -1 : 1),
    }));
  };

  const projects = [
    {
      id: 6,
      name: "Компас профессий",
      category: "Социальный проект",
      description:
        "Проект направлен на помощь студентам в выборе профессионального пути. Решение актуальной проблемы выбора карьеры.",
      photo: "👥",
      creator: "Акимов Вячеслав",
      participants: ["А", "М", "С"],
      color: "from-purple-500 to-indigo-600",
      link: "/projects/6",
    },
    {
      id: 7,
      name: "Цифровые навыки",
      category: "Образовательный проект",
      description:
        "Обучение современным цифровым технологиям и инструментам для работы. Готовим студентов к цифровому будущему.",
      photo: "💻",
      creator: "Петрова Ольга",
      participants: ["П", "О", "К", "Н"],
      color: "from-blue-500 to-cyan-500",
      link: "/projects/7",
    },
    {
      id: 8,
      name: "Инновационный хаб",
      category: "Инновационный центр",
      description:
        "Центр разработки и внедрения инновационных проектов и идей. Место для творчества и реализации.",
      photo: "🚀",
      creator: "Миронов Дмитрий",
      participants: ["М", "Д", "И"],
      color: "from-green-500 to-teal-500",
      link: "/projects/8",
    },
  ];

  return (
    <Layout>
      <div className="mb-10 max-w-7xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground">
          Проекты
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-1">
          <div className="lg:col-span-1">
            <div className="space-y-4 sticky top-24">
              <button
                onClick={() => setIsCreateProjectOpen(true)}
                className="w-full bg-success text-success-foreground py-3 px-4 rounded-xl font-semibold hover:shadow-lg hover:bg-green-600 transition-all flex items-center justify-center gap-1"
              >
                <Plus className="w-5 h-5" />
                СОЗДАТЬ
              </button>

              <button
                onClick={() => setIsCreateCaseOpen(true)}
                className="w-full border-2 border-primary text-primary py-3 px-4 rounded-xl font-semibold hover:bg-primary-50 transition-all"
              >
                ДОБАВИТЬ КЕЙС
              </button>

              <div className="bg-white rounded-xl p-6 border border-border space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Название проекта
                  </label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Поиск..."
                      value={filters.name}
                      onChange={(e) =>
                        setFilters({ ...filters, name: e.target.value })
                      }
                      className="w-full pl-10 pr-3 py-2 border border-input rounded-lg text-sm bg-white"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Кол-во человек
                  </label>
                  <div className="flex gap-1 items-center">
                    <input
                      type="number"
                      value={filters.teamSize}
                      onChange={(e) =>
                        setFilters({ ...filters, teamSize: e.target.value })
                      }
                      className="flex-1 px-3 py-2 border border-input rounded-lg text-sm bg-white"
                      placeholder="0"
                    />
                    <span className="text-sm font-bold text-foreground">
                      10
                    </span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Дата создания
                  </label>
                  <input
                    type="date"
                    value={filters.date}
                    onChange={(e) =>
                      setFilters({ ...filters, date: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-input rounded-lg text-sm bg-white"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Тип проекта
                  </label>
                  <select
                    value={filters.type}
                    onChange={(e) =>
                      setFilters({ ...filters, type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-input rounded-lg text-sm bg-white"
                  >
                    <option value="">Выберите тип</option>
                    <option value="social">Социальный</option>
                    <option value="research">Научный</option>
                    <option value="tech">Технический</option>
                  </select>
                </div>

                <div className="space-y-3 pt-2">
                  {[
                    { label: "Только мои проекты" },
                    { label: "На модерации" },
                    { label: "Только архивные" },
                    { label: "С вакансиями" },
                  ].map((item, idx) => (
                    <label
                      key={idx}
                      className="flex items-center gap-3 cursor-pointer"
                    >
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-input"
                      />
                      <span className="text-sm text-foreground">
                        {item.label}
                      </span>
                    </label>
                  ))}
                </div>

                <button className="w-full bg-primary text-primary-foreground py-3 px-4 rounded-lg font-semibold hover:bg-primary-600 transition-all mt-6">
                  Найти проекты
                </button>
                <p className="text-xs text-muted-foreground text-center font-medium">
                  777 результатов
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="flex flex-col gap-6 max-w-2xl mx-auto w-full">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white rounded-xl shadow-sm border border-border hover:shadow-lg transition-all"
                >
                  <Link to={project.link} className="block p-4">
                    <h3 className="font-bold text-sm mb-2 text-foreground group-hover:text-primary">
                      {project.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-2">
                      {project.participants.map((p, i) => (
                        <div
                          key={i}
                          className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 border-2 border-white"
                        ></div>
                      ))}
                    </div>

                    <p className="text-xs text-muted-foreground mb-2">
                      {project.category}
                    </p>

                    <p className="text-xs text-foreground mb-3 leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="h-px bg-gray-200 my-3"></div>

                    <div className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center text-xs font-bold text-primary">
                        {project.creator.charAt(0)}
                      </div>
                      <p className="text-xs text-foreground">
                        <span className="font-semibold">{project.creator}</span>
                      </p>
                    </div>
                  </Link>

                  <div className="px-4 pb-4 flex items-center gap-3">
                    <button
                      onClick={() => toggleLike(project.id)}
                      className="flex items-center gap-1"
                    >
                      <Heart
                        className={`w-5 h-5 ${
                          likes[project.id]
                            ? "text-blue-600 fill-blue-600"
                            : "text-gray-400"
                        }`}
                      />
                      <span className="text-xs text-gray-600">
                        {likeCounts[project.id]}
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <CreateProjectModal
        isOpen={isCreateProjectOpen}
        onClose={() => setIsCreateProjectOpen(false)}
      />
      <CreateCaseModal
        isOpen={isCreateCaseOpen}
        onClose={() => setIsCreateCaseOpen(false)}
      />
    </Layout>
  );
};

export default Projects;
