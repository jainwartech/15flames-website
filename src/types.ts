export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Partner {
  name: string;
  description: string;
  logoUrl: string;
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  demoUrl: string;
}