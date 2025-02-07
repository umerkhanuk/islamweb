import React from 'react';
import Link from 'next/link';

interface Event {
  id: string;
  title: string;
  date: string;
}

interface CityEventsProps {
  selectedCity: 'makkah' | 'madina';
  makkahEvents: Event[];
  madinaEvents: Event[];
}

const CityEvents: React.FC<CityEventsProps> = ({ selectedCity, makkahEvents, madinaEvents }) => {
  const eventsToDisplay = selectedCity === 'makkah' ? makkahEvents : madinaEvents;

  return (
<div className="mt-6">
  <div className="bg-white shadow-lg rounded-xl p-6">
    <h3 className="text-2xl font-bold text-center mb-6">
      {selectedCity === 'makkah' ? 'Makkah Events' : 'Madina Events'}
    </h3>

    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {eventsToDisplay.map((event) => (
        <div 
          key={event.id} 
          className="bg-gray-100 shadow-md rounded-lg p-6 h-56 flex flex-col items-center justify-center text-center hover:shadow-lg transition"
        >
          <Link href={`/events/${event.id}`} className="text-blue-600 hover:underline">
            <h4 className="text-xl font-semibold mb-2">{event.title}</h4>
            <p className="text-sm text-gray-600">{event.date}</p>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>
  )
};

export default CityEvents;
