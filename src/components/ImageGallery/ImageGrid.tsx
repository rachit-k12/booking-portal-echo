import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Grid } from 'lucide-react';
import ImageThumbnail from './ImageThumbnail';
import { Image } from './types';

interface ImageGridProps {
  images: Image[];
  imagesLoaded: boolean[];
  onShowAllPhotos: () => void;
  onSelectImage: (index: number) => void;
}

const ImageGrid: React.FC<ImageGridProps> = ({ 
  images, 
  imagesLoaded, 
  onShowAllPhotos, 
  onSelectImage 
}) => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  
  return (
    <div className="relative group w-full">
      {/* Desktop Grid */}
      <div className="hidden lg:grid grid-cols-4 gap-2 rounded-2xl overflow-hidden bg-gray-50/50 p-2">
        {/* Main Large Image */}
        <div className="col-span-2 row-span-2 relative overflow-hidden rounded-xl">
          <ImageThumbnail 
            image={images[0]}
            index={0}
            isLoaded={imagesLoaded[0]}
            isHovered={hoverIndex === 0}
            onClick={() => onSelectImage(0)}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
        
        {/* Right Side Grid */}
        <div className="col-span-2 grid grid-cols-2 gap-2">
          {images.slice(1, 5).map((image, idx) => {
            const index = idx + 1;
            return (
              <ImageThumbnail 
                key={image.id}
                image={image}
                index={index}
                isLoaded={imagesLoaded[index]}
                isHovered={hoverIndex === index}
                onClick={() => onSelectImage(index)}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(null)}
                className="h-[275px] rounded-xl transform transition-transform duration-700"
              />
            );
          })}
        </div>
      </div>

      {/* Show all photos button */}
      <Button 
        className="absolute bottom-6 right-6 bg-white/95 hover:bg-white text-gray-900 shadow-lg sm:flex items-center gap-2 rounded-xl px-4 py-5 transition-all duration-300 hover:scale-105 hover:shadow-xl translate-y-32"
        onClick={onShowAllPhotos}
        variant="outline"
      >
        <Grid className="h-5 w-5" />
        <span className="font-medium">Show all photos</span>
      </Button>

      {/* Image count badge */}
      <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1.5 rounded-full text-sm hidden md:block opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <span className="font-medium">{images.length} photos</span>
      </div>
    </div>
  );
};

export default ImageGrid;
