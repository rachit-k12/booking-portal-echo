import React, { useEffect } from 'react';
import ImageGallery from '@/components/ImageGallery';
import ListingInfo from '@/components/ListingInfo';
import Reviews from '@/components/Reviews';
import LocationMap from '@/components/LocationMap';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HostInfo from '@/components/HostInfo';
import ThingsToKnow from '@/components/ThingsToKnow';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const Index = () => {
  const handleBookRedirect = () => {
    window.open('https://www.airbnb.com/rooms/1376711140170106976', '_blank');
  };
  
  // Add scroll position listener for cool scrolling effect
  useEffect(() => {
    let lastScrollY = window.scrollY;
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDirection = scrollY > lastScrollY ? 'down' : 'up';
      const scrollDifference = Math.abs(scrollY - lastScrollY);
      
      // Apply smooth delay only for significant scroll changes
      if (scrollDifference > 20) {
        document.documentElement.style.setProperty(
          '--scroll-speed', 
          scrollDirection === 'down' ? '0.8' : '0.3'
        );
        
        setTimeout(() => {
          lastScrollY = scrollY;
        }, 50);
      } else {
        lastScrollY = scrollY;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white p-4">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 lg:px-8 py-6">
        {/* Image Gallery - Apply parallax effect */}
        <div className="scroll-parallax parallax-slow">
          <ImageGallery />
        </div>
        
        {/* Main Content */}
        <div className="mt-8 max-w-[1120px] mx-auto stagger-children">
          <div className="scroll-reveal delay-100">
            <ListingInfo />
          </div>
          <Separator className="my-10" />
          
          <div className="scroll-reveal delay-200">
            <HostInfo />
          </div>
          
          {/* <Separator className="my-10" />
          <div className="scroll-reveal delay-300">
            <Reviews />
          </div> */}
          
          <Separator className="my-10" />
          <div className="scroll-reveal delay-300">
            <ThingsToKnow />
          </div>
          
          <Separator className="my-10" />
          <div className="scroll-reveal delay-400">
            <LocationMap />
          </div>
        </div>
        
        {/* Mobile Action Bar */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t p-4 flex items-center justify-between md:hidden z-10">
          <div>
            <div className="text-xl font-semibold">₹31,000</div>
            <div className="text-sm text-gray-500">2 nights</div>
          </div>
          <Button 
            onClick={handleBookRedirect}
            className="bg-rose-600 hover:bg-rose-700 text-white"
          >
            Book now <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
