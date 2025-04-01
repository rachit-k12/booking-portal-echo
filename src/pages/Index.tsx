
import React from 'react';
import Header from '@/components/Header';
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
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-10 lg:px-20 py-6">
        {/* Listing Title (Mobile Only) */}
        <h1 className="text-xl font-semibold mb-4 md:hidden">Aroma Satwika - 3 BHK Apartment | Whitefield</h1>
        
        {/* Image Gallery */}
        <ImageGallery />
        
        {/* Main Content */}
        <div className="mt-8">
          <ListingInfo />
          <Separator className="my-8" />
          <Reviews />
          <Separator className="my-8" />
          <HostInfo />
          <Separator className="my-8" />
          <ThingsToKnow />
          <Separator className="my-8" />
          <LocationMap />
          
          {/* Book on Airbnb Button */}
          <div className="my-10 flex justify-center">
            <Button 
              onClick={handleBookRedirect}
              className="bg-airbnb-red hover:bg-airbnb-red/90 text-white px-8 py-6 rounded-lg text-lg font-semibold flex items-center gap-2"
            >
              Book on Airbnb <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between lg:hidden z-10">
          <div>
            <span className="text-lg font-semibold">₹4,399</span>
            <span className="text-sm"> night</span>
          </div>
          <Button 
            onClick={handleBookRedirect} 
            className="bg-airbnb-red hover:bg-airbnb-red/90 text-white px-6 py-2 rounded-lg font-semibold"
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
