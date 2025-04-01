
import React, { useState } from 'react';
import { Star, Medal, Wifi, Tv, Home, Snowflake, Utensils, Clock, Camera, Cigarette, FileText } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const ListingInfo = () => {
  const [showRulesDialog, setShowRulesDialog] = useState(false);
  const [showAmenitiesDialog, setShowAmenitiesDialog] = useState(false);

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
      
      {/* House Rules Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Things to know</h2>
        <div className="space-y-3">
          <div className="flex flex-col">
            <h3 className="font-semibold">House rules</h3>
            <p className="text-gray-700">Check-in after 2:00pm</p>
            <p className="text-gray-700">Checkout before 11:00am</p>
            <p className="text-gray-700">Pets allowed</p>
            <button 
              onClick={() => setShowRulesDialog(true)} 
              className="text-black underline font-medium mt-2 text-left w-fit"
            >
              Show more
            </button>
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
        <button 
          onClick={() => setShowAmenitiesDialog(true)}
          className="mt-6 border border-black rounded-lg px-5 py-2 font-medium"
        >
          Show all 25 amenities
        </button>
      </div>

      {/* House Rules Dialog */}
      <Dialog open={showRulesDialog} onOpenChange={setShowRulesDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">House rules</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <p className="text-gray-600 mb-6">You'll be staying in someone's home, so please treat it with care and respect.</p>
            
            <h3 className="font-semibold text-lg mb-3">Checking in and out</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Check-in after 2:00pm</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Checkout before 11:00am</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <FileText className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Self check-in with building staff</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">During your stay</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 mt-1">🐾</span>
                <div>
                  <p>Pets allowed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Camera className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Commercial photography allowed</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Cigarette className="h-5 w-5 mt-1 flex-shrink-0" />
                <div>
                  <p>Smoking is allowed</p>
                </div>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Additional rules</h3>
            <div className="space-y-2">
              <p className="text-gray-700">The kitchen is not accessible to guests for full fledge cooking and is not included in the listing. They can use all kitchen equipments.</p>
              <p className="text-gray-700">Visiting guests will be charged extra.</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Amenities Dialog */}
      <Dialog open={showAmenitiesDialog} onOpenChange={setShowAmenitiesDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">What this place offers</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <h3 className="font-semibold text-lg mb-3">Essentials</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
              <div className="flex items-center gap-4">
                <Wifi className="h-5 w-5" />
                <span>Fast WiFi – 100 Mbps</span>
              </div>
              <div className="flex items-center gap-4">
                <Tv className="h-5 w-5" />
                <span>55" HDTV with Netflix</span>
              </div>
              <div className="flex items-center gap-4">
                <Utensils className="h-5 w-5" />
                <span>Fully equipped kitchen</span>
              </div>
              <div className="flex items-center gap-4">
                <Snowflake className="h-5 w-5" />
                <span>Air conditioning</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🚿</span>
                <span>Hot water</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">👕</span>
                <span>Washer</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Safety features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-xl">🚨</span>
                <span>Smoke alarm</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🧯</span>
                <span>Fire extinguisher</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🔒</span>
                <span>Security cameras</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🚪</span>
                <span>Lockbox</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Bedroom and laundry</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
              <div className="flex items-center gap-4">
                <span className="text-xl">🛏️</span>
                <span>3 king beds</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🛁</span>
                <span>3 bathrooms</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">👕</span>
                <span>Washer</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🧺</span>
                <span>Hangers</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🧴</span>
                <span>Essentials</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Entertainment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 mb-6">
              <div className="flex items-center gap-4">
                <Tv className="h-5 w-5" />
                <span>55" HDTV</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🎮</span>
                <span>Books and games</span>
              </div>
            </div>
            
            <h3 className="font-semibold text-lg mb-3">Outdoor</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
              <div className="flex items-center gap-4">
                <span className="text-xl">🏊</span>
                <span>Shared pool</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🏋️</span>
                <span>Gym</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xl">🛝</span>
                <span>Children's play area</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListingInfo;
