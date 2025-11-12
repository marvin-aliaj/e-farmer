'use client';

import { useState } from 'react';
import { 
  TruckIcon, 
  HomeIcon, 
  MapPinIcon, 
  ClockIcon, 
  CurrencyEuroIcon,
  ThermometerIcon,
  ExclamationTriangleIcon,
  CheckCircleIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon
} from '@heroicons/react/24/outline';

export default function TransportationStorageManagement({ userType = 'producer' }) {
  const [activeTab, setActiveTab] = useState('transport');

  // Dummy data for transportation
  const transportationData = {
    ownVehicles: [
      {
        id: 1,
        name: 'Kamion 1',
        type: 'Refrigerated Truck',
        capacity: '5 ton',
        temperature: '2°C',
        status: 'available',
        location: 'Ferma Kola, Korçë',
        fuelLevel: 85,
        maintenance: '2024-02-15',
        driver: 'Gjergj Kola',
        phone: '+355 69 123 4567'
      },
      {
        id: 2,
        name: 'Kamion 2',
        type: 'Refrigerated Truck',
        capacity: '3 ton',
        temperature: '4°C',
        status: 'in-use',
        location: 'Në rrugë për Supermarket ABC',
        fuelLevel: 45,
        maintenance: '2024-03-20',
        driver: 'Maria Shkurti',
        phone: '+355 69 234 5678'
      }
    ],
    logisticsPartners: [
      {
        id: 1,
        name: 'Transporti ABC',
        rating: 4.8,
        pricePerKm: 0.50,
        coverage: ['Tirana', 'Durrës', 'Elbasan', 'Korçë'],
        services: ['Refrigerated Transport', 'Express Delivery', 'Insurance'],
        contact: '+355 69 345 6789',
        email: 'info@transporti-abc.al',
        responseTime: '2-4 orë'
      },
      {
        id: 2,
        name: 'Logistika XYZ',
        rating: 4.6,
        pricePerKm: 0.45,
        coverage: ['Tirana', 'Vlorë', 'Fier', 'Shkodër'],
        services: ['Refrigerated Transport', 'Warehousing', 'Customs Clearance'],
        contact: '+355 69 456 7890',
        email: 'contact@logistika-xyz.al',
        responseTime: '1-3 orë'
      }
    ],
    activeDeliveries: [
      {
        id: 'DEL-001',
        from: 'Ferma Kola',
        to: 'Supermarket ABC',
        products: ['Domate 50kg', 'Sallatë 20kg'],
        status: 'in-transit',
        estimatedArrival: '2024-01-15 14:30',
        driver: 'Gjergj Kola',
        temperature: '2°C',
        progress: 75
      },
      {
        id: 'DEL-002',
        from: 'Ferma Shkurti',
        to: 'Restaurant XYZ',
        products: ['Patate 100kg', 'Qepë 30kg'],
        status: 'scheduled',
        estimatedArrival: '2024-01-16 09:00',
        driver: 'Maria Shkurti',
        temperature: '4°C',
        progress: 0
      }
    ]
  };

  // Dummy data for storage
  const storageData = {
    storageRooms: [
      {
        id: 1,
        name: 'Dhoma e Ftohtë A',
        temperature: '2°C',
        humidity: '65%',
        capacity: '1000kg',
        currentLoad: '750kg',
        products: ['Domate', 'Sallatë', 'Kastravec'],
        status: 'active',
        lastMaintenance: '2024-01-10',
        nextMaintenance: '2024-02-10'
      },
      {
        id: 2,
        name: 'Dhoma e Ftohtë B',
        temperature: '5°C',
        humidity: '70%',
        capacity: '800kg',
        currentLoad: '600kg',
        products: ['Patate', 'Qepë', 'Karrota'],
        status: 'maintenance',
        lastMaintenance: '2024-01-12',
        nextMaintenance: '2024-02-12'
      },
      {
        id: 3,
        name: 'Dhoma e Thjeshtë C',
        temperature: '15°C',
        humidity: '60%',
        capacity: '500kg',
        currentLoad: '200kg',
        products: ['Qepë', 'Speca'],
        status: 'active',
        lastMaintenance: '2024-01-08',
        nextMaintenance: '2024-02-08'
      }
    ],
    temperatureRequirements: [
      { product: 'Domate', minTemp: '10°C', maxTemp: '15°C', storage: 'Room Temperature' },
      { product: 'Sallatë', minTemp: '0°C', maxTemp: '4°C', storage: 'Refrigerated' },
      { product: 'Kastravec', minTemp: '7°C', maxTemp: '10°C', storage: 'Cool Storage' },
      { product: 'Patate', minTemp: '4°C', maxTemp: '8°C', storage: 'Cool Storage' },
      { product: 'Qepë', minTemp: '0°C', maxTemp: '2°C', storage: 'Refrigerated' },
      { product: 'Karrota', minTemp: '0°C', maxTemp: '4°C', storage: 'Refrigerated' }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'available': return 'text-green-600 bg-green-100';
      case 'in-use': return 'text-blue-600 bg-blue-100';
      case 'maintenance': return 'text-yellow-600 bg-yellow-100';
      case 'active': return 'text-green-600 bg-green-100';
      case 'in-transit': return 'text-blue-600 bg-blue-100';
      case 'scheduled': return 'text-gray-600 bg-gray-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'available': return 'Disponueshëm';
      case 'in-use': return 'Në Përdorim';
      case 'maintenance': return 'Në Mirëmbajtje';
      case 'active': return 'Aktiv';
      case 'in-transit': return 'Në Rrugë';
      case 'scheduled': return 'E Planifikuar';
      default: return status;
    }
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('transport')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'transport'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <TruckIcon className="w-5 h-5 inline mr-2" />
            Transporti
          </button>
          <button
            onClick={() => setActiveTab('storage')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'storage'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <HomeIcon className="w-5 h-5 inline mr-2" />
            Magazinimi
          </button>
        </div>
      </div>

      {/* Transportation Tab */}
      {activeTab === 'transport' && (
        <div className="space-y-6">
          {/* Own Vehicles */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Kamionët e Mia</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>Shto Kamion</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {transportationData.ownVehicles.map((vehicle) => (
                <div key={vehicle.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{vehicle.name}</h4>
                      <p className="text-sm text-gray-600">{vehicle.type}</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(vehicle.status)}`}>
                      {getStatusText(vehicle.status)}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-2" />
                      {vehicle.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ThermometerIcon className="w-4 h-4 mr-2" />
                      Temperatura: {vehicle.temperature}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <TruckIcon className="w-4 h-4 mr-2" />
                      Kapaciteti: {vehicle.capacity}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <CurrencyEuroIcon className="w-4 h-4 mr-2" />
                      Karburanti: {vehicle.fuelLevel}%
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Shoferi: {vehicle.driver}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Logistics Partners */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Partnerët Logjistikë</h3>
            <div className="space-y-4">
              {transportationData.logisticsPartners.map((partner) => (
                <div key={partner.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{partner.name}</h4>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-sm text-gray-600">Vlerësimi:</span>
                        <span className="text-sm font-semibold text-yellow-600">{partner.rating}</span>
                        <span className="text-sm text-gray-600">•</span>
                        <span className="text-sm text-gray-600">{partner.pricePerKm}€/km</span>
                      </div>
                    </div>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-sm">
                      Porosit
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Mbulimi</h5>
                      <div className="flex flex-wrap gap-1">
                        {partner.coverage.map((city, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {city}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Shërbimet</h5>
                      <div className="flex flex-wrap gap-1">
                        {partner.services.map((service, index) => (
                          <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Kontakti</h5>
                      <div className="text-sm text-gray-600">
                        <p>{partner.contact}</p>
                        <p>{partner.email}</p>
                        <p>Përgjigje: {partner.responseTime}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Active Deliveries */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Dërgesat Aktive</h3>
            <div className="space-y-4">
              {transportationData.activeDeliveries.map((delivery) => (
                <div key={delivery.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{delivery.id}</h4>
                      <p className="text-sm text-gray-600">
                        {delivery.from} → {delivery.to}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(delivery.status)}`}>
                      {getStatusText(delivery.status)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Produktet</h5>
                      <div className="space-y-1">
                        {delivery.products.map((product, index) => (
                          <p key={index} className="text-sm text-gray-600">{product}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Detajet</h5>
                      <div className="space-y-1 text-sm text-gray-600">
                        <p>Shoferi: {delivery.driver}</p>
                        <p>Temperatura: {delivery.temperature}</p>
                        <p>Arritja: {delivery.estimatedArrival}</p>
                      </div>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Progresi</h5>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-green-600 h-2 rounded-full"
                          style={{ width: `${delivery.progress}%` }}
                        ></div>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{delivery.progress}%</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Storage Tab */}
      {activeTab === 'storage' && (
        <div className="space-y-6">
          {/* Storage Rooms */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Dhomat e Magazinimit</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>Shto Dhomë</span>
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              {storageData.storageRooms.map((room) => (
                <div key={room.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="font-semibold text-gray-900">{room.name}</h4>
                      <p className="text-sm text-gray-600">
                        {room.currentLoad} / {room.capacity}
                      </p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(room.status)}`}>
                      {getStatusText(room.status)}
                    </span>
                  </div>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <ThermometerIcon className="w-4 h-4 mr-2" />
                      Temperatura: {room.temperature}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <HomeIcon className="w-4 h-4 mr-2" />
                      Lagështia: {room.humidity}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <ClockIcon className="w-4 h-4 mr-2" />
                      Mirëmbajtja: {room.nextMaintenance}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="font-medium text-gray-900 mb-2">Produktet</h5>
                    <div className="flex flex-wrap gap-1">
                      {room.products.map((product, index) => (
                        <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {product}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      Kapaciteti: {Math.round((room.currentLoad.replace('kg', '') / room.capacity.replace('kg', '')) * 100)}%
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-800 text-sm">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Temperature Requirements */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Kërkesat e Temperaturës</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Produkti</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Temp. Min</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Temp. Max</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Lloji i Magazinimit</th>
                  </tr>
                </thead>
                <tbody>
                  {storageData.temperatureRequirements.map((req, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-medium text-gray-900">{req.product}</td>
                      <td className="py-3 px-4 text-gray-600">{req.minTemp}</td>
                      <td className="py-3 px-4 text-gray-600">{req.maxTemp}</td>
                      <td className="py-3 px-4">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {req.storage}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Storage Tips */}
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Këshilla për Magazinimin</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Kontrolloni temperaturën:</strong> Sigurohuni që temperatura të jetë e qëndrueshme dhe brenda kufijve të rekomanduar.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Ventilimi:</strong> Sigurohuni që të ketë ventilim të mjaftueshëm për të shmangur lagështinë e tepërt.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Organizimi:</strong> Organizoni produktet sipas datës së skadimit dhe përdorni sistemin FIFO (First In, First Out).
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
