import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
// MobileNav більше не імпортується

const Layout = ({ children, showSidebar = false }) => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Верхня навігація */}
      <Navbar />

      <div className="flex flex-1">
        {/* Сайдбар - показуємо тільки на великих екранах */}
        {showSidebar && (
          <div className="hidden md:block"> {/* Приховуємо на мобільних, показуємо на md+ */}
            <Sidebar />
          </div>
        )}

        {/* Основний вміст сторінки */}
        {/* Прибрано pb-16, оскільки немає нижньої мобільної навігації */}
        <main className="flex-1 overflow-y-auto"> 
          {children}
        </main>
      </div>

      {/* MobileNav видалено */}
    </div>
  );
};
export default Layout;