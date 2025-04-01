
import React, { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { ChevronLeft, ChevronRight, X, Share, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

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

  return (
    <>
      <div className="relative">
        {/* Gallery Grid for desktop */}
        <div className="hidden md:grid grid-cols-4 gap-2 rounded-xl overflow-hidden">
          <div className="col-span-2 row-span-2">
            <img 
              src={images[0].url} 
              alt={images[0].alt}
              className="h-full w-full object-cover cursor-pointer" 
              onClick={() => setShowAllPhotos(true)}
            />
          </div>
          {images.slice(1, 5).map((image, index) => (
            <div key={image.id} className={index === 3 ? "relative" : ""}>
              <img 
                src={image.url} 
                alt={image.alt}
                className="h-full w-full object-cover cursor-pointer" 
                onClick={() => {
                  setCurrentPhotoIndex(index + 1);
                  setShowAllPhotos(true);
                }}
              />
            </div>
          ))}
        </div>

        {/* Mobile view - Single image */}
        <div className="md:hidden relative">
          <img 
            src={images[currentPhotoIndex].url} 
            alt={images[currentPhotoIndex].alt}
            className="w-full h-64 object-cover rounded-xl" 
          />
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <div className="flex gap-1">
              {images.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full ${currentPhotoIndex === index ? 'bg-white' : 'bg-white/50'}`}
                  onClick={() => setCurrentPhotoIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Show all photos button */}
        <button 
          className="absolute bottom-4 right-4 bg-white px-4 py-2 rounded-lg text-sm font-medium shadow-md hidden md:block"
          onClick={() => setShowAllPhotos(true)}
        >
          Show all photos
        </button>

        {/* Action buttons */}
        <div className="absolute top-4 right-4 flex gap-2">
          <Button variant="ghost" className="rounded-full bg-white/90 hover:bg-white p-2">
            <Share className="h-5 w-5" />
          </Button>
          <Button variant="ghost" className="rounded-full bg-white/90 hover:bg-white p-2">
            <Heart className="h-5 w-5" />
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
              <button 
                onClick={prevPhoto} 
                className="absolute left-8 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="h-full w-full flex items-center justify-center">
                <img 
                  src={images[currentPhotoIndex].url} 
                  alt={images[currentPhotoIndex].alt}
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
              
              <button 
                onClick={nextPhoto} 
                className="absolute right-8 bg-white rounded-full p-2 shadow-md"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
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
