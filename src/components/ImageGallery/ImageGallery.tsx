import React, { useState, useEffect, useRef } from 'react';
import ImageGrid from './ImageGrid';
import MobileCarousel from './MobileCarousel';
import PhotoModal from './PhotoModal';
import type { Image } from './types';

// Image data
const images: Image[] = [
  {
    id: 1,
    url: "/images/property-image-01.jpeg",
    alt: "Property Image 1"
  },
  {
    id: 2,
    url: "/images/property-image-02.jpeg",
    alt: "Property Image 2"
  },
  {
    id: 3,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.37 (2).jpeg",
    alt: "Property Image 3"
  },
  {
    id: 4,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.37 (1).jpeg",
    alt: "Property Image 4"
  },
  {
    id: 5,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.37.jpeg",
    alt: "Property Image 5"
  },
  {
    id: 6,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.36 (2).jpeg",
    alt: "Property Image 6"
  },
  {
    id: 7,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.36 (1).jpeg",
    alt: "Property Image 7"
  },
  {
    id: 8,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.36.jpeg",
    alt: "Property Image 8"
  },
  {
    id: 9,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.35 (2).jpeg",
    alt: "Property Image 9"
  },
  {
    id: 10,
    url: "/images/WhatsApp Image 2025-03-30 at 21.08.35 (1).jpeg",
    alt: "Property Image 10"
  }
];

const ImageGallery: React.FC = () => {
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(Array(images.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  const lastScrollTime = useRef<number>(0);

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

    // Add scroll event listener with delay
    const handleScroll = () => {
      const currentTime = Date.now();
      const position = window.scrollY;
      
      // We need to update the position always to track it
      setScrollPosition(position);
      
      // But we don't want to update the "is scrolling" state too often
      if (currentTime - lastScrollTime.current > 150) {
        setIsScrolling(true);
        
        // Set a timeout to stop the scrolling state after a delay
        setTimeout(() => {
          setIsScrolling(false);
        }, 300);
        
        lastScrollTime.current = currentTime;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
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
    <div 
      ref={galleryRef} 
      className={`smooth-scroll ${isScrolling ? 'scroll-delayed' : ''}`}
      style={{ 
        transition: `transform calc(${isScrolling ? '0.3' : '0.1'}s * var(--scroll-speed, 1)) cubic-bezier(0.33, 1, 0.68, 1)`,
        transform: `translateY(${isScrolling ? '-8px' : '0px'})`,
      }}
    >
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
    </div>
  );
};

export default ImageGallery;
