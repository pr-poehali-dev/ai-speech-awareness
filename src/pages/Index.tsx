import Header from "@/components/Header";
import ResearchSection from "@/components/ResearchSection";
import ForumSection from "@/components/ForumSection";
import StatsSection from "@/components/StatsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary/80 text-primary-foreground py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Научная база знаний по логопедии и ИИ
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Платформа для специалистов и родителей: новейшие исследования,
            профессиональное общение и практический опыт применения ИИ в
            логопедии
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Изучить исследования
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors">
              Присоединиться к форуму
            </button>
          </div>
        </div>
      </section>

      <ResearchSection />
      <StatsSection />
      <ForumSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">МедПортал</h3>
              <p className="text-gray-400">
                Профессиональная платформа для логопедов, дефектологов и
                родителей
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Ресурсы</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    База статей
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Форум
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Эксперты
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сообщество</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Специалисты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Родители
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Обучение
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Помощь
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Контакты
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    О проекте
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 МедПортал. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
