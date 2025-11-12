'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  PlusIcon,
  ChartBarIcon,
  TruckIcon,
  HomeIcon,
  CloudIcon,
  DocumentTextIcon,
  StarIcon,
  CalendarIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  CurrencyEuroIcon
} from '@heroicons/react/24/outline';

export default function ProducerDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  // Dummy data
  const stats = [
    { label: 'Produkte Aktive', value: '24', icon: <HomeIcon className="w-6 h-6" />, color: 'text-green-600' },
    { label: 'Porositë Aktive', value: '12', icon: <DocumentTextIcon className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Të Ardhurat e Muajit', value: '€2,450', icon: <CurrencyEuroIcon className="w-6 h-6" />, color: 'text-purple-600' },
    { label: 'Vlerësimi Mesatar', value: '4.8', icon: <StarIcon className="w-6 h-6" />, color: 'text-yellow-600' }
  ];

  const recentOrders = [
    { id: '#ORD-001', client: 'Supermarket ABC', product: 'Domate', quantity: '50kg', status: 'pending', date: '2024-01-15' },
    { id: '#ORD-002', client: 'Restaurant XYZ', product: 'Sallatë', quantity: '20kg', status: 'confirmed', date: '2024-01-14' },
    { id: '#ORD-003', client: 'Market DEF', product: 'Kastravec', quantity: '30kg', status: 'shipped', date: '2024-01-13' }
  ];

  const products = [
    { name: 'Domate', season: 'Vera', quantity: '100kg', price: '€2.50/kg', status: 'active' },
    { name: 'Sallatë', season: 'Pranvera', quantity: '50kg', price: '€1.80/kg', status: 'active' },
    { name: 'Kastravec', season: 'Vera', quantity: '75kg', price: '€2.00/kg', status: 'active' },
    { name: 'Patate', season: 'Vjeshta', quantity: '200kg', price: '€1.20/kg', status: 'inactive' }
  ];

  const weatherData = {
    today: { temp: '22°C', condition: 'Diell', humidity: '65%' },
    tomorrow: { temp: '18°C', condition: 'Re', humidity: '70%' },
    forecast: [
      { day: 'Sot', temp: '22°C', condition: 'Diell' },
      { day: 'Nesër', temp: '18°C', condition: 'Re' },
      { day: 'Pasnesër', temp: '20°C', condition: 'Pjesërisht re' }
    ]
  };

  const tabs = [
    { id: 'overview', name: 'Përmbledhje', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'products', name: 'Produktet', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'orders', name: 'Porositë', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { id: 'weather', name: 'Moti', icon: <CloudIcon className="w-5 h-5" /> },
    { id: 'transport', name: 'Transporti', icon: <TruckIcon className="w-5 h-5" /> },
    { id: 'certificates', name: 'Certifikimet', icon: <DocumentTextIcon className="w-5 h-5" /> }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'confirmed': return 'text-blue-600 bg-blue-100';
      case 'shipped': return 'text-green-600 bg-green-100';
      case 'active': return 'text-green-600 bg-green-100';
      case 'inactive': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard i Fermerit</h1>
              <p className="text-gray-600">Mirë se vini, Gjergj Kola</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/products/add" 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2"
              >
                <PlusIcon className="w-5 h-5" />
                <span>Shto Produkt</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <div className="lg:w-64">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <ul className="space-y-2">
                {tabs.map((tab) => (
                  <li key={tab.id}>
                    <button
                      onClick={() => setActiveTab(tab.id)}
                      className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                        activeTab === tab.id
                          ? 'bg-green-100 text-green-700'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {tab.icon}
                      <span>{tab.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                        </div>
                        <div className={`${stat.color}`}>
                          {stat.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Porositë e Fundit</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {recentOrders.map((order) => (
                        <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="font-medium text-gray-900">{order.id}</p>
                                <p className="text-sm text-gray-600">{order.client}</p>
                              </div>
                              <div>
                                <p className="font-medium text-gray-900">{order.product}</p>
                                <p className="text-sm text-gray-600">{order.quantity}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">{order.date}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                              {order.status === 'pending' && 'Në Pritje'}
                              {order.status === 'confirmed' && 'Konfirmuar'}
                              {order.status === 'shipped' && 'Dërguar'}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Veprime të Shpejta</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Link href="/products/add" className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-green-500 hover:bg-green-50 transition-colors text-center">
                      <PlusIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Shto Produkt të Ri</p>
                    </Link>
                    <Link href="/orders" className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-colors text-center">
                      <DocumentTextIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Shiko Porositë</p>
                    </Link>
                    <Link href="/weather" className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors text-center">
                      <CloudIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm font-medium text-gray-700">Parashikimi i Motit</p>
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Produktet e Mia</h3>
                    <Link href="/products/add" className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                      <PlusIcon className="w-5 h-5" />
                      <span>Shto Produkt</span>
                    </Link>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {products.map((product, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-6">
                              <div>
                                <p className="font-medium text-gray-900">{product.name}</p>
                                <p className="text-sm text-gray-600">Stina: {product.season}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Sasia: {product.quantity}</p>
                                <p className="text-sm text-gray-600">Çmimi: {product.price}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                              {product.status === 'active' && 'Aktiv'}
                              {product.status === 'inactive' && 'Jo Aktiv'}
                            </span>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              Modifiko
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Weather Tab */}
            {activeTab === 'weather' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Parashikimi i Motit</h3>
                  
                  {/* Current Weather */}
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-xl font-semibold">Moti Sot</h4>
                        <p className="text-3xl font-bold">{weatherData.today.temp}</p>
                        <p className="text-blue-100">{weatherData.today.condition}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-100">Lagështia</p>
                        <p className="text-lg font-semibold">{weatherData.today.humidity}</p>
                      </div>
                    </div>
                  </div>

                  {/* Weather Forecast */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {weatherData.forecast.map((day, index) => (
                      <div key={index} className="bg-gray-50 rounded-lg p-4 text-center">
                        <p className="font-medium text-gray-900">{day.day}</p>
                        <p className="text-2xl font-bold text-gray-900">{day.temp}</p>
                        <p className="text-sm text-gray-600">{day.condition}</p>
                      </div>
                    ))}
                  </div>

                  {/* Weather Alerts */}
                  <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex items-center space-x-2">
                      <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />
                      <p className="text-sm font-medium text-yellow-800">
                        Paralajmërim: Pritet shi i fortë nesër. Rekomandohet të mbrohen produktet e jashtme.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Transport Tab */}
            {activeTab === 'transport' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Menaxhimi i Transportit</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Own Trucks */}
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Kamionët e Mia</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Kamion 1</p>
                            <p className="text-sm text-gray-600">Kapaciteti: 5 ton</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Disponueshëm</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Kamion 2</p>
                            <p className="text-sm text-gray-600">Kapaciteti: 3 ton</p>
                          </div>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Në Punë</span>
                        </div>
                      </div>
                    </div>

                    {/* Logistics Partners */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Partnerët Logjistikë</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Transporti ABC</p>
                            <p className="text-sm text-gray-600">Çmimi: €0.50/km</p>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Porosit
                          </button>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Logistika XYZ</p>
                            <p className="text-sm text-gray-600">Çmimi: €0.45/km</p>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Porosit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Certificates Tab */}
            {activeTab === 'certificates' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-6">Certifikimet dhe Licencat</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-6 h-6 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">Certifikata Organike</p>
                          <p className="text-sm text-gray-600">Skadon: 15 Mars 2025</p>
                        </div>
                      </div>
                      <button className="text-green-600 hover:text-green-800 text-sm font-medium">
                        Shiko
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <CheckCircleIcon className="w-6 h-6 text-blue-600" />
                        <div>
                          <p className="font-medium text-gray-900">Licenca EU Export</p>
                          <p className="text-sm text-gray-600">Skadon: 20 Qershor 2025</p>
                        </div>
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                        Shiko
                      </button>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-yellow-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <ClockIcon className="w-6 h-6 text-yellow-600" />
                        <div>
                          <p className="font-medium text-gray-900">Certifikata Bio</p>
                          <p className="text-sm text-gray-600">Në Proces - Pritet: 10 Prill 2024</p>
                        </div>
                      </div>
                      <button className="text-yellow-600 hover:text-yellow-800 text-sm font-medium">
                        Gjurmë
                      </button>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <h4 className="font-medium text-gray-900 mb-2">Kërkesat e Cilësisë EU</h4>
                    <p className="text-sm text-gray-600 mb-3">
                      Sigurohuni që produktet tuaja plotësojnë standardet e Bashkimit Evropian.
                    </p>
                    <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                      Shiko Kërkesat →
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
