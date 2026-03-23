export interface Listing {
  id: string;
  name: string;
  type: string;
  description: string;
  imageUrl: string;
  href: string;
}

export interface Amenity {
    name: string;
    icon: React.ReactNode;
}
