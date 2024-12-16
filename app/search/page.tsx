import Footer from "../components/Footer";
import Header from "../components/header/Header";
import { format } from "date-fns";
import { getSearchResult } from "../utils/api";
import { searchResultData } from "../types/app";
import ListingCard from "../components/ListingCard";

type SearchParams = {
  startDate: string;
  endDate: string;
  numOfGuests: number;
  location: string;
};

const SearchResult = async ({
  searchParams: { startDate, endDate, numOfGuests, location },
}: {
  searchParams: SearchParams;
}) => {
  let formatedStartDate;
  let formatedEndDate;

  if (startDate && endDate) {
    formatedStartDate = format(new Date(startDate), "dd MMMM yy");
    formatedEndDate = format(new Date(endDate), "dd MMMM yy");
  }

  const range = `${formatedStartDate} - ${formatedEndDate}`;
  const filters = [
    {
      title: "Rooms in ",
      options: ["Entire apartment", "Private room", "Shared room"],
    },
  ];

  const searchResultData: searchResultData = await getSearchResult();

  return (
    <>
      <Header placeholder={`${location} | ${range} |  ${numOfGuests} Guests`} />
      <main className="py-6 px-4 sm:px-8">
        <section>
          <p className="text-sm text-gray-600 mb-4">
            300+ Stays - {range} - for {numOfGuests} Guests
          </p>

          <div className="flex flex-wrap gap-6">
            {filters.map((filter) => (
              <div key={filter.title} className="flex-1">
                <h3 className="text-lg font-semibold mb-2">
                  {filter.title} - {location}{" "}
                </h3>
                <div className="space-y-2">
                  {filter.options.map((option) => (
                    <button
                      type="button"
                      key={option}
                      className="text-left py-2 m-3 px-4 rounded-lg bg-gray-100 text-gray-700 hover:bg-red-100 focus:outline-none"
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            ))}
            <div className="flex flex-wrap gap-6 w-full">
              {searchResultData.map((listing) => (
                <div
                  key={listing.title}
                  className="w-full w-1/2 "
                >
                  <ListingCard
                    img={listing.img}
                    title={listing.title}
                    location={listing.location}
                    description={listing.description}
                    price={listing.price}
                    total={listing.total}
                    star={listing.star}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SearchResult;
