
import React from 'react';
import { MapPin } from 'lucide-react';

const LocationMap = () => {
  return (
    <div className="py-8">
      <h2 className="text-xl font-semibold mb-6">Where you'll be</h2>
      
      <div className="h-96 w-full bg-gray-200 rounded-xl relative mb-4 overflow-hidden">
        {/* This would typically be a Google Maps embed, but we'll use a placeholder */}
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-10 w-10 mx-auto mb-2" />
            <p className="font-medium">Map loading...</p>
            <p className="text-sm text-gray-600">Whitefield, Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-semibold">Bengaluru, Karnataka, India</h3>
        <p className="text-gray-700">
          The apartment is located in Whitefield, one of Bengaluru's major IT hubs. It's within walking distance to several tech parks, shopping malls, and restaurants. The area is well-connected with public transport options.
        </p>
        <button className="underline font-medium">Show more</button>
      </div>
    </div>
  );
};

export default LocationMap;
