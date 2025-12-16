import { useState } from "react";
import { X, Upload } from "lucide-react";

interface CreateEventModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateEventModal = ({ isOpen, onClose }: CreateEventModalProps) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    mode: "online",
    internal: false,
    address: "",
    link: "",
    regStart: "",
    regEnd: "",
    eventStart: "",
    eventEnd: "",
    eventType: "",
    phone: "",
    team: false,
    poster: null,
    auditorium: "",
  });

  const auditoriums = [
    "A202","A404","Спортзал","A454","A514","K523","Y804","K504","K247","Y527",
    "A516","Y708","A401","K203","K426","Y508","Y503","Y401","Y404","Y903","Y406",
    "Y502","Y106","A636","A317","A52","Y505","Y506","A304","Y594","A613","A603",
    "A517","A216","Y607","A331","A414","A233","A202","Y705","Многофункциональный зал",
    "Точка кипения","K021","A403","Y305","A305","Г201","ЭО и ДПО","A615","K608","K507"
  ];

  const eventTypes = [
    "Хакатон","Лекторий","Мастер-класс","Профориентационное",
    "Проектная деятельность студентов","Творческий конкурс",
    "Образовательное","Научное","Спортивное","Хозработы",
    "Прочее","Конкурс проектов"
  ];

  if (!isOpen) return null;

  const handlePoster = (e: any) =>
    setForm({ ...form, poster: e.target.files?.[0] || null });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("EVENT CREATED:", form);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-3xl p-8 shadow-xl">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Создание мероприятия</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* TITLE + DESCRIPTION */}
          <div className="space-y-4">
            <div>
              <label className="text-sm font-semibold">Название мероприятия</label>
              <input
                type="text"
                className="w-full border px-4 py-2 rounded-lg mt-1"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                required
              />
            </div>

            <div>
              <label className="text-sm font-semibold">Описание мероприятия</label>
              <textarea
                rows={3}
                className="w-full border px-4 py-2 rounded-lg mt-1 resize-none"
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                required
              />
            </div>
          </div>

          {/* MODE SELECTOR */}
          <div className="space-y-4">
            <label className="text-sm font-semibold">Как вы планируете провести мероприятие?</label>

            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => setForm({ ...form, mode: "online" })}
                className={`px-4 py-2 rounded-lg border transition ${
                  form.mode === "online"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Онлайн
              </button>

              <button
                type="button"
                onClick={() => setForm({ ...form, mode: "offline" })}
                className={`px-4 py-2 rounded-lg border transition ${
                  form.mode === "offline"
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700"
                }`}
              >
                Оффлайн
              </button>
            </div>

            {/* ONLINE */}
            {form.mode === "online" && (
              <div className="space-y-2">
                <input
                  type="text"
                  placeholder="Ссылка для подключения"
                  className="w-full border px-4 py-2 rounded-lg"
                  value={form.link}
                  onChange={(e) => setForm({ ...form, link: e.target.value })}
                />
              </div>
            )}

            {/* OFFLINE */}
            {form.mode === "offline" && (
              <div className="space-y-4">

                <label className="flex gap-3 items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={form.internal}
                    onChange={(e) => setForm({ ...form, internal: e.target.checked })}
                    className="w-5 h-5"
                  />
                  <span className="text-sm">Мероприятие проводится внутри университета</span>
                </label>

                {!form.internal && (
                  <input
                    type="text"
                    placeholder="Адрес"
                    className="w-full border px-4 py-2 rounded-lg"
                    value={form.address}
                    onChange={(e) => setForm({ ...form, address: e.target.value })}
                  />
                )}

                {form.internal && (
                  <select
                    className="w-full border px-4 py-2 rounded-lg"
                    value={form.auditorium}
                    onChange={(e) => setForm({ ...form, auditorium: e.target.value })}
                  >
                    <option value="">Выберите аудиторию</option>
                    {auditoriums.map((a) => (
                      <option key={a}>{a}</option>
                    ))}
                  </select>
                )}
              </div>
            )}
          </div>

          {/* PERIODS */}
          <div className="space-y-4">

            <label className="text-sm font-semibold">Период регистрации</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <input
                  type="date"
                  className="border px-4 py-2 rounded-lg"
                  value={form.regStart}
                  onChange={(e) => setForm({ ...form, regStart: e.target.value })}
                />
                <span className="text-xs text-gray-500 mt-1">Начало регистрации</span>
              </div>

              <div className="flex flex-col">
                <input
                  type="date"
                  className="border px-4 py-2 rounded-lg"
                  value={form.regEnd}
                  onChange={(e) => setForm({ ...form, regEnd: e.target.value })}
                />
                <span className="text-xs text-gray-500 mt-1">Конец регистрации</span>
              </div>
            </div>

            <label className="text-sm font-semibold">Период проведения</label>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col">
                <input
                  type="date"
                  className="border px-4 py-2 rounded-lg"
                  value={form.eventStart}
                  onChange={(e) => setForm({ ...form, eventStart: e.target.value })}
                />
                <span className="text-xs text-gray-500 mt-1">Начало проведения</span>
              </div>

              <div className="flex flex-col">
                <input
                  type="date"
                  className="border px-4 py-2 rounded-lg"
                  value={form.eventEnd}
                  onChange={(e) => setForm({ ...form, eventEnd: e.target.value })}
                />
                <span className="text-xs text-gray-500 mt-1">Конец проведения</span>
              </div>
            </div>

            <select
              className="w-full border px-4 py-2 rounded-lg"
              value={form.eventType}
              onChange={(e) => setForm({ ...form, eventType: e.target.value })}
            >
              <option value="">Тип мероприятия</option>
              {eventTypes.map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>

            <input
              type="text"
              placeholder="Телефон для справки"
              className="w-full border px-4 py-2 rounded-lg"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
            />

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={form.team}
                onChange={(e) => setForm({ ...form, team: e.target.checked })}
                className="w-5 h-5"
              />
              <span className="text-sm">Командное участие</span>
            </label>
          </div>

          {/* POSTER */}
          <div className="space-y-3">
            <label className="text-sm font-semibold">Выберите постер</label>
            <label className="w-full border border-dashed px-6 py-8 rounded-xl flex flex-col items-center cursor-pointer hover:bg-gray-50">
              <Upload className="w-6 h-6 text-gray-500 mb-2" />
              <span className="text-sm text-gray-600">
                {form.poster ? form.poster.name : "Выберите файл"}
              </span>
              <input type="file" className="hidden" accept="image/*" onChange={handlePoster} />
            </label>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold hover:bg-blue-700"
          >
            Добавить мероприятие
          </button>

        </form>
      </div>
    </div>
  );
};
