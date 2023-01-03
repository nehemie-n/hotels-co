export interface Room {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  hotel: string;
  location: {
    country: string;
    street: string;
    city: string;
    coordinates: [string, "$address.longitude"];
  };
  beds: string; // number
  washrooms: string; // number
  quantity: string; // number
  description: string;
  images: [string, string, string, string, string];
  reviews: {
    "5": string;
    "4": string;
    "3": string;
    "2": string;
    "1": string;
  };
  price: string
}

export interface ApiRooms {
  items: Room[];
  count: 84;
}
