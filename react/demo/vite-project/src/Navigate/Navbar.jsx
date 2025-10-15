import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', to: '/home' },
  { name: 'About', to: '/about' },
  { name: 'Product', to: '/product' },
  { name: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { readMoreClicked } = useAuth();

 const handleNavClick = (to) => {
  if (to === '/about' && !readMoreClicked)
    
    {
    return; 
  }
  navigate(to);
};

  return (
    <Disclosure as="nav" className="relative bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center p-2 text-gray-400 hover:bg-white/5 hover:text-white rounded-md">
              <Bars3Icon className="block w-6 h-6" />
              <XMarkIcon className="hidden w-6 h-6" />
            </DisclosureButton>
          </div>

          {/* Desktop links */}
          <div className="hidden sm:ml-6 sm:flex space-x-4">
            {navigation.map((item) => {
              const current = location.pathname === item.to;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.to)}
                  className={`px-3 py-2 rounded-md text-sm font-medium ${
                    current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile menu links */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.to)}
              className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
            >
              {item.name}
            </button>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
