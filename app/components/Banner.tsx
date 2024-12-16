import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] ">
      <Image
        src="https://images.wallpaperscraft.com/image/single/house_autumn_river_127447_1920x1080.jpg"
        className="object-cover object-left"
        alt="Airbnb banner img"
        fill
      />
      <div className="absolute top-1/2  w-full text-center">
        <h1 className="text-4xl text-white font-bold p-5">
          Discover amazing homes
        </h1>

        <button className="relative px-12 py-4 text-sm font-medium text-white bg-red-400 border border-transparent rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-600">
          Explore now
        </button>
      </div>
    </div>
  );
}

export default Banner;
