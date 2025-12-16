import { useState } from "react";
import Layout from "@/components/Layout";
import { Plus, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { CreateEventModal } from "@/components/CreateEventModal";

const Events = () => {
  const [activeTab, setActiveTab] = useState<"past" | "current">("past");
  const [isCreateOpen, setIsCreateOpen] = useState(false);

  return (
    <Layout>
      <div className="mb-10">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            Мероприятия
          </h1>

          <button
            onClick={() => setIsCreateOpen(true)}
            className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all flex items-center gap-2"
          >
            <Plus className="w-5 h-5" />
            Создать
          </button>
        </div>
      </div>

      <div className="flex gap-6 border-b border-border mb-12">
        <button
          onClick={() => setActiveTab("past")}
          className={cn(
            "px-4 py-3 font-semibold border-b-2 transition-all text-base",
            activeTab === "past"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Прошедшие
        </button>

        <button
          onClick={() => setActiveTab("current")}
          className={cn(
            "px-4 py-3 font-semibold border-b-2 transition-all text-base",
            activeTab === "current"
              ? "border-primary text-primary"
              : "border-transparent text-muted-foreground hover:text-foreground"
          )}
        >
          Будущие
        </button>
      </div>

      <div className="bg-white rounded-2xl p-16 border border-border text-center">
        <Calendar className="w-16 h-16 mx-auto text-muted-foreground mb-4 opacity-50" />
        <p className="text-xl font-semibold text-foreground mb-2">
          Нет мероприятий
        </p>
        <p className="text-base text-muted-foreground mb-6">
          Сейчас нет запланированных мероприятий, но вы можете создать новое
        </p>

        <button
          onClick={() => setIsCreateOpen(true)}
          className="bg-primary text-primary-foreground px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
        >
          Создать мероприятие
        </button>
      </div>

      <CreateEventModal isOpen={isCreateOpen} onClose={() => setIsCreateOpen(false)} />
    </Layout>
  );
};

export default Events;
