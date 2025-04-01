
import React from 'react';
import Header from '@/components/Header';
import ImageGallery from '@/components/ImageGallery';
import ListingInfo from '@/components/ListingInfo';
import BookingCard from '@/components/BookingCard';
import Reviews from '@/components/Reviews';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 md:px-10 lg:px-20 py-6">
        {/* Listing Title (Mobile Only) */}
        <h1 className="text-xl font-semibold mb-4 md:hidden">Aroma Satwika - 3 BHK Apartment | Whitefield</h1>
        
        {/* Image Gallery */}
        <ImageGallery />
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-8">
          <div className="lg:col-span-2">
            <ListingInfo />
            <Separator className="my-8" />
            <Reviews />
            <Separator className="my-8" />
            <LocationMap />
          </div>
          
          <div className="hidden lg:block">
            <BookingCard />
          </div>
        </div>
        
        {/* Mobile Booking Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 flex items-center justify-between lg:hidden z-10">
          <div>
            <span className="text-lg font-semibold">₹4,399</span>
            <span className="text-sm"> night</span>
          </div>
          <button className="bg-airbnb-red text-white px-6 py-3 rounded-lg font-bold">
            Reserve
          </button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
