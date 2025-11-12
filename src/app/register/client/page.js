'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  ChartBarIcon,
  ArrowLeftIcon,
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon
} from '@heroicons/react/24/outline';

export default function ClientRegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    businessSize: '',
    location: '',
    address: '',
    city: '',
    postalCode: '',
    establishedYear: '',
    
    // Business Details
    taxNumber: '',
    bankAccount: '',
    website: '',
    
    // Business Preferences
    orderFrequency: '',
    preferredDelivery: '',
    budgetRange: '',
    productCategories: [],
    
    // Additional Information
    description: '',
    socialMedia: '',
    
    // Terms and Conditions
    agreeTerms: false,
    agreeMarketing: false
  });

  const [errors, setErrors] = useState({});

  const steps = [
    { id: 1, title: 'Informacione Personale', description: 'Detajet tuaja personale' },
    { id: 2, title: 'Informacione Biznesi', description: 'Detajet e biznesit tuaj' },
    { id: 3, title: 'Preferencat', description: 'Preferencat e porositjes' },
    { id: 4, title: 'Përfundimi', description: 'Rishikoni dhe konfirmoni' }
  ];

  const businessTypes = [
    'Supermarket',
    'Restaurant',
    'Hotel',
    'Shitës me Shumicë',
    'Market i Vogël',
    'Kafene',
    'Kompani Catering',
    'Kompani Eksporti',
    'Tjetër'
  ];

  const businessSizes = [
    'Mikro (1-9 punonjës)',
    'I Vogël (10-49 punonjës)',
    'Mesatar (50-249 punonjës)',
    'I Madh (250+ punonjës)'
  ];

  const orderFrequencies = [
    'Ditore',
    'Javore',
    'Mujore',
    'Sipas nevojës'
  ];

  const deliveryPreferences = [
    'Dorëzimi i shpejtë (1-2 ditë)',
    'Dorëzimi standard (3-5 ditë)',
    'Dorëzimi ekonomik (1 javë)',
    'Marrja vetë'
  ];

  const budgetRanges = [
    '€0 - €500/muaj',
    '€500 - €1,500/muaj',
    '€1,500 - €5,000/muaj',
    '€5,000+/muaj'
  ];

  const productCategories = [
    'Perime të Freskëta',
    'Fruta të Freskëta',
    'Produkte Organike',
    'Produkte Bio',
    'Vaj Ulliri',
    'Raki',
    'Vera',
    'Produkte të Përpunuara',
    'Bimë Mjekësore',
    'Lule'
  ];

  const cities = [
    'Tirana', 'Durrës', 'Vlorë', 'Shkodër', 'Korçë', 'Elbasan', 'Fier', 
    'Gjirokastër', 'Kukës', 'Lezhë', 'Berat', 'Dibër', 'Kavajë'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleArrayChange = (field, value, checked) => {
    setFormData(prev => ({
      ...prev,
      [field]: checked 
        ? [...prev[field], value]
        : prev[field].filter(item => item !== value)
    }));
  };

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!formData.firstName.trim()) newErrors.firstName = 'Emri është i detyrueshëm';
        if (!formData.lastName.trim()) newErrors.lastName = 'Mbiemri është i detyrueshëm';
        if (!formData.email.trim()) newErrors.email = 'Email-i është i detyrueshëm';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email-i nuk është i vlefshëm';
        if (!formData.phone.trim()) newErrors.phone = 'Telefoni është i detyrueshëm';
        if (!formData.password) newErrors.password = 'Fjalëkalimi është i detyrueshëm';
        else if (formData.password.length < 6) newErrors.password = 'Fjalëkalimi duhet të ketë të paktën 6 karaktere';
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Fjalëkalimet nuk përputhen';
        break;
      
      case 2:
        if (!formData.businessName.trim()) newErrors.businessName = 'Emri i biznesit është i detyrueshëm';
        if (!formData.businessType) newErrors.businessType = 'Lloji i biznesit është i detyrueshëm';
        if (!formData.location.trim()) newErrors.location = 'Lokacioni është i detyrueshëm';
        if (!formData.address.trim()) newErrors.address = 'Adresa është e detyrueshme';
        if (!formData.city) newErrors.city = 'Qyteti është i detyrueshëm';
        if (!formData.taxNumber.trim()) newErrors.taxNumber = 'Numri i taksës është i detyrueshëm';
        break;
      
      case 3:
        if (!formData.orderFrequency) newErrors.orderFrequency = 'Frekuenca e porositjes është e detyrueshme';
        if (!formData.preferredDelivery) newErrors.preferredDelivery = 'Preferenca e dorëzimit është e detyrueshme';
        if (!formData.budgetRange) newErrors.budgetRange = 'Gama e buxhetit është e detyrueshme';
        if (formData.productCategories.length === 0) newErrors.productCategories = 'Duhet të zgjidhni të paktën një kategori produkti';
        break;
      
      case 4:
        if (!formData.agreeTerms) newErrors.agreeTerms = 'Duhet të pranoni kushtet e përdorimit';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, steps.length));
    }
  };

  const handlePrevious = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep(4)) {
      // Here you would submit the form to your backend
      console.log('Form submitted:', formData);
      alert('Regjistrimi u krye me sukses!');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-blue-600 border-blue-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-500'
                }`}>
                  {currentStep > step.id ? (
                    <CheckCircleIcon className="w-6 h-6" />
                  ) : (
                    <span className="text-sm font-semibold">{step.id}</span>
                  )}
                </div>
                <div className="ml-3 hidden sm:block">
                  <p className={`text-sm font-medium ${
                    currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                  }`}>
                    {step.title}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden sm:block w-16 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-blue-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <ChartBarIcon className="w-12 h-12 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Regjistrimi si Klient
            </h2>
            <p className="text-gray-600">
              {steps[currentStep - 1].description}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacione Personale</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Emri *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Emri juaj"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mbiemri *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Mbiemri juaj"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-sm text-red-600">{errors.lastName}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Numri i Telefonit *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+355 69 123 4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Fjalëkalimi *
                    </label>
                    <input
                      type="password"
                      value={formData.password}
                      onChange={(e) => handleInputChange('password', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.password ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Fjalëkalimi juaj"
                    />
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-600">{errors.password}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Konfirmo Fjalëkalimin *
                    </label>
                    <input
                      type="password"
                      value={formData.confirmPassword}
                      onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Konfirmoni fjalëkalimin"
                    />
                    {errors.confirmPassword && (
                      <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Business Information */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Informacione Biznesi</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emri i Biznesit *
                  </label>
                  <input
                    type="text"
                    value={formData.businessName}
                    onChange={(e) => handleInputChange('businessName', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.businessName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Emri i biznesit tuaj"
                  />
                  {errors.businessName && (
                    <p className="mt-1 text-sm text-red-600">{errors.businessName}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lloji i Biznesit *
                    </label>
                    <select
                      value={formData.businessType}
                      onChange={(e) => handleInputChange('businessType', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.businessType ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Zgjidhni llojin e biznesit</option>
                      {businessTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    {errors.businessType && (
                      <p className="mt-1 text-sm text-red-600">{errors.businessType}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Madhësia e Biznesit
                    </label>
                    <select
                      value={formData.businessSize}
                      onChange={(e) => handleInputChange('businessSize', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Zgjidhni madhësinë</option>
                      {businessSizes.map((size) => (
                        <option key={size} value={size}>{size}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Lokacioni *
                    </label>
                    <input
                      type="text"
                      value={formData.location}
                      onChange={(e) => handleInputChange('location', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.location ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Fshati/Komuna"
                    />
                    {errors.location && (
                      <p className="mt-1 text-sm text-red-600">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Qyteti *
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.city ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Zgjidhni qytetin</option>
                      {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                      ))}
                    </select>
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adresa e Plotë *
                  </label>
                  <textarea
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    rows={3}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.address ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Adresa e plotë e biznesit"
                  />
                  {errors.address && (
                    <p className="mt-1 text-sm text-red-600">{errors.address}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Viti i Themelimit
                    </label>
                    <input
                      type="number"
                      value={formData.establishedYear}
                      onChange={(e) => handleInputChange('establishedYear', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="2020"
                      min="1900"
                      max="2024"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Numri i Taksës *
                    </label>
                    <input
                      type="text"
                      value={formData.taxNumber}
                      onChange={(e) => handleInputChange('taxNumber', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.taxNumber ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="A12345678B"
                    />
                    {errors.taxNumber && (
                      <p className="mt-1 text-sm text-red-600">{errors.taxNumber}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Website (opsionale)
                  </label>
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => handleInputChange('website', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="https://www.example.com"
                  />
                </div>
              </div>
            )}

            {/* Step 3: Preferences */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Preferencat e Porositjes</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Frekuenca e Porositjes *
                    </label>
                    <select
                      value={formData.orderFrequency}
                      onChange={(e) => handleInputChange('orderFrequency', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.orderFrequency ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Zgjidhni frekuencën</option>
                      {orderFrequencies.map((freq) => (
                        <option key={freq} value={freq}>{freq}</option>
                      ))}
                    </select>
                    {errors.orderFrequency && (
                      <p className="mt-1 text-sm text-red-600">{errors.orderFrequency}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferenca e Dorëzimit *
                    </label>
                    <select
                      value={formData.preferredDelivery}
                      onChange={(e) => handleInputChange('preferredDelivery', e.target.value)}
                      className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                        errors.preferredDelivery ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Zgjidhni preferencën</option>
                      {deliveryPreferences.map((delivery) => (
                        <option key={delivery} value={delivery}>{delivery}</option>
                      ))}
                    </select>
                    {errors.preferredDelivery && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredDelivery}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Gama e Buxhetit *
                  </label>
                  <select
                    value={formData.budgetRange}
                    onChange={(e) => handleInputChange('budgetRange', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                      errors.budgetRange ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Zgjidhni gamën e buxhetit</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="mt-1 text-sm text-red-600">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Kategoritë e Produkteve që Interesojnë *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {productCategories.map((category) => (
                      <label key={category} className="flex items-center space-x-2 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.productCategories.includes(category)}
                          onChange={(e) => handleArrayChange('productCategories', category, e.target.checked)}
                          className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                        />
                        <span className="text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                  {errors.productCategories && (
                    <p className="mt-1 text-sm text-red-600">{errors.productCategories}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Përshkrimi i Biznesit
                  </label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Përshkruani biznesin tuaj dhe nevojat për produktet..."
                  />
                </div>
              </div>
            )}

            {/* Step 4: Final Step */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Përfundimi</h3>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                  <h4 className="font-semibold text-blue-900 mb-4">Rishikoni Informacionet</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Emri:</span>
                      <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Email:</span>
                      <span className="font-medium">{formData.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Biznesi:</span>
                      <span className="font-medium">{formData.businessName}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Lokacioni:</span>
                      <span className="font-medium">{formData.location}, {formData.city}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kategoritë:</span>
                      <span className="font-medium">{formData.productCategories.length} kategori</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeTerms}
                      onChange={(e) => handleInputChange('agreeTerms', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <div>
                      <span className="text-sm text-gray-700">
                        Pranoj <Link href="/terms" className="text-blue-600 hover:underline">Kushtet e Përdorimit</Link> dhe 
                        <Link href="/privacy" className="text-blue-600 hover:underline"> Politikën e Privatësisë</Link> *
                      </span>
                      {errors.agreeTerms && (
                        <p className="mt-1 text-sm text-red-600">{errors.agreeTerms}</p>
                      )}
                    </div>
                  </label>

                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.agreeMarketing}
                      onChange={(e) => handleInputChange('agreeMarketing', e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500 mt-1"
                    />
                    <span className="text-sm text-gray-700">
                      Dëshiroj të marr informacione për ofertat dhe lajmet e platformës
                    </span>
                  </label>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={handlePrevious}
                disabled={currentStep === 1}
                className={`px-6 py-2 rounded-lg font-medium ${
                  currentStep === 1
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Mëparshëm
              </button>

              {currentStep < steps.length ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                  Tjetër
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700"
                >
                  Regjistrohu
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
