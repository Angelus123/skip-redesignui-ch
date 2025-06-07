// // Description: This file provides a React hook to fetch and transform skip data from an API.
// It includes error handling and data transformation to ensure the skip data is in the correct format for use in the application.
import { useEffect, useState } from 'react';
import { transformSkipData } from '../utils/transformSkips';
import type { Skip } from '../types/skip';

const API_BASE = 'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

type UseSkipsResult = {
    data: Skip[] | null;
    loading: boolean;
    error: string | null;
};

export function useSkips(): UseSkipsResult {
    const [data, setData] = useState<Skip[] | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSkips = async () => {
            setLoading(true);
            setError(null);

            try {
                const response = await fetch(API_BASE);

                if (!response.ok) {
                    throw new Error(`Failed to fetch skips: ${response.status} ${response.statusText}`);
                }

                const rawData = await response.json();

                // Validate response is an array
                if (!Array.isArray(rawData)) {
                    throw new Error('Invalid data format: expected array of skips');
                }

                // Transform each skip item
                const transformedData = rawData.map(item => {
                    try {
                        return transformSkipData(item);
                    } catch (transformError) {
                        console.error('Error transforming skip data:', transformError);

                        return {
                            id: item.id?.toString() || 'unknown',
                            size: item.size || 0,
                            description: `${item.size || 0} Yard Skip`,
                            hirePeriod: item.hire_period_days || 14,
                            price: {
                                base: item.price_before_vat || 0,
                                vat: item.vat || 20,
                                total: (item.price_before_vat || 0) * (1 + (item.vat || 20) / 100)
                            },
                            transportCost: item.transport_cost ?? null,
                            perTonneCost: item.per_tonne_cost ?? null,
                            location: {
                                postcode: item.postcode || 'NR32',
                                area: item.area || 'Lowestoft'
                            },
                            restrictions: {
                                forbidden: item.forbidden || false,
                                allowedOnRoad: item.allowed_on_road || false,
                                allowsHeavyWaste: item.allows_heavy_waste || false
                            },
                            dimensions: 'Unknown',
                            recommendedFor: ['General waste'],
                            createdAt: new Date(),
                            updatedAt: new Date()
                        };
                    }
                });

                // Filter out any null or undefined items
                setData(transformedData);
            } catch (err) {
                const errorMessage = err instanceof Error ? err.message : 'Unknown error occurred';
                console.error('Error fetching skips:', errorMessage);
                setError(errorMessage);
                setData(null);
            } finally {
                setLoading(false);
            }
        };

        fetchSkips();
    }, []);

    return { data, loading, error };
}