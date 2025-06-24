import { Card, CardContent } from "@/components/ui/card";

const StatsSection = () => {
  const stats = [
    {
      value: "15K+",
      label: "Активных пользователей",
      description: "Специалисты и родители",
      color: "from-purple-500 to-pink-500",
    },
    {
      value: "2.5K",
      label: "Научных статей",
      description: "Актуальные исследования",
      color: "from-blue-500 to-cyan-500",
    },
    {
      value: "850+",
      label: "Экспертов",
      description: "Проверенные специалисты",
      color: "from-green-500 to-emerald-500",
    },
    {
      value: "98%",
      label: "Довольных пользователей",
      description: "Положительные отзывы",
      color: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Растущее сообщество профессионалов
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Присоединяйтесь к тысячам специалистов, которые уже используют наши
            инструменты
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow"
            >
              <CardContent className="p-8">
                <div
                  className={`text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-4`}
                >
                  {stat.value}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
