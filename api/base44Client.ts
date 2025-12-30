// Base44 API Client
// TODO: Configure with your actual Base44 API credentials

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

class Base44Client {
  entities = {
    QuoteRequest: {
      create: async (data: CreateQuoteRequestInput): Promise<QuoteRequest> => {
        // TODO: Replace with actual Base44 API call
        console.log('Creating quote request:', data);
        
        // Simulate API call
        return new Promise((resolve) => {
          setTimeout(() => {
            const quoteRequest: QuoteRequest = {
              ...data,
              status: 'new'
            };
            resolve(quoteRequest);
          }, 1000);
        });
      }
    },
    Testimonial: {
      create: async (data: CreateTestimonialInput): Promise<Testimonial> => {
        // TODO: Replace with actual Base44 API call
        console.log('Creating testimonial:', data);
        
        // Simulate API call
        return new Promise((resolve) => {
          setTimeout(() => {
            const testimonial: Testimonial = {
              ...data,
              rating: data.rating ?? 5
            };
            resolve(testimonial);
          }, 1000);
        });
      },
      list: async (): Promise<Testimonial[]> => {
        // TODO: Replace with actual Base44 API call
        console.log('Fetching testimonials');
        
        // Simulate API call
        return new Promise((resolve) => {
          setTimeout(() => {
            // Return empty array - real implementation would fetch from API
            resolve([]);
          }, 500);
        });
      }
    }
  };
}

export const base44 = new Base44Client();

