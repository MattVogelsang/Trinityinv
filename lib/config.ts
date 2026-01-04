export const siteConfig = {
  contact: {
    office: {
      address: process.env.NEXT_PUBLIC_OFFICE_ADDRESS || '4429 Hollywood Blvd #3637',
      city: process.env.NEXT_PUBLIC_OFFICE_CITY || 'Hollywood',
      state: process.env.NEXT_PUBLIC_OFFICE_STATE || 'FL',
      zip: process.env.NEXT_PUBLIC_OFFICE_ZIP || '33021',
    },
    phone: {
      dade: process.env.NEXT_PUBLIC_PHONE_DADE || '305-874-6489',
      broward: process.env.NEXT_PUBLIC_PHONE_BROWARD || '954-613-3601',
    },
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'tguido@trinityinv.net',
  },
  company: {
    name: 'Trinity Insurance',
    yearsExperience: 20,
  },
};

export const getFullAddress = () => {
  const { office } = siteConfig.contact;
  return `${office.address}\n${office.city}, ${office.state} ${office.zip}`;
};

