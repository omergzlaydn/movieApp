import React from "react";
import MovieList from "../../components/MovieList";

interface MovieListContainerProps {
  title: string;
  endpoint: string;
}

const MovieListContainer: React.FC<MovieListContainerProps> = ({ title, endpoint }) => {
  return (
    <div className="bg-gradient-to-r from-red-600 via-burgundy-700 to-black rounded-lg p-4">
      <h2 className="text-3xl font-bold text-white mb-4">{title}</h2>
      <div>
        <MovieList endpoint={endpoint} title={""} />
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-gray-900 text-white p-6">
      <MovieListContainer title="Popüler" endpoint="/movie/popular" />
      <MovieListContainer title="En İyi Oy Alanlar" endpoint="/movie/top_rated" />
      <MovieListContainer title="Trendler" endpoint="/trending/movie/day" />
    </div>
  );
};

export default Home;
