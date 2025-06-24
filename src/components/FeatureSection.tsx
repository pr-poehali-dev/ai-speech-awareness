import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const FeatureSection = () => {
  const features = [
    {
      icon: "Cpu",
      title: "ИИ-Ассистент",
      description: "Умный помощник для диагностики и планирования занятий",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: "FileText",
      title: "База знаний",
      description: "Тысячи научных статей и практических материалов",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: "MessageCircle",
      title: "Живое общение",
      description: "Форумы для обмена опытом между специалистами",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: "BarChart",
      title: "Аналитика",
      description: "Отслеживание прогресса и эффективности методик",
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: "Smartphone",
      title: "Мобильные инструменты",
      description: "Приложения для домашних занятий и практики",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: "Shield",
      title: "Безопасность данных",
      description: "Защита персональной информации пациентов",
      gradient: "from-gray-500 to-gray-700",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Всё для современной логопедии
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Комплексная платформа с инструментами для диагностики, обучения и
            профессионального развития
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-8">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon name={feature.icon} className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
