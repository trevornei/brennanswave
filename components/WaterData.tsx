'use client'

// React Imports
import { useEffect, useState } from 'react';

export default function WaterData() {
  const [waterData, setWaterData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchWaterData = async () => {
        try {
              setLoading(true);
              const response = await fetch(' https://waterservices.usgs.gov/nwis/iv/?format=json&sites=12324200&parameterCd=00060&siteStatus=all');
              
              if(!response.ok) {
                throw new Error(`HTTP ERROR! Status: ${response.status}`);
              }

              const data = await response.json();
              setWaterData(data);
            } catch (err) {
               setError(err.message);
            } finally {
              setLoading(false);
            }
        };
        
        fetchWaterData();
      }, []);

  return (
    <div>
      {loading && <p>Loading water data...</p>}
      {error && <p>Error: {error}</p>}
      {waterData && (
        <pre>{JSON.stringify(waterData, null, 2)}</pre>
      )}
    </div>
  )
}
