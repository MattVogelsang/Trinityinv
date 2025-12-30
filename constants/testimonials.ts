import { Testimonial } from '@/types/api';

export const fallbackTestimonials: (Testimonial & { id: number })[] = [
  {
    id: 1,
    name: "Matt V",
    location: "Coral Gables, FL",
    quote: "I've been with this insurance company for years, and I couldn't be happier. They provide excellent coverage, and their customer service is top-notch!",
    rating: 5
  },
  {
    id: 2,
    name: "Anna B",
    location: "Miami, FL",
    quote: "The experience I had was beyond 5 stars! Customer service was outstanding. Guido helped me with a business insurance policy. He was very personable and professional. I will definitely be referring this insurance agency for my friends and family.",
    rating: 5
  },
  {
    id: 3,
    name: "Beatrice C",
    location: "Miami, FL",
    quote: "Since 2015 Trinity Insurance has been handling all our policies. The attention and responsibility is amazing. They attend our demands in record time and always looking to find us the best price in the market!!! 100% recommended, Guido is the best!!!",
    rating: 5
  },
  {
    id: 4,
    name: "Maria H",
    location: "San Francisco, CA",
    quote: "The customer support team is outstanding. They are always friendly, helpful, and go the extra mile to ensure I have a positive experience with Trinity Insurance.",
    rating: 5
  },
  {
    id: 5,
    name: "David W",
    location: "New York, NY",
    quote: "The peace of mind I get from knowing I'm covered by this insurance is priceless. The policies are comprehensive, and I feel secure knowing Trinity has my back.",
    rating: 5
  }
];

