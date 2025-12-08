'use client';

import { useState } from 'react';
import MapSkeleton from './MapSceleton';

function LocationMap() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative">
      {!loaded && (
        <div className="z-10 absolute inset-0">
          <MapSkeleton />
        </div>
      )}
      <iframe
        onLoad={() => setLoaded(true)}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac60d6d6efbf4817c59d5b1ea6f0227f8f0a6cfb4b79757fce100cfd5e0284d37&amp;source=constructor"
        width="100%"
        height="400"
        frameBorder="0"
      />
    </div>
  );
}

export default LocationMap;
