import { 
  Building2, 
  Anchor, 
  Hotel, 
  Building, 
  Home
} from 'lucide-react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: typeof Building2;
  image: string;
  color: string;
  bgColor: string;
  borderColor: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 'commercial',
    title: 'Commercial Insurance',
    description: 'Comprehensive coverage for businesses of all sizes, from property to professional liability.',
    icon: Building2,
    image: '/images/services/commercial-insurance.jpg',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/20',
    features: ['Property & General Liability', 'Workers\' Compensation', 'Professional Liability', 'Business Auto']
  },
  {
    id: 'marine',
    title: 'Marine Contractors',
    description: 'Specialized coverage for marine industry with 40+ years of experience in the field.',
    icon: Anchor,
    image: '/images/services/boats.jpg',
    color: 'from-cyan-500 to-cyan-600',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20',
    features: ['Hull, P&I Coverage', 'USL&H & MEL', 'Equipment Policies', 'Pollution Liability']
  },
  {
    id: 'hotel',
    title: 'Hotel & Motel Programs',
    description: 'Tailored insurance solutions for hospitality businesses with all coverage needs.',
    icon: Hotel,
    image: '/images/services/hotel-motel.jpg',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/20',
    features: ['Property Coverage', 'Liquor Liability', 'Cyber Liability', 'Workers Compensation']
  },
  {
    id: 'condo',
    title: 'Condo Associations',
    description: 'Complete protection for condominium associations and their unique requirements.',
    icon: Building,
    image: '/images/services/condo-associations.jpg',
    color: 'from-amber-500 to-amber-600',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/20',
    features: ['General Liability', 'Directors & Officers', 'Property & Wind', 'Equipment Breakdown']
  },
  {
    id: 'homeowners',
    title: 'Homeowners Insurance',
    description: 'Protect your home and personal belongings with customized coverage options.',
    icon: Home,
    image: '/images/services/homeowners-insurance.jpg',
    color: 'from-emerald-500 to-emerald-600',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/20',
    features: ['Homeowners & Renters', 'Dwelling Fire Policies', 'Personal Umbrella', 'Fine Arts & Jewelry']
  }
];

