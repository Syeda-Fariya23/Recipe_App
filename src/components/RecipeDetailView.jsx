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
      <div className="text-center p-8 text-[#3f4548]"> 
        <Loader className="animate-spin inline-block mr-2 text-[#bca88e]" /> 
        Preparing your recipe card... 
      </div> 
    ); 
 
  const ingredients = []; 
 
  for (let i = 1; i <= 20; i++) { 
    // console.log(i) 
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
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-8"> 
        <Link 
          to={"/"} 
          className="text-[#8f7658] hover:text-[#bca88e] flex items-center mb-6 font-medium transition text-lg group" 
        > 
          <ChevronLeft className="w-6 h-6 mr-1 transition" /> 
          Back to Dashboard 
        </Link> 
 
        <div className="bg-white p-6 md:p-12 rounded-3xl shadow-2xl shadow-[#bca88e]/20 border border-[#bca88e]/30"> 
          <div className="lg:flex lg:space-x-12"> 
            <div className="lg:w-1/2 mb-8 lg:mb-0"> 
              <h1 className="text-4xl font-black text-[#3f4548] mb-6 leading-tight"> 
                {meal?.strMeal} 
              </h1> 
 
              <img 
                src={meal.strMealThumb} 
                alt="" 
                className="w-100` w-100` rounded-xl shadow-2xl shadow-[#bca88e]/20 object-cover border-4 border-[#e3e8e9] ring-2 ring-[#bca88e]/60 mx-5" 
              /> 
            </div> 
 
            <div className="lg:w-1/2 bg-[#e3e8e9] rounded-xl shadow-inner shadow-[#bca88e]/20 border border-[#bca88e]/30 pb-3"> 
              <h2 className="text-3xl font-bold text-[#8f7658] mb-6 flex items-center border-b border-[#bca88e]/30 pb-3 p-3"> 
                <Utensils className="w-7 h-7 mr-3 text-[#bca88e]" /> 
                Key Ingredients 
              </h2> 
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 list-none p-0"> 
                {ingredients.map((item, index) => ( 
                  <li 
                    key={index} 
                    className="flex items-start text-[#596164] text-base ml-2" 
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
 
              <div className="mt-8 pt-4 border-t border-[#bca88e]/30"> 
                <div className="text-lg text-[#596164] space-x-3 flex flex-wrap gap-y-2"> 
                  <span className="bg-[#bca88e] text-white ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md"> 
                    {meal.strCategory} 
                  </span> 
 
                  <span className="bg-[#718b91] text-white ml-3 px-4 py-1.5 rounded-full font-semibold text-sm shadow-md"> 
                    {meal.strArea} 
                  </span> 
                </div> 
              </div> 
            </div> 
          </div> 
        
 
        {/* instructions */} 
        <div className="mt-14 pt-8 border-t border-[#bca88e]/30"> 
          <h2 className="text-3xl font-bold text-[#3f4548] mb-8 flex items-center"> 
            {" "} 
            <BookOpen className="w-7 h-7 mr-3 text-[#bca88e]" /> Detailed 
            Preparation Steps 
          </h2> 
          <ol className="space-y-6 list-none text-[#596164]"> 
            {instructions.map((step, index) => ( 
              <li 
                key={index} 
                className="text-lg leading-relaxed bg-[#e3e8e9] p-5 rounded-xl border-l-4 border-[#bca88e] shadow-lg shadow-[#bca88e]/15 transition duration-300 hover:bg-[#d9e0e2]" 
              > 
                <span className="font-extrabold text-[#8f7658] mr-3 text-xl"> 
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

