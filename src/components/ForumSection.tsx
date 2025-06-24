import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const ForumSection = () => {
  const discussions = [
    {
      id: 1,
      title: "Как выбрать правильное приложение для коррекции звуков?",
      author: "Мария Петрова",
      role: "Родитель",
      avatar: "МП",
      time: "2 часа назад",
      replies: 12,
      likes: 24,
      category: "Вопросы родителей",
      preview:
        "Добрый день! Дочке 5 лет, логопед рекомендовал дополнительно заниматься дома с приложениями. Какие вы можете посоветовать?",
      isExpert: false,
    },
    {
      id: 2,
      title: "Новые исследования по применению VR в логопедии",
      author: "Д-р Иванов А.В.",
      role: "Логопед-дефектолог",
      avatar: "ИА",
      time: "5 часов назад",
      replies: 8,
      likes: 45,
      category: "Профессиональное обсуждение",
      preview:
        "Коллеги, хочу поделиться результатами пилотного исследования использования VR-технологий в коррекционной работе...",
      isExpert: true,
    },
    {
      id: 3,
      title: "Опыт использования ИИ-ассистента в диагностике",
      author: "Елена Козлова",
      role: "Логопед",
      avatar: "ЕК",
      time: "1 день назад",
      replies: 15,
      likes: 32,
      category: "Практический опыт",
      preview:
        "Делюсь опытом работы с новым ИИ-инструментом для первичной диагностики речевых нарушений. Результаты впечатляют!",
      isExpert: true,
    },
  ];

  const categories = [
    { name: "Все обсуждения", count: 156, color: "bg-blue-100 text-blue-800" },
    {
      name: "Вопросы родителей",
      count: 42,
      color: "bg-green-100 text-green-800",
    },
    {
      name: "Профессиональное",
      count: 29,
      color: "bg-purple-100 text-purple-800",
    },
    {
      name: "Практический опыт",
      count: 31,
      color: "bg-orange-100 text-orange-800",
    },
    { name: "Новости", count: 18, color: "bg-red-100 text-red-800" },
  ];

  return (
    <section id="forum" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Форум сообщества
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Обсуждения между родителями и специалистами. Делитесь опытом и
            получайте профессиональные советы
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Сайдбар с категориями */}
          <div className="lg:col-span-1">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="text-lg">Создать обсуждение</CardTitle>
              </CardHeader>
              <CardContent>
                <Button className="w-full">
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Новая тема
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Категории</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {categories.map((category) => (
                    <div
                      key={category.name}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm font-medium">
                        {category.name}
                      </span>
                      <Badge className={category.color}>{category.count}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Список обсуждений */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              {discussions.map((discussion) => (
                <Card
                  key={discussion.id}
                  className="hover:shadow-md transition-shadow"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar>
                        <AvatarFallback
                          className={
                            discussion.isExpert
                              ? "bg-primary text-primary-foreground"
                              : "bg-gray-200"
                          }
                        >
                          {discussion.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900 hover:text-primary cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.isExpert && (
                            <Badge variant="secondary">
                              <Icon name="Award" className="h-3 w-3 mr-1" />
                              Эксперт
                            </Badge>
                          )}
                        </div>

                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                          <span className="font-medium">
                            {discussion.author}
                          </span>
                          <span>•</span>
                          <span>{discussion.role}</span>
                          <span>•</span>
                          <span>{discussion.time}</span>
                          <Badge variant="outline" className="ml-2">
                            {discussion.category}
                          </Badge>
                        </div>

                        <p className="text-gray-700 mb-4 line-clamp-2">
                          {discussion.preview}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary">
                              <Icon name="MessageCircle" className="h-4 w-4" />
                              <span>{discussion.replies}</span>
                            </button>
                            <button className="flex items-center space-x-1 text-sm text-gray-500 hover:text-primary">
                              <Icon name="Heart" className="h-4 w-4" />
                              <span>{discussion.likes}</span>
                            </button>
                          </div>
                          <Button variant="ghost" size="sm">
                            Ответить
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Button variant="outline">Загрузить больше</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumSection;
