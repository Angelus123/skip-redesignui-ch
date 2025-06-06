// This file defines the types and interfaces used in this application.
export interface PriceDetails {
  base: number;
  vat: number;
  total: number;
}

export interface Location {
  postcode: string;
  area: string;
}

export interface Restrictions {
  forbidden: boolean;
  allowedOnRoad: boolean;
  allowsHeavyWaste: boolean;
}

export interface Skip {
  id: string;
  size: number;
  description: string;
  hirePeriod: number;
  price: PriceDetails;
  transportCost: number;
  perTonneCost: number;
  location: Location;
  restrictions: Restrictions;
  dimensions: string;
  recommendedFor: string[];
  createdAt: Date;
  updatedAt: Date;
}
export interface ApiResponse<T> {
  data: T;
  error?: string;
  loading: boolean;
}