'use client';

import { useState, useEffect } from 'react';
import { 
  CloudIcon, 
  SunIcon, 
  BoltIcon, 
  ExclamationTriangleIcon,
  InformationCircleIcon,
  CalendarIcon,
  MapPinIcon,
  ThermometerIcon,
  DropletIcon,
  WindIcon
} from '@heroicons/react/24/outline';

export default function WeatherForecast({ location = 'Tirana, Albania' }) {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedDay, setSelectedDay] = useState(0);

  // Dummy weather data (in a real app, this would come from a weather API)
  const dummyWeatherData = {
    current: {
      temperature: 22,
      condition: 'sunny',
      humidity: 65,
      windSpeed: 12,
      pressure: 1013,
      uvIndex: 6,
      visibility: 10,
      feelsLike: 24
    },
    forecast: [
      {
        date: '2024-01-15',
        day: 'Sot',
        high: 25,
        low: 15,
        condition: 'sunny',
        humidity: 60,
        windSpeed: 10,
        precipitation: 0,
        alerts: []
      },
      {
        date: '2024-01-16',
        day: 'Nesër',
        high: 18,
        low: 12,
        condition: 'rainy',
        humidity: 80,
        windSpeed: 15,
        precipitation: 8,
        alerts: ['Paralajmërim për shi të fortë']
      },
      {
        date: '2024-01-17',
        day: 'Pasnesër',
        high: 20,
        low: 14,
        condition: 'partly-cloudy',
        humidity: 70,
        windSpeed: 8,
        precipitation: 2,
        alerts: []
      },
      {
        date: '2024-01-18',
        day: 'Të Mërkurën',
        high: 23,
        low: 16,
        condition: 'sunny',
        humidity: 55,
        windSpeed: 6,
        precipitation: 0,
        alerts: []
      },
      {
        date: '2024-01-19',
        day: 'Të Enjten',
        high: 26,
        low: 18,
        condition: 'sunny',
        humidity: 50,
        windSpeed: 5,
        precipitation: 0,
        alerts: []
      }
    ],
    alerts: [
      {
        type: 'warning',
        title: 'Paralajmërim për Mot',
        message: 'Pritet shi i fortë nesër nga ora 14:00. Rekomandohet të mbrohen produktet e jashtme.',
        time: '2024-01-15 10:00'
      },
      {
        type: 'info',
        title: 'Këshillë për Fermerët',
        message: 'Motet e mirë të javës së ardhshme janë ideale për korrjen e produkteve.',
        time: '2024-01-15 08:00'
      }
    ]
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setWeatherData(dummyWeatherData);
      setLoading(false);
    }, 1000);
  }, []);

  const getWeatherIcon = (condition) => {
    switch (condition) {
      case 'sunny':
        return <SunIcon className="w-8 h-8 text-yellow-500" />;
      case 'cloudy':
        return <CloudIcon className="w-8 h-8 text-gray-500" />;
      case 'partly-cloudy':
        return <CloudIcon className="w-8 h-8 text-gray-400" />;
      case 'rainy':
        return <BoltIcon className="w-8 h-8 text-blue-500" />;
      default:
        return <CloudIcon className="w-8 h-8 text-gray-500" />;
    }
  };

  const getWeatherConditionText = (condition) => {
    switch (condition) {
      case 'sunny': return 'Diell';
      case 'cloudy': return 'Re';
      case 'partly-cloudy': return 'Pjesërisht re';
      case 'rainy': return 'Shi';
      default: return 'E panjohur';
    }
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'warning':
        return <ExclamationTriangleIcon className="w-5 h-5 text-yellow-600" />;
      case 'info':
        return <InformationCircleIcon className="w-5 h-5 text-blue-600" />;
      default:
        return <InformationCircleIcon className="w-5 h-5 text-gray-600" />;
    }
  };

  const getAlertColor = (type) => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'info':
        return 'bg-blue-50 border-blue-200 text-blue-800';
      default:
        return 'bg-gray-50 border-gray-200 text-gray-800';
    }
  };

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
          <div className="h-32 bg-gray-200 rounded mb-4"></div>
          <div className="h-20 bg-gray-200 rounded"></div>
        </div>
      </div>
    );
  }

  if (!weatherData) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="text-center text-gray-500">
          <CloudIcon className="w-12 h-12 mx-auto mb-4" />
          <p>Nuk mund të ngarkohen të dhënat e motit</p>
        </div>
      </div>
    );
  }

  const currentDay = weatherData.forecast[selectedDay];

  return (
    <div className="space-y-6">
      {/* Current Weather */}
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg p-6 text-white">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Moti Aktual</h3>
            <div className="flex items-center space-x-2 text-blue-100">
              <MapPinIcon className="w-4 h-4" />
              <span>{location}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-4xl font-bold">{weatherData.current.temperature}°C</div>
            <div className="text-blue-100">Ndjehet si {weatherData.current.feelsLike}°C</div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {getWeatherIcon(weatherData.current.condition)}
            <div>
              <div className="text-lg font-semibold">
                {getWeatherConditionText(weatherData.current.condition)}
              </div>
              <div className="text-blue-100 text-sm">
                Lagështia: {weatherData.current.humidity}% | Era: {weatherData.current.windSpeed} km/h
              </div>
            </div>
          </div>
          <div className="text-right text-sm">
            <div>Presioni: {weatherData.current.pressure} hPa</div>
            <div>UV: {weatherData.current.uvIndex}</div>
            <div>Dukshmëria: {weatherData.current.visibility} km</div>
          </div>
        </div>
      </div>

      {/* Weather Alerts */}
      {weatherData.alerts.length > 0 && (
        <div className="space-y-3">
          <h4 className="font-semibold text-gray-900">Paralajmërimet</h4>
          {weatherData.alerts.map((alert, index) => (
            <div key={index} className={`p-4 rounded-lg border ${getAlertColor(alert.type)}`}>
              <div className="flex items-start space-x-3">
                {getAlertIcon(alert.type)}
                <div className="flex-1">
                  <h5 className="font-semibold mb-1">{alert.title}</h5>
                  <p className="text-sm mb-2">{alert.message}</p>
                  <p className="text-xs opacity-75">{alert.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* 5-Day Forecast */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Parashikimi 5-Ditor</h4>
        <div className="grid grid-cols-5 gap-2 mb-6">
          {weatherData.forecast.map((day, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`p-3 rounded-lg text-center transition-colors ${
                selectedDay === index
                  ? 'bg-blue-100 text-blue-900'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <div className="text-sm font-medium">{day.day}</div>
              <div className="text-xs text-gray-600">{day.date}</div>
              <div className="my-2">{getWeatherIcon(day.condition)}</div>
              <div className="text-sm font-semibold">{day.high}°</div>
              <div className="text-xs text-gray-600">{day.low}°</div>
            </button>
          ))}
        </div>

        {/* Detailed Day View */}
        <div className="bg-gray-50 rounded-lg p-4">
          <h5 className="font-semibold text-gray-900 mb-3">
            Detajet për {currentDay.day} - {currentDay.date}
          </h5>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex items-center space-x-2">
              <ThermometerIcon className="w-5 h-5 text-red-500" />
              <div>
                <div className="text-sm text-gray-600">Temperatura</div>
                <div className="font-semibold">{currentDay.low}° - {currentDay.high}°C</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <DropletIcon className="w-5 h-5 text-blue-500" />
              <div>
                <div className="text-sm text-gray-600">Lagështia</div>
                <div className="font-semibold">{currentDay.humidity}%</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <WindIcon className="w-5 h-5 text-gray-500" />
              <div>
                <div className="text-sm text-gray-600">Era</div>
                <div className="font-semibold">{currentDay.windSpeed} km/h</div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <BoltIcon className="w-5 h-5 text-purple-500" />
              <div>
                <div className="text-sm text-gray-600">Shi</div>
                <div className="font-semibold">{currentDay.precipitation}mm</div>
              </div>
            </div>
          </div>

          {currentDay.alerts.length > 0 && (
            <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <ExclamationTriangleIcon className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-800">
                  {currentDay.alerts[0]}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Farming Recommendations */}
      <div className="bg-green-50 rounded-lg p-6">
        <h4 className="font-semibold text-gray-900 mb-4">Këshillat për Fermerët</h4>
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-700">
                <strong>Sot:</strong> Motet e mira janë ideale për korrjen e produkteve të jashtme.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-700">
                <strong>Nesër:</strong> Pritet shi, rekomandohet të mbrohen produktet e jashtme dhe të shtyhet korrja.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-700">
                <strong>Javën e ardhshme:</strong> Motet e qëndrueshme janë të mira për mbjelljen e produkteve të reja.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
