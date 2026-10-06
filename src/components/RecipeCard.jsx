import React from "react"; 
import { Link } from "react-router-dom"; 
 
const RecipeCard = ({ meal }) => { 
  // console.log("my meal = ",meal) 
  return ( 
    <Link to={`/recipe/${meal.idMeal}`}> 
    <div 
      className="relative bg-[#e3e8e9] rounded-2xl shadow-lg shadow-[#bca88e]/25 overflow-hidden group transform transition duration-500 cursor-pointer border border-[#bca88e]/30 hover:shadow-[#bca88e]/40 hover:-translate-y-2" 
    > 
      {/* Hover glow */} 
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[#bca88e]/70 transition duration-500"></div> 
 
      <div className="flex justify-center items-center p-5"> 
        <img 
          src={meal?.strMealThumb} 
          alt="" 
          className="h-60 w-60 rounded-xl border border-[#bca88e] transition duration-500 group-hover:scale-105 object-cover" 
        /> 
      </div> 
      <div className="p-2 text-center"> 
        <h3 className="text-xl pb-3 font-bold text-[#3f4548] mb-1 group-hover:text-[#8f7658] transition duration-300"> 
          {meal.strMeal} 
        </h3> 
      </div> 
    </div> 
    </Link> 
  ); 
}; 
 
export default RecipeCard;
