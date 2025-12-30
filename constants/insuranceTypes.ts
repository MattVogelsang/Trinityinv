export interface InsuranceTypeOption {
  value: string;
  label: string;
}

export const insuranceTypes: InsuranceTypeOption[] = [
  { value: 'commercial', label: 'Commercial Insurance' },
  { value: 'marine', label: 'Marine Contractors' },
  { value: 'hotel_motel', label: 'Hotel/Motel Programs' },
  { value: 'condo', label: 'Condo Associations' },
  { value: 'homeowners', label: 'Homeowners Insurance' },
  { value: 'other', label: 'Other' }
];

