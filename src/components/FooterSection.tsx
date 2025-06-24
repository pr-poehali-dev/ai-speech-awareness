import Icon from "@/components/ui/icon";

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">ЛогоИИ</h3>
                <p className="text-xs text-gray-400">Будущее логопедии</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Инновационная платформа для специалистов и родителей, объединяющая
              науку и практику в области логопедии.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Ресурсы</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  База исследований
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  ИИ-инструменты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Мобильные приложения
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Обучающие курсы
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Сообщество</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Форум специалистов
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Группы родителей
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Вебинары
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  События
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Центр помощи
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Контакты
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  О проекте
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 ЛогоИИ. Все права защищены.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Twitter" className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Facebook" className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Instagram" className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
