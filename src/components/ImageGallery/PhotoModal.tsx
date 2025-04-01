import React, { useEffect, useState } from 'react';
import { X, Share2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Skeleton } from '@/components/ui/skeleton';
import { Image } from './types';

interface PhotoModalProps {
  isOpen: boolean;
  onClose: () => void;
  images: Image[];
  imagesLoaded: boolean[];
  currentPhotoIndex: number;
  onNext: () => void;
  onPrevious: () => void;
}

const PhotoModal: React.FC<PhotoModalProps> = ({
  isOpen,
  onClose,
  images,
  imagesLoaded,
  currentPhotoIndex,
  onNext,
  onPrevious
}) => {
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check out this photo',
        url: window.location.href
      }).catch(console.error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[80vw] w-full !p-0 !rounded-xl overflow-hidden bg-white">
        <div className="relative h-full flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between p-6 pb-4">
            <Button 
              variant="outline"
              size="sm"
              className="flex items-center gap-2 rounded-full border-gray-200 hover:bg-gray-100 transition-all duration-200"
              onClick={handleShare}
            >
              <Share2 className="h-4 w-4 text-gray-700" />
              <span className="text-gray-700 font-medium">Share</span>
            </Button>
            
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-gray-100 px-4 py-1.5 rounded-full">
              <span className="text-sm font-medium text-gray-700">
                {currentPhotoIndex + 1} of {images.length}
              </span>
            </div>
            
            <button 
              onClick={onClose} 
              className="rounded-full p-2.5 hover:bg-gray-100 transition-all duration-200"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>
          
          {/* Main Image Area */}
          <div className="flex-1 flex items-center justify-center relative px-6">
            {/* Navigation Buttons */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
              <Button 
                onClick={onPrevious}
                className="pointer-events-auto rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                size="icon"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </Button>
              
              <Button 
                onClick={onNext}
                className="pointer-events-auto rounded-full bg-white shadow-lg border border-gray-200 hover:bg-gray-50 transition-all duration-200 hover:scale-105 hover:shadow-xl"
                size="icon"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </Button>
            </div>
            
            {/* Image Container */}
            <div className="h-full w-full flex items-center justify-center">
              <div className="relative max-h-full max-w-full">
                {imagesLoaded[currentPhotoIndex] ? (
                  <img
                    src={images[currentPhotoIndex].url}
                    alt={images[currentPhotoIndex].alt}
                    className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-sm transition-all duration-300 hover:shadow-md"
                    onError={() => console.error(`Failed to load image at index ${currentPhotoIndex}`)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-full h-full max-w-3xl max-h-[70vh] rounded-xl" />
                  </div>
                )}
              </div>
            </div>
          </div>
          
          {/* Footer */}
          <div className="p-6 pt-4 border-t text-center">
            <p className="text-sm text-gray-600">{images[currentPhotoIndex].alt}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PhotoModal;
