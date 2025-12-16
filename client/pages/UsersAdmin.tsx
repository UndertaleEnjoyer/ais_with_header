import { useState, useMemo, useEffect } from "react";
import Layout from "@/components/Layout";
import { CheckCircle, XCircle, MoreVertical } from "lucide-react";

const UsersAdmin = () => {
  const USERS_PER_PAGE = 30;

  const [currentPage, setCurrentPage] = useState(1);
  const [openMenu, setOpenMenu] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [menuCoords, setMenuCoords] = useState<{ x: number; y: number } | null>(null);

  const users = Array.from({ length: 293 }, (_, i) => ({
    id: i + 1,
    isActive: i % 2 === 0,
    lastname: "Иванов" + (i + 1),
    firstname: "Алексей",
    middlename: "Петрович",
    role: i % 3 === 0 ? "employee" : i % 3 === 1 ? "visitor" : "student",
    email: `super.long.email.address.user.number.${i + 1}@example-long-domain-university-surgut.ru`,
    phone: i % 5 === 0 ? "+79995553311" : "-",
    birthday: i % 7 === 0 ? "2000-01-01" : "-",
    department: i % 4 === 0 ? "IT" : "-",
    position: i % 6 === 0 ? "Преподаватель" : "-",
  }));

  const filteredUsers = useMemo(() => {
    if (!search.trim()) return users;

    const s = search.toLowerCase();

    return users.filter((u) =>
      [
        u.id.toString(),
        u.lastname,
        u.firstname,
        u.middlename,
        u.role,
        u.email,
        u.phone,
        u.birthday,
        u.department,
        u.position,
        u.isActive ? "активен" : "неактивен",
      ]
        .join(" ")
        .toLowerCase()
        .includes(s)
    );
  }, [search, users]);

  const totalPages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);

  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * USERS_PER_PAGE,
    currentPage * USERS_PER_PAGE
  );

  const toggleMenu = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();

    if (openMenu === id) {
      setOpenMenu(null);
      return;
    }

    const rect = (e.target as HTMLElement).getBoundingClientRect();

    setMenuCoords({
      x: rect.left - 160,
      y: rect.bottom + 8,
    });

    setOpenMenu(id);
  };

  useEffect(() => {
    const close = () => setOpenMenu(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <Layout fullWidth>
      <div className="max-w-[2000px] mx-auto px-2">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Пользователи</h1>

        <input
          type="text"
          placeholder="Поиск по пользователям..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="w-full max-w-xl border border-input rounded-xl px-4 py-3 mb-8 text-base shadow-sm focus:ring-2 focus:ring-primary outline-none"
        />
      </div>

      <div className="overflow-x-auto">
        <div className="flex justify-center w-full">
          <table className="min-w-[2000px] max-w-[2000px] text-sm border-collapse">
            <thead>
              <tr className="text-left bg-muted">
                <th className="px-4 py-3 font-semibold">#</th>
                <th className="px-4 py-3 font-semibold">Активен</th>
                <th className="px-4 py-3 font-semibold">Фамилия</th>
                <th className="px-4 py-3 font-semibold">Имя</th>
                <th className="px-4 py-3 font-semibold">Отчество</th>
                <th className="px-4 py-3 font-semibold">Роль</th>
                <th className="px-4 py-3 font-semibold">Email</th>
                <th className="px-4 py-3 font-semibold">Телефон</th>
                <th className="px-4 py-3 font-semibold">Дата рождения</th>
                <th className="px-4 py-3 font-semibold">Подразделение</th>
                <th className="px-4 py-3 font-semibold">Должность</th>
                <th className="px-4 py-3 font-semibold">Действия</th>
              </tr>
            </thead>

            <tbody>
              {paginatedUsers.map((u) => (
                <tr key={u.id} className="border-b hover:bg-muted/50 transition">
                  <td className="px-4 py-3">{u.id}</td>

                  <td className="px-4 py-3">
                    {u.isActive ? (
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </td>

                  <td className="px-4 py-3 whitespace-nowrap">{u.lastname}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.firstname}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.middlename}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.role}</td>
                  <td className="px-4 py-3">{u.email}</td>

                  <td className="px-4 py-3 whitespace-nowrap">{u.phone}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.birthday}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.department}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{u.position}</td>

                  <td className="px-4 py-3 relative">
                    <button
                      onClick={(e) => toggleMenu(u.id, e)}
                      className="p-2 hover:bg-muted rounded-lg"
                    >
                      <MoreVertical className="w-5 h-5 text-gray-600" />
                    </button>
                  </td>
                </tr>
              ))}

              {paginatedUsers.length === 0 && (
                <tr>
                  <td className="px-4 py-6 text-center text-muted-foreground" colSpan={12}>
                    Ничего не найдено
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-6 text-sm max-w-[2000px] mx-auto px-2">
        <div>
          Строк: {paginatedUsers.length} из {filteredUsers.length}
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
            className="px-3 py-1 border rounded hover:bg-muted"
          >
            ←
          </button>

          <span>
            {currentPage} / {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
            className="px-3 py-1 border rounded hover:bg-muted"
          >
            →
          </button>
        </div>
      </div>

      {/* ГЛОБАЛЬНОЕ МЕНЮ ДЕЙСТВИЙ */}
      {openMenu !== null && menuCoords && (
        <div
          className="fixed z-[9999] bg-white border rounded-xl shadow-xl w-48"
          style={{
            top: menuCoords.y,
            left: menuCoords.x,
          }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="w-full text-left px-4 py-2 hover:bg-muted">
            Перейти в профиль
          </button>
          <button className="w-full text-left px-4 py-2 hover:bg-muted">
            Отключить профиль
          </button>
          <button className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50">
            Удалить
          </button>
        </div>
      )}
    </Layout>
  );
};

export default UsersAdmin;
