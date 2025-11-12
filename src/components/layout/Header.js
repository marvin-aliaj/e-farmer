'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bars3Icon, XMarkIcon, UserIcon, UserPlusIcon } from '@heroicons/react/24/outline';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">E</span>
            </div>
            <span className="text-2xl font-bold text-gray-900 font-amatic">E-Farmer Albania</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
              Ballina
            </Link>
            <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium">
              Produktet
            </Link>
            <Link href="/farmers" className="text-gray-700 hover:text-green-600 font-medium">
              Fermerët
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
              Rreth Nesh
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Kontakti
            </Link>
          </nav>

          {/* User Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="flex items-center space-x-2 text-gray-700 hover:text-green-600">
              <UserIcon className="w-5 h-5" />
              <span>Hyr</span>
            </Link>
            <Link href="/register" className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
              <UserPlusIcon className="w-5 h-5" />
              <span>Regjistrohu</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Ballina
              </Link>
              <Link href="/products" className="text-gray-700 hover:text-green-600 font-medium">
                Produktet
              </Link>
              <Link href="/farmers" className="text-gray-700 hover:text-green-600 font-medium">
                Fermerët
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
                Rreth Nesh
              </Link>
              <Link href="/contact" className="text-gray-700 hover:text-green-600 font-medium">
                Kontakti
              </Link>
              <div className="pt-4 border-t">
                <Link href="/login" className="w-full flex items-center justify-center space-x-2 text-gray-700 hover:text-green-600 py-2">
                  <UserIcon className="w-5 h-5" />
                  <span>Hyr</span>
                </Link>
                <Link href="/register" className="w-full flex items-center justify-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 mt-2">
                  <UserPlusIcon className="w-5 h-5" />
                  <span>Regjistrohu</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
