'use client';

import { useEffect, useRef } from 'react';

export default function Map() {
    const mapRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        // Avoid reloading the script if it already exists
        if (typeof window === 'undefined' || !mapRef.current) return;

        const existingScript = document.getElementById('googleMaps') as HTMLScriptElement | null;

        const initMap = () => {
            // @ts-ignore
            if (!window.google || !mapRef.current) return;

            const location = { lat: 19.119677, lng: 72.846328 };
            //@ts-ignore
            const map = new window.google.maps.Map(mapRef.current, {
                center: location,
                zoom: 15,
            });
            //@ts-ignore
            new window.google.maps.Marker({
                position: location,
                map,
            });
        };

        if (!existingScript) {
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyDtIIulH8gJAUT3eoAB0qsqYF0Bv1pKxtk&callback=initMap`;
            script.id = 'googleMaps';
            script.async = true;
            script.defer = true;

            // @ts-ignore: initMap is declared on the window object
            window.initMap = initMap;

            document.body.appendChild(script);
        } else {
            // @ts-ignore: initMap is declared on the window object
            window.initMap = initMap;
            //@ts-ignore
            if (window.google && window.google.maps) {
                initMap();
            }
        }
    }, []);

    return <div ref={ mapRef } style = {{ width: '100%', height: '500px' }
} />;
}
