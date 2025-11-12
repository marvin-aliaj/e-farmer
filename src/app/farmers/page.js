'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  MagnifyingGlassIcon,
  StarIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  UserGroupIcon,
  CalendarIcon,
  ShieldCheckIcon,
  TruckIcon
} from '@heroicons/react/24/outline';

export default function FarmersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('all');
  const [selectedRating, setSelectedRating] = useState('all');

  const locations = [
    { id: 'all', name: 'Të Gjitha' },
    { id: 'tirana', name: 'Tirana' },
    { id: 'durres', name: 'Durrës' },
    { id: 'vlore', name: 'Vlorë' },
    { id: 'shkoder', name: 'Shkodër' },
    { id: 'korce', name: 'Korçë' },
    { id: 'elbasan', name: 'Elbasan' },
    { id: 'fier', name: 'Fier' },
    { id: 'gjirokaster', name: 'Gjirokastër' },
    { id: 'kukes', name: 'Kukës' }
  ];

  const ratingFilters = [
    { id: 'all', name: 'Të Gjitha', min: 0 },
    { id: 'excellent', name: 'Shkëlqyeshëm (4.5+)', min: 4.5 },
    { id: 'very-good', name: 'Shumë Mirë (4.0+)', min: 4.0 },
    { id: 'good', name: 'Mirë (3.5+)', min: 3.5 }
  ];

  const farmers = [
    {
      id: 1,
      name: 'Ferma Kola',
      owner: 'Gjergj Kola',
      location: 'Korçë',
      locationId: 'korce',
      rating: 4.8,
      reviews: 156,
      products: 24,
      specialties: ['Domate', 'Sallatë', 'Kastravec', 'Qepë'],
      certifications: ['Organik', 'EU Standard', 'Bio'],
      established: '2015',
      description: 'Ferma familjare me traditë 20-vjeçare në kultivimin e perimeve organike.',
      contact: {
        phone: '+355 69 123 4567',
        email: 'gjergj.kola@ferma.al',
        address: 'Fshati Voskopojë, Korçë'
      },
      services: ['Transporti', 'Magazinimi', 'Certifikime'],
      image: '🌱'
    },
    {
      id: 2,
      name: 'Ferma Shkurti',
      owner: 'Maria Shkurti',
      location: 'Elbasan',
      locationId: 'elbasan',
      rating: 4.9,
      reviews: 203,
      products: 18,
      specialties: ['Patate', 'Qepë', 'Karrota', 'Speca'],
      certifications: ['Bio', 'EU Standard'],
      established: '2018',
      description: 'Specializuar në kultivimin e rrënjëve dhe perimeve tradicionale.',
      contact: {
        phone: '+355 69 234 5678',
        email: 'maria.shkurti@ferma.al',
        address: 'Komuna Labinot-Fushë, Elbasan'
      },
      services: ['Transporti', 'Magazinimi'],
      image: '🥔'
    },
    {
      id: 3,
      name: 'Ferma Dervishi',
      owner: 'Arben Dervishi',
      location: 'Fier',
      locationId: 'fier',
      rating: 4.7,
      reviews: 134,
      products: 15,
      specialties: ['Vaj Ulliri', 'Raki', 'Vera', 'Kastravec'],
      certifications: ['Tradicionale', 'Bio'],
      established: '2010',
      description: 'Ferma tradicionale e specializuar në produktet e ullirit dhe alkoolit.',
      contact: {
        phone: '+355 69 345 6789',
        email: 'arben.dervishi@ferma.al',
        address: 'Fshati Ardenica, Fier'
      },
      services: ['Transporti', 'Magazinimi', 'Certifikime'],
      image: '🫒'
    },
    {
      id: 4,
      name: 'Ferma Hoxha',
      owner: 'Fatmir Hoxha',
      location: 'Shkodër',
      locationId: 'shkoder',
      rating: 4.6,
      reviews: 98,
      products: 12,
      specialties: ['Mollë', 'Dardhë', 'Qershi', 'Portokall'],
      certifications: ['EU Standard'],
      established: '2012',
      description: 'Ferma e specializuar në kultivimin e frutave dhe agrumëve.',
      contact: {
        phone: '+355 69 456 7890',
        email: 'fatmir.hoxha@ferma.al',
        address: 'Fshati Koplik, Shkodër'
      },
      services: ['Transporti'],
      image: '🍎'
    },
    {
      id: 5,
      name: 'Ferma Berisha',
      owner: 'Luljeta Berisha',
      location: 'Tirana',
      locationId: 'tirana',
      rating: 4.5,
      reviews: 87,
      products: 20,
      specialties: ['Sallatë', 'Spinaq', 'Rrënjë', 'Speca'],
      certifications: ['Organik', 'Bio'],
      established: '2019',
      description: 'Ferma moderne me teknologji të avancuar për kultivimin e perimeve.',
      contact: {
        phone: '+355 69 567 8901',
        email: 'luljeta.berisha@ferma.al',
        address: 'Komuna Paskuqan, Tirana'
      },
      services: ['Transporti', 'Magazinimi', 'Certifikime'],
      image: '🥬'
    },
    {
      id: 6,
      name: 'Ferma Gjoka',
      owner: 'Ndue Gjoka',
      location: 'Durrës',
      locationId: 'durres',
      rating: 4.4,
      reviews: 76,
      products: 16,
      specialties: ['Domate', 'Kastravec', 'Speca', 'Patate'],
      certifications: ['EU Standard'],
      established: '2016',
      description: 'Ferma familjare me eksperiencë të gjatë në kultivimin e perimeve.',
      contact: {
        phone: '+355 69 678 9012',
        email: 'ndue.gjoka@ferma.al',
        address: 'Fshati Sukth, Durrës'
      },
      services: ['Transporti', 'Magazinimi'],
      image: '🍅'
    }
  ];

  const filteredFarmers = farmers.filter(farmer => {
    const matchesSearch = farmer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farmer.owner.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         farmer.specialties.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesLocation = selectedLocation === 'all' || farmer.locationId === selectedLocation;
    const matchesRating = selectedRating === 'all' || farmer.rating >= ratingFilters.find(r => r.id === selectedRating)?.min;
    
    return matchesSearch && matchesLocation && matchesRating;
  });

  const getRatingColor = (rating) => {
    if (rating >= 4.5) return 'text-green-600 bg-green-100';
    if (rating >= 4.0) return 'text-blue-600 bg-blue-100';
    if (rating >= 3.5) return 'text-yellow-600 bg-yellow-100';
    return 'text-gray-600 bg-gray-100';
  };

  const getRatingText = (rating) => {
    if (rating >= 4.5) return 'Shkëlqyeshëm';
    if (rating >= 4.0) return 'Shumë Mirë';
    if (rating >= 3.5) return 'Mirë';
    return 'Mesatar';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Fermerët e Besuar</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Zbuloni fermerët më të mirë të Shqipërisë dhe lidhuni me ta për produktet e freskëta
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
                  placeholder="Kërko fermerë, pronarë ose specialitete..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Location Filter */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {locations.map((location) => (
                  <option key={location.id} value={location.id}>
                    {location.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Rating Filter */}
            <div className="flex flex-wrap gap-2">
              <select
                value={selectedRating}
                onChange={(e) => setSelectedRating(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              >
                {ratingFilters.map((filter) => (
                  <option key={filter.id} value={filter.id}>
                    {filter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Gjetën <span className="font-semibold text-gray-900">{filteredFarmers.length}</span> fermerë
            {selectedLocation !== 'all' && ` në ${locations.find(l => l.id === selectedLocation)?.name}`}
            {selectedRating !== 'all' && ` me vlerësim ${ratingFilters.find(r => r.id === selectedRating)?.name}`}
          </p>
        </div>

        {/* Farmers Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredFarmers.map((farmer) => (
            <div key={farmer.id} className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
              {/* Farmer Header */}
              <div className="bg-gradient-to-r from-green-50 to-green-100 p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">
                      {farmer.image}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{farmer.name}</h3>
                      <p className="text-gray-600">Pronari: {farmer.owner}</p>
                      <div className="flex items-center text-sm text-gray-600 mt-1">
                        <MapPinIcon className="w-4 h-4 mr-1" />
                        {farmer.location}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`px-3 py-1 rounded-full text-sm font-medium ${getRatingColor(farmer.rating)}`}>
                      {getRatingText(farmer.rating)}
                    </div>
                    <div className="flex items-center space-x-1 mt-1">
                      <StarIcon className="w-4 h-4 text-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">{farmer.rating}</span>
                      <span className="text-sm text-gray-600">({farmer.reviews})</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Farmer Info */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">{farmer.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{farmer.products}</div>
                    <div className="text-sm text-gray-600">Produkte</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{farmer.established}</div>
                    <div className="text-sm text-gray-600">Viti i Themeltimit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gray-900">{farmer.reviews}</div>
                    <div className="text-sm text-gray-600">Vlerësime</div>
                  </div>
                </div>

                {/* Specialties */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Specialitetet:</h4>
                  <div className="flex flex-wrap gap-2">
                    {farmer.specialties.map((specialty, index) => (
                      <span key={index} className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Certifikimet:</h4>
                  <div className="flex flex-wrap gap-2">
                    {farmer.certifications.map((cert, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm flex items-center">
                        <ShieldCheckIcon className="w-3 h-3 mr-1" />
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Services */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Shërbimet:</h4>
                  <div className="flex flex-wrap gap-2">
                    {farmer.services.map((service, index) => (
                      <span key={index} className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm flex items-center">
                        <TruckIcon className="w-3 h-3 mr-1" />
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact Info */}
                <div className="border-t pt-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <PhoneIcon className="w-4 h-4 mr-2" />
                      {farmer.contact.phone}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <EnvelopeIcon className="w-4 h-4 mr-2" />
                      {farmer.contact.email}
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <MapPinIcon className="w-4 h-4 mr-2" />
                    {farmer.contact.address}
                  </div>

                  {/* Actions */}
                  <div className="flex space-x-3">
                    <Link 
                      href={`/farmers/${farmer.id}`}
                      className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 text-center text-sm font-medium"
                    >
                      Shiko Profilin
                    </Link>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Kontakto
                    </button>
                    <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium">
                      Porosit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredFarmers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Nuk u gjetën fermerë</h3>
            <p className="text-gray-600 mb-4">
              Provoni të ndryshoni kriteret e kërkimit ose filtron për të gjetur fermerë të tjera.
            </p>
            <button 
              onClick={() => {
                setSearchTerm('');
                setSelectedLocation('all');
                setSelectedRating('all');
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
