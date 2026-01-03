import type {
  QuoteRequest,
  CreateQuoteRequestInput,
  Testimonial,
  CreateTestimonialInput
} from '@/types/api';

class Base44Client {
  entities = {
    QuoteRequest: {
      create: async (data: CreateQuoteRequestInput): Promise<QuoteRequest> => {
        console.log('Creating quote request:', data);
        return Promise.resolve({
          ...data,
          status: 'new'
        });
      }
    },
    Testimonial: {
      create: async (data: CreateTestimonialInput): Promise<Testimonial> => {
        console.log('Creating testimonial:', data);
        return Promise.resolve({
          ...data,
          rating: data.rating ?? 5
        });
      },
      list: async (): Promise<Testimonial[]> => {
        console.log('Fetching testimonials');
        return Promise.resolve([]);
      }
    }
  };
}

export const base44 = new Base44Client();

