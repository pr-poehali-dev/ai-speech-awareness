import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const CommunitySection = () => {
  const discussions = [
    {
      title: "Применение VR в коррекции речи",
      author: "Д-р Анна Петрова",
      role: "Логопед-дефектолог",
      avatar: "АП",
      time: "2 часа назад",
      replies: 15,
      likes: 42,
      category: "Инновации",
      isExpert: true,
    },
    {
      title: "Как мотивировать ребёнка к занятиям?",
      author: "Мария Сидорова",
      role: "Родитель",
      avatar: "МС",
      time: "4 часа назад",
      replies: 23,
      likes: 31,
      category: "Советы",
      isExpert: false,
    },
    {
      title: "Новый подход к диагностике дислалии",
      author: "Проф. Иван Козлов",
      role: "Исследователь",
      avatar: "ИК",
      time: "1 день назад",
      replies: 8,
      likes: 67,
      category: "Исследования",
      isExpert: true,
    },
  ];

  return (
    <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Живое сообщество
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Обсуждения, вопросы и ответы от ведущих специалистов и опытных
            родителей
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {discussions.map((discussion, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-0 shadow-md"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback
                          className={
                            discussion.isExpert
                              ? "bg-gradient-to-br from-purple-500 to-pink-500 text-white"
                              : "bg-gray-200"
                          }
                        >
                          {discussion.avatar}
                        </AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 hover:text-purple-600 cursor-pointer">
                            {discussion.title}
                          </h3>
                          {discussion.isExpert && (
                            <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                              <Icon name="Star" className="h-3 w-3 mr-1" />
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
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Icon name="MessageCircle" className="h-4 w-4" />
                              <span>{discussion.replies}</span>
                            </div>
                            <div className="flex items-center space-x-1 text-sm text-gray-500">
                              <Icon name="Heart" className="h-4 w-4" />
                              <span>{discussion.likes}</span>
                            </div>
                          </div>
                          <Badge variant="secondary">
                            {discussion.category}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Создать обсуждение
                </h3>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
                  <Icon name="Plus" className="h-4 w-4 mr-2" />
                  Новая тема
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">
                  Популярные темы
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      ИИ в логопедии
                    </span>
                    <Badge variant="secondary">127</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Вопросы родителей
                    </span>
                    <Badge variant="secondary">89</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">
                      Новые методики
                    </span>
                    <Badge variant="secondary">64</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
