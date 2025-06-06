// This utility function transforms API data into a structured Skip object
import type { Skip } from '../types/skip';

export const transformSkipData = (apiData: any): Skip => {
  return {
    id: apiData.id.toString(),
    size: apiData.size || 0, // Default to 0 if null
    description: `${apiData.size || 0} Yard Skip`,
    hirePeriod: apiData.hire_period_days || 14, // Default 14 days
    price: {
      base: apiData.price_before_vat || 0,
      vat: apiData.vat || 20, // Default 20% VAT
      total: (apiData.price_before_vat || 0) * (1 + (apiData.vat || 20) / 100)
    },
    transportCost: apiData.transport_cost || 0,
    perTonneCost: apiData.per_tonne_cost || 0,
    location: {
      postcode: apiData.postcode || 'Not specified',
      area: apiData.area || 'General area'
    },
    restrictions: {
      forbidden: apiData.forbidden || false,
      allowedOnRoad: apiData.allowed_on_road || false,
      allowsHeavyWaste: apiData.allows_heavy_waste || false
    },
    dimensions: getSkipDimensions(apiData.size),
    recommendedFor: getRecommendedUsage(apiData.size, apiData.allows_heavy_waste),
    createdAt: apiData.created_at ? new Date(apiData.created_at) : new Date(),
    updatedAt: apiData.updated_at ? new Date(apiData.updated_at) : new Date()
  };
};

// Helper functions

const getSkipDimensions = (size: number | null): string => {
  const defaultSize = size || 0;
  // These are example dimensions - adjust based on real skip specs
  switch (true) {
    case defaultSize <= 4: return '3.5ft x 4.5ft x 3ft';
    case defaultSize <= 8: return '6ft x 5ft x 4ft';
    case defaultSize <= 12: return '8ft x 6ft x 4.5ft';
    default: return '10ft x 8ft x 5ft';
  }
};

const getRecommendedUsage = (size: number | null, allowsHeavy: boolean | null): string[] => {
  const defaultSize = size || 0;
  const recommendations = [];
  
  if (defaultSize <= 4) {
    recommendations.push('Small home projects', 'Garden clearance');
  } else if (defaultSize <= 8) {
    recommendations.push('Kitchen refurbishment', 'Bathroom remodel');
  } else {
    recommendations.push('House clearance', 'Construction waste');
  }

  if (allowsHeavy) {
    recommendations.push('Heavy materials');
  }

  return recommendations.length ? recommendations : ['General waste disposal'];
};