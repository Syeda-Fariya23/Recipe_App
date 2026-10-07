import React from "react";
import Slider from "react-slick";

import { useFetch } from "./useFetch";

import { Link } from "react-router-dom";

import { Clock, Loader } from "lucide-react";

const TrendingSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);

  const meals = data?.meals || [];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    appendDots: () => null,
    customPaging: () => null,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (loading)
    return (
      <div className="text-center p-6 sm:p-8 text-[#3f4548]">
        <Loader className="animate-spin inline-block mr-2 text-[#bca88e]" />
        Loading {title}...
      </div>
    );

  return (
    <>
      <section className="mt-2 mx-auto">

        <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#3f4548] mb-5 sm:mb-6 tracking-tight border-l-4 border-[#bca88e] pl-3 sm:pl-4 flex items-center">
          <Clock className="w-5 h-5 sm:w-6 sm:h-6 mr-2 sm:mr-3 text-[#bca88e] shrink-0" />
          {title}
        </h2>

        <div className="w-full mx-auto overflow-hidden">

          <Slider {...settings}>

            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="px-2 sm:px-4 lg:px-6 flex justify-center"
              >
                <Link to={`/recipe/${meal.idMeal}/`}>

                  <div className="relative bg-[#e3e8e9] rounded-xl shadow-xl shadow-[#bca88e]/20 overflow-hidden group transform transition duration-500 cursor-pointer border border-[#bca88e]/40 hover:shadow-[#bca88e]/50 mb-5">

                    {/* Hover glow */}
                    <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-[#bca88e]/80 transition duration-500"></div>

                    <div className="flex justify-center items-center p-3 sm:p-5">

                      <img
                        src={meal?.strMealThumb}
                        alt=""
                        className="h-20 w-20 sm:h-24 sm:w-24 lg:h-30 lg:w-30 rounded-xl border border-[#bca88e] transition duration-500 group-hover:scale-105 object-cover"
                      />

                    </div>

                  </div>

                </Link>
              </div>
            ))}

          </Slider>

        </div>
      </section>
    </>
  );
};

export default TrendingSlider;

