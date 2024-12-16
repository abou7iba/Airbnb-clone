"use client";
import { SearchIcon, UserIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useState } from "react";
import { DateRangePicker, RangeKeyDict } from "react-date-range";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

function Search({placeholder}:{placeholder?:string}) {
  const [input, setInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuests, setNumberOfGuests] = useState(1)
  const selectionRange = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleSelect = (ranges: RangeKeyDict) => {
    setStartDate(ranges.selection.startDate as Date);
    setEndDate(ranges.selection.endDate as Date);
  };
  return (
    <>
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
        <input
          type="text"
          placeholder={placeholder || "Search ... " }
          className="outline-none flex-grow pl-5 bg-transparent "
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <SearchIcon className="hidden h-5 w-5 text-red-400 md:inline-flex py-0" />

      </div>
      {input && (
        <div className=" absolute z-60 left-[50%] top-[100%] translate-x-[-50%] bg-white">
          <DateRangePicker
            ranges={[selectionRange]}
            onChange={handleSelect}
            rangeColors={["#FD5B61"]}
            minDate={new Date()}
          />
          <div className="flex items-center border-b mb-4 bg-white p-4">
            <h2 className="text-2xl flex-grow font-semibold" >Number of Guests </h2>
            <UserIcon className="h-6" />
              <input type="number"
              className="w-12 pl-2 text-lg outline-none text-red-400"
              min={1}
              onChange={(e) => setNumberOfGuests(Number(e.target.value))}
            />
          </div>
          <div className="flex items-center bg-white p-4 ">
            <button type="button" className="flex-grow " onClick={() => setInput('')}>Cancle</button>
            <Link href={{pathname: '/search', search: `?location=${input}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&numOfGuests=${numberOfGuests}`}} onClick={() => setInput('')} className="flex-grow text-red-400 hover:text-red-600 text-center" >Search</Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
