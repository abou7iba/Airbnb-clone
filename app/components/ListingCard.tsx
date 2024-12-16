import Image from "next/image";
import { listingCard } from "../types/app"
import { StarIcon } from "@heroicons/react/solid";

type listingCard = Omit<listingCardProps, 'long' | 'lat' >
const ListingCard = ({img , title, price, star , description, location, bedrooms}:listingCardProps) => {
  return (
    <div key={title} className="">
      {/* Add your search result component here */}
      <div className="bg-white shadow-md p-6 rounded-lg hover:shadow-lg">
        <Image
          src={img}
          alt={title}
          width={100}
          height={100}
          className=""
        />
        <div className="mt-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="text-sm text-gray-600">
            {location} - {price}
            {/* per night */}
          </p>
          <div className="flex">
          <StarIcon className="h-5 text-red-400"  /> {star}

          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
