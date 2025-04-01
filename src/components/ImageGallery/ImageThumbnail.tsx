
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import { Image } from './types';

interface ImageThumbnailProps {
  image: Image;
  index: number;
  isLoaded: boolean;
  isHovered: boolean;
  onClick: (index: number) => void;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
  className?: string;
}

const ImageThumbnail: React.FC<ImageThumbnailProps> = ({
  image,
  index,
  isLoaded,
  isHovered,
  onClick,
  onMouseEnter,
  onMouseLeave,
  className = ''
}) => {
  return (
    <div 
      className={`relative overflow-hidden transition-transform hover:scale-[1.01] duration-300 ${className}`}
    >
      {!isLoaded ? (
        <div className={`${className} animate-pulse bg-gradient-to-r from-gray-200 to-gray-300`}>
          <Skeleton className="h-full w-full rounded-xl" />
        </div>
      ) : (
        <img 
          src={image.url} 
          alt={image.alt}
          className="h-full w-full object-cover cursor-pointer transition-all duration-500"
          onError={() => console.error(`Failed to load image at index ${index}`)}
        />
      )}
      <div 
        className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-10 transition-all duration-300 cursor-pointer"
        onClick={() => onClick(index)}
        onMouseEnter={() => onMouseEnter(index)}
        onMouseLeave={onMouseLeave}
      />
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 animate-fade-in">
          <span className="bg-white/80 text-black px-3 py-1 rounded-full text-sm font-medium">
            View photo
          </span>
        </div>
      )}
    </div>
  );
};

export default ImageThumbnail;
