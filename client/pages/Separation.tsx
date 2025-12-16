import { useState } from "react";
import Layout from "@/components/Layout";
import { ChevronDown, ChevronUp, Plus, Trash2, User2, Search } from "lucide-react";

interface Group {
  id: number;
  name: string;
  students: number;
  studentsList?: { id: number; name: string; avatar?: string }[];
}

interface Department {
  id: number;
  name: string;
  groups: Group[];
}

const GroupsAdmin = () => {
  const [departments, setDepartments] = useState<Department[]>([
    {
      id: 1,
      name: "Кафедра философии и права",
      groups: [
        {
          id: 1,
          name: "102-91",
          students: 13,
          studentsList: [
            { id: 1, name: "Сагура Ксения" },
            { id: 2, name: "Новоселов Демид" },
            { id: 3, name: "Упоров Марк" },
            { id: 4, name: "Мельниченко Дмитрий" },
            { id: 5, name: "Рудакова Дарья" },
            { id: 6, name: "Гафарова Камилла" }
          ]
        },
        { id: 2, name: "102-21", students: 0, studentsList: [] }
      ]
    },
    { id: 2, name: "Кафедра уголовного права", groups: [] }
  ]);

  const [openDept, setOpenDept] = useState<number | null>(null);

  const [addGroupDept, setAddGroupDept] = useState<number | null>(null);
  const [newGroupName, setNewGroupName] = useState("");

  const [viewGroup, setViewGroup] = useState<Group | null>(null);
  const [searchStudent, setSearchStudent] = useState("");

  const [deleteModal, setDeleteModal] = useState<{ depId: number; groupId: number } | null>(null);
  const [deleteTimer, setDeleteTimer] = useState(5);
  const [timerActive, setTimerActive] = useState(false);

  const toggleDept = (id: number) => {
    setOpenDept(openDept === id ? null : id);
  };

  const filteredStudents =
    viewGroup?.studentsList?.filter((s) =>
      s.name.toLowerCase().includes(searchStudent.toLowerCase())
    ) || [];

  // ------------------------
  // УДАЛЕНИЕ ГРУППЫ (с таймером)
  // ------------------------

  const startDeleteTimer = () => {
    setDeleteTimer(5);
    setTimerActive(true);

    const interval = setInterval(() => {
      setDeleteTimer((prev) => {
        if (prev === 1) {
          clearInterval(interval);
          setTimerActive(false);
        }
        return prev - 1;
      });
    }, 1000);
  };

  const openDeleteModal = (depId: number, groupId: number) => {
    setDeleteModal({ depId, groupId });
    startDeleteTimer();
  };

  const deleteGroup = () => {
    if (!deleteModal) return;

    setDepartments((prev) =>
      prev.map((d) =>
        d.id === deleteModal.depId
          ? { ...d, groups: d.groups.filter((g) => g.id !== deleteModal.groupId) }
          : d
      )
    );

    setDeleteModal(null);
  };

  return (
    <Layout fullWidth>
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-4xl font-bold mb-6">Студенческие группы</h1>

        <div className="space-y-4">
          {departments.map((dept) => (
            <div
              key={dept.id}
              className="border border-border rounded-xl bg-white shadow-sm"
            >
              {/* Header */}
              <button
                onClick={() => toggleDept(dept.id)}
                className="w-full flex justify-between items-center px-4 py-4 text-left"
              >
                <span className="text-lg font-semibold">{dept.name}</span>
                {openDept === dept.id ? (
                  <ChevronUp className="w-5 h-5" />
                ) : (
                  <ChevronDown className="w-5 h-5" />
                )}
              </button>

              {/* Body */}
              {openDept === dept.id && (
                <div className="px-4 pb-4">
                  {/* Add group button */}
                  <button
                    onClick={() => setAddGroupDept(dept.id)}
                    className="mt-2 mb-4 flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
                  >
                    <Plus className="w-5 h-5" /> Добавить студ. группу
                  </button>

                  {/* Groups list */}
                  {dept.groups.length === 0 && (
                    <p className="text-muted-foreground text-sm pb-3">Нет групп</p>
                  )}

                  <div className="space-y-2">
                    {dept.groups.map((group) => (
                      <div
                        key={group.id}
                        className="flex items-center justify-between border rounded-lg px-4 py-3 bg-muted/30"
                      >
                        <div>
                          <div className="font-semibold">{group.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {group.students} студентов
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => setViewGroup(group)}
                            className="p-2 hover:bg-muted rounded-lg"
                          >
                            <User2 className="w-5 h-5" />
                          </button>

                          <button
                            onClick={() => openDeleteModal(dept.id, group.id)}
                            className="p-2 hover:bg-red-100 rounded-lg text-red-500"
                          >
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* MODAL — Add Group */}
      {addGroupDept && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Добавить группу</h2>

            <input
              type="text"
              placeholder="Название группы…"
              value={newGroupName}
              onChange={(e) => setNewGroupName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-6"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => {
                  setAddGroupDept(null);
                  setNewGroupName("");
                }}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={() => {
                  if (!newGroupName.trim()) return;

                  setDepartments((prev) =>
                    prev.map((d) =>
                      d.id === addGroupDept
                        ? {
                            ...d,
                            groups: [
                              ...d.groups,
                              {
                                id: Date.now(),
                                name: newGroupName,
                                students: 0,
                                studentsList: []
                              }
                            ]
                          }
                        : d
                    )
                  );

                  setAddGroupDept(null);
                  setNewGroupName("");
                }}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL — View Group */}
      {viewGroup && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-2xl rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">{viewGroup.name}</h2>

            <div className="flex items-center gap-2 mb-4 border-b pb-2">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                value={searchStudent}
                onChange={(e) => setSearchStudent(e.target.value)}
                placeholder="Поиск по студентам..."
                className="flex-1 outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-3 max-h-64 overflow-y-auto">
              {filteredStudents.map((s) => (
                <div key={s.id} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-sm font-bold">
                    {s.name.slice(0, 2)}
                  </div>
                  <span>{s.name}</span>
                </div>
              ))}

              {filteredStudents.length === 0 && (
                <p className="text-muted-foreground text-sm">Никого не найдено</p>
              )}
            </div>

            <div className="flex justify-end mt-6">
              <button
                onClick={() => {
                  setViewGroup(null);
                  setSearchStudent("");
                }}
                className="px-4 py-2 rounded-lg bg-primary text-white hover:bg-primary/90"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MODAL — Delete Group */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">
          <div className="bg-white w-full max-w-md rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-4">Удалить группу?</h2>

            <p className="mb-6">Это действие невозможно отменить.</p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteModal(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                disabled={timerActive}
                onClick={deleteGroup}
                className={`px-4 py-2 rounded-lg text-white ${
                  timerActive
                    ? "bg-gray-400"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {timerActive ? `Удалить (${deleteTimer})` : "Удалить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default GroupsAdmin;
