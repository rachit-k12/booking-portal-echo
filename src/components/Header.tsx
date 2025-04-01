import React from "react";
import { Search, Globe, Menu, User, Share2, Heart, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleShare = () => {
    // You can replace this URL with your actual website URL
    const url = window.location.href;
    if (navigator.share) {
      navigator
        .share({
          title: "Rasa Pool Villa",
          url: url,
        })
        .catch((error) => console.log("Error sharing:", error));
    } else {
      // Fallback to clipboard copy
      navigator.clipboard
        .writeText(url)
        .then(() => alert("Link copied to clipboard!"))
        .catch((err) => console.log("Error copying:", err));
    }
  };

  const handleBookRedirect = () => {
    window.open('https://www.airbnb.com/rooms/1376711140170106976', '_blank');
  };

  return (
    <header className="px-6 py-4 md:px-10 lg:px-20 sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-semibold text-gray-900">
            Rasa Pool Villa
          </h1>
          <div className="flex items-center gap-2 text-sm">
            <div className="flex items-center">
              <span className="flex items-center font-medium">
                <svg
                  viewBox="0 0 32 32"
                  className="h-4 w-4 fill-current mr-1"
                  aria-hidden="true"
                >
                  <path d="M15.094 1.579l-4.124 8.885-9.86 1.27a1 1 0 0 0-.542 1.736l7.293 6.565-1.965 9.852a1 1 0 0 0 1.483 1.061L16 25.951l8.625 4.997a1 1 0 0 0 1.482-1.06l-1.965-9.853 7.293-6.565a1 1 0 0 0-.541-1.735l-9.86-1.271-4.127-8.885a1 1 0 0 0-1.814 0z" />
                </svg>
                4.96
              </span>
              <span className="mx-1">·</span>
              <button className="underline font-medium">25 reviews</button>
            </div>
            <span className="mx-1">·</span>
            <span className="font-medium">Nandi Hills, Karnataka, India</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex items-center gap-2 rounded-lg hover:bg-gray-100 text-gray-700"
            onClick={handleShare}
          >
            <Share2 className="h-4 w-4" />
            <span className="font-medium">Share</span>
          </Button>

          <Button
            onClick={handleBookRedirect}
            className="bg-gradient-to-r hidden from-[#FF385C] to-[#E31C5F] hover:from-[#E31C5F] hover:to-[#FF385C] text-white px-6 py-2.5 rounded-lg font-semibold sm:flex items-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"
          >
            <span className="hidden md:inline">Book on Airbnb</span>
            <span className="md:hidden">Book now</span>
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
