import { useState } from "react";
import { X } from "lucide-react";

interface CreateCaseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateCaseModal = ({ isOpen, onClose }: CreateCaseModalProps) => {
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    expertName: "",
    expertRole: "",
    companyDescription: "",
    problemDescription: "",
    attempts: "",
    expectedResult: "",
    materials: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Создан кейс:", formData);
    onClose();
  };

  if (!isOpen) return null;

  const input = (label: string, field: keyof typeof formData, textarea = false) => (
    <div>
      <label className="block text-sm font-semibold mb-2">{label}</label>

      {textarea ? (
        <textarea
          rows={4}
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="w-full border rounded-lg px-4 py-2 resize-none"
        />
      ) : (
        <input
          type="text"
          value={formData[field]}
          onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
          className="w-full border rounded-lg px-4 py-2"
        />
      )}
    </div>
  );

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-xl">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Добавить кейс</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">

          {/* BLOCK 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация о компании</h3>

            {input("Название кейса", "title")}
            {input("Полное название компании", "company")}
            {input("ФИО эксперта", "expertName")}
            {input("Должность эксперта", "expertRole")}
          </div>

          {/* BLOCK 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Описание ситуации</h3>

            {input("Описание деятельности компании", "companyDescription", true)}
            {input("Описание проблемной ситуации", "problemDescription", true)}
            {input("Как пытались решить?", "attempts", true)}
            {input("Желаемый образ результата (продукта)", "expectedResult", true)}
            {input("Дополнительные материалы", "materials", true)}
          </div>

          {/* BUTTONS */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 border py-2 rounded-lg"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 bg-blue-600 text-white py-2 rounded-lg"
            >
              Добавить кейс
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
