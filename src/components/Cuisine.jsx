import React from "react";
import { Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Cuisine = ({ filterByArea }) => {
  const navigate = useNavigate();

  const featuredAreas = [
    "India",
    "United States",
    "Turkish",
    "British",
    "Canadian",
    "Chinese",
    "Italian",
    "Mexican",
    "Russian",
    "Thai",
  ];

  return (
    <>
      <div className="bg-[#f8f8f6] border-b border-[#e3e8e9] shadow-sm">
        <div className="max-w-8xl mx-auto px-3 sm:px-4 lg:px-8 overflow-x-auto scrollbar-hide">
          <div className="flex space-x-2 sm:space-x-4 py-2.5 sm:py-3 items-center min-w-max">

            <div className="flex items-center text-sm sm:text-base lg:text-lg font-bold text-[#8f7658] pr-2 sm:pr-3 whitespace-nowrap">
              <Globe className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-[#bca88e] shrink-0" />
              Global Cuisines:
            </div>

            {featuredAreas.map((area) => (
              <button
                onClick={() => {
                  filterByArea(area);
                  navigate(`/search/${area}`);
                }}
                key={area}
                className="cursor-pointer text-[#3f4548] text-xs sm:text-sm whitespace-nowrap font-medium hover:text-[#8f7658] transition duration-200 py-1.5 px-3 sm:px-4 rounded-full bg-[#e3e8e9] border border-[#bca88e]/40 hover:bg-[#f8f8f6] hover:border-[#bca88e] hover:shadow-md hover:shadow-[#bca88e]/20 transform hover:scale-[1.05]"
              >
                {area}
              </button>
            ))}

          </div>
        </div>
      </div>
    </>
  );
};

export default Cuisine;