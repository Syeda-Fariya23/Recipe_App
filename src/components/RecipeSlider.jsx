import React from "react";
import Slider from "react-slick";

import { useFetch } from "./useFetch";
import RecipeCard from "./RecipeCard";

import { Clock, Loader } from "lucide-react";

const RecipeSlider = ({ title, fetchUrl }) => {
  const { data, loading, error } = useFetch(fetchUrl);
  console.log("my meal data = ", data?.meals);

  const meals = data?.meals || [];

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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

        <div className="w-full sm:w-[90%] mx-auto px-1 sm:px-0">

          <Slider {...settings}>

            {meals.map((meal) => (
              <div
                key={meal.idMeal}
                className="px-2 sm:px-4 lg:px-10 flex justify-center"
              >
                <RecipeCard meal={meal} />
              </div>
            ))}

          </Slider>

        </div>
      </section>
    </>
  );
};

export default RecipeSlider;