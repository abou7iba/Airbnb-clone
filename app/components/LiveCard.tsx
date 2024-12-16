import { LiveItem } from "../types/app";
import Image from "next/image";

interface LiveCardProps {
  img: string;
  title: string;
}

function LiveCard({ img, title }: LiveCardProps) {
  return (
    <div className="max-w-xs mx-auto bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
      <div className="relative w-full h-56">
        <Image 
          src={img} 
          alt={title} 
          width={300} 
          height={200} 
          className="object-cover w-full h-full" 
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800 truncate">{title}</h2>
      </div>
    </div>
  );
}

export default LiveCard;
