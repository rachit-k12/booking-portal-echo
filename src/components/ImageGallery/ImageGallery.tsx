
import React, { useState, useEffect } from 'react';
import ImageGrid from './ImageGrid';
import MobileCarousel from './MobileCarousel';
import PhotoModal from './PhotoModal';
import { Image } from './types';

// Image data
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

  return (
    <>
      <ImageGrid 
        images={images}
        imagesLoaded={imagesLoaded}
        onShowAllPhotos={() => setShowAllPhotos(true)}
        onSelectImage={(index) => {
          setCurrentPhotoIndex(index);
          setShowAllPhotos(true);
        }}
      />
      
      <MobileCarousel 
        images={images}
        imagesLoaded={imagesLoaded}
        currentPhotoIndex={currentPhotoIndex}
      />
      
      <PhotoModal 
        isOpen={showAllPhotos}
        onClose={() => setShowAllPhotos(false)}
        images={images}
        imagesLoaded={imagesLoaded}
        currentPhotoIndex={currentPhotoIndex}
        onNext={nextPhoto}
        onPrevious={prevPhoto}
      />
    </>
  );
};

export default ImageGallery;
