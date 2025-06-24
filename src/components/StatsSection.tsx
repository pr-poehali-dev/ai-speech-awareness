import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const StatsSection = () => {
  const stats = [
    {
      icon: "FileText",
      value: "1,247",
      label: "Научных статей",
      description: "Актуальные исследования",
    },
    {
      icon: "Users",
      value: "3,892",
      label: "Активных участников",
      description: "Родители и специалисты",
    },
    {
      icon: "MessageSquare",
      value: "12,456",
      label: "Обсуждений",
      description: "Живое общение",
    },
    {
      icon: "Award",
      value: "284",
      label: "Экспертов",
      description: "Проверенные специалисты",
    },
  ];

  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Растущее сообщество профессионалов
          </h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Присоединяйтесь к крупнейшей платформе для обмена знаниями в области
            логопедии и ИИ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 border-white/20 text-primary-foreground"
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-white/20 rounded-full">
                    <Icon name={stat.icon} className="h-8 w-8" />
                  </div>
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-1">{stat.label}</div>
                <div className="text-sm opacity-80">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
