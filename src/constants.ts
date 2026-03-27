import { Event, Ticket } from './types';

export const CITIES = ['Sofia', 'Plovdiv', 'Varna', 'Burgas', 'Ruse', 'Stara Zagora'];

export const CATEGORIES = ['Concert', 'Sports', 'Festival', 'Theater'];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Ed Sheeran - Mathematics Tour',
    date: '2026-08-31T20:00:00Z',
    location: 'Vasil Levski National Stadium',
    city: 'Sofia',
    image: 'https://picsum.photos/seed/edsheeran/800/600',
    category: 'Concert',
    minPrice: 120,
    ticketCount: 42,
  },
  {
    id: '2',
    title: 'Bulgaria vs. Serbia - UEFA Nations League',
    date: '2026-06-15T19:00:00Z',
    location: 'Stadion Hristo Botev',
    city: 'Plovdiv',
    image: 'https://picsum.photos/seed/football/800/600',
    category: 'Sports',
    minPrice: 35,
    ticketCount: 156,
  },
  {
    id: '3',
    title: 'Spirit of Burgas 2026',
    date: '2026-07-20T16:00:00Z',
    location: 'Central Beach',
    city: 'Burgas',
    image: 'https://picsum.photos/seed/festival/800/600',
    category: 'Festival',
    minPrice: 85,
    ticketCount: 89,
  },
  {
    id: '4',
    title: 'The Phantom of the Opera',
    date: '2026-04-10T19:30:00Z',
    location: 'National Palace of Culture (NDK)',
    city: 'Sofia',
    image: 'https://picsum.photos/seed/theater/800/600',
    category: 'Theater',
    minPrice: 45,
    ticketCount: 12,
  },
];

export const MOCK_TICKETS: Ticket[] = [
  {
    id: 't1',
    eventId: '1',
    sellerId: 's1',
    sellerName: 'Ivan P.',
    sellerRating: 4.9,
    isVerified: true,
    price: 145,
    section: 'Sector A',
    row: '12',
    seat: '45',
    type: 'PDF',
    quantity: 2,
  },
  {
    id: 't2',
    eventId: '1',
    sellerId: 's2',
    sellerName: 'Maria G.',
    sellerRating: 4.7,
    isVerified: false,
    price: 130,
    section: 'Standing',
    type: 'Mobile',
    quantity: 1,
  },
];
