
import React, { useState } from 'react';
import { format, addDays, isBefore, isAfter, isSameDay } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const DatePicker = () => {
  const today = new Date();
  const [checkIn, setCheckIn] = useState<Date | undefined>(undefined);
  const [checkOut, setCheckOut] = useState<Date | undefined>(undefined);
  const [currentMonth, setCurrentMonth] = useState<Date>(today);

  const handleSelect = (day: Date | undefined) => {
    if (!day) return;
    
    if (!checkIn || (checkIn && checkOut)) {
      setCheckIn(day);
      setCheckOut(undefined);
    } else {
      if (isBefore(day, checkIn)) {
        setCheckIn(day);
        setCheckOut(checkIn);
      } else {
        setCheckOut(day);
      }
    }
  };

  const isDateInRange = (date: Date) => {
    return checkIn && checkOut && isAfter(date, checkIn) && isBefore(date, checkOut);
  };

  const nextMonth = () => {
    const next = new Date(currentMonth);
    next.setMonth(next.getMonth() + 1);
    setCurrentMonth(next);
  };

  const prevMonth = () => {
    const prev = new Date(currentMonth);
    prev.setMonth(prev.getMonth() - 1);
    setCurrentMonth(prev);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Select check-in date</h3>
        <div className="flex gap-2">
          <button 
            onClick={prevMonth} 
            className="p-2 border rounded-full hover:bg-gray-100"
            disabled={isBefore(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1), new Date())}
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button 
            onClick={nextMonth} 
            className="p-2 border rounded-full hover:bg-gray-100"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="text-sm text-gray-500 mb-4">
        {checkIn && !checkOut ? (
          <p>Select checkout date</p>
        ) : !checkIn && !checkOut ? (
          <p>Add your trip dates for exact pricing</p>
        ) : (
          <p>{checkIn && format(checkIn, 'MMM d, yyyy')} - {checkOut && format(checkOut, 'MMM d, yyyy')}</p>
        )}
      </div>
      
      <Calendar
        mode="range"
        selected={{
          from: checkIn,
          to: checkOut
        }}
        onSelect={(range) => {
          setCheckIn(range?.from);
          setCheckOut(range?.to);
        }}
        month={currentMonth}
        className={cn("rounded-md border pointer-events-auto")}
        disabled={(date) => isBefore(date, today) && !isSameDay(date, today)}
        modifiers={{
          range: {
            from: checkIn,
            to: checkOut 
          }
        }}
        modifiersStyles={{
          range_start: { 
            backgroundColor: 'black', 
            color: 'white',
            borderRadius: '100%'
          },
          range_end: { 
            backgroundColor: 'black', 
            color: 'white',
            borderRadius: '100%'
          },
          range_middle: { 
            backgroundColor: '#F7F7F7'
          }
        }}
      />
    </div>
  );
};

export default DatePicker;
