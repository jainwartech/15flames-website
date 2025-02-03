import { TeamMember, Partner, Service, Product } from './types';

export const teamMembers: TeamMember[] = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "With over 15 years of experience in technology and innovation, Sarah leads 15 Flames with passion and vision.",
    imageUrl: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "A tech veteran with expertise in scalable solutions and emerging technologies.",
    imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "Emma Williams",
    role: "Head of Design",
    bio: "Award-winning designer passionate about creating intuitive user experiences.",
    imageUrl: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=500"
  }
];

export const partners: Partner[] = [
  {
    name: "TechCorp",
    description: "Leading provider of enterprise solutions",
    logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "InnovateLabs",
    description: "Innovation research and development",
    logoUrl: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=500"
  },
  {
    name: "FutureWorks",
    description: "Next-generation technology solutions",
    logoUrl: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?auto=format&fit=crop&q=80&w=500"
  }
];

export const services: Service[] = [
  {
    title: "Innovation Consulting",
    description: "Strategic guidance for digital transformation and innovation initiatives.",
    icon: "Flame"
  },
  {
    title: "Technology Solutions",
    description: "Custom software development and system integration services.",
    icon: "Zap"
  },
  {
    title: "Security Services",
    description: "Comprehensive cybersecurity solutions and risk management.",
    icon: "Shield"
  },
  {
    title: "Strategic Planning",
    description: "Long-term technology roadmapping and strategic planning.",
    icon: "Target"
  }
];

export const products: Product[] = [
  {
    id: "flame-analytics",
    name: "Flame Analytics",
    description: "Advanced analytics platform for real-time business insights.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=500",
    demoUrl: "https://example.com/demo/analytics"
  },
  {
    id: "flame-secure",
    name: "Flame Secure",
    description: "Enterprise-grade security solution for modern businesses.",
    imageUrl: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80&w=500",
    demoUrl: "https://example.com/demo/secure"
  },
  {
    id: "flame-cloud",
    name: "Flame Cloud",
    description: "Scalable cloud infrastructure management platform.",
    imageUrl: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=500",
    demoUrl: "https://example.com/demo/cloud"
  }
];