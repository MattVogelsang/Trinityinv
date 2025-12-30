export type InsuranceType = 
  | 'commercial' 
  | 'marine' 
  | 'hotel_motel' 
  | 'condo' 
  | 'homeowners' 
  | 'other';

export type QuoteRequestStatus = 
  | 'new' 
  | 'contacted' 
  | 'quoted' 
  | 'closed';

export interface QuoteRequest {
  name: string;
  email: string;
  phone?: string;
  insurance_type?: InsuranceType;
  message?: string;
  status?: QuoteRequestStatus;
}

export interface CreateQuoteRequestInput {
  name: string;
  email: string;
  phone?: string;
  insurance_type?: InsuranceType;
  message?: string;
}

export interface Testimonial {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  avatar_url?: string;
}

export interface CreateTestimonialInput {
  name: string;
  location?: string;
  quote: string;
  rating?: number;
  avatar_url?: string;
}

