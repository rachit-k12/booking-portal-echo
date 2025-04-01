import React, { useState } from "react";
import {
  Wifi,
  Tv,
  Home,
  Snowflake,
  Utensils,
  Award,
  Key,
  X,
  Trees,
  TreePine,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ListingInfo = () => {
  const [showAmenitiesDialog, setShowAmenitiesDialog] = useState(false);

  const essentials = [
    { icon: <Wifi className="h-5 w-5" />, label: "Fast WiFi – 100 Mbps" },
    { icon: <Tv className="h-5 w-5" />, label: '55" HDTV with Netflix' },
    { icon: <Utensils className="h-5 w-5" />, label: "Fully equipped kitchen" },
    { icon: <Snowflake className="h-5 w-5" />, label: "Air conditioning" },
    { icon: <Trees className="h-5 w-5" />, label: "River view" },
    { icon: <TreePine className="h-5 w-5" />, label: "Gym" },
  ];

  return (
    <div className="max-w-[1120px] mx-auto">
      {/* Title and Location */}
      <div className="space-y-4 py-6">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-semibold text-gray-900">
            Rasa Pool Villa
          </h1>
          </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center text-gray-900">
            <svg
              viewBox="0 0 32 32"
              className="h-4 w-4 fill-current"
              aria-hidden="true"
            >
              <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
            </svg>
            <span className="ml-1.5 font-medium">4.96</span>
          </div>
          <span className="text-gray-500">·</span>
          <button className="font-medium hover:underline">25 reviews</button>
          <span className="text-gray-500">·</span>
          <button className="font-medium hover:underline">
            Nandi Hills, Karnataka, India
          </button>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Key Features */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-3">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Home className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Entire home</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              You'll have the villa to yourself
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Award className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Superhost</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Experienced, highly rated host
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="p-3 bg-gray-50 rounded-xl">
            <Key className="h-6 w-6 text-gray-600" />
          </div>
          <div>
            <h3 className="font-medium">Self check-in</h3>
            <p className="text-sm text-gray-500 mt-0.5">
              Check in with the keypad
            </p>
          </div>
        </div>
      </div>

      <Separator className="my-6" />

      {/* Description */}
      <div className="py-3">
        <p className="text-gray-600 leading-relaxed">
          Discover the gorgeous landscape that surrounds this place to stay.
          Located in a picturesque setting, this villa offers stunning views of
          mist-covered mountains, vast green fields, and the soothing sounds of
          nature. The property is designed to provide an immersive experience
          with modern comforts, making it perfect for families and nature
          lovers.
        </p>
      </div>

      <Separator className="my-6" />

      {/* What this place offers */}
      <div className="py-3">
        <h2 className="text-2xl font-semibold mb-6">What this place offers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {essentials.map((item, index) => (
            <div key={index} className="flex items-center gap-4 py-2">
              <div className="p-2 bg-gray-50 rounded-lg">{item.icon}</div>
              <span className="text-gray-600">{item.label}</span>
            </div>
          ))}
        </div>
        <Button
          onClick={() => setShowAmenitiesDialog(true)}
          variant="outline"
          className="h-auto py-3 px-6 text-gray-900 hover:bg-gray-50"
        >
          Show all amenities
        </Button>
      </div>

      {/* Amenities Dialog */}
      <Dialog open={showAmenitiesDialog} onOpenChange={setShowAmenitiesDialog}>
        <DialogContent className="max-w-3xl !p-0 !rounded-xl overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-semibold">
                  What this place offers
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowAmenitiesDialog(false)}
                  className="rounded-full hover:bg-gray-100 -mr-2"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </DialogHeader>

            <div className="p-6 space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Essentials</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <Wifi className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">Fast WiFi – 100 Mbps</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Tv className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">55" HDTV with Netflix</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Utensils className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">Kitchen</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <Snowflake className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-600">Air conditioning</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Bathroom</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🚿</span>
                        <span className="text-gray-600">Hot water</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🛁</span>
                        <span className="text-gray-600">3 bathrooms</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Outdoor</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🏊</span>
                        <span className="text-gray-600">Private pool</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🏋️</span>
                        <span className="text-gray-600">Gym</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🌳</span>
                        <span className="text-gray-600">Garden view</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Entertainment</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🎮</span>
                        <span className="text-gray-600">Books and games</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-xl">🎵</span>
                        <span className="text-gray-600">Sound system</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ListingInfo;
