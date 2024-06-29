import React from "react";
import { useGetFavoritesQuery } from "../../redux/api";
import { movieType } from "../../types";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import Card from "../../components/MovieCard";

const FavoritesListContainer: React.FC = () => {
  const { isLoading, error, data } = useGetFavoritesQuery();

  return (
    <div className="bg-gradient-to-r from-red-600 via-burgundy-700 to-black rounded-lg p-4">
      <h2 className="text-3xl font-bold text-white mb-4">Favorites</h2>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error data={error} />
      ) : (
        data && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5 overflow-x-scroll scrollbar-hide">
            {data.results.map((movie: movieType, key: number) => (
              <div className="col" key={key}>
                <Card movie={movie} />
              </div>
            ))}
          </div>
        )
      )}
    </div>
  );
};

const Favorites: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-gray-900 text-white p-6">
      <FavoritesListContainer />
    </div>
  );
};

export default Favorites;
