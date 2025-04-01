import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Clock,
  Users,
  ChevronRight,
  X,
  Camera,
  BellOff,
  AlertTriangle,
  Trash2,
  Key,
  Lock,
} from "lucide-react";

const ThingsToKnow = () => {
  const [showHouseRulesDialog, setShowHouseRulesDialog] = useState(false);
  const [showSafetyDialog, setShowSafetyDialog] = useState(false);

  const houseRules = {
    intro: "You'll be staying in someone's home, so please treat it with care and respect.",
    checkingInOut: [
      {
        rule: "Check-in after 12:00 pm",
        icon: <Clock className="w-5 h-5" />,
      },
      {
        rule: "Checkout before 11:00 am",
        icon: <Clock className="w-5 h-5" />,
      },
    ],
    duringStay: [
      {
        rule: "10 guests maximum",
        icon: <Users className="w-5 h-5" />,
      },
      {
        rule: "No parties or events",
        icon: <BellOff className="w-5 h-5" />,
      },
      {
        rule: "No smoking",
        icon: <AlertTriangle className="w-5 h-5" />,
      },
      {
        rule: "No pets",
        icon: <AlertTriangle className="w-5 h-5" />,
      },
    ],
    beforeLeave: [
      {
        rule: "Throw rubbish away",
        icon: <Trash2 className="w-5 h-5" />,
      },
      {
        rule: "Return keys",
        icon: <Key className="w-5 h-5" />,
      },
      {
        rule: "Lock up",
        icon: <Lock className="w-5 h-5" />,
      },
    ],
  };

  const safetyItems = [
    {
      item: "Carbon monoxide alarm not reported",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "The host hasn't reported a carbon monoxide alarm on the property. We suggest bringing a portable detector for your stay.",
    },
    {
      item: "Smoke alarm not reported",
      icon: <AlertTriangle className="w-5 h-5" />,
      description: "The host hasn't reported a smoke alarm on the property. We suggest bringing a portable detector for your stay.",
    },
    {
      item: "Exterior security cameras on property",
      icon: <Camera className="w-5 h-5" />,
      description: "Security cameras are installed on the exterior of the property for your safety.",
    },
  ];

  // Preview rules for the main view
  const previewRules = [
    {
      rule: "Check-in after 12:00 pm",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      rule: "Checkout before 11:00 am",
      icon: <Clock className="w-5 h-5" />,
    },
    {
      rule: "10 guests maximum",
      icon: <Users className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-[1120px] mx-auto py-12">
      <h2 className="text-2xl font-semibold mb-8">Things to know</h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* House Rules Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-medium">House rules</h3>
          <div className="space-y-4">
            {previewRules.map((rule, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                {rule.icon}
                <span>{rule.rule}</span>
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className="p-0 h-auto text-gray-800 font-medium hover:text-gray-600 flex items-center gap-2"
            onClick={() => setShowHouseRulesDialog(true)}
          >
            Show more
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* Safety Section */}
        <div className="space-y-8">
          <h3 className="text-xl font-medium">Safety & property</h3>
          <div className="space-y-4">
            {safetyItems.slice(0, 3).map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-gray-600">
                {item.icon}
                <span>{item.item}</span>
              </div>
            ))}
          </div>
          <Button
            variant="link"
            className="p-0 h-auto text-gray-800 font-medium hover:text-gray-600 flex items-center gap-2"
            onClick={() => setShowSafetyDialog(true)}
          >
            Show more
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* House Rules Dialog */}
      <Dialog open={showHouseRulesDialog} onOpenChange={setShowHouseRulesDialog}>
        <DialogContent className="max-w-2xl !p-0 !rounded-xl overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-semibold">
                  House rules
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-100 -mr-2"
                  onClick={() => setShowHouseRulesDialog(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </DialogHeader>

            <div className="p-6 space-y-8">
              {/* Introduction */}
              <p className="text-gray-600">{houseRules.intro}</p>

              {/* Checking in and out */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Checking in and out</h4>
                <div className="space-y-6">
                  {houseRules.checkingInOut.map((rule, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-600">
                      {rule.icon}
                      <span>{rule.rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* During your stay */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">During your stay</h4>
                <div className="space-y-6">
                  {houseRules.duringStay.map((rule, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-600">
                      {rule.icon}
                      <span>{rule.rule}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Before you leave */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold">Before you leave</h4>
                <div className="space-y-6">
                  {houseRules.beforeLeave.map((rule, index) => (
                    <div key={index} className="flex items-center gap-4 text-gray-600">
                      {rule.icon}
                      <span>{rule.rule}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Safety Dialog */}
      <Dialog open={showSafetyDialog} onOpenChange={setShowSafetyDialog}>
        <DialogContent className="max-w-2xl !p-0 !rounded-xl overflow-hidden">
          <div className="bg-white">
            <DialogHeader className="p-6 pb-0">
              <div className="flex items-center justify-between">
                <DialogTitle className="text-2xl font-semibold">
                  Safety & property
                </DialogTitle>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-gray-100 -mr-2"
                  onClick={() => setShowSafetyDialog(false)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </DialogHeader>

            <div className="p-6 space-y-8">
              {safetyItems.map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-start gap-4">
                    <div className="mt-1">{item.icon}</div>
                    <div className="space-y-2">
                      <h4 className="font-medium">{item.item}</h4>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThingsToKnow;
