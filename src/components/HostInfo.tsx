
import React, { useState } from 'react';
import { MessageSquare, Briefcase, Globe, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const HostInfo = () => {
  const [showHostDialog, setShowHostDialog] = useState(false);
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-6">Meet your host</h2>
      
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center relative mb-6">
        <div className="relative">
          <Avatar className="h-24 w-24 border-2 border-white">
            <AvatarImage src="/placeholder.svg" alt="Sujay" />
            <AvatarFallback className="bg-gray-900 text-white text-2xl">P</AvatarFallback>
          </Avatar>
          <div className="absolute -right-2 -bottom-2 bg-airbnb-red rounded-full p-1">
            <span className="text-white text-xs">♥</span>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <h3 className="text-xl font-semibold">Sujay</h3>
          <p className="text-gray-600 text-sm">Started hosting in 2025</p>
        </div>
        
        <div className="w-full mt-6 space-y-4">
          <div className="flex items-center gap-3">
            <Briefcase className="h-5 w-5 text-gray-700" />
            <span>My work: Coach</span>
          </div>
          
          <div className="flex items-center gap-3">
            <Globe className="h-5 w-5 text-gray-700" />
            <span>Speaks English and Hindi</span>
          </div>
        </div>
        
        <button 
          onClick={() => setShowHostDialog(true)}
          className="flex items-center mt-4 font-medium text-gray-800 underline"
        >
          Show more <ChevronRight className="h-4 w-4 ml-1" />
        </button>
        
        <Button 
          className="w-full mt-6 bg-gray-900 hover:bg-black text-white"
          onClick={() => setShowHostDialog(true)}
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Message host
        </Button>
        
        <div className="mt-6 pt-4 border-t border-gray-100 w-full text-sm text-gray-500 flex items-center">
          <span className="inline-block mr-2">🔒</span>
          To help protect your payment, always use Airbnb to send money and communicate with hosts.
        </div>
      </div>
      
      {/* Host Information Dialog */}
      <Dialog open={showHostDialog} onOpenChange={setShowHostDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">About Sujay</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg" alt="Sujay" />
                <AvatarFallback className="bg-gray-900 text-white">P</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="font-semibold text-lg">Sujay</h3>
                <p className="text-gray-600">Started hosting in 2025</p>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 flex-shrink-0" />
                <span>My work: Coach</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 flex-shrink-0" />
                <span>Speaks English and Hindi</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0">⭐</span>
                <span>150 Reviews</span>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0">✓</span>
                <span>Identity verified</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-gray-700">
                Hello! I'm Sujay, a passionate host dedicated to making your stay comfortable and memorable. 
                As a coach by profession, I enjoy helping people and creating positive experiences. 
                I love traveling, meeting new people, and sharing my local knowledge about Bengaluru.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">During your stay</h4>
              <p className="text-gray-700">
                I'm available 24/7 via the Airbnb app to answer any questions and provide assistance. 
                I respect your privacy but I'm always here if you need recommendations or help with anything during your stay.
              </p>
            </div>
            
            <Button className="w-full bg-gray-900 hover:bg-black text-white">
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Sujay
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HostInfo;
