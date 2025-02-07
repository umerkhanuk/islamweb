"use client"
import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link'; // Import Link from next.js
import CityEvents from './component/CityEvents';

export default function Home() {
  const [selectedCity, setSelectedCity] = useState<'makkah' | 'madina'>('makkah'); 

  const makkahEvents = [
    { id: 'makkah-event-1', title: 'The Birth of Prophet Muhammad (PBUH)', date: '570 CE' },
    { id: 'makkah-event-2', title: 'The First Revelation', date: '610 CE' },
    { id: 'makkah-event-3', title: 'The Hijra to Madina', date: '622 CE' },

  ];

  const madinaEvents = [
    { id: 'madina-event-1', title: 'The Treaty of Hudaybiyyah', date: '628 CE' },
    { id: 'madina-event-2', title: 'The Battle of Uhud', date: '625 CE' },
    { id: 'madina-event-3', title: 'The Farewell Pilgrimage', date: '632 CE' },
    { id: 'madina-event-4', title: 'The Battle of Badr', date: '624 CE' },

    // Add more events as needed
  ];

  const toggleCity = (city: 'makkah' | 'madina') => {
    setSelectedCity(city);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <Head>
        <title>Islamic Web - Stay Connected with Deen</title>
        <meta name="description" content="Daily Quran, Hadith, and Prayer Times" />
      </Head>

      <section className="h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/makkah.jpg')" }}>
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold">"Indeed, in the remembrance of Allah do hearts find rest" <span className="text-green-500">(Quran 13:28)</span></h1>
        </div>
      </section>

      <section className="py-10 text-center">
        <h2 className="text-3xl font-semibold">Significant Events</h2>
        <div className="mt-6">
          <button
            onClick={() => toggleCity('makkah')}
            className={`px-4 py-2 mr-4 ${selectedCity === 'makkah' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Makkah
          </button>
          <button
            onClick={() => toggleCity('madina')}
            className={`px-4 py-2 ${selectedCity === 'madina' ? 'bg-green-500 text-white' : 'bg-gray-200'}`}
          >
            Madina
          </button>
        </div>

        <CityEvents 
          selectedCity={selectedCity} 
          makkahEvents={makkahEvents} 
          madinaEvents={madinaEvents} 
        />
      </section>

      <footer className="py-6 text-center bg-gray-800 text-white">
        <p>&copy; 2025 Islamic Web. All rights reserved.</p>
      </footer>
    </div>
  );
}
