import Link from "next/link";
import Image from "next/image";
import React from "react";
import Search from "./Search";
import Navbar from "./Navbar";

function Header({placeholder}:{placeholder?:string}) {
  return (
    <header className=" sticky bg-white z-50 top-0 shadow-md py-4 " >
      <div className="contaniner grid grid-cols-3 relative">
        <Link href="/" className="relative flex items-center h-10 ">
          <Image
            src="https://cdn.brandfetch.io/idkuvXnjOH/theme/dark/logo.svg?c=1bfwsmEH20zzEfSNTed"
            width={100}
            height={100}
            alt="Airbnb is an online marketplace and hospitality service based in the United States. It was founded in 2008 by Brian Chesky, Joe Gebbia, and Nathan Blecharczyk. The idea for Airbnb came about when the founders were struggling to afford rent and decided to rent out air mattresses in their living room to attendees of a design conference. Today, Airbnb has become a global platform that allows people to rent out their homes, apartments, or individual rooms to travelers around the world. Airbnb's headquarters is located in San Francisco, California. The company operates through its website and mobile application, where hosts can create listings for their properties and travelers can browse and book accommodations. The company also provides additional services such as experiences and adventures, where travelers can book unique activities hosted by local experts. On a global scale, Airbnb has expanded its operations to over 220 countries and regions. It has also formed noteworthy partnerships and subsidiaries. For instance, in 2016, Airbnb launched Airbnb Trips, which offers travelers the opportunity to book local experiences and tours. The company has also acquired various smaller companies, including HotelTonight and Luxury Retreats, to further diversify its offerings. In terms of market position, Airbnb has experienced significant growth and is considered one of the leading players in the online travel industry. It has disrupted the traditional hotel industry and carved a niche for itself by offering unique and authentic accommodations. While facing competition from other short-term rental platforms such as Vrbo and Booking.com, Airbnb has managed to maintain a strong presence and loyalty amongst its users. Over the years, Airbnb has faced both challenges and successes. In 2020, due to the COVID-19 pandemic, the company experienced a decline in bookings and had to make significant changes to its operations. However, it also adapted by focusing on long-term stays and enhanced cleaning protocols to address traveler concerns. Additionally, Airbnb successfully went public in December 2020 with a highly anticipated initial public offering (IPO). As of the latest update, Airbnb continues to expand its services and adapt its offerings to meet changing customer demands. It remains a prominent player in the travel industry and strives to provide unique experiences for both hosts and guests."
          />
        </Link>
        <Search placeholder={placeholder} />
        <Navbar />
      </div>
    </header>
  );
}

export default Header;
