
import React from 'react';
import { Star } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';

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
  }
];

const Reviews = () => {
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
      
      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {reviews.map((review) => (
          <div key={review.id} className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={review.avatar} alt={review.name} className="h-10 w-10 rounded-full" />
              <div>
                <h4 className="font-medium">{review.name}</h4>
                <p className="text-sm text-gray-500">{review.date}</p>
              </div>
            </div>
            <p className="text-gray-700">{review.content}</p>
          </div>
        ))}
      </div>
      
      <button className="border border-black rounded-lg px-5 py-2 font-medium">
        Show all 63 reviews
      </button>
    </div>
  );
};

export default Reviews;
