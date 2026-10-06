import React, { useState } from "react"; 
 
import { Search, Zap } from "lucide-react"; 
import { Link, useNavigate } from "react-router-dom"; 
 
const Navbar = ({ handleSearch }) => { 
  const [input, setInput] = useState(""); 
  const navigate = useNavigate(); 
 
  const searchHandler = (e) => { 
    e.preventDefault(); 
 
    if (input.trim()) { 
      handleSearch(input.trim()); 
      navigate(`/search/${input}`); 
      setInput(""); 
    } 
  }; 
  return ( 
    <> 
      <nav className="sticky top-0 z-50 bg-[#e3e8e9]/95 backdrop-blur-md shadow-md shadow-[#bca88e]/20 border-b border-[#bca88e]/40"> 
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8"> 
          <div className="flex justify-between items-center h-16"> 
            <Link 
              to={"/"} 
              className="flex items-center text-2xl font-black text-[#3f4548] hover:text-[#8f7658] transition duration-300 tracking-wide" 
            > 
              <Zap className="w-7 h-7 mr-2 text-[#bca88e] fill-[#bca88e]/30" /> 
              <span className="text-[#8f7658]">Pro</span>Chef 
            </Link> 
 
            <form 
              onSubmit={searchHandler} 
              className="flex-1 max-w-lg mx-4 hidden sm:flex" 
            > 
              <input 
                type="text" 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Search dishes, ingredients, or cuisine..." 
                className="w-full px-5 py-2.5 border border-[#bca88e]/40 bg-white/80 text-[#3f4548] rounded-l-full focus:outline-none focus:ring-4 focus:ring-[#bca88e]/20 focus:border-[#bca88e] transition placeholder-[#7a8184] shadow-inner" 
              /> 
              <button 
                type="submit" 
                className="bg-[#bca88e] text-white p-2.5 rounded-r-full hover:bg-[#a99174] transition duration-300 shadow-md shadow-[#bca88e]/30 hover:shadow-lg" 
              > 
                <Search className="w-5 h-5" /> 
              </button> 
            </form> 
          </div> 
        </div> 
      </nav> 
    </> 
  ); 
}; 
 
export default Navbar;

