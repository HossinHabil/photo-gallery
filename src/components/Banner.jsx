import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import SearchField from "./SearchField";
import { motion } from "framer-motion";
import { fadeIn } from "../util/motion";

const BASE_URL = "https://api.unsplash.com";

const Banner = () => {
  const [data, setData] = useState([]);
  const [loadingData, setLoadingData] = useState(false);
  const [dataError, setDataError] = useState("");

  // Fetch Banner Background on Every Refresh.

  const fetchAPI = async () => {
    try {
      setLoadingData(true);
      const res = await axios.get(
        `${BASE_URL}/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }`
      );
      const data = await res.data;
      setData(data);
    } catch (err) {
      setDataError(err);
      console.log(dataError);
    } finally {
      setLoadingData(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <section className="flex flex-col justify-center items-center">
      <div className="relative w-full h-screen bg-cover bg-center bg-no-repeat">
        {data.urls && (
          <img
            className="h-screen w-full object-cover -z-50"
            src={data.urls.regular}
            alt={data.alt_description}
          />
        )}
      </div>
      <div className="absolute top-1/2 left-1/2 w-4/5 md:w-1/2 lg:w-2/5 transform -translate-x-1/2 -translate-y-1/2  text-center flex flex-col gap-y-6 font-bold z-50">
        <motion.h1 variants={fadeIn("down", "tween", 0.5, 1)} initial="hidden" animate="show" className="text-transparent bg-gradient-to-r from-teal-500 to-purple-600 bg-clip-text text-4xl md:text-6xl lg:text-8xl">
          Photo House
        </motion.h1>
        <SearchField/>
      </div>
      <svg className="absolute bottom-0" viewBox="0 0 1440 320">
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,256L60,229.3C120,203,240,149,360,149.3C480,149,600,203,720,240C840,277,960,299,1080,272C1200,245,1320,171,1380,133.3L1440,96L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

export default Banner;
