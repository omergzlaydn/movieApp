import { useGetDetailQuery } from "../../redux/api";
import Loader from "../../components/Loader";
import Error from "../../components/Error";
import { Link, useParams } from "react-router-dom";
import { baseImgUrl } from "../../constants";
import { IoIosArrowBack } from "react-icons/io";
import ItemList from "./ItemList";
import LikeButton from "../../components/LikeButton";

const Detail = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetDetailQuery(id);

  return (
    <div className="relative text-white min-h-screen bg-gray-900">
      <div className="absolute top-0 left-0 right-0 flex justify-between items-center p-4 bg-gray-900 bg-opacity-75 z-10">
        <Link
          className="flex items-center gap-2 border border-white rounded p-1 px-3 hover:bg-white hover:text-black transition-colors duration-300"
          to={"/"}
        >
          <IoIosArrowBack />
          Back
        </Link>
        <LikeButton id={id ? +id : 1} />
      </div>

      {data && (
        <div className="relative">
          <img
            className="w-full h-96 object-cover"
            src={baseImgUrl + data.backdrop_path}
            alt={`${data.title} backdrop`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>
      )}

      <div className="relative container mx-auto p-4 pt-20">
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error data={error} />
        ) : (
          data && (
            <div className="flex flex-col md:flex-row md:gap-10 mt-10">
              <div className="md:w-1/3">
                <img
                  className="w-full rounded-lg"
                  src={baseImgUrl + data.poster_path}
                  alt={`${data.title} poster`}
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-4xl font-bold mb-5">{data.title}</h1>
                <div className="flex gap-3 text-gray-400 mb-4 flex-wrap justify-center md:justify-start">
                  {data.genres.map((genre) => (
                    <span key={genre.id} className="px-3 py-1 border border-gray-500 rounded-full text-sm">
                      {genre.name}
                    </span>
                  ))}
                </div>
                <p className="text-gray-400 italic mb-4">{data.tagline}</p>
                <p className="mb-6 leading-relaxed">{data.overview}</p>
                <h2 className="text-2xl font-semibold mb-4">Production Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <ItemList title="Production Companies" data={data.production_companies} />
                  <ItemList title="Spoken Languages" data={data.spoken_languages} />
                  <ItemList title="Production Countries" data={data.production_countries} />
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Detail;
