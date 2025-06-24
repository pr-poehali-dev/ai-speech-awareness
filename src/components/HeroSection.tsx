import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-600 text-sm font-medium mb-8">
            <Icon name="Sparkles" className="h-4 w-4 mr-2" />
            Революция в логопедии с ИИ
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8">
            <span className="gradient-text">Логопедия</span>
            <br />
            <span className="text-gray-900">нового поколения</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
            Платформа для специалистов и родителей, где встречаются новейшие
            исследования, профессиональное сообщество и инновационные
            ИИ-инструменты
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-lg px-8 py-6"
            >
              <Icon name="Play" className="h-5 w-5 mr-2" />
              Начать работу
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6">
              <Icon name="BookOpen" className="h-5 w-5 mr-2" />
              Изучить исследования
            </Button>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-3xl blur-3xl opacity-30"></div>
            <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-200 p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Brain" className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    ИИ-Диагностика
                  </h3>
                  <p className="text-sm text-gray-600">
                    Автоматическая оценка речевых нарушений
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Users" className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Сообщество
                  </h3>
                  <p className="text-sm text-gray-600">
                    Профессиональная сеть специалистов
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name="Lightbulb" className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Инновации
                  </h3>
                  <p className="text-sm text-gray-600">
                    Новейшие методы и технологии
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
