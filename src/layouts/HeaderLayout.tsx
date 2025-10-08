import { Menu, X, Bell, Settings, User, TrendingUp, UserCircle, LogOut, ChevronRight } from "lucide-react";
import { useState } from "react";

type HeaderProps = {
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
};

export default function Header({
  sidebarOpen,
  setSidebarOpen,
  mobileMenuOpen,
  setMobileMenuOpen,
}: HeaderProps) {
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  const handleLogout = () => {
    console.log("Cerrando sesión...");
  };

  const handleProfile = () => {
    console.log("Ir a perfil...");
    setProfileDropdownOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-slate-700 z-50 shadow-xl">
      <div className="h-full flex items-center justify-between px-4 lg:px-6">
        {/* Botón menú + Logo */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setSidebarOpen(!sidebarOpen);
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="p-2 hover:bg-slate-700/50 rounded-lg transition-all hover:scale-105"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 text-slate-200" />
            ) : (
              <Menu className="w-5 h-5 text-slate-200" />
            )}
          </button>

          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-amber-500/30">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-white tracking-tight">
                Legumex Apps
              </h1>
              <p className="text-xs text-slate-400 font-medium">
                Departamento de calidad
              </p>
            </div>
          </div>
        </div>

        {/* Notificaciones + Perfil */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 hover:bg-slate-700/50 rounded-lg transition-all relative group">
            <Bell className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
          </button>

          <button className="p-2.5 hover:bg-slate-700/50 rounded-lg transition-all hidden sm:block group">
            <Settings className="w-5 h-5 text-slate-300 group-hover:text-white transition-colors" />
          </button>

          {/* Dropdown Perfil */}
          <div className="relative ml-2 pl-2 border-l border-slate-700">
            <button
              onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              className="flex items-center gap-3 hover:bg-slate-700/50 rounded-lg pl-3 pr-2 py-1.5 transition-all group"
            >
              <div className="hidden lg:block text-right">
                <p className="text-sm font-semibold text-slate-200 group-hover:text-white transition-colors">
                  Juan Pérez
                </p>
                <p className="text-xs text-amber-400 font-medium">
                  Administrador
                </p>
              </div>
              <div className="w-9 h-9 bg-gradient-to-br from-amber-500 to-orange-600 rounded-lg flex items-center justify-center shadow-lg shadow-amber-500/20 group-hover:shadow-amber-500/40 transition-all">
                <User className="w-5 h-5 text-white" />
              </div>
            </button>

            {profileDropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-slate-200 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-4 py-3 border-b border-slate-100">
                  <p className="text-sm font-semibold text-slate-900">
                    Juan Pérez
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    juan.perez@agrotech.com
                  </p>
                </div>

                <button
                  onClick={handleProfile}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-slate-700 hover:bg-slate-50 transition-colors group"
                >
                  <UserCircle className="w-4 h-4 text-slate-400 group-hover:text-amber-600" />
                  <span className="text-sm font-medium">Mi Perfil</span>
                  <ChevronRight className="w-4 h-4 ml-auto text-slate-300" />
                </button>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 text-red-600 hover:bg-red-50 transition-colors group"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span className="text-sm font-semibold">Cerrar Sesión</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
