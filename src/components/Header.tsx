import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <Icon name="Brain" className="h-8 w-8 text-primary" />
              <h1 className="text-xl font-bold text-gray-900">МедПортал</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a
                href="#research"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Исследования
              </a>
              <a
                href="#forum"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                Форум
              </a>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Icon
                name="Search"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4"
              />
              <Input placeholder="Поиск статей..." className="pl-10 w-64" />
            </div>
            <Button>Войти</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
