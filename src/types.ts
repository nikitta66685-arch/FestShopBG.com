export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  city: string;
  image: string;
  category: 'Concert' | 'Sports' | 'Festival' | 'Theater';
  minPrice: number;
  ticketCount: number;
}

export interface Ticket {
  id: string;
  eventId: string;
  sellerId: string;
  sellerName: string;
  sellerRating: number;
  isVerified: boolean;
  price: number;
  section: string;
  row?: string;
  seat?: string;
  type: 'PDF' | 'Mobile' | 'Paper';
  quantity: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'buyer' | 'seller' | 'admin';
  avatar?: string;
}

export interface Order {
  id: string;
  ticketId: string;
  buyerId: string;
  totalPrice: number;
  status: 'Pending' | 'Paid' | 'Delivered' | 'Cancelled';
  createdAt: string;
}
