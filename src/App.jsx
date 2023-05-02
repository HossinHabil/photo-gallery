import "./App.css";
import { createContext, useState } from "react";
import Banner from "./components/Banner";
import Cards from "./components/Cards";
import useAxios from "./util/useAxios";

// Create Context
export const ImageContext = createContext();

function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `/search/photos?page=1&client_id=${
      import.meta.env.VITE_UNSPLASH_API_KEY
    }`
  );

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage
  }

  return (
    <ImageContext.Provider value={value}>
      <Banner />
      <Cards />
    </ImageContext.Provider>
  );
}

export default App;
