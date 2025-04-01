import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Award,
  MessageSquare,
  Globe2,
  Briefcase,
  MapPin,
  Clock,
  Instagram,
  Shield,
  Star,
  Book,
  Globe,
  PawPrint,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";

const HostInfo = () => {
  const hostInterests = [
    { icon: "🏛️", label: "Cultural heritage" },
    { icon: "🎬", label: "Films" },
    { icon: "🌱", label: "Gardening" },
    { icon: "🧘", label: "Meditation" },
    { icon: "🏃", label: "Outdoors" },
    { icon: "📸", label: "Photography" },
    { icon: "🌿", label: "Plants" },
    { icon: "🎵", label: "Playing music" },
    { icon: "🎧", label: "Podcasts" },
    { icon: "♻️", label: "Sustainability" },
    { icon: "✈️", label: "Travel" },
    { icon: "🚶", label: "Walking" },
    { icon: "🧘‍♂️", label: "Yoga" },
  ];

  return (
    <div className="max-w-[1120px] mx-auto py-12">
      <div className="flex flex-col md:flex-row gap-12">
        {/* Left Column - Host Image and Stats */}
        <div className="md:w-1/3">
          <div className="bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-md transition-all duration-300">
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative">
                <div className="w-52 h-52 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow-sm">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAMFBMVEXk5ueutLff4uOnrrHn6eqrsbTZ3N25vsHHy82zuLvr7e7c3+DV2NnQ09W8wcPMz9FRQ01gAAADeUlEQVR4nO2b23LjIAxAuYibMfj//3ZxkqZJmtggWyKzw3no9PGMEAJLRIjBYDAYDAaDwWAwGAwGg4EQACBUjFFd/vsGANScXbiS/Sy6awFYH7SRd4zWLqmuXmCdfDC6eRmZ+2kVJf1q9BOvTlog/N8o/WrJ1MEKbPistKIzv1PaNLoGKzI7LR+y6RnLuYTgt5fuHixGK0hVcbrEis1prlUqseJyEnVrd5Xi2oOuQUoaz5FWsLQ4lXrFUturk/yGo1eqrQa/mEQuZRuVVqjXrz1Qa6iorVozaoU4q1q33i1UxCezQzhR16qIcSpMlFIJs3qlgFKuH2SclFkI12/COZVjmVAKMAVhhbIoWGSkZFBkTi23uxfoMh1XOlcIyyfm4LtJ0d3V/zep+RulCCP1lYmOPPokZUkQ8xcWT9y9c4XymJmwUpQH8hRwTqRXT+z2I6wIAn1N0LTfWLgPh0x6RwePChTdIXORipj9F0idcPuPvkWFKOqaWEkgUp2hlwe2NatIz70bU1PLsywe5YfoHdWU6yaQ1qgfGlr7K0wDmqmho6BntkFItRVPF/3GzqzvHidOJ6GqtiBrnFYqVpDdaf8bsMsUGebNxDIu9pi3b43bjVw6GF2YbNbvtIz0PR9xgPLhOVzGyLD0fu8Cwi7ZaK2NWf+GvNjveBlULOycUppjcfwKo6I0PdI3TtenXDYtPjt3uc6E4HL2yxzV+ryrg9Gk5iJTsnzlMc9Lahnpsk8RJkYxEDF5qZ9k/paF4paXqFgiBlP0Tm76PBaskBO1VomRN2/r5YaYzpawlAKkN6/dKrRM8ESVAkqQ0C3PEi6Ce/H2Y7caLZlPfrdUjrjGTHqHdmdqQaq8k+9QonVWboEN2P7rXy1zToXA9ck+a7nj9QHiOSv3YHX4lQmkY3vuvZY/5uRPy6YnK3ekO4R8hrBvJfGJ1diJagJbss5O8ScM7rOQMk4riFgBtZM0zdmOHxfX09rzx0+LGzCuaQFx0452q7ZeEXLY2GzVkOwTQ0JdCfVSzUMFNPULCJnLqVBZF2BmC1T90BQ7UkdaVYUK0M80cFJ1WUV1X/lA1eRNsSqVD6+a2zH+5Q8St5/qE+rlwREqUh24naTc7zJgfi5wjP39x3JneZHa/b0Px+Xulf2iwHnu/bAnpYLmZ3f2rTqw5zQYDAaDwaAD/wANKir9WY4qAQAAAABJRU5ErkJggg=="
                    alt="Host"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "https://via.placeholder.com/96";
                    }}
                  />
                </div>
                <div className="absolute -bottom-2 -right-2">
                  <Award className="w-8 h-8 text-rose-500" />
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-2xl font-semibold">Titus</h3>
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Award className="w-4 h-4 text-rose-500" />
                  <span className="text-sm">Superhost</span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="text-center">
                  <div className="text-xl font-semibold">4.7</div>
                  <div className="flex items-center justify-center gap-1">
                    <Star className="w-4 h-4 text-rose-500 fill-rose-500" />
                    <span className="text-sm text-gray-600">Rating</span>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-xl font-semibold">10</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
              </div>

              <div className="w-full space-y-3 pt-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">2 years hosting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600">
                    Identity verified
                  </span>
                </div>
              </div>

              <Separator className="my-4" />

              <div className="w-full flex flex-col justify-center items-center gap-6">
                <div className="flex items-center justify-center gap-4">
                  <a
                    href="https://instagram.com/titus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Instagram className="w-5 h-5 text-gray-700" />
                  </a>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-gray-700 border-gray-200"
                    onClick={() => {}}
                  >
                    View profile
                  </Button>
                </div>
                <Button
                  variant="default"
                  className="bg-gray-900 hover:bg-gray-800 text-white w-fit flex items-center gap-2 px-8"
                >
                  <MessageSquare className="w-4 h-4" />
                  Message host
                </Button>
              </div>

              <div className="w-full pt-4">
                <p className="text-sm text-gray-500 text-center">
                  Usually responds within an hour
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Host Info */}
        <div className="md:w-2/3">
          <div className="space-y-8">
            {/* Host Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-semibold mb-1">2</div>
                <div className="text-sm text-gray-600">Years hosting</div>
              </div>
                <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-semibold mb-1">4.7</div>
                <div className="text-sm text-gray-600">Rating</div>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-semibold mb-1">10</div>
                <div className="text-sm text-gray-600">Reviews</div>
              </div>
            </div>

            {/* Host Details */}
            <div className="grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Dream destination</div>
                  <div className="text-gray-600">North East India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Work</div>
                  <div className="text-gray-600">Coach</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Globe2 className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Languages</div>
                  <div className="text-gray-600">English and Hindi</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Book className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Biography title</div>
                  <div className="text-gray-600">Journey to unknown</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Location</div>
                  <div className="text-gray-600">Lives in Delhi, India</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <PawPrint className="w-5 h-5 text-gray-600" />
                <div className="space-y-1">
                  <div className="font-medium">Pets</div>
                  <div className="text-gray-600">Angel</div>
                </div>
              </div>
            </div>

            <Separator />

            {/* Host Interests */}
            <div>
              <h3 className="text-xl font-semibold mb-6">Ask me about</h3>
              <div className="flex flex-wrap gap-3">
                {hostInterests.map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm hover:bg-gray-100 transition-colors duration-200"
                  >
                    <span>{interest.icon}</span>
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl text-sm text-gray-600 mt-8">
              <div className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-gray-500" />
                <p>To protect your payment, never transfer money or communicate outside of the Airbnb listing.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HostInfo;
