
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Share, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious 
} from '@/components/ui/carousel';
import { Skeleton } from '@/components/ui/skeleton';

interface Image {
  id: number;
  url: string;
  alt: string;
}

// Sample data for the listing
const images: Image[] = [
  {
    id: 1,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/54cb78c6-fbe9-4772-942a-44495e036331.jpeg",
    alt: "Main living room"
  },
  {
    id: 2,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/a85be476-6bc6-4aab-a6c1-5caa377a90a2.jpeg",
    alt: "Bedroom view"
  },
  {
    id: 3,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/a4f9d9db-7c01-4a82-af52-e5a64f877756.jpeg",
    alt: "Kitchen area"
  },
  {
    id: 4,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/bc2e9fa8-1539-4895-a303-7caa56dde205.jpeg",
    alt: "Bathroom"
  },
  {
    id: 5,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/bb79c5d8-2886-42ed-bcdc-9bbc887bd129.jpeg",
    alt: "Outdoor view"
  }
];

const ImageGallery: React.FC = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);

  useEffect(() => {
    // Preload images
    const imagePromises = images.map((image, index) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = image.url;
        img.onload = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true;
            return newState;
          });
          resolve();
        };
        img.onerror = () => {
          setImagesLoaded(prev => {
            const newState = [...prev];
            newState[index] = true; // Mark as loaded even on error to avoid infinite loading
            return newState;
          });
          resolve();
        };
      });
    });

    Promise.all(imagePromises).then(() => {
      setAllImagesLoaded(true);
    });
  }, []);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleImageError = (index: number) => {
    console.error(`Failed to load image at index ${index}`);
  };

  const renderImageOrFallback = (image: Image, index: number, className: string) => {
    if (!imagesLoaded[index]) {
      return <Skeleton className={`${className} animate-pulse`} />;
    }
    
    return (
      <img 
        src={image.url} 
        alt={image.alt}
        className={className}
        onError={() => handleImageError(index)}
      />
    );
  };

  return (
    <>
      <div className="relative">
        {/* Gallery Grid for desktop */}
        <div className="hidden md:grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
          <div className="col-span-2 row-span-2 transition-transform hover:scale-[1.01] duration-300">
            {renderImageOrFallback(images[0], 0, "h-full w-full object-cover cursor-pointer transition-opacity duration-500")}
            {!imagesLoaded[0] && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Skeleton className="h-full w-full rounded-xl" />
              </div>
            )}
            <div 
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setCurrentPhotoIndex(0);
                setShowAllPhotos(true);
              }}
            />
          </div>
          
          {images.slice(1, 5).map((image, index) => (
            <div key={image.id} className="relative overflow-hidden transition-transform hover:scale-[1.01] duration-300">
              {renderImageOrFallback(image, index + 1, "h-full w-full object-cover cursor-pointer transition-opacity duration-500")}
              {!imagesLoaded[index + 1] && (
                <Skeleton className="h-full w-full absolute inset-0" />
              )}
              <div 
                className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                onClick={() => {
                  setCurrentPhotoIndex(index + 1);
                  setShowAllPhotos(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={image.id}>
                  <div className="relative h-64 w-full rounded-xl overflow-hidden">
                    {renderImageOrFallback(image, index, "w-full h-full object-cover")}
                    {!imagesLoaded[index] && (
                      <Skeleton className="h-full w-full absolute inset-0" />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
          </Carousel>
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
            <div className="flex gap-1">
              {images.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full transition-colors duration-300 ${
                    currentPhotoIndex === index ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Show all photos button */}
        <Button 
          className="absolute bottom-4 right-4 bg-white hover:bg-white/90 text-black shadow-md hidden md:flex items-center gap-1"
          onClick={() => setShowAllPhotos(true)}
          variant="outline"
        >
          <span className="text-sm font-medium">Show all photos</span>
        </Button>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="outline" className="rounded-full bg-white/90 hover:bg-white shadow-sm p-2 h-9 w-9">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full bg-white/90 hover:bg-white shadow-sm p-2 h-9 w-9">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogContent className="max-w-6xl w-full p-0 h-[90vh] bg-white">
          <div className="relative h-full flex flex-col">
            <div className="p-4 flex items-center justify-between border-b">
              <button onClick={() => setShowAllPhotos(false)} className="rounded-full p-2 hover:bg-gray-100">
                <X className="h-5 w-5" />
              </button>
              <div className="flex gap-4">
                <Button variant="ghost" className="flex items-center gap-2 text-sm">
                  <Share className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-sm">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center p-4 relative">
              <Button 
                onClick={prevPhoto} 
                className="absolute left-8 bg-white hover:bg-white/90 rounded-full shadow-md z-10"
                size="icon"
                variant="outline"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="h-full w-full flex items-center justify-center">
                {renderImageOrFallback(
                  images[currentPhotoIndex], 
                  currentPhotoIndex, 
                  "max-h-full max-w-full object-contain transition-opacity duration-300"
                )}
                {!imagesLoaded[currentPhotoIndex] && (
                  <Skeleton className="w-full h-full max-w-2xl max-h-[70vh]" />
                )}
              </div>
              
              <Button 
                onClick={nextPhoto} 
                className="absolute right-8 bg-white hover:bg-white/90 rounded-full shadow-md z-10"
                size="icon"
                variant="outline"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-4 text-center">
              {currentPhotoIndex + 1} / {images.length}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
