
import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
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

// Updated image data from the Airbnb listing
const images: Image[] = [
  {
    id: 1,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/54cb78c6-fbe9-4772-942a-44495e036331.jpeg",
    alt: "Living room with modern furnishings"
  },
  {
    id: 2,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/a85be476-6bc6-4aab-a6c1-5caa377a90a2.jpeg",
    alt: "Bedroom with comfortable bed"
  },
  {
    id: 3,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/a4f9d9db-7c01-4a82-af52-e5a64f877756.jpeg",
    alt: "Modern fully equipped kitchen"
  },
  {
    id: 4,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/bc2e9fa8-1539-4895-a303-7caa56dde205.jpeg",
    alt: "Clean and spacious bathroom"
  },
  {
    id: 5,
    url: "https://a0.muscache.com/im/pictures/miso/Hosting-1376711140170106976/original/bb79c5d8-2886-42ed-bcdc-9bbc887bd129.jpeg",
    alt: "Balcony with outdoor furniture"
  }
];

const ImageGallery: React.FC = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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
      return (
        <div className={`${className} animate-pulse bg-gradient-to-r from-gray-200 to-gray-300`}>
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      );
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
        <div className="hidden md:grid grid-cols-4 gap-3 rounded-2xl overflow-hidden">
          <div className="col-span-2 row-span-2 h-[450px] transition-transform hover:scale-[1.01] duration-300 relative overflow-hidden rounded-tl-2xl rounded-bl-2xl">
            {renderImageOrFallback(
              images[0], 
              0, 
              "h-full w-full object-cover cursor-pointer transition-all duration-500"
            )}
            <div 
              className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
              onClick={() => {
                setCurrentPhotoIndex(0);
                setShowAllPhotos(true);
              }}
              onMouseEnter={() => setHoverIndex(0)}
              onMouseLeave={() => setHoverIndex(null)}
            />
            {hoverIndex === 0 && (
              <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in">
                <span className="bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium">
                  View photo
                </span>
              </div>
            )}
          </div>
          
          {images.slice(1, 5).map((image, idx) => {
            const index = idx + 1;
            const isTopRight = index === 1;
            const isBottomRight = index === 4;
            
            return (
              <div 
                key={image.id} 
                className={`relative overflow-hidden transition-transform hover:scale-[1.01] duration-300 h-[220px] ${
                  isTopRight ? 'rounded-tr-2xl' : ''
                } ${
                  isBottomRight ? 'rounded-br-2xl' : ''
                }`}
              >
                {renderImageOrFallback(
                  image, 
                  index, 
                  "h-full w-full object-cover cursor-pointer transition-all duration-500"
                )}
                <div 
                  className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
                  onClick={() => {
                    setCurrentPhotoIndex(index);
                    setShowAllPhotos(true);
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                />
                {hoverIndex === index && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in">
                    <span className="bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium">
                      View photo
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile view - Carousel */}
        <div className="md:hidden relative">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={image.id}>
                  <div className="relative h-72 w-full rounded-xl overflow-hidden">
                    {renderImageOrFallback(image, index, "w-full h-full object-cover")}
                    {!imagesLoaded[index] && (
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

        {/* Show all photos button */}
        <Button 
          className="absolute bottom-4 right-4 bg-white hover:bg-white/90 text-black shadow-md hidden md:flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
          onClick={() => setShowAllPhotos(true)}
          variant="outline"
        >
          <span className="text-sm font-medium">Show all photos</span>
        </Button>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="outline" className="rounded-full bg-white/90 hover:bg-white shadow-sm p-2 h-9 w-9 transition-transform hover:scale-110 duration-200">
            <Share className="h-4 w-4" />
          </Button>
          <Button variant="outline" className="rounded-full bg-white/90 hover:bg-white shadow-sm p-2 h-9 w-9 transition-transform hover:scale-110 duration-200">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Photo Gallery Modal */}
      <Dialog open={showAllPhotos} onOpenChange={setShowAllPhotos}>
        <DialogContent className="max-w-6xl w-full p-0 h-[90vh] bg-white">
          <div className="relative h-full flex flex-col">
            <div className="p-4 flex items-center justify-between border-b sticky top-0 bg-white z-10">
              <button 
                onClick={() => setShowAllPhotos(false)} 
                className="rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
              <div className="absolute left-1/2 transform -translate-x-1/2 text-sm font-medium">
                {currentPhotoIndex + 1} / {images.length}
              </div>
              <div className="flex gap-4">
                <Button variant="ghost" className="flex items-center gap-2 text-sm hover:bg-gray-100">
                  <Share className="h-4 w-4" />
                  Share
                </Button>
                <Button variant="ghost" className="flex items-center gap-2 text-sm hover:bg-gray-100">
                  <Heart className="h-4 w-4" />
                  Save
                </Button>
              </div>
            </div>
            
            <div className="flex-1 flex items-center justify-center p-4 relative overflow-hidden">
              <Button 
                onClick={prevPhoto} 
                className="absolute left-8 bg-white hover:bg-white/90 rounded-full shadow-md z-10 transition-transform hover:scale-110 duration-200"
                size="icon"
                variant="outline"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <div className="h-full w-full flex items-center justify-center">
                <div className="relative max-h-full max-w-full transition-opacity duration-300">
                  {renderImageOrFallback(
                    images[currentPhotoIndex], 
                    currentPhotoIndex, 
                    "max-h-[75vh] max-w-full object-contain rounded-md transition-opacity duration-300"
                  )}
                  {!imagesLoaded[currentPhotoIndex] && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Skeleton className="w-full h-full max-w-2xl max-h-[70vh]" />
                    </div>
                  )}
                </div>
              </div>
              
              <Button 
                onClick={nextPhoto} 
                className="absolute right-8 bg-white hover:bg-white/90 rounded-full shadow-md z-10 transition-transform hover:scale-110 duration-200"
                size="icon"
                variant="outline"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="p-4 border-t bg-white">
              <p className="text-sm text-gray-700">{images[currentPhotoIndex].alt}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ImageGallery;
