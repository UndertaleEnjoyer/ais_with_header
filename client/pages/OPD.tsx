import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown } from "lucide-react";

const OPD = () => {
  const [expandedGroup, setExpandedGroup] = useState<string | null>(null);

  const groups = [
    {
      id: "601-41",
      code: "601-41",
      name: "Политехнический институт",
      subtitle: "Кафедра прикладной математики",
      courses: [
        { name: "Студенты в АИС", count: 0 },
        { name: "Студенты в АИС", count: 0 },
        { name: "Студенты в АИС", count: 0 },
      ],
    },
    {
      id: "601-31",
      code: "601-31",
      name: "Политехнический институт",
      subtitle: "Кафедра прикладной математики",
      courses: [
        { name: "Студенты в АИС", count: 0 },
        { name: "Студенты в АИС", count: 0 },
        { name: "Студенты в АИС", count: 0 },
      ],
    },
    {
      id: "303-41",
      code: "303-41",
      name: "Институт естественных и технических наук",
      subtitle: "Кафедра биологии и биотехнологии",
      courses: [
        { name: "Студенты в АИС", count: 0 },
        { name: "Студенты в АИС", count: 0 },
      ],
    },
  ];

  const toggleGroup = (id: string) => {
    setExpandedGroup(expandedGroup === id ? null : id);
  };

  return (
    <Layout>
      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">ОПД</h1>
      </div>

      <div className="max-w-5xl">
        {/* Tabs selector */}
        <div className="flex gap-6 border-b border-border mb-8">
          {[
            { label: "ПРЕПОДАВАТЕЛИ", active: true },
            { label: "СТУД. ГРУППЫ" },
            { label: "ПОЛЬЗОВАТЕЛИ" },
            { label: "ОПД" },
          ].map((tab, idx) => (
            <button
              key={idx}
              className={`px-4 py-3 font-semibold text-base border-b-2 transition-all ${
                tab.active
                  ? "border-primary text-primary"
                  : "border-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {groups.map((group) => (
            <div
              key={group.id}
              className="bg-white border border-border rounded-xl overflow-hidden hover:shadow-lg transition-all"
            >
              <button
                onClick={() => toggleGroup(group.id)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted transition-colors"
              >
                <div className="flex-1 text-left">
                  <div className="flex items-center gap-4">
                    <div className="flex-1">
                      <p className="font-bold text-foreground text-base">
                        {group.code}
                      </p>
                      <p className="text-sm text-foreground mt-1">
                        {group.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {group.subtitle}
                      </p>
                    </div>
                    <select
                      onClick={(e) => e.stopPropagation()}
                      className="px-4 py-2 border border-input rounded-lg text-sm bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-primary font-medium hover:border-primary transition-all"
                    >
                      <option>Ответственный</option>
                    </select>
                  </div>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ${
                    expandedGroup === group.id ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedGroup === group.id && (
                <div className="border-t border-border px-6 py-4 bg-muted">
                  <div className="space-y-3">
                    {group.courses.map((course, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between p-4 bg-white rounded-lg border border-border hover:shadow-md transition-all"
                      >
                        <div className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="w-4 h-4 rounded border-input text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                          />
                          <span className="text-sm text-foreground font-medium">
                            {course.name}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-medium">
                          {course.count}{" "}
                          {course.count === 1 ? "студент" : "студентов"}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default OPD;
