"use client"; // Ensure this is a client component

import { useParams } from 'next/navigation';

interface Event {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
}

const eventsData: { [key: string]: Event } = {
  'makkah-event-1': {
    title: 'The Birth of Prophet Muhammad (PBUH)',
    description: 'This event marks the birth of Prophet Muhammad (PBUH) in Makkah.',
    date: '570 CE',
    location: 'Makkah',
    image: '/images/makkah-event-1.jpg',
  },
  "makkah-event-2": {
    "title": "The Construction of Kaaba",
    "description": "A historical moment when Prophet Ibrahim and his son Ismail rebuilt the Kaaba.",
    "date": "Ancient Era",
    "location": "Makkah",
    "image": "/images/makkah-event-2.jpg"
  },
  'makkah-event-3': {
    title: 'The First Revelation',
    description: 'This event marks the birth of Prophet Muhammad (PBUH) in Makkah.',
    date: '610 CE',
    location: 'Makkah',
    image: '/images/makkah-event-1.jpg',
  },
  'madina-event-1': {
    title: 'The Treaty of Hudaybiyyah',
    description: 'The Treaty of Hudaybiyyah was a pivotal moment in Islamic history that occurred in Madina.',
    date: '628 CE',
    location: 'Madina',
    image: '/images/madina-event-1.jpg',
  },
  'madina-event-2': {
    title: 'The Battle of Uhud',
    description: 'The Treaty of Hudaybiyyah was a pivotal moment in Islamic history that occurred in Madina.',
    date: '628 CE',
    location: 'Madina',
    image: '/images/madina-event-1.jpg',
  },
  'madina-event-4': {
    title: 'The Battle of Badr',
    description: 'The Battle of Badr was a key event in the early days of Islam.',
    date: '624 CE',
    location: 'Madina',
    image: '/images/madina-event-4.jpg',
  },
};

export default function EventDetails() {
  const { eventId } = useParams(); // Get dynamic route parameter

  // Ensure eventId is a string (not a string array) before using it
  if (typeof eventId !== 'string') {
    return <p>Event not found.</p>;
  }

  // Ensure event exists
  if (!eventsData[eventId]) {
    return <p>Event not found.</p>;
  }

  const eventData = eventsData[eventId];

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col col-span-2 items-center">
        <img src={eventData.image} alt={eventData.title} className="w-full max-w-xl mb-6" />
        <h1 className="text-4xl font-bold">{eventData.title}</h1>
        <p className="text-lg text-gray-700 mt-4">{eventData.description}</p>
        <p className="mt-2 text-xl text-gray-500">{eventData.date} | {eventData.location}</p>
      </div>
    </div>
  );
}
