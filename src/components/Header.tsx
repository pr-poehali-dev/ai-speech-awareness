import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-lg border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Icon name="Zap" className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">ЛогоИИ</h1>
                <p className="text-xs text-gray-500">Будущее логопедии</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#research"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Исследования
              </a>
              <a
                href="#community"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Сообщество
              </a>
              <a
                href="#tools"
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium"
              >
                Инструменты
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative hidden sm:block">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
              />
              <Input
                placeholder="Поиск..."
                className="pl-10 w-64 bg-gray-50 border-0"
              />
            </div>
            <Button variant="outline" className="hidden sm:inline-flex">
              Войти
            </Button>
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600">
              Начать
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
