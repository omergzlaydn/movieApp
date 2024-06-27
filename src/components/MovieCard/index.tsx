import { Link } from "react-router-dom";
import LikeButton from "../LikeButton";
import { movieType } from "../../types";
import { baseImgUrl } from "../../constants";

type CardProps = {
  movie: movieType;
};

const Card = ({ movie }: CardProps) => {
  return (
    <div className="p-2 shadow-lg shadow-red-100 rounded cursor-pointer hover:scale-105 transition-transform h-full max-h-[650px] max-w-[500px] flex-shrink-0">
      <Link className="flex flex-col gap-2" to={`/movie/${movie.id}`}>
        <img
          className="rounded-md w-full h-80 object-cover"
          src={baseImgUrl + movie.poster_path}
          alt={movie.original_title}
        />
      </Link>
      <div className="w-full flex items-center justify-between mt-2">
        <Link to={`/movie/${movie.id}`} className="flex-1">
          <h2 className="font-semibold text-lg line-clamp-2">{movie.original_title}</h2>
        </Link>
        <LikeButton id={movie.id} />
      </div>
    </div>
  );
};

export default Card;
