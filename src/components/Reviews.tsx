import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';

const reviewCategories = [
  { name: "Cleanliness", rating: 4.9 },
  { name: "Accuracy", rating: 5.0 },
  { name: "Communication", rating: 4.8 },
  { name: "Location", rating: 4.7 },
  { name: "Check-in", rating: 5.0 },
  { name: "Value", rating: 4.9 },
];

const reviews = [
  {
    id: 1,
    name: "Sarah",
    date: "May 2023",
    avatar: "https://i.pravatar.cc/150?img=1",
    content: "The apartment was perfect for our stay in Bengaluru. Really clean, spacious and had everything we needed. The host was very responsive and helpful throughout our stay."
  },
  {
    id: 2,
    name: "Michael",
    date: "February 2023",
    avatar: "https://i.pravatar.cc/150?img=2",
    content: "Great location, close to everything. The apartment was very well maintained and the check-in process was smooth. Would definitely stay here again!"
  },
  {
    id: 3,
    name: "Priya",
    date: "December 2022",
    avatar: "https://i.pravatar.cc/150?img=3",
    content: "Excellent place with all amenities. The rooms were spacious, and the kitchen was well-equipped. The host was very accommodating and quick to respond."
  },
  {
    id: 4,
    name: "James",
    date: "October 2022",
    avatar: "https://i.pravatar.cc/150?img=4",
    content: "We had a wonderful stay! The apartment was spotless and exactly as described. Loved the location - very convenient for getting around the city."
  },
  {
    id: 5,
    name: "Ananya",
    date: "September 2022",
    avatar: "https://i.pravatar.cc/150?img=5",
    content: "This was one of the best Airbnb experiences I've had. The apartment exceeded our expectations. It's beautifully furnished and has everything you could need."
  },
  {
    id: 6,
    name: "David",
    date: "July 2022",
    avatar: "https://i.pravatar.cc/150?img=6",
    content: "Fantastic stay! The apartment is in a great location with easy access to restaurants and shopping. Very comfortable and clean."
  },
  {
    id: 7,
    name: "Riya",
    date: "June 2022",
    avatar: "https://i.pravatar.cc/150?img=7",
    content: "The host was extremely helpful and the apartment was immaculate. Great amenities and very spacious. Will definitely recommend to friends!"
  },
  {
    id: 8,
    name: "Thomas",
    date: "May 2022",
    avatar: "https://i.pravatar.cc/150?img=8",
    content: "Everything was just as described. Clean, comfortable and convenient location. The host was very responsive to all our queries."
  },
  {
    id: 9,
    name: "Aisha",
    date: "April 2022",
    avatar: "https://i.pravatar.cc/150?img=9",
    content: "Had a wonderful time at this apartment. It's well located and has all the amenities you need for a comfortable stay. The host was very friendly and helpful."
  },
  {
    id: 10,
    name: "John",
    date: "March 2022",
    avatar: "https://i.pravatar.cc/150?img=10",
    content: "Great place, exactly as advertised. Very clean and comfortable with all necessary amenities. Would definitely stay here again!"
  }
];

const Reviews = () => {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [loadingAvatars, setLoadingAvatars] = useState<{[key: number]: boolean}>(
    reviews.reduce((acc, review) => ({...acc, [review.id]: true}), {})
  );

  const handleAvatarLoad = (id: number) => {
    setLoadingAvatars(prev => ({...prev, [id]: false}));
  };

  const handleAvatarError = (id: number) => {
    setLoadingAvatars(prev => ({...prev, [id]: false}));
  };

  return (
    <div className="py-8">
      <div className="flex items-center gap-2 mb-6">
        <Star className="h-5 w-5 fill-current" />
        <span className="text-xl font-semibold">4.95 · 63 reviews</span>
      </div>
      
      {/* Rating Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4 mb-8">
        {reviewCategories.map((category) => (
          <div key={category.name} className="flex items-center justify-between">
            <span>{category.name}</span>
            <div className="flex items-center gap-3">
              <Progress value={category.rating * 20} className="h-1 w-32" />
              <span className="text-sm">{category.rating}</span>
            </div>
          </div>
        ))}
      </div>
      
      {/* Reviews Grid with animation */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.slice(0, 6).map((review) => (
          <div key={review.id} className="space-y-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10">
                {loadingAvatars[review.id] && (
                  <Skeleton className="h-10 w-10 rounded-full absolute" />
                )}
                <Avatar>
                  <AvatarImage 
                    src={review.avatar} 
                    alt={review.name}
                    onLoad={() => handleAvatarLoad(review.id)}
                    onError={() => handleAvatarError(review.id)}
                  />
                  <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
      
      <button 
        onClick={() => setShowAllReviews(true)} 
        className="border border-black rounded-lg px-5 py-2 font-medium transition-colors duration-200 hover:bg-gray-50"
      >
        Show all 63 reviews
      </button>

      {/* Reviews Dialog */}
      <Dialog open={showAllReviews} onOpenChange={setShowAllReviews}>
        <DialogContent className="max-w-4xl !p-0 !rounded-xl overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-xl flex items-center gap-2">
                  <Star className="h-5 w-5 fill-current" />
                  <span>4.95 · 63 reviews</span>
                </DialogTitle>
                <button 
                  onClick={() => setShowAllReviews(false)} 
                  className="rounded-full p-2.5 hover:bg-gray-100 transition-all duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                    <path d="M18 6 6 18"></path>
                    <path d="m6 6 12 12"></path>
                  </svg>
                </button>
              </div>
            </DialogHeader>
            
            <div className="p-6 space-y-6 max-h-[80vh] overflow-y-auto">
              {/* Rating Categories in Dialog */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-4">
                {reviewCategories.map((category) => (
                  <div key={category.name} className="flex items-center justify-between">
                    <span>{category.name}</span>
                    <div className="flex items-center gap-3">
                      <Progress value={category.rating * 20} className="h-1 w-32" />
                      <span className="text-sm">{category.rating}</span>
                    </div>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              {/* All Reviews in Dialog */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-4 hover:bg-gray-50 p-3 rounded-lg transition-colors duration-200">
                    <div className="flex items-center gap-3">
                      <div className="relative h-10 w-10">
                        {loadingAvatars[review.id] && (
                          <Skeleton className="h-10 w-10 rounded-full absolute" />
                        )}
                        <Avatar>
                          <AvatarImage 
                            src={review.avatar} 
                            alt={review.name}
                            onLoad={() => handleAvatarLoad(review.id)}
                            onError={() => handleAvatarError(review.id)}
                          />
                          <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                      </div>
                      <div>
                        <h4 className="font-medium">{review.name}</h4>
                        <p className="text-sm text-gray-500">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.content}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Reviews;
