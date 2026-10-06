import { Key, Utensils } from "lucide-react"; 
 
import { Link } from "react-router-dom"; 
 
const CategorySelection = ({filterByCategory}) => { 
  const featuredCategories = [ 
    "Chicken", 
    "Dessert", 
    "Seafood", 
    "Vegetarian", 
    "Breakfast", 
    "Pasta", 
    "Goat", 
    "Pork", 
    "Lamb", 
  ]; 
  return ( 
    <> 
      <section className="mt-20"> 
        <h2 className="text-3xl font-extrabold text-[#2f3437] mb-6 tracking-tight border-l-4 border-[#bca88e] pl-4 flex items-center"> 
          <Utensils className="w-6 h-6 mr-3 text-[#bca88e]" /> 
          Quick Filter by Primary Ingredient 
        </h2> 
 
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6"> 
          {featuredCategories.map((cat, index) => ( 
            <Link 
              to={`search/${cat}`} 
              key={index} 
              onClick={()=>filterByCategory(cat)} 
              className="bg-[#e3e8e9] p-5 sm:p-5 rounded-2xl shadow-lg shadow-[#bca88e]/20 transition-all duration-300 text-center font-semibold text-[#3f4548] border border-[#bca88e]/30 hover:border-[#bca88e] hover:text-[#8f7658] transform hover:scale-[1.04] hover:-translate-y-1 hover:bg-[#bca88e]/20 mx-5 mt-3" 
            > 
              {cat} 
            </Link> 
          ))} 
        </div> 
      </section> 
    </> 
  ); 
}; 
 
export default CategorySelection;

