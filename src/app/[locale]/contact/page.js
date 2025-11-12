'use client';

import { useState } from 'react';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon,
  UserIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    userType: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6 text-green-600" />,
      title: 'Adresa',
      details: ['Rruga "Dëshmorët e Kombit"', 'Tirana 1001, Albania'],
      description: 'Zyra jonë kryesore në qendër të Tiranës'
    },
    {
      icon: <PhoneIcon className="w-6 h-6 text-green-600" />,
      title: 'Telefoni',
      details: ['+355 69 123 4567', '+355 4 123 4567'],
      description: 'E disponueshme 24/7 për urgjenca'
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6 text-green-600" />,
      title: 'Email',
      details: ['info@e-farmer.al', 'support@e-farmer.al'],
      description: 'Përgjigjemi brenda 24 orëve'
    },
    {
      icon: <ClockIcon className="w-6 h-6 text-green-600" />,
      title: 'Orari i Punës',
      details: ['Hënë - Premte: 08:00 - 18:00', 'Shtunë: 09:00 - 14:00'],
      description: 'E mbyllur të dielave dhe festave'
    }
  ];

  const departments = [
    {
      name: 'Mbështetje Teknike',
      email: 'support@e-farmer.al',
      phone: '+355 69 111 1111',
      description: 'Ndihmë për probleme teknike dhe përdorimin e platformës'
    },
    {
      name: 'Shërbime Fermerësh',
      email: 'farmers@e-farmer.al',
      phone: '+355 69 222 2222',
      description: 'Asistencë për fermerët dhe regjistrimin e produkteve'
    },
    {
      name: 'Shërbime Klientësh',
      email: 'clients@e-farmer.al',
      phone: '+355 69 333 3333',
      description: 'Ndihmë për klientët dhe procesin e porositjes'
    },
    {
      name: 'Partnerët Biznesi',
      email: 'partners@e-farmer.al',
      phone: '+355 69 444 4444',
      description: 'Bashkëpunim dhe partnerësi strategjike'
    }
  ];

  const subjects = [
    'Pyetje të Përgjithshme',
    'Probleme Teknike',
    'Regjistrimi i Produkteve',
    'Procesi i Porositjes',
    'Transporti dhe Dorëzimi',
    'Pagesa dhe Faturimi',
    'Partnerësi Biznesi',
    'Tjetër'
  ];

  const userTypes = [
    'Fermer',
    'Klient',
    'Partner Biznesi',
    'Media',
    'Student',
    'Tjetër'
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

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Emri është i detyrueshëm';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-i është i detyrueshëm';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email-i nuk është i vlefshëm';
    }

    if (!formData.subject) {
      newErrors.subject = 'Subjekti është i detyrueshëm';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Mesazhi është i detyrueshëm';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would make the actual API call to your backend
      console.log('Contact form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          userType: ''
        });
        setIsSubmitted(false);
      }, 3000);
      
    } catch (error) {
      setErrors({ general: 'Gabim në dërgimin e mesazhit. Provoni përsëri.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <CheckCircleIcon className="w-16 h-16 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Mesazhi u Dërgua me Sukses!
          </h2>
          <p className="text-gray-600 mb-6">
            Faleminderit për mesazhin tuaj. Do të ju përgjigjemi brenda 24 orëve.
          </p>
          <button 
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
          >
            Dërgo Mesazh tjetër
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-green-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Na <span className="text-green-600">Kontaktoni</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Jemi këtu për t'ju ndihmuar. Dërgoni një mesazh dhe do të ju përgjigjemi 
              sa më shpejt që të jetë e mundur.
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dërgoni Mesazh</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* General Error */}
              {errors.general && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <p className="text-sm text-red-800">{errors.general}</p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Emri i Plotë *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Emri juaj"
                    disabled={isSubmitting}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="email@example.com"
                    disabled={isSubmitting}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefoni
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="+355 69 123 4567"
                    disabled={isSubmitting}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Lloji i Përdoruesit
                  </label>
                  <select
                    value={formData.userType}
                    onChange={(e) => handleInputChange('userType', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    disabled={isSubmitting}
                  >
                    <option value="">Zgjidhni llojin</option>
                    {userTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subjekti *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => handleInputChange('subject', e.target.value)}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  disabled={isSubmitting}
                >
                  <option value="">Zgjidhni subjektin</option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>{subject}</option>
                  ))}
                </select>
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mesazhi *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Shkruani mesazhin tuaj këtu..."
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 border border-transparent rounded-lg text-sm font-medium text-white ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500'
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Duke dërguar...</span>
                  </div>
                ) : (
                  'Dërgo Mesazhin'
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informacione Kontakti</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))}
                      </div>
                      <p className="text-sm text-gray-500 mt-2">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Departments */}
            <div className="bg-white rounded-lg shadow-sm p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Departamentet</h2>
              <div className="space-y-4">
                {departments.map((dept, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2">{dept.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{dept.description}</p>
                    <div className="space-y-1">
                      <p className="text-sm text-gray-700">
                        <EnvelopeIcon className="w-4 h-4 inline mr-2" />
                        {dept.email}
                      </p>
                      <p className="text-sm text-gray-700">
                        <PhoneIcon className="w-4 h-4 inline mr-2" />
                        {dept.phone}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-4">Kontakt i Shpejtë</h3>
              <p className="text-gray-600 mb-4">
                Për pyetje urgjente ose probleme teknike, mund të na telefononi direkt.
              </p>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 text-green-600" />
                <a href="tel:+355691234567" className="text-green-600 font-semibold hover:text-green-800">
                  +355 69 123 4567
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
