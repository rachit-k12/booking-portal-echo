
import React from 'react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';
import { Image } from './types';

interface MobileCarouselProps {
  images: Image[];
  imagesLoaded: boolean[];
  currentPhotoIndex: number;
}

const MobileCarousel: React.FC<MobileCarouselProps> = ({ 
  images, 
  imagesLoaded, 
  currentPhotoIndex 
}) => {
  return (
    <div className="md:hidden relative">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={image.id}>
              <div className="relative h-72 w-full rounded-xl overflow-hidden">
                {imagesLoaded[index] ? (
                  <img 
                    src={image.url} 
                    alt={image.alt} 
                    className="w-full h-full object-cover"
                    onError={() => console.error(`Failed to load image at index ${index}`)}
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-gray-300 animate-pulse">
                    <Skeleton className="h-full w-full absolute inset-0" />
                  </div>
                )}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-white/90 hover:bg-white shadow-md" />
        <CarouselNext className="right-2 bg-white/90 hover:bg-white shadow-md" />
      </Carousel>
      
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex gap-1.5">
          {images.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                currentPhotoIndex === index ? 'bg-white' : 'bg-white/40'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileCarousel;
