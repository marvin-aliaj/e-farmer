'use client';

import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  ClockIcon,
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon
} from '@heroicons/react/24/outline';
import Link from "next/link";

export default function AboutPage() {
  const team = [
    {
      name: 'Gjergj Kola',
      role: 'CEO & Founder',
      image: '👨‍💼',
      description: 'Ekspert në teknologji dhe pasionar për zhvillimin rural'
    },
    {
      name: 'Maria Shkurti',
      role: 'CTO',
      image: '👩‍💻',
      description: 'Specialist në zhvillimin e platformave teknologjike'
    },
    {
      name: 'Arben Dervishi',
      role: 'Head of Operations',
      image: '👨‍🌾',
      description: 'Ekspert në agrikulturë dhe menaxhimin e zinxhirit të furnizimit'
    },
    {
      name: 'Luljeta Berisha',
      role: 'Marketing Director',
      image: '👩‍💼',
      description: 'Specialist në marketing dhe komunikim me fermerët'
    }
  ];

  const stats = [
    { label: 'Fermerë të Regjistruar', value: '500+', icon: <UserGroupIcon className="w-8 h-8 text-green-600" /> },
    { label: 'Produkte të Disponueshme', value: '1000+', icon: <ChartBarIcon className="w-8 h-8 text-blue-600" /> },
    { label: 'Klientë Aktivë', value: '200+', icon: <HeartIcon className="w-8 h-8 text-red-600" /> },
    { label: 'Qytete të Mbuluara', value: '50+', icon: <MapPinIcon className="w-8 h-8 text-purple-600" /> }
  ];

  const values = [
    {
      title: 'Transparenca',
      description: 'Ne besojmë në transparencë të plotë në të gjitha transaksionet dhe komunikimet.',
      icon: '🔍'
    },
    {
      title: 'Cilësia',
      description: 'Garantojmë cilësinë e lartë të produkteve dhe shërbimeve që ofrojmë.',
      icon: '⭐'
    },
    {
      title: 'Besueshmëria',
      description: 'Jemi partner i besueshëm për të gjithë fermerët dhe klientët tanë.',
      icon: '🤝'
    },
    {
      title: 'Inovacioni',
      description: 'Përdorim teknologjinë më të fundit për të përmirësuar eksperiencën e përdoruesve.',
      icon: '💡'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Rreth <span className="text-green-600">E-Farmer Albania</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Platforma e parë në Shqipëri që lidh fermerët me klientët dhe shitësit me shumicë,
              duke ofruar zgjidhje të gjithanshme për problemet e transportit dhe magazinimit.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Misioni Ynë</h2>
              <p className="text-lg text-gray-600 mb-6">
                Misioni ynë është të revolucionojmë mënyrën se si fermerët shqiptarë lidhen me tregun,
                duke ofruar një platformë teknologjike që lehtëson tregtinë, rrit efikasitetin dhe
                promovon produktet e cilësisë së lartë.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Ne besojmë se çdo fermer duhet të ketë akses të drejtpërdrejtë në treg, dhe çdo klient
                duhet të ketë akses në produktet më të mira të fermerëve tanë.
              </p>
              <div className="flex items-center space-x-4">
                <ShieldCheckIcon className="w-8 h-8 text-green-600" />
                <span className="text-lg font-semibold text-gray-900">
                  Siguruar, i Besuar, i Suksesshëm
                </span>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-green-200 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🌱</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Vizioni Ynë</h3>
                <p className="text-gray-700">
                  Të bëhemi platforma kryesore për tregtinë e produkteve agrikole në Shqipëri,
                  duke kontribuar në zhvillimin e qëndrueshëm të ekonomisë rurale dhe sigurimin
                  e ushqimit të freskët për të gjithë shqiptarët.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Platforma në Numra
            </h2>
            <p className="text-xl text-gray-600">
              Rezultatet tona deri më tani
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Vlerat Tona
            </h2>
            <p className="text-xl text-gray-600">
              Parimet që na udhëheqin në punën tonë
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ekipi Ynë
            </h2>
            <p className="text-xl text-gray-600">
              Njerëzit pasionarë që e bëjnë të mundur këtë platformë
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-4xl mb-4">{member.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-green-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Historia Jonë
            </h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                E-Farmer Albania u lind nga një vizion i thjeshtë: të lidhim fermerët shqiptarë
                me tregun në një mënyrë të drejtpërdrejtë dhe efikase. Duke parë sfidat që
                përballin fermerët në vendimmarrje, transportin dhe magazinimin e produkteve,
                vendosëm të krijonim një zgjidhje teknologjike.
              </p>
              <p>
                Nga një ide e vogël në një platformë të plotë, ne kemi punuar me fermerë të
                ndryshëm për të kuptuar nevojat e tyre dhe për të krijuar një sistem që
                vërtet funksionon për ta.
              </p>
              <p>
                Sot, jemi krenarë që kemi ndihmuar mbi 500 fermerë të lidhen me tregun dhe
                të rrisin biznesin e tyre, ndërsa kemi ofruar klientëve akses në produktet
                më të mira të fermës shqiptare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Bashkohuni me Ne
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Nëse jeni fermer ose klient dhe dëshironi të përfshini në platformën tonë,
            ne jemi këtu për t&apos;ju ndihmuar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/register/producer"
              className="bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Regjistrohu si Fermer
            </Link>
            <Link
              href="/register/client"
              className="bg-green-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 transition-colors"
            >
              Regjistrohu si Klient
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
