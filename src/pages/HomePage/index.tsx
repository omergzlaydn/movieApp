import MovieList from "../../components/MovieList";

interface MovieListContainerProps {
  title: string;
  endpoint: string;
}

const MovieListContainer: React.FC<MovieListContainerProps> = ({ title, endpoint }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <MovieList endpoint={endpoint} title={""} />
    </div>
  );
};

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-8 bg-gray-100 text-gray-800 p-6">
      <MovieListContainer title="Populars" endpoint="/movie/popular" />

      <MovieListContainer title="Top Rated" endpoint="/movie/top_rated" />

      <MovieListContainer title="Trending" endpoint="/trending/movie/day" />
    </div>
  );
};

export default Home;
