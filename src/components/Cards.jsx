import { useContext, useEffect, useState } from "react";
import { ImageContext } from "../App";
import Card from "./Card";
import Skeleton from "./Skeleton";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "./Loader";

const Cards = () => {
  const [images, setImages] = useState([]);

  // Fetch Cards on Every Refresh.
  const fetchImages = () => {
    const apiRoot = "https://api.unsplash.com";
    axios
      .get(
        `${apiRoot}/photos/random?client_id=${
          import.meta.env.VITE_UNSPLASH_API_KEY
        }&count=12`
      )
      .then((res) => setImages([...images, ...res.data]));
  };

  useEffect(() => {
    fetchImages();
  }, []);

  const { response, isLoading, searchImage } = useContext(ImageContext);

  return (
    <section>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
      {response.length > 0 &&
        (isLoading ? (
          <Skeleton item={12} />
        ) : (
          response.map((card, index) => (
            <Card card={card} key={card.id + "_" + index} />
          ))
        ))}
      </div>
      <InfiniteScroll
        dataLength={images.length}
        next={fetchImages}
        hasMore={true}
        loader={<Loader />}
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4">
          {!response.length > 0 &&
            (isLoading ? (
              <Skeleton item={12} />
            ) : (
              images.map((card, index) => (
                <Card card={card} key={card.id + "_" + index} />
              ))
            ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};

export default Cards;
