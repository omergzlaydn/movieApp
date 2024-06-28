import { useGetMoviesQuery } from "../../redux/api";
import Card from "../MovieCard";
import Error from "../Error";
import Loader from "../Loader";
import { movieType } from "../../types";
import Title from "../Title";
import { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

type PropsType = {
  endpoint: string;
  title: string;
};

const MovieList = ({ endpoint, title }: PropsType) => {
  const { data, isLoading, error } = useGetMoviesQuery(endpoint);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (scrollRef.current) {
        setIsScrolled(scrollRef.current.scrollLeft > 0);
        setIsEnd(
          scrollRef.current.scrollLeft + scrollRef.current.clientWidth >=
          scrollRef.current.scrollWidth
        );
      }
    };

    if (scrollRef.current) {
      scrollRef.current.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (scrollRef.current) {
        scrollRef.current.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  return (
    <div className="relative">
      <Title>{title}</Title>

      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="flex items-center relative">
            <button
              onClick={scrollLeft}
              className={`absolute left-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-opacity ${!isScrolled ? 'opacity-0' : 'opacity-100'}`}
              style={{ transition: 'opacity 0.3s' }}
            >
              <FaChevronLeft size={24} />
            </button>
            <div
              className="overflow-x-auto whitespace-nowrap py-4 scroll-smooth"
              ref={scrollRef}
            >
              <div className="inline-flex space-x-4">
                {data.results.map((movie: movieType, key: number) => (
                  <Card movie={movie} key={key} />
                ))}
              </div>
            </div>
            <button
              onClick={scrollRight}
              className={`absolute right-0 z-10 p-2 bg-gray-200 rounded-full shadow-md hover:bg-gray-300 transition-opacity ${isEnd ? 'opacity-0' : 'opacity-100'}`}
              style={{ transition: 'opacity 0.3s' }}
            >
              <FaChevronRight size={24} />
            </button>
          </div>
        )
      )}
    </div>
  );
};

export default MovieList;
