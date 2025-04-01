import React, { useEffect, useRef, useState } from 'react';
import { MapPin, Navigation, ExternalLink, X, Plus, Minus, Maximize } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

// These will need to be added to your head tag in a script in _document.tsx or using next/head
// <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
// <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

// Define types for Leaflet
interface LeafletMap {
  setView: (center: [number, number], zoom: number) => LeafletMap;
  remove: () => void;
  zoomIn: (delta?: number) => LeafletMap;
  zoomOut: (delta?: number) => LeafletMap;
  getContainer: () => HTMLElement;
  getRenderer: Function;
  addControl: Function;
  removeControl: Function;
  addLayer: Function;
  removeLayer: Function;
}

interface LeafletLayer {
  addTo: (map: LeafletMap | any) => LeafletLayer;
  bindPopup: (content: string) => LeafletLayer;
  openPopup: () => LeafletLayer;
}

// Type options
interface TileLayerOptions {
  attribution: string;
  maxZoom: number;
}

interface IconOptions {
  iconUrl: string;
  iconSize: [number, number];
  iconAnchor: [number, number];
  popupAnchor: [number, number];
}

interface CircleOptions {
  color: string;
  fillColor: string;
  fillOpacity: number;
  radius: number;
}

interface MapOptions {
  zoomControl?: boolean;
  attributionControl?: boolean;
}

interface LeafletStatic {
  map: (element: HTMLElement, options?: MapOptions) => LeafletMap;
  tileLayer: (urlTemplate: string, options?: TileLayerOptions) => LeafletLayer;
  marker: (latlng: [number, number], options?: { icon: unknown }) => LeafletLayer;
  circle: (latlng: [number, number], options?: CircleOptions) => LeafletLayer;
  icon: (options: IconOptions) => unknown;
}

declare global {
  interface Window {
    L: LeafletStatic;
  }
}

// Custom CSS to be injected to control Leaflet z-index
const leafletZIndexStyles = `
.leaflet-pane,
.leaflet-tile,
.leaflet-marker-icon,
.leaflet-marker-shadow,
.leaflet-tile-container,
.leaflet-map-pane svg,
.leaflet-map-pane canvas,
.leaflet-zoom-box,
.leaflet-image-layer,
.leaflet-layer {
  position: absolute;
  left: 0;
  top: 0;
  z-index: 5 !important;
}

.leaflet-container {
  overflow: hidden;
  z-index: 5 !important;
}

.leaflet-control-container {
  position: relative;
  z-index: 10 !important;
}

.leaflet-popup-pane {
  z-index: 12 !important;
}

.leaflet-tooltip-pane {
  z-index: 13 !important;
}

.leaflet-popup-content-wrapper {
  z-index: 14 !important;
}
`;

