import { useState } from "react";
import Layout from "@/components/Layout";
import { Pencil, Trash2, ChevronDown, ChevronUp, Plus } from "lucide-react";

interface Department {
  id: number;
  name: string;
}

interface Institute {
  id: number;
  name: string;
  departments: Department[];
}

const DepartmentsAdmin = () => {
  const [institutes, setInstitutes] = useState<Institute[]>([
    {
      id: 1,
      name: "Институт государства и права",
      departments: [
        { id: 1, name: "Кафедра философии и права" },
        { id: 2, name: "Кафедра теории и истории государства и права" },
        { id: 3, name: "Кафедра государственного и муниципального права" },
        { id: 4, name: "Кафедра уголовного права и процесса" },
        { id: 5, name: "Кафедра гражданско-правовых дисциплин" },
        { id: 6, name: "Кафедра политико-правовых дисциплин" },
      ],
    },
    { id: 2, name: "Институт гуманитарного образования и спорта", departments: [] },
    { id: 3, name: "Институт естественных и технических наук", departments: [] },
    { id: 4, name: "Институт экономики и управления", departments: [] },
    { id: 5, name: "Медицинский институт", departments: [] },
    { id: 6, name: "Политехнический институт", departments: [] },
    { id: 7, name: "Медицинский колледж", departments: [] },
  ]);

  const [openInstitute, setOpenInstitute] = useState<number | null>(null);

  const [isAddInstituteOpen, setAddInstituteOpen] = useState(false);
  const [newInstituteName, setNewInstituteName] = useState("");

  const [isAddDepartmentOpen, setAddDepartmentOpen] = useState<null | number>(null);
  const [newDepartmentName, setNewDepartmentName] = useState("");

  const [editInstituteId, setEditInstituteId] = useState<number | null>(null);
  const [editInstituteName, setEditInstituteName] = useState("");

  const [editDepartment, setEditDepartment] = useState<{ instId: number; depId: number } | null>(null);
  const [editDepartmentName, setEditDepartmentName] = useState("");

  const [deleteModal, setDeleteModal] = useState<{
    type: "institute" | "department";
    instId: number;
    depId?: number;
  } | null>(null);

  const [deleteTimer, setDeleteTimer] = useState(5);
  const [timerActive, setTimerActive] = useState(false);

  const openModalDelete = (payload: { type: "institute" | "department"; instId: number; depId?: number }) => {
    setDeleteModal(payload);
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

  const deleteItem = () => {
    if (!deleteModal) return;

    if (deleteModal.type === "institute") {
      setInstitutes((prev) => prev.filter((i) => i.id !== deleteModal.instId));
    } else {
      setInstitutes((prev) =>
        prev.map((i) =>
          i.id === deleteModal.instId
            ? { ...i, departments: i.departments.filter((d) => d.id !== deleteModal.depId) }
            : i
        )
      );
    }

    setDeleteModal(null);
  };

  return (
    <Layout fullWidth>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Институты</h1>

        <button
          onClick={() => setAddInstituteOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl mb-8 hover:bg-green-700 transition"
        >
          <Plus className="w-5 h-5" /> Добавить институт
        </button>

        <div className="space-y-6">
          {institutes.map((inst) => (
            <div key={inst.id} className="bg-white border rounded-xl shadow-sm">
              <div
                className="flex justify-between items-center px-5 py-4 border-b cursor-pointer select-none"
                    onClick={(e) => {
                const target = e.target as HTMLElement;
                    if (
                        target.closest("button") // исключаем кнопки редактирования/удаления
                       )
                    return;

                    setOpenInstitute(openInstitute === inst.id ? null : inst.id);
                    }}
                >
                <h2 className="text-xl font-semibold">{inst.name}</h2>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => {
                      setEditInstituteId(inst.id);
                      setEditInstituteName(inst.name);
                    }}
                  >
                    <Pencil className="w-5 h-5 text-gray-600 hover:text-black" />
                  </button>

                  <button
                    onClick={() => openModalDelete({ type: "institute", instId: inst.id })}
                  >
                    <Trash2 className="w-5 h-5 text-red-500 hover:text-red-700" />
                  </button>

                  <button
                    onClick={() => setOpenInstitute(openInstitute === inst.id ? null : inst.id)}
                  >
                    {openInstitute === inst.id ? (
                      <ChevronUp className="w-6 h-6" />
                    ) : (
                      <ChevronDown className="w-6 h-6" />
                    )}
                  </button>
                </div>
              </div>

              {openInstitute === inst.id && (
                <div className="p-5">
                  <h3 className="font-semibold mb-3">Подразделения:</h3>

                  {inst.departments.length === 0 && (
                    <p className="text-gray-400 mb-4">Нет подразделений</p>
                  )}

                  <div className="space-y-2 mb-4">
                    {inst.departments.map((dep) => (
                      <div
                        key={dep.id}
                        className="flex justify-between items-center bg-gray-50 px-4 py-2 rounded-lg border"
                      >
                        <span>{dep.name}</span>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => {
                              setEditDepartment({ instId: inst.id, depId: dep.id });
                              setEditDepartmentName(dep.name);
                            }}
                          >
                            <Pencil className="w-4 h-4 text-gray-600 hover:text-black" />
                          </button>

                          <button
                            onClick={() =>
                              openModalDelete({
                                type: "department",
                                instId: inst.id,
                                depId: dep.id,
                              })
                            }
                          >
                            <Trash2 className="w-4 h-4 text-red-500 hover:text-red-700" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => setAddDepartmentOpen(inst.id)}
                    className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    <Plus className="w-4 h-4" /> Добавить подразделение / кафедру
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {isAddInstituteOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Добавить институт</h2>

            <input
              type="text"
              placeholder="Название института"
              value={newInstituteName}
              onChange={(e) => setNewInstituteName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setAddInstituteOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={() => {
                  if (newInstituteName.trim()) {
                    setInstitutes((prev) => [
                      ...prev,
                      {
                        id: Date.now(),
                        name: newInstituteName,
                        departments: [],
                      },
                    ]);
                  }
                  setAddInstituteOpen(false);
                  setNewInstituteName("");
                }}
                className="px-4 py-2 bg-green-600 text-white rounded-lg"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}

      {isAddDepartmentOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Добавить подразделение</h2>

            <input
              type="text"
              placeholder="Название"
              value={newDepartmentName}
              onChange={(e) => setNewDepartmentName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setAddDepartmentOpen(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={() => {
                  setInstitutes((prev) =>
                    prev.map((i) =>
                      i.id === isAddDepartmentOpen
                        ? {
                            ...i,
                            departments: [
                              ...i.departments,
                              { id: Date.now(), name: newDepartmentName },
                            ],
                          }
                        : i
                    )
                  );
                  setNewDepartmentName("");
                  setAddDepartmentOpen(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Добавить
              </button>
            </div>
          </div>
        </div>
      )}

      {editInstituteId && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Редактировать институт</h2>

            <input
              type="text"
              value={editInstituteName}
              onChange={(e) => setEditInstituteName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditInstituteId(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={() => {
                  setInstitutes((prev) =>
                    prev.map((i) =>
                      i.id === editInstituteId ? { ...i, name: editInstituteName } : i
                    )
                  );
                  setEditInstituteId(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {editDepartment && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Редактировать подразделение</h2>

            <input
              type="text"
              value={editDepartmentName}
              onChange={(e) => setEditDepartmentName(e.target.value)}
              className="w-full border rounded-lg px-4 py-2 mb-4"
            />

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditDepartment(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={() => {
                  setInstitutes((prev) =>
                    prev.map((i) =>
                      i.id === editDepartment.instId
                        ? {
                            ...i,
                            departments: i.departments.map((d) =>
                              d.id === editDepartment.depId
                                ? { ...d, name: editDepartmentName }
                                : d
                            ),
                          }
                        : i
                    )
                  );
                  setEditDepartment(null);
                }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg"
              >
                Сохранить
              </button>
            </div>
          </div>
        </div>
      )}

      {deleteModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-xl">
            <h2 className="text-xl font-bold mb-3">Удаление</h2>

            <p className="mb-6">
              Вы уверены, что хотите удалить{" "}
              <span className="font-semibold">
                {deleteModal.type === "institute" ? "институт" : "подразделение"}
              </span>
              ?
            </p>

            <div className="flex justify-end gap-4">
              <button
                className="px-4 py-2 rounded-lg border"
                onClick={() => setDeleteModal(null)}
              >
                Отмена
              </button>

              <button
                disabled={timerActive}
                className={`px-4 py-2 rounded-lg text-white ${
                  timerActive ? "bg-gray-400" : "bg-red-600 hover:bg-red-700"
                }`}
                onClick={deleteItem}
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

export default DepartmentsAdmin;
