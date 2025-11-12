'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import { 
  TruckIcon, 
  HomeIcon, 
  ChartBarIcon, 
  StarIcon,
  CalendarIcon,
  ShieldCheckIcon,
  CloudIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

export default function Home() {
  const [activeTab, setActiveTab] = useState('producers');

  const features = [
    {
      icon: <TruckIcon className="w-8 h-8 text-green-600" />,
      title: "Transporti i Sigurt",
      description: "Zgjidhja për problemin e transportit me kamionë të ftohtë për produktet e freskëta"
    },
    {
      icon: <HomeIcon className="w-8 h-8 text-green-600" />,
      title: "Magazinimi i Produkteve",
      description: "Menaxhimi i dhomave të ftohta me temperatura të ndryshme për çdo lloj produkti"
    },
    {
      icon: <StarIcon className="w-8 h-8 text-green-600" />,
      title: "Sistem Vlerësimesh",
      description: "Vlerësimi i cilësisë së produkteve dhe besueshmërisë së fermerëve dhe klientëve"
    },
    {
      icon: <CalendarIcon className="w-8 h-8 text-green-600" />,
      title: "Produkte Sipas Stinëve",
      description: "Organizimi i produkteve në 4 kategori stinore për lehtësinë e porositjes"
    },
    {
      icon: <CloudIcon className="w-8 h-8 text-green-600" />,
      title: "Parashikimi i Motit",
      description: "Informacione të detajuara për motin për të ndihmuar fermerët në vendimmarrje"
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-green-600" />,
      title: "Certifikimet",
      description: "Menaxhimi i certifikatave organike, bio dhe konvencionale"
    }
  ];

  const producerFeatures = [
    "Regjistrimi i produkteve dhe sasisë",
    "Menaxhimi i porosive dhe kontratave",
    "Parashikimi i motit për vendimmarrje",
    "Menaxhimi i humbjeve të ushqimit",
    "Certifikimet dhe licencat",
    "Kërkesat e cilësisë EU"
  ];

  const clientFeatures = [
    "Porositje në shumicë dhe pakicë",
    "Kontrata me fermerët",
    "Sistem vlerësimesh",
    "Produkte sipas stinëve",
    "Transporti i organizuar",
    "Menaxhimi i magazinimit"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 font-amatic">
              Platforma e Parë për 
              <span className="text-green-600"> Fermerët</span> në Shqipëri
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Lidhni fermerët me klientët dhe shitësit me shumicë. Zgjidhni problemet e transportit, 
              magazinimit dhe menaxhimit të produkteve të freskëta.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/register/producer" 
                className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Regjistrohu si Fermer
              </Link>
              <Link 
                href="/register/client" 
                className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold border-2 border-green-600 hover:bg-green-50 transition-colors"
              >
                Regjistrohu si Klient
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Zgjidhni Profilin Tuaj
            </h2>
            <p className="text-xl text-gray-600">
              Platforma jonë ofron zgjidhje të specializuara për çdo lloj përdoruesi
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Producer Card */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <HomeIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Fermerët / Prodhuesit</h3>
                <p className="text-gray-600">
                  Menaxhoni produktet tuaja, porositë dhe kontratat me klientët
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {producerFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/register/producer" 
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-green-700 transition-colors"
              >
                Regjistrohu si Fermer
              </Link>
            </div>

            {/* Client Card */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChartBarIcon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Klientët / Shitësit me Shumicë</h3>
                <p className="text-gray-600">
                  Gjeni fermerë të besueshëm dhe porositni produktet e freskëta
                </p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {clientFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link 
                href="/register/client" 
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
              >
                Regjistrohu si Klient
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Veçoritë e Platformës
            </h2>
            <p className="text-xl text-gray-600">
              Zgjidhje të gjithanshme për problemet e fermerëve dhe klientëve
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-16">
              Platforma në Numra
            </h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-green-100">Fermerë të Regjistruar</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-green-100">Produkte të Disponueshme</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-green-100">Klientë Aktivë</div>
              </div>
    <div>
                <div className="text-4xl font-bold mb-2">50+</div>
                <div className="text-green-100">Qytete të Mbuluara</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Gati të Filloni?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bashkohuni me platformën e parë për fermerët në Shqipëri dhe filloni të rritni biznesin tuaj
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/register" 
              className="bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Regjistrohu Tani
            </Link>
            <Link 
              href="/contact" 
              className="bg-gray-100 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Na Kontaktoni
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">E</span>
                </div>
                <span className="text-xl font-bold">E-Farmer Albania</span>
              </div>
              <p className="text-gray-400">
                Platforma e parë në Shqipëri për lidhjen e fermerëve me klientët.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Lidhje të Shpejta</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/" className="hover:text-white">Ballina</Link></li>
                <li><Link href="/products" className="hover:text-white">Produktet</Link></li>
                <li><Link href="/farmers" className="hover:text-white">Fermerët</Link></li>
                <li><Link href="/about" className="hover:text-white">Rreth Nesh</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Mbështetje</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/help" className="hover:text-white">Ndihmë</Link></li>
                <li><Link href="/contact" className="hover:text-white">Kontakti</Link></li>
                <li><Link href="/privacy" className="hover:text-white">Privatësia</Link></li>
                <li><Link href="/terms" className="hover:text-white">Kushtet</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Kontakti</h3>
              <div className="text-gray-400 space-y-2">
                <p>info@e-farmer.al</p>
                <p>+355 69 123 4567</p>
                <p>Tirana, Albania</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 E-Farmer Albania. Të gjitha të drejtat e rezervuara.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
