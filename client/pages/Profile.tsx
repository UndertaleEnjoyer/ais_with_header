import { useState } from "react";
import Layout from "@/components/Layout";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  BookOpen,
  Settings,
  Sun,
  Moon,
  X,
} from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

const Profile = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState("projects");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const [avatar, setAvatar] = useState<string | null>(null);
  const handleAvatarChange = (e: any) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setAvatar(reader.result as string);
    reader.readAsDataURL(file);
  };

  const userProfile = {
    name: "Кирьянов Данила",
    role: "Студент",
    avatar: "КД",
    email: "akimov@surgu.edu",
    phone: "+7 (495) 123-45-67",
    location: "Сургут, Россия",
    joinDate: "Сентябрь 2023",
    stats: { projects: 5, casesSolved: 12, groupsJoined: 3, mentors: 2 },
  };

  const activeProjects = [
    { id: 1, name: "Компас профессий", category: "Социальный проект", participants: 4, dueDate: "15 декабря", status: "В процессе" },
    { id: 2, name: "Цифровые навыки", category: "Образовательный проект", participants: 3, dueDate: "20 декабря", status: "На модерации" },
  ];

  const participants = [
    { id: 1, name: "Петрова Ольга", role: "Дизайнер", avatar: "ПО", status: "online" },
    { id: 2, name: "Миронов Дмитрий", role: "Разработчик", avatar: "МД", status: "online" },
    { id: 3, name: "Сазанцева Екатерина", role: "Project Manager", avatar: "СЕ", status: "offline" },
    { id: 4, name: "Булгакова Дарья", role: "Тестер", avatar: "БД", status: "online" },
  ];

  const groups = [
    { id: 1, name: "Политехнический институт", members: 124, description: "Кафедра прикладной математики" },
    { id: 2, name: "Школа инноваций", members: 56, description: "Инновационные проекты и стартапы" },
    { id: 3, name: "Цифровой клуб", members: 89, description: "Цифровые технологии и навыки" },
  ];

  const pools = [
    {
      semester: "1 семестр 2023-2024",
      pools: [
        { id: 1, name: "Программирование", discipline: "Информатика", students: 32, status: "active" },
        { id: 2, name: "Введение в АИС", discipline: "Управление проектами", students: 28, status: "active" },
        { id: 3, name: "Базы данных", discipline: "Информатика", students: 25, status: "completed" },
      ],
    },
    {
      semester: "2 семестр 2023-2024",
      pools: [
        { id: 4, name: "Веб-разработка", discipline: "Информатика", students: 35, status: "active" },
        { id: 5, name: "UI/UX дизайн", discipline: "Дизайн", students: 22, status: "active" },
      ],
    },
  ];

  const mentors = [
    { id: 1, name: "Иванов Петр Сергеевич", title: "Профессор", department: "Кафедра прикладной математики", email: "ivanов@surgu.edu", avatar: "ИП" },
    { id: 2, name: "Смирнова Виктория Аркадьевна", title: "Доцент", department: "Кафедра информатики", email: "smirnova@surgu.edu", avatar: "СВ" },
  ];

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl border border-border p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-6">

              <div className="relative group w-24 h-24">
                <div className="w-24 h-24 rounded-full overflow-hidden shadow-lg border border-border">
                  {avatar ? (
                    <img src={avatar} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary to-primary-600 text-primary-foreground flex items-center justify-center text-3xl font-bold">
                      {userProfile.avatar}
                    </div>
                  )}
                </div>

                <label className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 rounded-full flex items-center justify-center cursor-pointer transition">
                  <input type="file" accept="images/*" className="hidden" onChange={handleAvatarChange} />
                  <img src="/images/photo_ico.svg" alt="upload" className="h-7 w-7 object-contain invert" />
                </label>
              </div>

              <div>
                <h1 className="text-4xl font-bold">{userProfile.name}</h1>
                <p className="text-lg text-primary font-semibold mb-4">{userProfile.role}</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="flex items-center gap-2"><Mail className="w-4 h-4" />{userProfile.email}</div>
                  <div className="flex items-center gap-2"><Phone className="w-4 h-4" />{userProfile.phone}</div>
                  <div className="flex items-center gap-2"><MapPin className="w-4 h-4" />{userProfile.location}</div>
                  <div className="flex items-center gap-2"><Calendar className="w-4 h-4" />{userProfile.joinDate}</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10">
                {theme === "light" ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </button>
              <button onClick={() => setIsSettingsOpen(true)} className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/10">
                <Settings className="w-6 h-6" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-6 mt-8 pt-8 border-t">
            <div className="text-center"><p className="text-3xl font-bold text-primary">{userProfile.stats.projects}</p><p className="text-sm text-muted-foreground">Проектов</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary">{userProfile.stats.casesSolved}</p><p className="text-sm text-muted-foreground">Решено кейсов</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary">{userProfile.stats.groupsJoined}</p><p className="text-sm text-muted-foreground">Групп</p></div>
            <div className="text-center"><p className="text-3xl font-bold text-primary">{userProfile.stats.mentors}</p><p className="text-sm text-muted-foreground">Наставников</p></div>
          </div>
        </div>

        <div className="flex gap-6 border-b mb-8 overflow-x-auto">
          {[
            { id: "projects", label: "Мои проекты" },
            { id: "participants", label: "Участники" },
            { id: "groups", label: "Группы" },
            { id: "pools", label: "Пулы" },
            { id: "mentors", label: "Наставники" },
          ].map((t: any) => (
            <button
              key={t.id}
              onClick={() => setActiveTab(t.id)}
              className={`px-4 py-3 font-semibold border-b-2 whitespace-nowrap ${
                activeTab === t.id ? "border-primary text-primary" : "border-transparent text-muted-foreground"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {activeTab === "projects" && (
          <div className="space-y-4 mb-16">
            {activeProjects.map((p) => (
              <div key={p.id} className="bg-white rounded-xl border p-6 hover:shadow-lg">
                <div className="flex items-start justify-between mb-4">
                  <div><h3 className="text-xl font-bold">{p.name}</h3><p className="text-sm text-muted-foreground">{p.category}</p></div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    p.status === "В процессе" ? "bg-blue-100 text-blue-700" : "bg-yellow-100 text-yellow-700"
                  }`}>{p.status}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="w-4 h-4" />{p.participants} участников</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Calendar className="w-4 h-4" />{p.dueDate}</div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">Открыть</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "participants" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {participants.map((u) => (
              <div key={u.id} className="bg-white rounded-xl border p-6 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-100 to-primary-200 text-primary flex items-center justify-center text-lg font-bold">{u.avatar}</div>
                  <div>
                    <h3 className="text-lg font-bold">{u.name}</h3>
                    <p className="text-sm text-muted-foreground mb-1">{u.role}</p>
                    <div className="flex items-center gap-2">
                      <div className={`w-2 h-2 rounded-full ${u.status === "online" ? "bg-green-500" : "bg-gray-400"}`} />
                      <span className="text-xs text-muted-foreground">{u.status === "online" ? "Online" : "Offline"}</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-primary-50 text-primary px-4 py-2 rounded-lg font-semibold">Написать</button>
              </div>
            ))}
          </div>
        )}

        {activeTab === "groups" && (
          <div className="space-y-4 mb-16">
            {groups.map((g) => (
              <div key={g.id} className="bg-white rounded-xl border p-6 hover:shadow-lg">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2"><BookOpen className="w-5 h-5 text-primary" /><h3 className="text-lg font-bold">{g.name}</h3></div>
                    <p className="text-sm text-muted-foreground mb-3">{g.description}</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="w-4 h-4" />{g.members} участников</div>
                  </div>
                  <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-semibold">Открыть</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "pools" && (
          <div className="space-y-8 mb-16">
            {pools.map((s, i) => (
              <div key={i}>
                <h3 className="text-xl font-bold mb-4 pb-3 border-b">{s.semester}</h3>
                <div className="grid grid-cols-1 gap-4">
                  {s.pools.map((p) => (
                    <div key={p.id} className="bg-white rounded-xl border p-6 hover:shadow-lg">
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h4 className="text-lg font-bold">{p.name}</h4>
                          <p className="text-sm text-primary font-semibold mb-2">{p.discipline}</p>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 text-sm text-muted-foreground"><Users className="w-4 h-4" />{p.students} студентов</div>
                            <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-700"}`}>
                              {p.status === "active" ? "Активен" : "Завершен"}
                            </span>
                          </div>
                        </div>
                        <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">Перейти</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === "mentors" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {mentors.map((m) => (
              <div key={m.id} className="bg-white rounded-xl border p-6 hover:shadow-lg">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-600 to-primary-700 text-primary-foreground flex items-center justify-center text-lg font-bold">{m.avatar}</div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold">{m.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-1">{m.title}</p>
                    <p className="text-xs text-muted-foreground">{m.department}</p>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <p className="text-sm text-muted-foreground mb-4">{m.email}</p>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-semibold">Написать</button>
                    <button className="flex-1 border border-primary text-primary px-4 py-2 rounded-lg font-semibold">Профиль</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {isSettingsOpen && (
          <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl border shadow-2xl p-8 max-w-md w-full">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">Настройки</h2>
                <button onClick={() => setIsSettingsOpen(false)} className="p-1 rounded-lg">
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <button
                      onClick={() => setTheme("light")}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 ${
                        theme === "light" ? "border-primary bg-primary-50" : "border-border"
                      }`}
                    >
                      <Sun className="w-8 h-8" />
                      <span className="text-sm font-semibold">Светлая</span>
                    </button>
                    <button
                      onClick={() => setTheme("dark")}
                      className={`p-4 rounded-xl border-2 flex flex-col items-center gap-3 ${
                        theme === "dark" ? "border-primary bg-primary-50" : "border-border"
                      }`}
                    >
                      <Moon className="w-8 h-8" />
                      <span className="text-sm font-semibold">Тёмная</span>
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setIsSettingsOpen(false)}
                  className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold mt-8"
                >
                  Закрыть
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="fixed bottom-8 right-8">
          <button className="w-16 h-16 rounded-full bg-blue-500 text-white flex items-center justify-center text-2xl">💬</button>
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
