
import React from 'react';
import { X, Share, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
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
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl w-full p-0 h-[90vh] bg-white">
        <div className="relative h-full flex flex-col">
          <div className="p-4 flex items-center justify-between border-b sticky top-0 bg-white z-10">
            <button 
              onClick={onClose} 
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
              onClick={onPrevious} 
              className="absolute left-8 bg-white hover:bg-white/90 rounded-full shadow-md z-10 transition-transform hover:scale-110 duration-200"
              size="icon"
              variant="outline"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            
            <div className="h-full w-full flex items-center justify-center">
              <div className="relative max-h-full max-w-full transition-opacity duration-300">
                {imagesLoaded[currentPhotoIndex] ? (
                  <img
                    src={images[currentPhotoIndex].url}
                    alt={images[currentPhotoIndex].alt}
                    className="max-h-[75vh] max-w-full object-contain rounded-md transition-opacity duration-300"
                    onError={() => console.error(`Failed to load image at index ${currentPhotoIndex}`)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Skeleton className="w-full h-full max-w-2xl max-h-[70vh]" />
                  </div>
                )}
              </div>
            </div>
            
            <Button 
              onClick={onNext} 
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
  );
};

export default PhotoModal;
