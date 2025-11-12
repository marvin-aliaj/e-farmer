'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  StarIcon,
  ShoppingCartIcon,
  MapPinIcon,
  CalendarIcon,
  TruckIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline';

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSeason, setSelectedSeason] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const seasons = [
    { id: 'all', name: 'Të Gjitha', icon: '🌿', color: 'bg-gray-100' },
    { id: 'spring', name: 'Pranvera', icon: '🌸', color: 'bg-pink-100' },
    { id: 'summer', name: 'Vera', icon: '☀️', color: 'bg-yellow-100' },
    { id: 'fall', name: 'Vjeshta', icon: '🍂', color: 'bg-orange-100' },
    { id: 'winter', name: 'Dimri', icon: '❄️', color: 'bg-blue-100' }
  ];

  const categories = [
    { id: 'all', name: 'Të Gjitha' },
    { id: 'vegetables', name: 'Perime' },
    { id: 'fruits', name: 'Fruta' },
    { id: 'bio', name: 'Produkte Bio' },
    { id: 'processed', name: 'Produkte të Përpunuara' }
  ];

  const products = [
    // Spring Products
    { 
      id: 1, 
      name: 'Sallatë', 
      farmer: 'Ferma Kola', 
      location: 'Korçë',
      price: '€1.80/kg', 
      quantity: '50kg', 
      rating: 4.8, 
      season: 'spring',
      category: 'vegetables',
      image: '🥬',
      description: 'Sallatë e freskët e kultivuar organikisht',
      certifications: ['Organik', 'EU Standard'],
      delivery: '2-3 ditë'
    },
    { 
      id: 2, 
      name: 'Rrënjë', 
      farmer: 'Ferma Shkurti', 
      location: 'Elbasan',
      price: '€2.20/kg', 
      quantity: '30kg', 
      rating: 4.9, 
      season: 'spring',
      category: 'vegetables',
      image: '🥕',
      description: 'Rrënjë të ëmbla dhe të shëndetshme',
      certifications: ['Bio'],
      delivery: '1-2 ditë'
    },
    { 
      id: 3, 
      name: 'Spinaq', 
      farmer: 'Ferma Kola', 
      location: 'Korçë',
      price: '€1.50/kg', 
      quantity: '25kg', 
      rating: 4.7, 
      season: 'spring',
      category: 'vegetables',
      image: '🥬',
      description: 'Spinaq i freskët me vitaminë të lartë',
      certifications: ['Organik'],
      delivery: '2-3 ditë'
    },

    // Summer Products
    { 
      id: 4, 
      name: 'Domate', 
      farmer: 'Ferma Kola', 
      location: 'Korçë',
      price: '€2.50/kg', 
      quantity: '100kg', 
      rating: 4.8, 
      season: 'summer',
      category: 'vegetables',
      image: '🍅',
      description: 'Domate të pjekura në diell, të shijshme',
      certifications: ['Organik', 'EU Standard'],
      delivery: '1-2 ditë'
    },
    { 
      id: 5, 
      name: 'Kastravec', 
      farmer: 'Ferma Dervishi', 
      location: 'Fier',
      price: '€2.00/kg', 
      quantity: '75kg', 
      rating: 4.7, 
      season: 'summer',
      category: 'vegetables',
      image: '🥒',
      description: 'Kastravec të freskët dhe të krishtë',
      certifications: ['Bio'],
      delivery: '2-3 ditë'
    },
    { 
      id: 6, 
      name: 'Speca', 
      farmer: 'Ferma Shkurti', 
      location: 'Elbasan',
      price: '€3.00/kg', 
      quantity: '40kg', 
      rating: 4.9, 
      season: 'summer',
      category: 'vegetables',
      image: '🫑',
      description: 'Speca të larmishëm në ngjyra',
      certifications: ['Organik'],
      delivery: '1-2 ditë'
    },

    // Fall Products
    { 
      id: 7, 
      name: 'Patate', 
      farmer: 'Ferma Shkurti', 
      location: 'Elbasan',
      price: '€1.20/kg', 
      quantity: '200kg', 
      rating: 4.9, 
      season: 'fall',
      category: 'vegetables',
      image: '🥔',
      description: 'Patate të cilësisë së lartë',
      certifications: ['EU Standard'],
      delivery: '1-2 ditë'
    },
    { 
      id: 8, 
      name: 'Qepë', 
      farmer: 'Ferma Kola', 
      location: 'Korçë',
      price: '€1.80/kg', 
      quantity: '80kg', 
      rating: 4.8, 
      season: 'fall',
      category: 'vegetables',
      image: '🧅',
      description: 'Qepë të ëmbla dhe të shëndetshme',
      certifications: ['Organik'],
      delivery: '2-3 ditë'
    },
    { 
      id: 9, 
      name: 'Karrota', 
      farmer: 'Ferma Dervishi', 
      location: 'Fier',
      price: '€1.50/kg', 
      quantity: '60kg', 
      rating: 4.7, 
      season: 'fall',
      category: 'vegetables',
      image: '🥕',
      description: 'Karrota të ëmbla dhe me vitaminë',
      certifications: ['Bio'],
      delivery: '1-2 ditë'
    },

    // Winter Products
    { 
      id: 10, 
      name: 'Portokall', 
      farmer: 'Ferma Hoxha', 
      location: 'Shkodër',
      price: '€2.80/kg', 
      quantity: '45kg', 
      rating: 4.6, 
      season: 'winter',
      category: 'fruits',
      image: '🍊',
      description: 'Portokall të ëmbla dhe me vitaminë C',
      certifications: ['EU Standard'],
      delivery: '2-3 ditë'
    },
    { 
      id: 11, 
      name: 'Limoni', 
      farmer: 'Ferma Hoxha', 
      location: 'Shkodër',
      price: '€3.20/kg', 
      quantity: '30kg', 
      rating: 4.8, 
      season: 'winter',
      category: 'fruits',
      image: '🍋',
      description: 'Limoni të freskët dhe të acidit',
      certifications: ['Bio'],
      delivery: '2-3 ditë'
    },
    { 
      id: 12, 
      name: 'Mandarina', 
      farmer: 'Ferma Hoxha', 
      location: 'Shkodër',
      price: '€2.50/kg', 
      quantity: '35kg', 
      rating: 4.7, 
      season: 'winter',
      category: 'fruits',
      image: '🍊',
      description: 'Mandarina të ëmbla dhe të lehta',
      certifications: ['EU Standard'],
      delivery: '2-3 ditë'
    },

    // Bio Products
    { 
      id: 13, 
      name: 'Vaj Ulliri', 
      farmer: 'Ferma Dervishi', 
      location: 'Fier',
      price: '€8.50/L', 
      quantity: '50L', 
      rating: 4.9, 
      season: 'all',
      category: 'bio',
      image: '🫒',
      description: 'Vaj ulliri i pastër dhe organik',
      certifications: ['Bio', 'EU Standard'],
      delivery: '3-5 ditë'
    },
    { 
      id: 14, 
      name: 'Raki', 
      farmer: 'Ferma Dervishi', 
      location: 'Fier',
      price: '€15.00/L', 
      quantity: '20L', 
      rating: 4.8, 
      season: 'all',
      category: 'processed',
      image: '🍷',
      description: 'Raki tradicionale e bërë me dorë',
      certifications: ['Tradicionale'],
      delivery: '5-7 ditë'
    },
    { 
      id: 15, 
      name: 'Vera', 
      farmer: 'Ferma Dervishi', 
      location: 'Fier',
      price: '€12.00/L', 
      quantity: '30L', 
      rating: 4.7, 
      season: 'all',
      category: 'processed',
      image: '🍷',
      description: 'Vera e kuqe e cilësisë së lartë',
      certifications: ['Tradicionale'],
      delivery: '5-7 ditë'
    }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.farmer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSeason = selectedSeason === 'all' || product.season === selectedSeason;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    
    return matchesSearch && matchesSeason && matchesCategory;
  });

  const getSeasonColor = (season) => {
    switch (season) {
      case 'spring': return 'bg-pink-100 text-pink-800';
      case 'summer': return 'bg-yellow-100 text-yellow-800';
      case 'fall': return 'bg-orange-100 text-orange-800';
      case 'winter': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category) => {
    switch (category) {
      case 'vegetables': return 'bg-green-100 text-green-800';
      case 'fruits': return 'bg-red-100 text-red-800';
      case 'bio': return 'bg-purple-100 text-purple-800';
      case 'processed': return 'bg-indigo-100 text-indigo-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Produktet e Freskëta</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zbuloni produktet më të mira të fermerëve shqiptarë, të organizuara sipas stinëve dhe kategorive
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Kërko produkte ose fermerë..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Season Filter */}
            <div className="flex flex-wrap gap-2">
              {seasons.map((season) => (
                <button
                  key={season.id}
                  onClick={() => setSelectedSeason(season.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center space-x-2 ${
                    selectedSeason === season.id
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span>{season.icon}</span>
                  <span>{season.name}</span>
                </button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Gjetën <span className="font-semibold text-gray-900">{filteredProducts.length}</span> produkte
            {selectedSeason !== 'all' && ` për stinën ${seasons.find(s => s.id === selectedSeason)?.name}`}
            {selectedCategory !== 'all' && ` në kategorinë ${categories.find(c => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {/* Product Image */}
              <div className="h-48 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <span className="text-6xl">{product.image}</span>
              </div>

              {/* Product Info */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                  <div className="flex items-center space-x-1">
                    <StarIcon className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-600">{product.rating}</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPinIcon className="w-4 h-4 mr-1" />
                    {product.farmer} - {product.location}
                  </div>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="text-sm text-gray-600">Sasia: {product.quantity}</p>
                  <p className="text-lg font-bold text-gray-900">{product.price}</p>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getSeasonColor(product.season)}`}>
                    {seasons.find(s => s.id === product.season)?.name}
                  </span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(product.category)}`}>
                    {categories.find(c => c.id === product.category)?.name}
                  </span>
                </div>

                {/* Certifications */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {product.certifications.map((cert, index) => (
                    <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      <ShieldCheckIcon className="w-3 h-3 inline mr-1" />
                      {cert}
                    </span>
                  ))}
                </div>

                {/* Delivery Info */}
                <div className="flex items-center text-sm text-gray-600 mb-4">
                  <TruckIcon className="w-4 h-4 mr-1" />
                  Dorëzimi: {product.delivery}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-sm font-medium flex items-center justify-center space-x-2">
                    <ShoppingCartIcon className="w-4 h-4" />
                    <span>Porosit</span>
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                    Detaje
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nuk u gjetën produkte</h3>
            <p className="text-gray-600 mb-4">
              Provoni të ndryshoni kriteret e kërkimit ose filtron për të gjetur produkte të tjera.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedSeason('all');
                setSelectedCategory('all');
              }}
              className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
            >
              Fshi Filtron
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
