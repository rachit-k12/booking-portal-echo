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
      className={`relative group/thumbnail overflow-hidden ${className}`}
      onClick={() => onClick(index)}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {!isLoaded ? (
        <div className="h-full w-full">
          <Skeleton className="h-full w-full rounded-xl bg-gradient-to-r from-gray-200/80 via-gray-100/80 to-gray-200/80 animate-shimmer" />
        </div>
      ) : (
        <>
          <div className="h-full w-full overflow-hidden">
            <img 
              src={image.url} 
              alt={image.alt}
              className="h-full w-full object-cover transition-all duration-1000 ease-in-out will-change-transform group-hover/thumbnail:scale-110"
              style={{ transformOrigin: 'center center' }}
              onError={() => console.error(`Failed to load image at index ${index}`)}
            />
          </div>
          
          {/* Subtle Light Effect */}
          <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-transparent to-white/20 opacity-0 group-hover/thumbnail:opacity-100 transition-opacity duration-700 ease-in-out pointer-events-none" />
          
          {/* Hover Overlay - Bottom Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 group-hover/thumbnail:opacity-100 transition-all duration-500 ease-out" />
          
          {/* Hover Text */}
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover/thumbnail:translate-y-0 group-hover/thumbnail:opacity-100 transition-all duration-500 ease-out delay-75">
            <div className="backdrop-blur-sm bg-white/30 text-white py-2 px-4 rounded-full inline-flex items-center justify-center shadow-lg">
              <span className="text-sm font-medium">View photo</span>
            </div>
          </div>

          {/* Subtle border highlight */}
          <div className="absolute inset-0 border-2 border-white/0 group-hover/thumbnail:border-white/30 rounded-xl transition-all duration-500 pointer-events-none" />
        </>
      )}
    </div>
  );
};

export default ImageThumbnail;
