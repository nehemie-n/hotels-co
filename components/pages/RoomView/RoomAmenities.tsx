import { CheckCircleFilled } from "@ant-design/icons";

const amenities = [
  "Air Conditioning",
  "In Unit Washer & Dryer",
  "Washer & Dryer Hookups",
  "Dishwasher",
  "Wheelchair Access",
  "Parking",
  "Laundry Facilities",
  "Fitness Center",
  "Pool",
  "Elevator",
  "Doorman",
  "Dog Friendly",
  "Cat Friendly",
  "Furnished",
  "Lofts",
  "Utilities Included",
  "Gated",
  "Fireplace",
  "Patio",
  "Garage",
  "Hardwood Floors",
  "Balcony",
  "Office",
  "Den",
  "Yard",
  "Clubhouse",
  "Business Center",
  "Controlled Access",
  "Playground",
  "Basement",
  "Walk-In Closets",
  "Concierge",
];

const selectedSample = {
  Yard: true,
  Clubhouse: true,
  "Business Center": true,
  Parking: true,
  Basement: true,
};
export function RoomAmenities() {
  return (
    <div>
      <h3 className="font-bold text-xl mb-6">Amenities</h3>
      <div className="grid grid-cols-3 gap-x-3 gap-y-4">
        {amenities.map((a) => {
          return (
            <div key={a + "amenity"}>
              <div className="flex gap-x-2 items-center">
                <div
                  className={
                    "h-6 w-6 rounded-md border-2 border-slate-200 flex justify-center items-center p-2 " +
                    (a in selectedSample ? "bg-slate-300" : "")
                  }
                >
                  {a in selectedSample ? <CheckCircleFilled size={6} /> : null}
                </div>
                <span className="text-sm">{a}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
