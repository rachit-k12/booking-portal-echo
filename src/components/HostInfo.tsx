
import React, { useState } from 'react';
import { MessageSquare, Briefcase, Globe, ChevronRight, Award, Clock, Star, Shield } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';

const HostInfo = () => {
  const [showHostDialog, setShowHostDialog] = useState(false);

  // Use the image from the public directory if uploaded
  const hostImageUrl = "/lovable-uploads/63e34fc3-12ea-4602-b0ec-533915470fca.png";
  
  return (
    <div className="py-8">
      <h2 className="text-2xl font-semibold mb-8">Meet your host</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left side card with host profile */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-8 flex flex-col items-center relative">
          <div className="relative">
            <Avatar className="h-28 w-28 border-2 border-white mb-4">
              <AvatarImage src={hostImageUrl} alt="Titus" />
              <AvatarFallback className="bg-gray-900 text-white text-2xl">T</AvatarFallback>
            </Avatar>
            <div className="absolute -right-2 -bottom-2 bg-airbnb-red rounded-full p-1.5">
              <Award className="h-5 w-5 text-white" />
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-1">Titus</h3>
          <p className="text-gray-600 mb-6 flex items-center">
            <Award className="h-4 w-4 mr-1.5 text-airbnb-red" />
            Superhost
          </p>
          
          <div className="grid grid-cols-1 gap-y-6 w-full">
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-lg font-medium">10</span>
              <span className="text-gray-600">Reviews</span>
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-lg font-medium flex items-center">
                4.7<Star className="h-4 w-4 ml-1 text-airbnb-red fill-airbnb-red" />
              </span>
              <span className="text-gray-600">Rating</span>
            </div>
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium">2</span>
              <span className="text-gray-600">Years hosting</span>
            </div>
          </div>
        </div>
        
        {/* Right side with host details */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-2">Titus is a Superhost</h3>
              <p className="text-gray-700">
                Superhosts are experienced, highly rated hosts who are committed to providing great stays for guests.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Host details</h3>
              <div className="space-y-2">
                <p className="text-gray-700">Response rate: 100%</p>
                <p className="text-gray-700">Responds within an hour</p>
              </div>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-4">
                <Briefcase className="h-6 w-6 text-gray-700 flex-shrink-0 mt-0.5" />
                <span>My work: dental surgeon</span>
              </div>
              
              <div className="flex items-start gap-4">
                <Globe className="h-6 w-6 text-gray-700 flex-shrink-0 mt-0.5" />
                <span>Lives in Guruvayur, India</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <Button 
              className="w-full md:w-auto bg-gray-900 hover:bg-black text-white py-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
              onClick={() => window.open('https://www.airbnb.com/rooms/1376711140170106976', '_blank')}
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              Message host
            </Button>
            
            <button 
              onClick={() => setShowHostDialog(true)}
              className="flex items-center font-medium text-gray-800 hover:underline mt-2"
            >
              Show more <ChevronRight className="h-4 w-4 ml-1" />
            </button>
            
            <div className="mt-4 pt-4 text-sm text-gray-500 flex items-center">
              <Shield className="h-5 w-5 mr-2 text-airbnb-red" />
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </div>
          </div>
        </div>
      </div>
      
      {/* Host Information Dialog */}
      <Dialog open={showHostDialog} onOpenChange={setShowHostDialog}>
        <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">About Titus</DialogTitle>
          </DialogHeader>
          
          <div className="mt-4 space-y-6">
            <div className="flex items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={hostImageUrl} alt="Titus" />
                <AvatarFallback className="bg-gray-900 text-white">T</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="font-semibold text-lg">Titus</h3>
                <div className="flex items-center text-sm text-gray-600">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>Joined in 2021</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Star className="h-5 w-5 flex-shrink-0 text-airbnb-red" />
                <span>10 Reviews</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Shield className="h-5 w-5 flex-shrink-0" />
                <span>Identity verified</span>
              </div>
              
              <div className="flex items-center gap-3">
                <Award className="h-5 w-5 flex-shrink-0 text-airbnb-red" />
                <span>Superhost</span>
              </div>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">About</h4>
              <p className="text-gray-700">
                Hello, I'm Titus, a dental surgeon living in Guruvayur, India. As your host, I'm committed to making your stay comfortable and memorable. 
                I've been hosting on Airbnb for 2 years and take pride in maintaining a 100% response rate.
              </p>
            </div>
            
            <Separator />
            
            <div>
              <h4 className="font-semibold mb-2">During your stay</h4>
              <p className="text-gray-700">
                I'll be available to assist you with anything you might need during your stay. 
                Whether you need recommendations for local attractions or have questions about the apartment, 
                I'm just a message away and typically respond within an hour.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Languages</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">English</Badge>
                <Badge variant="outline">Malayalam</Badge>
                <Badge variant="outline">Hindi</Badge>
              </div>
            </div>
            
            <Button 
              className="w-full bg-gray-900 hover:bg-black text-white"
              onClick={() => window.open('https://www.airbnb.com/rooms/1376711140170106976', '_blank')}
            >
              <MessageSquare className="h-4 w-4 mr-2" />
              Message Titus
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default HostInfo;
