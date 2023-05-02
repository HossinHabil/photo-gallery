import { useContext, useState } from "react";
import { ImageContext } from "../App";

import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

const SearchField = () => {
    const [searchValue, setSearchValue] = useState("");
    const { fetchData, setSearchImage } = useContext(ImageContext);
  
    const handleInputChange = (e) => {
      setSearchValue(e.target.value);
    }
    const handleButtonSearch = () => {
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`)
      setSearchValue("");
      setSearchImage(searchValue);
    }
    const handleEnterSearch = e => {
      if(e.key === 'Enter') {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=${import.meta.env.VITE_UNSPLASH_API_KEY}`);
        setSearchValue("");
        setSearchImage(searchValue);
      }
    }
  return (
    <div className="flex flex-col justify-center gap-8 z-50">
      <motion.input
      variants={fadeIn("left", "tween", 0.5, 1)} initial="hidden" animate="show"
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        type="search"
        placeholder="Search Anything..."
        value={searchValue}
        onChange={handleInputChange}
        onKeyDown={handleEnterSearch}
      />
      <motion.button
      variants={fadeIn("up", "tween", 0.5, 1)} initial="hidden" animate="show"
        className="bg-gradient-to-r from-teal-400 to-blue-500 px-6 py-3 mx-auto hover:scale-95 duration-300 w-fit-content rounded-md text-white font-bold uppercase shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
        "
        onClick={handleButtonSearch}
      >
        Search
      </motion.button>
    </div>
  );
};

export default SearchField;
