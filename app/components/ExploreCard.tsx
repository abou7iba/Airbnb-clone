import { ExploreItem } from "../types/app";
import Image from "next/image";

type ExploreCardProps = ExploreItem;
function ExploreCard({ location, img, distance }: ExploreCardProps) {
  return (
    <div className="flex items-center space-x-3 border-2 rounded-s">
      <div className="relative w-16 h-16">
        <Image src={img} alt="card" fill />
      </div>
      <div>
        <h3>{location}</h3>
        <p>{distance}</p>
      </div>
    </div>
  );
}

export default ExploreCard;
