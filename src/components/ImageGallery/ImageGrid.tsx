
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Share, Heart } from 'lucide-react';
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
    <div className="relative">
      <div className="hidden md:grid grid-cols-4 gap-3 rounded-2xl overflow-hidden">
        <div className="col-span-2 row-span-2 h-[450px] transition-transform hover:scale-[1.01] duration-300 relative overflow-hidden rounded-tl-2xl rounded-bl-2xl">
          <ImageThumbnail 
            image={images[0]}
            index={0}
            isLoaded={imagesLoaded[0]}
            isHovered={hoverIndex === 0}
            onClick={() => onSelectImage(0)}
            onMouseEnter={() => setHoverIndex(0)}
            onMouseLeave={() => setHoverIndex(null)}
          />
        </div>
        
        {images.slice(1, 5).map((image, idx) => {
          const index = idx + 1;
          const isTopRight = index === 1;
          const isBottomRight = index === 4;
          
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
              className={`h-[220px] ${isTopRight ? 'rounded-tr-2xl' : ''} ${isBottomRight ? 'rounded-br-2xl' : ''}`}
            />
          );
        })}
      </div>

      {/* Show all photos button */}
      <Button 
        className="absolute bottom-4 right-4 bg-white hover:bg-white/90 text-black shadow-md hidden md:flex items-center gap-1.5 transition-transform duration-200 hover:scale-105"
        onClick={onShowAllPhotos}
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
  );
};

export default ImageGrid;
