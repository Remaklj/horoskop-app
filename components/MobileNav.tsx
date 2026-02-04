'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Star, Users, Sparkles, History } from 'lucide-react';

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'Horoskop', icon: Star },
    { href: '/kompatibilnost', label: 'Kompatibilnost', icon: Users },
    { href: '/natalna-karta', label: 'Natalna karta', icon: Sparkles },
    { href: '/istorija', label: 'Istorija', icon: History },
  ];

  return (
    <>
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 text-gray-700 hover:text-purple-600 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />

          {/* Menu panel */}
          <div className="fixed top-[72px] left-0 right-0 bg-white shadow-xl z-50 md:hidden animate-in slide-in-from-top">
            <nav className="p-4 space-y-2">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-3 p-4 rounded-xl hover:bg-purple-50 transition-colors"
                >
                  <item.icon size={24} className="text-purple-600" />
                  <span className="text-lg font-medium text-gray-700">
                    {item.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  );
}
