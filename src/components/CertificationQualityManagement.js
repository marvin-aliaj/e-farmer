'use client';

import { useState } from 'react';
import { 
  ShieldCheckIcon, 
  DocumentTextIcon, 
  ExclamationTriangleIcon,
  CheckCircleIcon,
  ClockIcon,
  PlusIcon,
  PencilIcon,
  TrashIcon,
  DownloadIcon,
  UploadIcon,
  EyeIcon
} from '@heroicons/react/24/outline';

export default function CertificationQualityManagement({ userType = 'producer' }) {
  const [activeTab, setActiveTab] = useState('certificates');

  // Dummy data for certificates
  const certificatesData = {
    active: [
      {
        id: 1,
        name: 'Certifikata Organike',
        type: 'Organic',
        issuer: 'Ministria e Bujqësisë',
        issueDate: '2023-03-15',
        expiryDate: '2025-03-15',
        status: 'active',
        products: ['Domate', 'Sallatë', 'Kastravec'],
        fileUrl: '/certificates/organic-cert.pdf',
        description: 'Certifikatë për kultivimin organik të perimeve'
      },
      {
        id: 2,
        name: 'Licenca EU Export',
        type: 'Export License',
        issuer: 'Agjencia Kombëtare e Ushqimit',
        issueDate: '2023-06-20',
        expiryDate: '2025-06-20',
        status: 'active',
        products: ['Të gjitha produktet'],
        fileUrl: '/certificates/eu-export-license.pdf',
        description: 'Licencë për eksportimin e produkteve në Bashkimin Evropian'
      },
      {
        id: 3,
        name: 'Certifikata Bio',
        type: 'Bio',
        issuer: 'Organizata Bio Shqipëri',
        issueDate: '2023-09-10',
        expiryDate: '2024-09-10',
        status: 'expiring',
        products: ['Vaj Ulliri', 'Raki'],
        fileUrl: '/certificates/bio-cert.pdf',
        description: 'Certifikatë për produktet bio tradicionale'
      }
    ],
    pending: [
      {
        id: 4,
        name: 'Certifikata HACCP',
        type: 'Food Safety',
        issuer: 'Instituti i Sigurisë së Ushqimit',
        submittedDate: '2024-01-10',
        expectedDate: '2024-04-10',
        status: 'pending',
        products: ['Të gjitha produktet'],
        description: 'Certifikatë për sistemin e sigurisë së ushqimit'
      }
    ],
    expired: [
      {
        id: 5,
        name: 'Certifikata ISO 9001',
        type: 'Quality Management',
        issuer: 'Bureau Veritas',
        issueDate: '2021-01-15',
        expiryDate: '2024-01-15',
        status: 'expired',
        products: ['Të gjitha produktet'],
        description: 'Certifikatë për sistemin e menaxhimit të cilësisë'
      }
    ]
  };

  // Dummy data for quality requirements
  const qualityRequirements = {
    euStandards: [
      {
        category: 'Perime të Freskëta',
        requirements: [
          'Maksimumi i mbetjeve të pesticideve: 0.01 mg/kg',
          'Absenca e bakterieve patogjene (E.coli, Salmonella)',
          'Temperatura e magazinimit: 0-4°C',
          'Lagështia relative: 85-95%',
          'Paketimi në kontejnerë të pastër dhe të sigurt'
        ],
        testing: ['Analiza kimike', 'Testi mikrobiologjik', 'Kontrolli vizual'],
        frequency: 'Çdo 3 muaj'
      },
      {
        category: 'Fruta të Freskëta',
        requirements: [
          'Maksimumi i mbetjeve të pesticideve: 0.02 mg/kg',
          'Absenca e bakterieve patogjene',
          'Temperatura e magazinimit: 0-2°C',
          'Lagështia relative: 90-95%',
          'Paketimi në kontejnerë të ventiluar'
        ],
        testing: ['Analiza kimike', 'Testi mikrobiologjik', 'Kontrolli vizual'],
        frequency: 'Çdo 2 muaj'
      },
      {
        category: 'Produkte të Përpunuara',
        requirements: [
          'Maksimumi i alkoolit: 15% vol',
          'Absenca e konservantëve të ndaluar',
          'Temperatura e magazinimit: 15-20°C',
          'Paketimi në enë të mbyllura',
          'Etiketimi i plotë me informacione të detajuara'
        ],
        testing: ['Analiza kimike', 'Testi i alkoolit', 'Kontrolli i paketimit'],
        frequency: 'Çdo 6 muaj'
      }
    ],
    organicStandards: [
      {
        category: 'Kultivimi Organik',
        requirements: [
          'Përdorimi i pesticideve organike vetëm',
          'Absenca e OGM-ve',
          'Rotacioni i kultiveve',
          'Përdorimi i plehrave organike',
          'Menaxhimi i integruar i sëmundjeve'
        ],
        testing: ['Analiza e mbetjeve', 'Kontrolli i procesit', 'Auditimi i fermës'],
        frequency: 'Vjetore'
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'text-green-600 bg-green-100';
      case 'expiring': return 'text-yellow-600 bg-yellow-100';
      case 'expired': return 'text-red-600 bg-red-100';
      case 'pending': return 'text-blue-600 bg-blue-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'active': return 'Aktiv';
      case 'expiring': return 'Duke Skaduar';
      case 'expired': return 'Skaduar';
      case 'pending': return 'Në Proces';
      default: return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'active': return <CheckCircleIcon className="w-5 h-5 text-green-600" />;
      case 'expiring': return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
      case 'expired': return <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />;
      case 'pending': return <ClockIcon className="w-5 h-5 text-blue-600" />;
      default: return <DocumentTextIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const daysUntilExpiry = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const diffTime = expiry - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="space-y-6">
      {/* Tab Navigation */}
      <div className="bg-white rounded-lg shadow-sm p-4">
        <div className="flex space-x-4">
          <button
            onClick={() => setActiveTab('certificates')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'certificates'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <ShieldCheckIcon className="w-5 h-5 inline mr-2" />
            Certifikimet
          </button>
          <button
            onClick={() => setActiveTab('requirements')}
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === 'requirements'
                ? 'bg-green-600 text-white'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <DocumentTextIcon className="w-5 h-5 inline mr-2" />
            Kërkesat e Cilësisë
          </button>
        </div>
      </div>

      {/* Certificates Tab */}
      {activeTab === 'certificates' && (
        <div className="space-y-6">
          {/* Certificate Overview */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <CheckCircleIcon className="w-8 h-8 text-green-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {certificatesData.active.length}
                  </div>
                  <div className="text-sm text-gray-600">Aktive</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <ClockIcon className="w-8 h-8 text-blue-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {certificatesData.pending.length}
                  </div>
                  <div className="text-sm text-gray-600">Në Proces</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="w-8 h-8 text-yellow-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {certificatesData.active.filter(c => c.status === 'expiring').length}
                  </div>
                  <div className="text-sm text-gray-600">Duke Skaduar</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-4">
              <div className="flex items-center space-x-3">
                <ExclamationTriangleIcon className="w-8 h-8 text-red-600" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">
                    {certificatesData.expired.length}
                  </div>
                  <div className="text-sm text-gray-600">Skaduar</div>
                </div>
              </div>
            </div>
          </div>

          {/* Active Certificates */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900">Certifikimet Aktive</h3>
              <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 flex items-center space-x-2">
                <PlusIcon className="w-5 h-5" />
                <span>Shto Certifikatë</span>
              </button>
            </div>

            <div className="space-y-4">
              {certificatesData.active.map((certificate) => (
                <div key={certificate.id} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-start space-x-3">
                      {getStatusIcon(certificate.status)}
                      <div>
                        <h4 className="font-semibold text-gray-900">{certificate.name}</h4>
                        <p className="text-sm text-gray-600">{certificate.description}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                          <span>Lëshuar: {certificate.issueDate}</span>
                          <span>Skadon: {certificate.expiryDate}</span>
                          {certificate.status === 'expiring' && (
                            <span className="text-yellow-600 font-medium">
                              {daysUntilExpiry(certificate.expiryDate)} ditë të mbetura
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(certificate.status)}`}>
                      {getStatusText(certificate.status)}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Lloji</h5>
                      <p className="text-sm text-gray-600">{certificate.type}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Lëshuesi</h5>
                      <p className="text-sm text-gray-600">{certificate.issuer}</p>
                    </div>
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Produktet</h5>
                      <div className="flex flex-wrap gap-1">
                        {certificate.products.map((product, index) => (
                          <span key={index} className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                            {product}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="text-sm text-gray-600">
                      {certificate.status === 'expiring' && (
                        <span className="text-yellow-600">
                          ⚠️ Certifikata do të skadë së shpejti
                        </span>
                      )}
                    </div>
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-800 text-sm flex items-center space-x-1">
                        <EyeIcon className="w-4 h-4" />
                        <span>Shiko</span>
                      </button>
                      <button className="text-green-600 hover:text-green-800 text-sm flex items-center space-x-1">
                        <DownloadIcon className="w-4 h-4" />
                        <span>Shkarko</span>
                      </button>
                      <button className="text-gray-600 hover:text-gray-800 text-sm">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pending Certificates */}
          {certificatesData.pending.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Certifikimet në Proces</h3>
              <div className="space-y-4">
                {certificatesData.pending.map((certificate) => (
                  <div key={certificate.id} className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-3">
                        <ClockIcon className="w-5 h-5 text-blue-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{certificate.name}</h4>
                          <p className="text-sm text-gray-600">{certificate.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>Dorëzuar: {certificate.submittedDate}</span>
                            <span>Pritet: {certificate.expectedDate}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(certificate.status)}`}>
                        {getStatusText(certificate.status)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-600">
                        📋 Certifikata është duke u procesuar
                      </div>
                      <button className="text-blue-600 hover:text-blue-800 text-sm">
                        Gjurmë Statusin
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Expired Certificates */}
          {certificatesData.expired.length > 0 && (
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-6">Certifikimet e Skaduara</h3>
              <div className="space-y-4">
                {certificatesData.expired.map((certificate) => (
                  <div key={certificate.id} className="border border-gray-200 rounded-lg p-4 bg-red-50">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-start space-x-3">
                        <ExclamationTriangleIcon className="w-5 h-5 text-red-600" />
                        <div>
                          <h4 className="font-semibold text-gray-900">{certificate.name}</h4>
                          <p className="text-sm text-gray-600">{certificate.description}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-600">
                            <span>Lëshuar: {certificate.issueDate}</span>
                            <span className="text-red-600">Skaduar: {certificate.expiryDate}</span>
                          </div>
                        </div>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(certificate.status)}`}>
                        {getStatusText(certificate.status)}
                      </span>
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="text-sm text-red-600">
                        ⚠️ Certifikata ka skaduar dhe duhet të rinovohet
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 text-sm">
                        Rinovo
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}

      {/* Quality Requirements Tab */}
      {activeTab === 'requirements' && (
        <div className="space-y-6">
          {/* EU Standards */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Standardet EU</h3>
            <div className="space-y-6">
              {qualityRequirements.euStandards.map((standard, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">{standard.category}</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Kërkesat</h5>
                      <ul className="space-y-2">
                        {standard.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Testet</h5>
                      <ul className="space-y-2">
                        {standard.testing.map((test, testIndex) => (
                          <li key={testIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <DocumentTextIcon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Informacione</h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <ClockIcon className="w-4 h-4 text-purple-600" />
                          <span>Frekuenca: {standard.frequency}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Organic Standards */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">Standardet Organike</h3>
            <div className="space-y-6">
              {qualityRequirements.organicStandards.map((standard, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-4">{standard.category}</h4>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Kërkesat</h5>
                      <ul className="space-y-2">
                        {standard.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <CheckCircleIcon className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Testet</h5>
                      <ul className="space-y-2">
                        {standard.testing.map((test, testIndex) => (
                          <li key={testIndex} className="flex items-start space-x-2 text-sm text-gray-600">
                            <DocumentTextIcon className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span>{test}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-3">Informacione</h5>
                      <div className="space-y-2 text-sm text-gray-600">
                        <div className="flex items-center space-x-2">
                          <ClockIcon className="w-4 h-4 text-purple-600" />
                          <span>Frekuenca: {standard.frequency}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance Tips */}
          <div className="bg-green-50 rounded-lg p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Këshilla për Pajtueshmërinë</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Mbajini një regjistër të detajuar:</strong> Regjistroni të gjitha aktivitetet e kultivimit dhe përpunimit.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Kontrolloni rregullisht:</strong> Kryeni teste të rregullta për të siguruar pajtueshmërinë.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Trajnoni stafin:</strong> Sigurohuni që të gjithë punonjësit të jenë të trajnuar për standardet e cilësisë.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircleIcon className="w-5 h-5 text-green-600 mt-1" />
                <div>
                  <p className="text-sm text-gray-700">
                    <strong>Përditësoni certifikimet:</strong> Mbajini certifikimet të përditësuara dhe rinovoni ato para skadimit.
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
