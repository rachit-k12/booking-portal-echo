
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const ThingsToKnow = () => {
  const [showRulesDialog, setShowRulesDialog] = useState(false);
  const [showSafetyDialog, setShowSafetyDialog] = useState(false);
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Things to know</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* House Rules */}
        <div>
          <h3 className="font-semibold text-lg mb-4">House rules</h3>
          <ul className="space-y-3">
            <li>Check-in after 12:00pm</li>
            <li>Checkout before 11:00am</li>
            <li>10 guests maximum</li>
          </ul>
          <button 
            onClick={() => setShowRulesDialog(true)}
            className="flex items-center mt-4 font-medium text-gray-800 underline"
          >
            Show more <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        {/* Safety & Property */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Safety & property</h3>
          <ul className="space-y-3">
            <li>Carbon monoxide alarm not reported</li>
            <li>Smoke alarm not reported</li>
            <li>Exterior security cameras on property</li>
          </ul>
          <button 
            onClick={() => setShowSafetyDialog(true)}
            className="flex items-center mt-4 font-medium text-gray-800 underline"
          >
            Show more <ChevronRight className="h-4 w-4 ml-1" />
          </button>
        </div>
        
        {/* Cancellation Policy */}
        <div>
          <h3 className="font-semibold text-lg mb-4">Cancellation policy</h3>
          <p className="mb-3">Add your trip dates to get the cancellation details for this stay.</p>
          <Button variant="outline" className="text-black border-black mt-2 flex items-center">
            Add dates <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
      
      {/* House Rules Dialog */}
      <Dialog open={showRulesDialog} onOpenChange={setShowRulesDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">House rules</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <p className="text-gray-700">
              Please remember that you're staying in someone's home and treat it with the same respect you would your own.
            </p>
            
            <div>
              <h4 className="font-semibold mb-2">Check-in/out times</h4>
              <ul className="space-y-2">
                <li>Check-in after 12:00pm</li>
                <li>Checkout before 11:00am</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">House rules</h4>
              <ul className="space-y-2">
                <li>10 guests maximum</li>
                <li>Pets allowed</li>
                <li>No parties or events</li>
                <li>No smoking inside the property</li>
                <li>Quiet hours between 10:00pm - 7:00am</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Additional rules</h4>
              <ul className="space-y-2">
                <li>Please conserve energy by turning off lights and AC when not in use</li>
                <li>Dispose of garbage in designated bins</li>
                <li>Report any damages immediately</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      {/* Safety Dialog */}
      <Dialog open={showSafetyDialog} onOpenChange={setShowSafetyDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Safety & property</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div>
              <h4 className="font-semibold mb-2">Safety devices</h4>
              <ul className="space-y-2">
                <li>Carbon monoxide alarm not reported</li>
                <li>Smoke alarm not reported</li>
                <li>First aid kit available</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Property features</h4>
              <ul className="space-y-2">
                <li>Exterior security cameras on property</li>
                <li>Gated community with 24/7 security</li>
                <li>Emergency exit route available</li>
                <li>Fire extinguisher in the kitchen</li>
              </ul>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">Potential hazards</h4>
              <ul className="space-y-2">
                <li>Swimming pool without a gate or fence</li>
                <li>Nearby lake, river, other body of water</li>
                <li>Climb stairs to access the property</li>
              </ul>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThingsToKnow;
