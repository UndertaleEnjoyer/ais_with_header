import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "@/components/Layout";
import { Calendar, Users, Plus, ChevronDown, ChevronUp, Send, X } from "lucide-react";

const allGroups = [
  "608-32",
  "608-31",
  "606-31",
  "606-32",
  "603-21",
  "604-21",
  "601-11",
  "602-22",
  "702-41",
  "133-71",
  "222-12",
  "134-13",
];

const OpdPoolPage = () => {
  const { id } = useParams();

  const [activeTab, setActiveTab] = useState<"proj" | "noproject">("proj");

  const [poolData, setPoolData] = useState({
    name: "Предпринимательство осень 2025/2026",
    start: "2025-09-01",
    end: "2026-01-30",
    limit: 2,
    canCreateProjects: false,
    joinUntil: "2025-12-11",
    leaveUntil: "2026-02-11",
    groups: ["608-32", "608-31", "606-31", "606-32", "603-21", "604-21"],
  });

  const [chatMessages, setChatMessages] = useState([
    { id: 1, text: "Добро пожаловать в пул!", from: "system" },
  ]);

  const [newMessage, setNewMessage] = useState("");

  const sendMessage = () => {
    if (!newMessage.trim()) return;
    setChatMessages((prev) => [...prev, { id: Date.now(), text: newMessage, from: "me" }]);
    setNewMessage("");
  };

  // -----------------------------
  // GROUP SELECT DROPDOWN
  // -----------------------------
  const [isGroupSelectOpen, setGroupSelectOpen] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState("");

  const availableGroups = allGroups.filter((g) => !poolData.groups.includes(g));

  const addSelectedGroup = () => {
    if (!selectedGroup) return;

    setPoolData((p) => ({
      ...p,
      groups: [...p.groups, selectedGroup],
    }));

    setSelectedGroup("");
    setGroupSelectOpen(false);
  };

  const deleteGroup = (name: string) => {
    setPoolData((p) => ({
      ...p,
      groups: p.groups.filter((g) => g !== name),
    }));
  };

  // -----------------------------
  // TASK MODAL & LOGIC
  // -----------------------------
  const [taskModalOpen, setTaskModalOpen] = useState(false);

  const [tasks, setTasks] = useState<any[]>([]);

  const [taskData, setTaskData] = useState({
    title: "",
    description: "",
    start: "",
    deadline: "",
  });

  const saveTask = () => {
    if (!taskData.title.trim()) return;

    setTasks((prev) => [...prev, { ...taskData, id: Date.now() }]);

    setTaskData({
      title: "",
      description: "",
      start: "",
      deadline: "",
    });

    setTaskModalOpen(false);
  };

  return (
    <Layout fullWidth>
      <div className="flex gap-6 p-4">
        {/* LEFT SIDE */}
        <div className="w-[45%] bg-white rounded-xl border border-border p-6 shadow-sm">
          <h2 className="text-xl font-bold mb-4">#{id} {poolData.name}</h2>

          <label className="text-sm font-semibold">Название пула</label>
          <input
            className="w-full border rounded-lg px-4 py-2 mt-1 mb-4"
            value={poolData.name}
            onChange={(e) => setPoolData((p) => ({ ...p, name: e.target.value }))}
          />

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="text-sm font-semibold">Период пула</label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                value={poolData.start}
                onChange={(e) => setPoolData((p) => ({ ...p, start: e.target.value }))}
              />
            </div>
            <div>
              <label className="text-sm font-semibold invisible">.</label>
              <input
                type="date"
                className="w-full border rounded-lg px-4 py-2 mt-1"
                value={poolData.end}
                onChange={(e) => setPoolData((p) => ({ ...p, end: e.target.value }))}
              />
            </div>
          </div>

          <label className="text-sm font-semibold">Макс. проектов у студента</label>
          <input
            className="w-full border rounded-lg px-4 py-2 mt-1 mb-4"
            type="number"
            value={poolData.limit}
            onChange={(e) => setPoolData((p) => ({ ...p, limit: Number(e.target.value) }))}
          />

          <label className="flex items-center gap-2 mb-4">
            <input
              type="checkbox"
              checked={poolData.canCreateProjects}
              onChange={(e) =>
                setPoolData((p) => ({ ...p, canCreateProjects: e.target.checked }))
              }
            />
            Студент может создавать проекты
          </label>

          <label className="text-sm font-semibold">Дата вступления</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 mt-1 mb-4"
            value={poolData.joinUntil}
            onChange={(e) => setPoolData((p) => ({ ...p, joinUntil: e.target.value }))}
          />

          <label className="text-sm font-semibold">Дата выхода</label>
          <input
            type="date"
            className="w-full border rounded-lg px-4 py-2 mt-1 mb-4"
            value={poolData.leaveUntil}
            onChange={(e) => setPoolData((p) => ({ ...p, leaveUntil: e.target.value }))}
          />

          <label className="text-sm font-semibold">Группы в пуле</label>
          <div className="flex flex-wrap gap-2 mt-2 mb-4">
            {poolData.groups.map((g) => (
              <span
                key={g}
                className="px-3 py-1 bg-gray-100 rounded-full text-sm border flex items-center gap-2"
              >
                {g}
                <button onClick={() => deleteGroup(g)}>
                  <X className="w-3 h-3 text-red-500 hover:text-red-700" />
                </button>
              </span>
            ))}
          </div>

          {/* GROUP DROPDOWN */}
          <div className="relative mb-4">
            <button
              onClick={() => setGroupSelectOpen((prev) => !prev)}
              className="w-full border rounded-lg px-4 py-2 flex justify-between items-center"
            >
              {selectedGroup || "Выберите группу"}
              {isGroupSelectOpen ? (
                <ChevronUp className="w-4 h-4" />
              ) : (
                <ChevronDown className="w-4 h-4" />
              )}
            </button>

            {isGroupSelectOpen && (
              <div className="absolute left-0 right-0 bg-white border rounded-lg shadow-lg max-h-48 overflow-y-auto z-20">
                {availableGroups.length > 0 ? (
                  availableGroups.map((g) => (
                    <button
                      key={g}
                      onClick={() => {
                        setSelectedGroup(g);
                        setGroupSelectOpen(false);
                      }}
                      className="w-full text-left px-4 py-2 hover:bg-gray-100"
                    >
                      {g}
                    </button>
                  ))
                ) : (
                  <div className="px-4 py-2 text-sm text-gray-400">
                    Все группы уже добавлены
                  </div>
                )}
              </div>
            )}
          </div>

          <button
            onClick={addSelectedGroup}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 mb-6"
          >
            <Plus className="w-4 h-4 inline-block mr-1" />
            Добавить группу
          </button>

          <div className="flex justify-start">
            <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
              Сохранить
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-[55%] flex flex-col gap-4">
          {/* CHAT */}
          <div className="bg-white rounded-xl border border-border shadow-sm">
            <div className="border-b flex">
              <button
                className={`flex-1 py-3 font-semibold ${
                  activeTab === "proj" ? "text-primary border-b-2 border-primary" : ""
                }`}
                onClick={() => setActiveTab("proj")}
              >
                Чат с проектами
              </button>
              <button
                className={`flex-1 py-3 font-semibold ${
                  activeTab === "noproject" ? "text-primary border-b-2 border-primary" : ""
                }`}
                onClick={() => setActiveTab("noproject")}
              >
                Чат без проектов
              </button>
            </div>

            <div className="h-64 p-4 overflow-y-auto text-sm">
              {activeTab === "proj" ? (
                chatMessages.map((m) => (
                  <div key={m.id} className="mb-2">
                    <div
                      className={`inline-block px-3 py-2 rounded-lg ${
                        m.from === "me"
                          ? "bg-primary text-white ml-auto"
                          : "bg-gray-100"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-muted-foreground">Сообщений пока нет</p>
              )}
            </div>

            <div className="border-t p-4 flex items-center gap-3">
              <input
                className="flex-1 px-3 py-2 border rounded-lg"
                placeholder="Ваше сообщение..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <button
                onClick={sendMessage}
                className="p-2 bg-primary text-white rounded-lg hover:bg-primary/90"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* PROBLEMS */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold mb-2">На модерации</h3>
              <div className="text-sm">12 / 0</div>
            </div>

            <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
              <h3 className="font-semibold mb-2">Студенты с проектом</h3>
              <div className="text-sm">0 / 91</div>
            </div>
          </div>

          {/* TASKS */}
          <div className="bg-white p-4 rounded-xl border border-border shadow-sm">
            <h3 className="font-semibold mb-3">Задачи</h3>

            {tasks.map((task) => (
              <div key={task.id} className="border rounded-lg p-4 bg-gray-50 mb-3">
                <h4 className="font-bold mb-1">{task.title}</h4>
                <p className="text-sm text-muted-foreground mb-2">
                  {task.description}
                </p>
                <p className="text-xs text-muted-foreground">
                  Дедлайн: {task.deadline || "—"}
                </p>
              </div>
            ))}

            <div className="flex justify-start mt-4">
              <button
                onClick={() => setTaskModalOpen(true)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Добавить задачу
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* TASK MODAL */}
      {taskModalOpen && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-lg rounded-xl p-6 shadow-xl">
            <h3 className="text-lg font-semibold mb-4">Создать задачу</h3>

            <input
              className="w-full border rounded-lg px-4 py-2 mb-4"
              placeholder="Название задачи"
              value={taskData.title}
              onChange={(e) =>
                setTaskData((p) => ({ ...p, title: e.target.value }))
              }
            />

            <textarea
              className="w-full border rounded-lg px-4 py-2 mb-4 min-h-[100px]"
              placeholder="Описание задачи"
              value={taskData.description}
              onChange={(e) =>
                setTaskData((p) => ({ ...p, description: e.target.value }))
              }
            />

            <label className="text-sm font-semibold">Начало выполнения</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 mb-4"
              value={taskData.start}
              onChange={(e) =>
                setTaskData((p) => ({ ...p, start: e.target.value }))
              }
            />

            <label className="text-sm font-semibold">Дедлайн</label>
            <input
              type="date"
              className="w-full border rounded-lg px-4 py-2 mb-4"
              value={taskData.deadline}
              onChange={(e) =>
                setTaskData((p) => ({ ...p, deadline: e.target.value }))
              }
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setTaskModalOpen(false)}
                className="px-4 py-2 border rounded-lg"
              >
                Отмена
              </button>

              <button
                onClick={saveTask}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OpdPoolPage;
