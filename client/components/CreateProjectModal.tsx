import { useState } from "react";
import { X, Paperclip } from "lucide-react";

interface CreateProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CreateProjectModal = ({ isOpen, onClose }: CreateProjectModalProps) => {
  const [formData, setFormData] = useState({
    customer: "",
    projectType: "",
    goal: "",
    title: "",
    task: "",
    problem: "",
    result: "",
    resources: "",
    logo: null as File | null,
  });

  const projectTypes = [
    "Технический",
    "Социальный",
    "Организационный",
    "Предпринимательский",
    "Творческий",
    "Научно-исследовательский",
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, logo: e.target.files?.[0] || null });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Создан проект:", formData);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-start p-6 overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-2xl w-full p-8 shadow-xl">
        
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Создать проект</h2>
          <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">

          {/* Блок 1 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация о заказчике</h3>

            <div>
              <label className="block text-sm font-semibold mb-2">Заказчик</label>
              <input
                type="text"
                required
                value={formData.customer}
                onChange={(e) => setFormData({ ...formData, customer: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Введите заказчика..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Тип проекта</label>
              <select
                required
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
              >
                <option value="">Выберите тип...</option>
                {projectTypes.map((type) => (
                  <option key={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Цель проекта</label>
              <textarea
                required
                value={formData.goal}
                onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 resize-none"
                placeholder="Опишите цель..."
              />
            </div>
          </div>

          {/* Блок 2 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Информация о проекте</h3>

            <div>
              <label className="block text-sm font-semibold mb-2">Название проекта</label>
              <input
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Название проекта..."
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Задача</label>
              <textarea
                required
                value={formData.task}
                onChange={(e) => setFormData({ ...formData, task: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 resize-none"
                placeholder="Какая задача?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Проблема</label>
              <textarea
                required
                value={formData.problem}
                onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 resize-none"
                placeholder="Какую проблему решает проект?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Планируемый результат</label>
              <textarea
                required
                value={formData.result}
                onChange={(e) => setFormData({ ...formData, result: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 resize-none"
                placeholder="Какой результат планируется?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Материальные ресурсы</label>
              <textarea
                required
                value={formData.resources}
                onChange={(e) => setFormData({ ...formData, resources: e.target.value })}
                rows={3}
                className="w-full border rounded-lg px-4 py-2 resize-none"
                placeholder="Что нужно для проекта?"
              />
            </div>
          </div>

          {/* Логотип */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Логотип проекта</h3>

            <label className="flex items-center gap-3 px-4 py-2 border rounded-lg w-fit cursor-pointer hover:bg-gray-50">
              <Paperclip className="w-5 h-5 text-gray-500" />
              <span className="text-sm text-gray-700">
                {formData.logo ? formData.logo.name : "Прикрепить файл"}
              </span>
              <input type="file" className="hidden" accept="image/*" onChange={handleFileUpload} />
            </label>
          </div>

          {/* Submit */}
          <div className="flex gap-3 pt-2">
            <button type="button" onClick={onClose} className="flex-1 border py-2 rounded-lg">
              Отмена
            </button>
            <button type="submit" className="flex-1 bg-green-600 text-white py-2 rounded-lg">
              Создать проект
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
