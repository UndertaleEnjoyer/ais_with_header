import { useState } from "react";
import Layout from "@/components/Layout";
import { Plus, Trash2, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface Pool {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  hot?: boolean;
}

const OpdAdmin = () => {
  const navigate = useNavigate();

  const [pools, setPools] = useState<Pool[]>([
    {
      id: 1,
      name: "ОПД весенний семестр 2020/2021",
      startDate: "2021-02-01",
      endDate: "2021-07-03",
    },
    {
      id: 2,
      name: "ОПД осенний семестр 2021/2022",
      startDate: "2021-09-01",
      endDate: "2021-12-31",
    },
    {
      id: 99,
      name: "Предпринимательство осень 2025/2026",
      startDate: "2025-09-01",
      endDate: "2026-01-30",
      hot: true,
    },
  ]);

  const [isAddOpen, setIsAddOpen] = useState(false);
  const [newName, setNewName] = useState("");
  const [newStart, setNewStart] = useState("");
  const [newEnd, setNewEnd] = useState("");

  const [deleteModal, setDeleteModal] = useState<Pool | null>(null);
  const [timer, setTimer] = useState(5);
  const [timerActive, setTimerActive] = useState(false);

  const openDeleteModal = (pool: Pool) => {
    setDeleteModal(pool);
    setTimer(5);
    setTimerActive(true);

    const interval = setInterval(() => {
      setTimer((p) => {
        if (p === 1) {
          clearInterval(interval);
          setTimerActive(false);
        }
        return p - 1;
      });
    }, 1000);
  };

  const createPool = () => {
    if (!newName.trim() || !newStart || !newEnd) return;

    setPools((prev) => [
      ...prev,
      {
        id: Date.now(),
        name: newName,
        startDate: newStart,
        endDate: newEnd,
      },
    ]);

    setNewName("");
    setNewStart("");
    setNewEnd("");
    setIsAddOpen(false);
  };

  const deletePool = () => {
    if (!deleteModal) return;
    setPools((prev) => prev.filter((p) => p.id !== deleteModal.id));
    setDeleteModal(null);
  };

  return (
    <Layout fullWidth>
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-4xl font-bold mb-6">ОПД</h1>

        {/* Add button */}
        <button
          onClick={() => setIsAddOpen(true)}
          className="flex items-center gap-2 bg-green-600 text-white px-5 py-3 rounded-xl mb-8 hover:bg-green-700 transition"
        >
          <Plus className="w-5 h-5" /> Создать пул
        </button>

        {/* Pools list */}
        <div className="space-y-3">
          {pools.map((pool) => (
            <div
              key={pool.id}
              className="flex items-center justify-between bg-white border border-border rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition cursor-pointer"
              onClick={() => navigate(`/admin/opd/${pool.id}`)}
            >
              <div>
                <div className="flex items-center gap-2">
                  {pool.hot && <span className="text-orange-500 text-lg">🔥</span>}
                  <h3 className="text-lg font-semibold">{pool.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {pool.startDate} – {pool.endDate}
                </p>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    openDeleteModal(pool);
                  }}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash2 className="w-5 h-5" />
                </button>

                <ArrowRight className="w-6 h-6 text-primary" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal — Create Pool */}
      {isAddOpen && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full shadow-xl">
            <h2 className="text-xl font-bold mb-4">Создать пул</h2>

            <input
              type="text"
              placeholder="Название пула"
              className="w-full border rounded-lg px-4 py-2 mb-4"
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
            />

            <div className="flex gap-3 mb-6">
              <div className="flex-1">
                <label className="text-sm font-semibold">Дата начала</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                  value={newStart}
                  onChange={(e) => setNewStart(e.target.value)}
                />
              </div>

              <div className="flex-1">
                <label className="text-sm font-semibold">Дата окончания</label>
                <input
                  type="date"
                  className="w-full border rounded-lg px-4 py-2 mt-1"
                  value={newEnd}
                  onChange={(e) => setNewEnd(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsAddOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>
              <button
                onClick={createPool}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:bg-green-700"
              >
                Создать
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal — Delete Pool */}
      {deleteModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-xl max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Удаление</h2>

            <p className="mb-6">
              Вы уверены, что хотите удалить пул{" "}
              <span className="font-semibold">"{deleteModal.name}"</span>?
            </p>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setDeleteModal(null)}
                className="px-4 py-2 rounded-lg border"
              >
                Отмена
              </button>

              <button
                onClick={deletePool}
                disabled={timerActive}
                className={`px-4 py-2 rounded-lg text-white ${
                  timerActive
                    ? "bg-gray-400"
                    : "bg-red-600 hover:bg-red-700"
                }`}
              >
                {timerActive ? `Удалить (${timer})` : "Удалить"}
              </button>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default OpdAdmin;
