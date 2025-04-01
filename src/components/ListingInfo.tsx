
import React from 'react';
import { Star, Medal, Wifi, Tv, Home, Snowflake, Utensils } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const ListingInfo = () => {
  return (
    <div className="py-6">
      {/* Title and stats */}
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
        <div>
          <h1 className="text-2xl font-semibold mb-1">Aroma Satwika - 3 BHK Apartment | Whitefield</h1>
          <div className="flex flex-wrap items-center text-sm gap-1">
            <div className="flex items-center">
              <Star className="h-4 w-4 fill-current" />
              <span className="ml-1 font-semibold">4.95</span>
            </div>
            <span>·</span>
            <span className="underline font-medium">63 reviews</span>
            <span>·</span>
            <div className="flex items-center">
              <Medal className="h-4 w-4 mr-1" />
              <span className="font-medium">Superhost</span>
            </div>
            <span>·</span>
            <span className="underline font-medium">Bengaluru, Karnataka, India</span>
          </div>
        </div>
        
        <div className="flex mt-4 lg:mt-0 gap-3">
          <button className="flex items-center gap-2 font-medium underline">
            <span>Share</span>
          </button>
          <button className="flex items-center gap-2 font-medium underline">
            <span>Save</span>
          </button>
        </div>
      </div>

      {/* Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="flex gap-4">
          <div className="mt-1">
            <Home className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-semibold">Entire home</h3>
            <p className="text-sm text-gray-600">You'll have the apartment to yourself.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="mt-1">
            <Medal className="h-8 w-8" />
          </div>
          <div>
            <h3 className="font-semibold">Superhost</h3>
            <p className="text-sm text-gray-600">Superhosts are experienced, highly rated hosts.</p>
          </div>
        </div>
        
        <div className="flex gap-4">
          <div className="mt-1">
            <span className="text-2xl">🔑</span>
          </div>
          <div>
            <h3 className="font-semibold">Self check-in</h3>
            <p className="text-sm text-gray-600">Check yourself in with the keypad.</p>
          </div>
        </div>
      </div>
      
      <Separator className="my-8" />
      
      {/* Description */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">About this space</h2>
        <p className="text-gray-700 mb-4">
          Welcome to our 3 BHK apartment in Bengaluru! Our spacious home is equipped with all modern 
          amenities to ensure a comfortable stay. Located in Whitefield, it's close to IT parks, 
          shopping malls, and restaurants. Perfect for families, business travelers, or a group of friends.
        </p>
        <button className="font-semibold underline">Show more</button>
      </div>
      
      <Separator className="my-8" />
      
      {/* Amenities */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">What this place offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center gap-4">
            <Wifi className="h-6 w-6" />
            <span>Fast WiFi – 100 Mbps</span>
          </div>
          <div className="flex items-center gap-4">
            <Tv className="h-6 w-6" />
            <span>55" HDTV with Netflix</span>
          </div>
          <div className="flex items-center gap-4">
            <Utensils className="h-6 w-6" />
            <span>Fully equipped kitchen</span>
          </div>
          <div className="flex items-center gap-4">
            <Snowflake className="h-6 w-6" />
            <span>Air conditioning</span>
          </div>
        </div>
        <button className="mt-6 border border-black rounded-lg px-5 py-2 font-medium">
          Show all 25 amenities
        </button>
      </div>
    </div>
  );
};

export default ListingInfo;
