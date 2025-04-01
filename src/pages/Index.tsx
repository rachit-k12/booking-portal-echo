
import React from 'react';
import ImageGallery from '@/components/ImageGallery';
import ListingInfo from '@/components/ListingInfo';
import Reviews from '@/components/Reviews';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import HostInfo from '@/components/HostInfo';
import ThingsToKnow from '@/components/ThingsToKnow';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const handleBookRedirect = () => {
    window.open('https://www.airbnb.com/rooms/1376711140170106976', '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 py-6 mt-4">
        {/* Listing Title (Mobile Only) */}
        <h1 className="text-2xl font-semibold mb-4 md:hidden">Aroma Satwika - 3 BHK Apartment | Whitefield</h1>
        
        {/* Image Gallery */}
        <ImageGallery />
        
        {/* Main Content */}
        <div className="mt-8 max-w-[1120px] mx-auto">
          <ListingInfo />
          <Separator className="my-10" />
          <HostInfo />
          <Separator className="my-10" />
          <Reviews />
          <Separator className="my-10" />
          <ThingsToKnow />
          <Separator className="my-10" />
          <LocationMap />
          
          {/* Book on Airbnb Button */}
          <div className="my-12 flex justify-center">
            <Button 
              onClick={handleBookRedirect}
              className="bg-airbnb-red hover:bg-airbnb-red/90 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center gap-2 transition-transform hover:scale-105 duration-200 shadow-md"
            >
              Book on Airbnb <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between lg:hidden z-10 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
          <div>
            <span className="text-lg font-semibold">₹4,399</span>
            <span className="text-sm"> night</span>
          </div>
          <Button 
            onClick={handleBookRedirect} 
            className="bg-airbnb-red hover:bg-airbnb-red/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 hover:shadow-md"
          >
            Book on Airbnb
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
