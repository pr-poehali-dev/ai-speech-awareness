import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const ResearchSection = () => {
  const articles = [
    {
      id: 1,
      title: "Применение ИИ в логопедической практике: систематический обзор",
      authors: "Иванов А.В., Петрова С.М., Сидоров К.П.",
      journal: "Журнал логопедии и речевых нарушений",
      year: "2024",
      tags: ["ИИ", "Логопедия", "Обзор"],
      abstract:
        "Комплексный анализ современных методов применения искусственного интеллекта в диагностике и коррекции речевых нарушений у детей...",
      downloads: 245,
      citations: 12,
    },
    {
      id: 2,
      title: "Эффективность цифровых технологий в коррекции дислалии",
      authors: "Козлова М.А., Морозов В.И.",
      journal: "Специальная педагогика",
      year: "2024",
      tags: ["Дислалия", "Цифровые технологии", "Коррекция"],
      abstract:
        "Исследование показывает значительное улучшение результатов коррекции звукопроизношения при использовании специализированных приложений...",
      downloads: 189,
      citations: 8,
    },
    {
      id: 3,
      title: "Нейросетевые подходы к анализу речевых паттернов",
      authors: "Волков Д.С., Федорова Е.К., Николаев П.Р.",
      journal: "Компьютерная лингвистика",
      year: "2023",
      tags: ["Нейросети", "Анализ речи", "Паттерны"],
      abstract:
        "Разработка и тестирование алгоритмов машинного обучения для автоматического выявления речевых нарушений...",
      downloads: 312,
      citations: 23,
    },
  ];

  const categories = [
    { name: "Все статьи", count: 156, active: true },
    { name: "ИИ в логопедии", count: 42, active: false },
    { name: "Детская речь", count: 38, active: false },
    { name: "Диагностика", count: 29, active: false },
    { name: "Коррекция", count: 47, active: false },
  ];

  return (
    <section id="research" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            База научных исследований
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Актуальные научные статьи и исследования в области логопедии и
            применения ИИ
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Фильтры */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.name}
                      className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                        category.active
                          ? "bg-primary text-primary-foreground"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">
                          {category.name}
                        </span>
                        <span className="text-xs bg-gray-200 px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Статьи */}
          <div className="lg:col-span-3">
            <div className="space-y-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="hover:shadow-lg transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 flex-1">
                        {article.title}
                      </h3>
                      <Button variant="ghost" size="sm">
                        <Icon name="Bookmark" className="h-4 w-4" />
                      </Button>
                    </div>

                    <p className="text-sm text-gray-600 mb-2">
                      {article.authors} • {article.journal} • {article.year}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-gray-700 mb-4 line-clamp-2">
                      {article.abstract}
                    </p>

                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Icon name="Download" className="h-4 w-4" />
                          <span>{article.downloads}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Icon name="Quote" className="h-4 w-4" />
                          <span>{article.citations}</span>
                        </div>
                      </div>
                      <Button>Читать статью</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResearchSection;