const LocationMap = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const dialogMapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);
  const dialogMapInstanceRef = useRef<LeafletMap | null>(null);
  const [isMapDialogOpen, setIsMapDialogOpen] = useState(false);
  
  // Bengaluru, Whitefield coordinates
  const latitude = 12.9698;
  const longitude = 77.7500;
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`;

  const injectCustomZIndexStyles = () => {
    if (!document.getElementById('leaflet-z-index-fix')) {
      const styleElement = document.createElement('style');
      styleElement.id = 'leaflet-z-index-fix';
      styleElement.innerHTML = leafletZIndexStyles;
      document.head.appendChild(styleElement);
    }
  };

  const initMap = (
    elementRef: React.RefObject<HTMLDivElement>,
    instanceRef: React.MutableRefObject<LeafletMap | null>,
    zoom = 15
  ) => {
    if (elementRef.current && !instanceRef.current && window.L) {
      // Initialize the map with necessary options
      instanceRef.current = window.L.map(elementRef.current, {
        zoomControl: false, // Disable default zoom control
        attributionControl: true,
      }).setView([latitude, longitude], zoom);

      // Add a tile layer (OpenStreetMap)
      window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(instanceRef.current);

      // Apply z-index to map container
      if (instanceRef.current.getContainer) {
        const mapContainer = instanceRef.current.getContainer();
        mapContainer.style.zIndex = '5';
      }

      // Add a marker for the location
      const locationIcon = window.L.icon({
        iconUrl: 'https://cdn2.iconfinder.com/data/icons/map-locations-colored-outlined-pixel-perfect/64/pin-map-location-01-512.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
        className: 'pulse-location-icon'
      });

      const marker = window.L.marker([latitude, longitude], { icon: locationIcon }).addTo(instanceRef.current as any);
      
      // Create a custom popup with styled content
      const popupContent = `
        <div class="p-3 text-center rounded-xl shadow-sm" style="min-width: 180px; background: white;">
          <div class="font-bold text-gray-900 mb-2">Rasa Pool Villa</div>
          <div class="text-sm text-gray-600 mb-1">Whitefield, Bengaluru</div>
          <div class="flex justify-center items-center gap-1 text-xs mt-2">
            <svg viewBox="0 0 32 32" class="h-3 w-3 fill-rose-500" aria-hidden="true">
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
            </svg>
            <span class="font-semibold">4.96</span>
            <span class="text-gray-500">(25 reviews)</span>
          </div>
        </div>
      `;
      
      marker.bindPopup(popupContent);

      // Add multiple circles for a pulsing effect
      // Main highlight circle
      window.L.circle([latitude, longitude], {
        color: '#FF385C',
        fillColor: '#FF385C',
        fillOpacity: 0.15,
        weight: 1,
        radius: 500
      }).addTo(instanceRef.current as any);
      
      // Outer highlight circle for visual effect
      window.L.circle([latitude, longitude], {
        color: '#FF385C',
        fillColor: '#FF385C',
        fillOpacity: 0.05,
        weight: 0.5,
        radius: 800
      }).addTo(instanceRef.current as any);
      
      // Points of interest near main location
      // Shopping icon
      const shoppingIcon = window.L.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/map-pins-2/256/22-512.png',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
      });
      
      // Hospital icon
      const hospitalIcon = window.L.icon({
        iconUrl: 'https://cdn4.iconfinder.com/data/icons/map-pins-2/256/19-512.png',
        iconSize: [28, 28],
        iconAnchor: [14, 28],
        popupAnchor: [0, -28],
      });
      
      // Add POI markers
      const shoppingMarker = window.L.marker([latitude + 0.002, longitude + 0.004], { icon: shoppingIcon }).addTo(instanceRef.current as any);
      shoppingMarker.bindPopup('<div class="p-2"><b>Phoenix Mall</b><div class="text-xs">Shopping Center</div></div>');
      
      const hospitalMarker = window.L.marker([latitude - 0.003, longitude], { icon: hospitalIcon }).addTo(instanceRef.current as any);
      hospitalMarker.bindPopup('<div class="p-2"><b>Columbia Asia</b><div class="text-xs">Hospital</div></div>');
      
      // Add custom CSS for the marker pulse effect
      const pulseStyle = document.createElement('style');
      pulseStyle.textContent = `
        .pulse-location-icon {
          animation: marker-pulse 1.5s infinite;
        }
        
        @keyframes marker-pulse {
          0% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        .leaflet-popup-content-wrapper {
          border-radius: 12px !important;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1) !important;
        }
        
        .leaflet-popup-tip {
          box-shadow: 0 4px 5px rgba(0, 0, 0, 0.1) !important;
        }
      `;
      document.head.appendChild(pulseStyle);
    }
  };

  useEffect(() => {
    // Load Leaflet CSS
    if (!document.getElementById('leaflet-css')) {
      const link = document.createElement('link');
      link.id = 'leaflet-css';
      link.rel = 'stylesheet';
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(link);
    }

    // Inject z-index styles
    injectCustomZIndexStyles();

    // Load Leaflet JS
    const loadLeaflet = () => {
      if (!window.L) {
        const script = document.createElement('script');
        script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
        script.async = true;
        script.onload = () => initMap(mapRef, mapInstanceRef);
        document.body.appendChild(script);
      } else {
        initMap(mapRef, mapInstanceRef);
      }
    };

    loadLeaflet();

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (dialogMapInstanceRef.current) {
        dialogMapInstanceRef.current.remove();
        dialogMapInstanceRef.current = null;
      }
    };
  }, []);

  // Initialize dialog map when dialog opens
  useEffect(() => {
    if (isMapDialogOpen && window.L) {
      // We need a delay to ensure DOM is ready
      setTimeout(() => {
        initMap(dialogMapRef, dialogMapInstanceRef, 14);
        
        // Add class to the dialog map container for specific styling
        if (dialogMapRef.current) {
          dialogMapRef.current.classList.add('dialog-map');
        }
      }, 100);
    }
    
    // Clean up the dialog map when dialog closes
    return () => {
      if (!isMapDialogOpen && dialogMapInstanceRef.current) {
        dialogMapInstanceRef.current.remove();
        dialogMapInstanceRef.current = null;
      }
    };
  }, [isMapDialogOpen]);

  const openGoogleMaps = () => {
    window.open(googleMapsUrl, '_blank');
  };

  const handleZoomIn = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomIn();
    }
  };

  const handleZoomOut = () => {
    if (mapInstanceRef.current) {
      mapInstanceRef.current.zoomOut();
    }
  };

  const handleDialogZoomIn = () => {
    if (dialogMapInstanceRef.current) {
      dialogMapInstanceRef.current.zoomIn();
    }
  };

  const handleDialogZoomOut = () => {
    if (dialogMapInstanceRef.current) {
      dialogMapInstanceRef.current.zoomOut();
    }
  };

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold">Where you'll be</h2>
        <Button 
          onClick={openGoogleMaps} 
          variant="outline" 
          className="flex items-center gap-2 text-gray-800 hover:text-gray-900 hover:bg-gray-50 border-gray-200 transition-all rounded-xl"
        >
          <Navigation className="h-4 w-4" />
          <span>Get directions</span>
        </Button>
      </div>
      
      {/* Main Map Container */}
      <div 
        className="h-[450px] w-full bg-gray-100 rounded-2xl relative mb-6 overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 group cursor-pointer"
      >
        {/* The map container */}
        <div ref={mapRef} className="h-full w-full" />
        
        {/* Custom Map Controls */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 z-[10]" onClick={(e) => e.stopPropagation()}>
          <Button 
            onClick={handleZoomIn}
            variant="outline" 
            size="icon"
            className="h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <Plus className="h-5 w-5" />
          </Button>
          <Button 
            onClick={handleZoomOut}
            variant="outline" 
            size="icon"
            className="h-10 w-10 rounded-full bg-white shadow-md hover:bg-gray-50"
          >
            <Minus className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Expand button */}
        <div className="absolute bottom-4 right-4 z-[450] opacity-0 group-hover:opacity-100 transition-opacity duration-200" onClick={(e) => e.stopPropagation()}>
          <Button 
            onClick={() => window.open(googleMapsUrl, '_blank')}
            variant="outline"
            className="h-10 bg-white shadow-md hover:bg-gray-50 text-sm font-medium px-4 rounded-xl"
          >
            <Maximize className="h-5 w-5" />
          </Button>
        </div>
        
        {/* Loading state/fallback */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center pointer-events-none opacity-0 transition-opacity duration-500 z-[440]" id="map-loading">
          <div className="text-center">
            <MapPin className="h-10 w-10 mx-auto mb-2 text-rose-500" />
            <p className="font-medium">Map loading...</p>
            <p className="text-sm text-gray-600">Whitefield, Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
      
      {/* Location Info Card */}
      <div className="space-y-4 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
        <div className="flex items-start gap-3">
          <MapPin className="h-6 w-6 text-black" />
          <div>
            <h3 className="font-semibold text-lg">Bengaluru, Karnataka, India</h3>
            <p className="text-gray-700 leading-relaxed mt-1">
              The apartment is located in Whitefield, one of Bengaluru's major IT hubs. It's within walking distance to several tech parks, shopping malls, and restaurants. The area is well-connected with public transport options.
            </p>
          </div>
        </div>
        
        <div className="ml-8 pt-2">
          <div className="flex flex-wrap gap-2 mt-2">
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Tech parks nearby</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Shopping malls</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Restaurants</span>
            <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium">Public transport</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationMap;
