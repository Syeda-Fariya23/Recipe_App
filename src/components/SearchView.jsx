import React, { useEffect, useState } from "react";
import { ChevronLeft, Loader } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";

const SearchView = ({ meals, loading }) => {
  const { query } = useParams();

  const [areaMeals, setAreaMeals] = useState([]);
  const [areaLoading, setAreaLoading] = useState(false);

  useEffect(() => {
    const fetchAreaRecipes = async () => {
      if (!query) return;

      setAreaLoading(true);

      try {
        const response = await fetch(
          `https://www.themealdb.com/api/json/v1/1/filter.php?a=${query}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const result = await response.json();

        setAreaMeals(result?.meals || []);
      } catch (error) {
        console.log(error);
        setAreaMeals([]);
      } finally {
        setAreaLoading(false);
      }
    };

    fetchAreaRecipes();
  }, [query]);

  const displayMeals = areaMeals.length > 0 ? areaMeals : meals;
  const displayLoading = areaLoading || loading;

  return (
    <>
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        <Link
          to={"/"}
          className="text-[#8f7658] hover:text-[#bca88e] flex items-center mb-6 font-medium transition text-lg group"
        >
          <ChevronLeft className="w-6 h-6 mr-1 transition" />
          Back to Dashboard
        </Link>

        {displayLoading && (
          <div className="text-center p-8 text-[#3f4548]">
            <Loader className="animate-spin inline-block mr-2 text-[#bca88e]" />
            Searching the database...
          </div>
        )}

        {!displayLoading && displayMeals.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {displayMeals.map((meal, index) => (
              <RecipeCard key={meal.idMeal || index} meal={meal} />
            ))}
          </div>
        )}

        {!displayLoading && displayMeals.length === 0 && (
          <div className="text-center p-8 text-[#3f4548]">
            No recipes found for "{query}".
          </div>
        )}

      </main>
    </>
  );
};

export default SearchView;

