import Layout from "@/components/Layout";
import { Server, Zap, Shield, HelpCircle, ArrowRight } from "lucide-react";

const Hosting = () => {
  const features = [
    {
      title: "Высокая производительность",
      description:
        "Быстрое и надежное размещение с гарантированным временем безотказной работы",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "Безопасность",
      description:
        "Защита данных и конфиденциальность с использованием современных технологий",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Масштабируемость",
      description: "Растущие возможности по мере роста вашего проекта",
      icon: <Server className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Поддержка 24/7",
      description: "Техническая поддержка всегда доступна для вас",
      icon: <HelpCircle className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <Layout>
      <div className="mb-16">
        <h1 className="text-4xl md:text-5xl font-bold">Хостинг</h1>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl p-6 border border-border hover:shadow-lg transition-all hover:-translate-y-1 group"
          >
            <div
              className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
            >
              {feature.icon}
            </div>
            <h3 className="font-bold text-foreground mb-2 text-base">
              {feature.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary to-primary-700 rounded-2xl p-12 text-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Начните прямо сейчас
        </h2>
        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Получите доступ к полноценным возможностям хостинга и разместите ваши
          проекты в надежной, безопасной среде
        </p>
        <button className="bg-white text-primary px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all inline-flex items-center gap-2 group">
          Узнать больше
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Additional Info */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            number: "99.9%",
            label: "Гарантия времени безотказной работы",
          },
          {
            number: "30+",
            label: "Центров данных по всему миру",
          },
          {
            number: "10K+",
            label: "Активных проектов",
          },
        ].map((stat, idx) => (
          <div
            key={idx}
            className="text-center p-6 bg-white rounded-2xl border border-border"
          >
            <p className="text-4xl font-bold text-primary mb-2">
              {stat.number}
            </p>
            <p className="text-muted-foreground text-sm">{stat.label}</p>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Hosting;
