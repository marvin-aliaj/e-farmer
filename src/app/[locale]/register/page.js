'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  HomeIcon, 
  ChartBarIcon, 
  CheckCircleIcon,
  ArrowRightIcon,
  UserIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon
} from '@heroicons/react/24/outline';

export default function RegisterPage() {
  const [selectedUserType, setSelectedUserType] = useState('');

  const userTypes = [
    {
      id: 'producer',
      title: 'Fermer / Prodhues',
      description: 'Regjistrohu si fermer për të shitur produktet tuaja',
      icon: <HomeIcon className="w-12 h-12 text-green-600" />,
      features: [
        'Regjistrimi i produkteve dhe sasisë',
        'Menaxhimi i porosive dhe kontratave',
        'Parashikimi i motit për vendimmarrje',
        'Menaxhimi i humbjeve të ushqimit',
        'Certifikimet dhe licencat',
        'Kërkesat e cilësisë EU'
      ],
      color: 'green'
    },
    {
      id: 'client',
      title: 'Klient / Shitës me Shumicë',
      description: 'Regjistrohu si klient për të porositur produktet e freskëta',
      icon: <ChartBarIcon className="w-12 h-12 text-blue-600" />,
      features: [
        'Porositje në shumicë dhe pakicë',
        'Kontrata me fermerët',
        'Sistem vlerësimesh',
        'Produkte sipas stinëve',
        'Transporti i organizuar',
        'Menaxhimi i magazinimit'
      ],
      color: 'blue'
    }
  ];

  const getColorClasses = (color) => {
    switch (color) {
      case 'green':
        return {
          bg: 'bg-green-50',
          border: 'border-green-200',
          hover: 'hover:border-green-400',
          selected: 'border-green-500 bg-green-100',
          button: 'bg-green-600 hover:bg-green-700'
        };
      case 'blue':
        return {
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          hover: 'hover:border-blue-400',
          selected: 'border-blue-500 bg-blue-100',
          button: 'bg-blue-600 hover:bg-blue-700'
        };
      default:
        return {
          bg: 'bg-gray-50',
          border: 'border-gray-200',
          hover: 'hover:border-gray-400',
          selected: 'border-gray-500 bg-gray-100',
          button: 'bg-gray-600 hover:bg-gray-700'
        };
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Regjistrohu në Platformë
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Zgjidhni llojin e llogarisë tuaj dhe filloni të përdorni platformën e parë për fermerët në Shqipëri
          </p>
        </div>

        {/* User Type Selection */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {userTypes.map((userType) => {
            const colors = getColorClasses(userType.color);
            const isSelected = selectedUserType === userType.id;
            
            return (
              <div
                key={userType.id}
                onClick={() => setSelectedUserType(userType.id)}
                className={`cursor-pointer rounded-2xl p-8 border-2 transition-all duration-200 ${
                  isSelected 
                    ? `${colors.selected} shadow-lg` 
                    : `${colors.bg} ${colors.border} ${colors.hover} hover:shadow-md`
                }`}
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    {userType.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {userType.title}
                  </h3>
                  <p className="text-gray-600">
                    {userType.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {userType.features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircleIcon className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {isSelected && (
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center space-x-2 text-green-600 font-semibold">
                      <span>Zgjedhur</span>
                      <CheckCircleIcon className="w-5 h-5" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Continue Button */}
        {selectedUserType && (
          <div className="text-center">
            <Link
              href={`/register/${selectedUserType}`}
              className={`inline-flex items-center space-x-2 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors ${
                getColorClasses(userTypes.find(t => t.id === selectedUserType)?.color || 'green').button
              }`}
            >
              <span>Vazhdo me Regjistrimin</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        )}

        {/* Additional Info */}
        <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            Pse të Regjistrohesh?
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserIcon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Komunitet i Besuar</h4>
              <p className="text-gray-600 text-sm">
                Bashkohuni me mbi 500 fermerë dhe 200 klientë të besuar në të gjithë Shqipërinë
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BuildingOfficeIcon className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Biznes i Sigurt</h4>
              <p className="text-gray-600 text-sm">
                Sistemi i vlerësimeve dhe kontratave garanton transaksione të sigurta dhe të besueshme
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPinIcon className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Mbulim Kombëtar</h4>
              <p className="text-gray-600 text-sm">
                Platforma mbulon të gjitha qytetet kryesore të Shqipërisë me shërbime transporti
              </p>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Ke pyetje? Na kontaktoni për ndihmë
          </p>
          <div className="flex justify-center space-x-6">
            <div className="flex items-center space-x-2 text-gray-600">
              <PhoneIcon className="w-4 h-4" />
              <span>+355 69 123 4567</span>
            </div>
            <div className="flex items-center space-x-2 text-gray-600">
              <EnvelopeIcon className="w-4 h-4" />
              <span>info@e-farmer.al</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
