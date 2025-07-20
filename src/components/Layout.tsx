import { useState } from 'react';
import { Menu, X, Gamepad2, Search } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  console.log('Layout component rendering');
  
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { path: '/exploracao', label: 'Exploração da Fé Católica', icon: Search },
    { path: '/quiz', label: 'Quiz Católico', icon: Gamepad2 },
  ];

  const toggleMenu = () => {
    console.log('Toggle menu clicked, current state:', isMenuOpen);
    setIsMenuOpen(!isMenuOpen);
  };

  const handleMenuClick = (path: string) => {
    console.log('Menu item clicked, navigating to:', path);
    try {
      navigate(path);
      setIsMenuOpen(false);
    } catch (error) {
      console.error('Navigation error:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 relative">
      {/* Header with Hamburger Menu */}
      <header className="bg-black/20 backdrop-blur-sm border-b border-white/10 relative z-40">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6 text-white" />
                ) : (
                  <Menu className="w-6 h-6 text-white" />
                )}
              </button>
              <div className="relative">
                <img 
                  src="/lovable-uploads/ebf9a6d5-503e-4a4a-813b-cab50ba45b0e.png" 
                  alt="Carlo Acutis" 
                  className="w-8 h-8 rounded-full border-2 border-blue-300"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.5))',
                    backgroundColor: 'transparent'
                  }}
                  onError={(e) => {
                    console.error('Image failed to load:', e);
                  }}
                />
              </div>
              <h1 className="text-xl font-bold text-white">Quiz Católico</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Fixed positioning */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50" 
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="absolute top-0 left-0 w-80 h-full bg-black/95 backdrop-blur-sm border-r border-white/10">
            <div className="p-4">
              {/* Close button */}
              <div className="flex justify-end mb-4">
                <button
                  onClick={toggleMenu}
                  className="p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <X className="w-6 h-6 text-white" />
                </button>
              </div>
              
              {/* Menu items */}
              <nav className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  return (
                    <button
                      key={item.path}
                      onClick={() => handleMenuClick(item.path)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-md text-white hover:bg-white/10 transition-colors text-left ${
                        isActive ? 'bg-white/20' : ''
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="relative">
        {children}
      </main>
    </div>
  );
};

export default Layout;
