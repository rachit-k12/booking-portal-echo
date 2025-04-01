
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Calendar as CalendarIcon, Users } from 'lucide-react';
import DatePicker from './DatePicker';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

const BookingCard = () => {
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [guests, setGuests] = useState(1);
  const [checkIn, setCheckIn] = useState<string>('Add date');
  const [checkOut, setCheckOut] = useState<string>('Add date');

  const handleGuestsChange = (newValue: number) => {
    setGuests(Math.max(1, Math.min(newValue, 6))); // Min 1, max 6 guests
  };

  return (
    <div className="border border-gray-300 rounded-xl p-6 shadow-xl sticky top-24">
      <div className="flex justify-between items-center mb-6">
        <div>
          <span className="text-xl font-semibold">₹4,399</span>
          <span className="text-lg"> night</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="flex items-center">
            <span className="text-xs">★</span> 4.95
          </span>
          <span className="mx-1">·</span>
          <span className="underline">63 reviews</span>
        </div>
      </div>

      <div className="border border-gray-300 rounded-t-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-gray-300">
          <div className="p-3">
            <label className="block text-xs font-semibold">CHECK-IN</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-left w-full">{checkIn}</button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <DatePicker />
              </PopoverContent>
            </Popover>
          </div>
          <div className="p-3">
            <label className="block text-xs font-semibold">CHECKOUT</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className="text-left w-full">{checkOut}</button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <DatePicker />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="border-t border-gray-300 p-3">
          <label className="block text-xs font-semibold">GUESTS</label>
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex items-center justify-between w-full">
                <span>{guests} guest{guests > 1 ? 's' : ''}</span>
                <Users className="h-4 w-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4" align="end">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Adults</p>
                    <p className="text-sm text-gray-500">Ages 13+</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <button 
                      onClick={() => handleGuestsChange(guests - 1)} 
                      className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center"
                      disabled={guests <= 1}
                    >
                      -
                    </button>
                    <span>{guests}</span>
                    <button 
                      onClick={() => handleGuestsChange(guests + 1)} 
                      className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center"
                      disabled={guests >= 6}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <Button 
        className="w-full py-6 mt-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg font-bold text-lg hover:from-pink-600 hover:to-rose-600"
      >
        Reserve
      </Button>
      
      <p className="text-center text-sm mt-4 text-gray-500">You won't be charged yet</p>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="underline">₹4,399 x 5 nights</span>
          <span>₹21,995</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>₹2,000</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Service fee</span>
          <span>₹3,379</span>
        </div>
        <div className="border-t border-gray-300 pt-4 flex justify-between font-bold">
          <span>Total before taxes</span>
          <span>₹27,374</span>
        </div>
      </div>
    </div>
  );
};

export default BookingCard;
