'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  ChartBarIcon,
  StarIcon,
  CalendarIcon,
  TruckIcon,
  HomeIcon,
  DocumentTextIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
  ClockIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ClientDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('all');

  // Dummy data
  const stats = [
    { label: 'Porositë Aktive', value: '8', icon: <ShoppingCartIcon className="w-6 h-6" />, color: 'text-blue-600' },
    { label: 'Fermerë të Besuar', value: '15', icon: <UserGroupIcon className="w-6 h-6" />, color: 'text-green-600' },
    { label: 'Shpenzimet e Muajit', value: '€3,200', icon: <CurrencyEuroIcon className="w-6 h-6" />, color: 'text-purple-600' },
    { label: 'Vlerësimi Mesatar', value: '4.9', icon: <StarIcon className="w-6 h-6" />, color: 'text-yellow-600' }
  ];

  const recentOrders = [
    { id: '#ORD-001', farmer: 'Ferma Kola', product: 'Domate', quantity: '50kg', status: 'pending', date: '2024-01-15' },
    { id: '#ORD-002', farmer: 'Ferma Shkurti', product: 'Sallatë', quantity: '20kg', status: 'confirmed', date: '2024-01-14' },
    { id: '#ORD-003', farmer: 'Ferma Dervishi', product: 'Kastravec', quantity: '30kg', status: 'delivered', date: '2024-01-13' }
  ];

  const farmers = [
    { name: 'Ferma Kola', location: 'Korçë', rating: 4.8, products: 12, specialties: ['Domate', 'Sallatë', 'Kastravec'] },
    { name: 'Ferma Shkurti', location: 'Elbasan', rating: 4.9, products: 8, specialties: ['Patate', 'Qepë', 'Karrota'] },
    { name: 'Ferma Dervishi', location: 'Fier', rating: 4.7, products: 15, specialties: ['Vaj Ulliri', 'Raki', 'Vera'] },
    { name: 'Ferma Hoxha', location: 'Shkodër', rating: 4.6, products: 10, specialties: ['Mollë', 'Dardhë', 'Qershi'] }
  ];

  const seasonalProducts = {
    spring: [
      { name: 'Sallatë', farmer: 'Ferma Kola', price: '€1.80/kg', quantity: '50kg', rating: 4.8 },
      { name: 'Rrënjë', farmer: 'Ferma Shkurti', price: '€2.20/kg', quantity: '30kg', rating: 4.9 },
      { name: 'Spinaq', farmer: 'Ferma Kola', price: '€1.50/kg', quantity: '25kg', rating: 4.7 }
    ],
    summer: [
      { name: 'Domate', farmer: 'Ferma Kola', price: '€2.50/kg', quantity: '100kg', rating: 4.8 },
      { name: 'Kastravec', farmer: 'Ferma Dervishi', price: '€2.00/kg', quantity: '75kg', rating: 4.7 },
      { name: 'Speca', farmer: 'Ferma Shkurti', price: '€3.00/kg', quantity: '40kg', rating: 4.9 }
    ],
    fall: [
      { name: 'Patate', farmer: 'Ferma Shkurti', price: '€1.20/kg', quantity: '200kg', rating: 4.9 },
      { name: 'Qepë', farmer: 'Ferma Kola', price: '€1.80/kg', quantity: '80kg', rating: 4.8 },
      { name: 'Karrota', farmer: 'Ferma Dervishi', price: '€1.50/kg', quantity: '60kg', rating: 4.7 }
    ],
    winter: [
      { name: 'Portokall', farmer: 'Ferma Hoxha', price: '€2.80/kg', quantity: '45kg', rating: 4.6 },
      { name: 'Limoni', farmer: 'Ferma Hoxha', price: '€3.20/kg', quantity: '30kg', rating: 4.8 },
      { name: 'Mandarina', farmer: 'Ferma Hoxha', price: '€2.50/kg', quantity: '35kg', rating: 4.7 }
    ]
  };

  const contracts = [
    { farmer: 'Ferma Kola', product: 'Domate', quantity: '200kg/muaj', price: '€2.30/kg', status: 'active', expires: '2024-06-15' },
    { farmer: 'Ferma Shkurti', product: 'Patate', quantity: '500kg/muaj', price: '€1.10/kg', status: 'active', expires: '2024-08-20' },
    { farmer: 'Ferma Dervishi', product: 'Vaj Ulliri', quantity: '50L/muaj', price: '€8.50/L', status: 'pending', expires: '2024-05-10' }
  ];

  const tabs = [
    { id: 'overview', name: 'Përmbledhje', icon: <ChartBarIcon className="w-5 h-5" /> },
    { id: 'products', name: 'Produktet', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'farmers', name: 'Fermerët', icon: <UserGroupIcon className="w-5 h-5" /> },
    { id: 'orders', name: 'Porositë', icon: <ShoppingCartIcon className="w-5 h-5" /> },
    { id: 'contracts', name: 'Kontratat', icon: <DocumentTextIcon className="w-5 h-5" /> },
    { id: 'transport', name: 'Transporti', icon: <TruckIcon className="w-5 h-5" /> }
  ];

  const seasons = [
    { id: 'all', name: 'Të Gjitha', icon: '🌿' },
    { id: 'spring', name: 'Pranvera', icon: '🌸' },
    { id: 'summer', name: 'Vera', icon: '☀️' },
    { id: 'fall', name: 'Vjeshta', icon: '🍂' },
    { id: 'winter', name: 'Dimri', icon: '❄️' }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return 'text-yellow-600 bg-yellow-100';
      case 'confirmed': return 'text-blue-600 bg-blue-100';
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'active': return 'text-green-600 bg-green-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'pending': return 'Në Pritje';
      case 'confirmed': return 'Konfirmuar';
      case 'delivered': return 'Dërguar';
      case 'active': return 'Aktiv';
      default: return status;
    }
  };

  const filteredProducts = selectedSeason === 'all' 
    ? Object.values(seasonalProducts).flat()
    : seasonalProducts[selectedSeason] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard i Klientit</h1>
              <p className="text-gray-600">Mirë se vini, Supermarket ABC</p>
            </div>
            <div className="flex items-center space-x-4">
              <Link 
                href="/orders/new" 
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-2"
              >
                <ShoppingCartIcon className="w-5 h-5" />
                <span>Porositë të Reja</span>
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
                          ? 'bg-blue-100 text-blue-700'
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
                                <p className="text-sm text-gray-600">{order.farmer}</p>
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
                              {getStatusText(order.status)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Top Farmers */}
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Fermerët e Besuar</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {farmers.slice(0, 3).map((farmer, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-4">
                              <div>
                                <p className="font-medium text-gray-900">{farmer.name}</p>
                                <p className="text-sm text-gray-600">{farmer.location}</p>
                              </div>
                              <div className="flex items-center space-x-1">
                                <StarIcon className="w-4 h-4 text-yellow-500" />
                                <span className="text-sm text-gray-600">{farmer.rating}</span>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">{farmer.products} produkte</p>
                              </div>
                            </div>
                          </div>
                          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                            Shiko Profilin
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Products Tab */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                {/* Search and Filters */}
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                      <div className="relative">
                        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Kërko produkte..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      {seasons.map((season) => (
                        <button
                          key={season.id}
                          onClick={() => setSelectedSeason(season.id)}
                          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                            selectedSeason === season.id
                              ? 'bg-blue-600 text-white'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          <span className="mr-2">{season.icon}</span>
                          {season.name}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          <StarIcon className="w-4 h-4 text-yellow-500" />
                          <span className="text-sm text-gray-600">{product.rating}</span>
                        </div>
                      </div>
                      <div className="space-y-2 mb-4">
                        <p className="text-sm text-gray-600">Fermeri: {product.farmer}</p>
                        <p className="text-sm text-gray-600">Sasia: {product.quantity}</p>
                        <p className="text-lg font-bold text-gray-900">{product.price}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 text-sm font-medium">
                          Porosit
                        </button>
                        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                          Detaje
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Farmers Tab */}
            {activeTab === 'farmers' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b">
                    <h3 className="text-lg font-semibold text-gray-900">Fermerët e Disponueshëm</h3>
                  </div>
                  <div className="p-6">
                    <div className="space-y-6">
                      {farmers.map((farmer, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-6">
                          <div className="flex justify-between items-start mb-4">
                            <div>
                              <h4 className="text-xl font-semibold text-gray-900">{farmer.name}</h4>
                              <p className="text-gray-600">{farmer.location}</p>
                            </div>
                            <div className="flex items-center space-x-1">
                              <StarIcon className="w-5 h-5 text-yellow-500" />
                              <span className="text-lg font-semibold text-gray-900">{farmer.rating}</span>
                            </div>
                          </div>
                          <div className="mb-4">
                            <p className="text-sm text-gray-600 mb-2">Specialitetet:</p>
                            <div className="flex flex-wrap gap-2">
                              {farmer.specialties.map((specialty, idx) => (
                                <span key={idx} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                                  {specialty}
                                </span>
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <p className="text-sm text-gray-600">{farmer.products} produkte të disponueshme</p>
                            <div className="flex space-x-2">
                              <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                                Shiko Profilin
                              </button>
                              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm font-medium">
                                Kontakto
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Contracts Tab */}
            {activeTab === 'contracts' && (
              <div className="space-y-6">
                <div className="bg-white rounded-lg shadow-sm">
                  <div className="p-6 border-b flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900">Kontratat Aktive</h3>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm font-medium">
                      Kontratë e Re
                    </button>
                  </div>
                  <div className="p-6">
                    <div className="space-y-4">
                      {contracts.map((contract, index) => (
                        <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                          <div className="flex-1">
                            <div className="flex items-center space-x-6">
                              <div>
                                <p className="font-medium text-gray-900">{contract.farmer}</p>
                                <p className="text-sm text-gray-600">{contract.product}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Sasia: {contract.quantity}</p>
                                <p className="text-sm text-gray-600">Çmimi: {contract.price}</p>
                              </div>
                              <div>
                                <p className="text-sm text-gray-600">Skadon: {contract.expires}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(contract.status)}`}>
                              {getStatusText(contract.status)}
                            </span>
                            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                              Detaje
                            </button>
                          </div>
                        </div>
                      ))}
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
                    {/* Delivery Tracking */}
                    <div className="bg-blue-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Gjurmimi i Dërgesave</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">#ORD-001</p>
                            <p className="text-sm text-gray-600">Ferma Kola → Supermarket ABC</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Në Rrugë</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">#ORD-002</p>
                            <p className="text-sm text-gray-600">Ferma Shkurti → Supermarket ABC</p>
                          </div>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Në Pritje</span>
                        </div>
                      </div>
                    </div>

                    {/* Storage Management */}
                    <div className="bg-green-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Menaxhimi i Magazinimit</h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Dhoma e Ftohtë A</p>
                            <p className="text-sm text-gray-600">Temperatura: 2°C</p>
                          </div>
                          <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">Aktiv</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white rounded-lg">
                          <div>
                            <p className="font-medium">Dhoma e Ftohtë B</p>
                            <p className="text-sm text-gray-600">Temperatura: 5°C</p>
                          </div>
                          <span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">Në Mirëmbajtje</span>
                        </div>
                      </div>
                    </div>
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
