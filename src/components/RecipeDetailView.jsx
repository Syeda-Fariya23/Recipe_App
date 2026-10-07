import React from "react";
import { useParams, Link } from "react-router-dom";
import { useFetch, API_URL } from "./useFetch";
import { Loader } from "lucide-react";

import { ChevronLeft, Utensils, BookOpen } from "lucide-react";

const RecipeDetailView = () => {
  const { id } = useParams();
  const { data, loading, error } = useFetch(`${API_URL}lookup.php?i=${id}`);
  const meal = data?.meals?.[0];

  console.log(meal);

  if (loading)
    return (
      <div className="text-center p-6 sm:p-8 text-[#3f4548]">
        <Loader className="animate-spin inline-block mr-2 text-[#bca88e]" />
        Preparing your recipe card...
      </div>
    );

  if (!meal) return null;

  const ingredients = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim()) {
      ingredients.push({
        ingredient: ingredient.trim(),
        measure: measure ? measure.trim() : "",
      });
    }
  }

  const instructions = meal.strInstructions
    ? meal.strInstructions
        .split(".")
        .map((step) => step.trim())
        .filter((step) => step.length > 0)
    : [];

  return (
    <>
      <main className="max-w-8xl mx-auto px-3 sm:px-6 lg:px-8 py-5 sm:py-8">

        <Link
          to={"/"}
          className="text-[#8f7658] hover:text-[#bca88e] flex items-center mb-5 sm:mb-6 font-medium transition text-base sm:text-lg group"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 mr-1 transition" />
          Back to Dashboard
        </Link>

        <div className="bg-white p-4 sm:p-6 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl shadow-2xl shadow-[#bca88e]/20 border border-[#bca88e]/30">

          <div className="lg:flex lg:space-x-12">

            <div className="lg:w-1/2 mb-8 lg:mb-0">

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#3f4548] mb-5 sm:mb-6 leading-tight">
                {meal?.strMeal}
              </h1>

              <div className="flex justify-center lg:justify-start">
                <img
                  src={meal.strMealThumb}
                  alt=""
                  className="w-full max-w-100 sm:max-w-125 lg:max-w-full rounded-xl shadow-2xl shadow-[#bca88e]/20 object-cover border-4 border-[#e3e8e9] ring-2 ring-[#bca88e]/60"
                />
              </div>

            </div>

            <div className="lg:w-1/2 bg-[#e3e8e9] rounded-xl shadow-inner shadow-[#bca88e]/20 border border-[#bca88e]/30 pb-3">

              <h2 className="text-2xl sm:text-3xl font-bold text-[#8f7658] mb-5 sm:mb-6 flex items-center border-b border-[#bca88e]/30 pb-3 p-3">
                <Utensils className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-[#bca88e] shrink-0" />
                Key Ingredients
              </h2>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 sm:gap-y-4 list-none p-0">
                {ingredients.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start text-[#596164] text-sm sm:text-base ml-2"
                  >
                    <span className="text-[#bca88e] font-extrabold text-lg mr-2 shrink-0">
                      {"›"}
                    </span>

                    <span className="font-semibold text-[#3f4548] mr-1">
                      {item.measure}
                    </span>{" "}
                    {item.ingredient}
                  </li>
                ))}
              </ul>

              <div className="mt-6 sm:mt-8 pt-4 border-t border-[#bca88e]/30">

                <div className="text-lg text-[#596164] space-x-2 sm:space-x-3 flex flex-wrap gap-y-2">

                  <span className="bg-[#bca88e] text-white ml-2 sm:ml-3 px-3 sm:px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm shadow-md">
                    {meal.strCategory}
                  </span>

                  <span className="bg-[#718b91] text-white ml-2 sm:ml-3 px-3 sm:px-4 py-1.5 rounded-full font-semibold text-xs sm:text-sm shadow-md">
                    {meal.strArea}
                  </span>

                </div>
              </div>

            </div>
          </div>

          {/* instructions */}
          <div className="mt-10 sm:mt-14 pt-6 sm:pt-8 border-t border-[#bca88e]/30">

            <h2 className="text-2xl sm:text-3xl font-bold text-[#3f4548] mb-6 sm:mb-8 flex items-center">
              <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 mr-2 sm:mr-3 text-[#bca88e] shrink-0" />
              Detailed Preparation Steps
            </h2>

            <ol className="space-y-4 sm:space-y-6 list-none text-[#596164]">

              {instructions.map((step, index) => (
                <li
                  key={index}
                  className="text-base sm:text-lg leading-relaxed bg-[#e3e8e9] p-4 sm:p-5 rounded-xl border-l-4 border-[#bca88e] shadow-lg shadow-[#bca88e]/15 transition duration-300 hover:bg-[#d9e0e2]"
                >
                  <span className="font-extrabold text-[#8f7658] mr-2 sm:mr-3 text-lg sm:text-xl">
                    {index + 1}
                  </span>

                  {step.trim()}
                </li>
              ))}

            </ol>
          </div>

        </div>
      </main>
    </>
  );
};

export default RecipeDetailView;