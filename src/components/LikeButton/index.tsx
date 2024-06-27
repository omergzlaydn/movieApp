import React from "react";
import { useAddToFavoriteMutation, useGetFavoritesQuery } from "../../redux/api";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import Loader from "../Loader";

const LikeButton = ({ id }: { id?: number }) => {
  const { data: favState, isLoading: favLoading } = useGetFavoritesQuery();

  const isLiked = favState?.results.find((item) => item.id === id);

  const [addToFavorite, { isLoading: addLoading }] = useAddToFavoriteMutation();

  const handleLike = () => {
    addToFavorite({
      media_id: id || 1,
      media_type: "movie",
      favorite: isLiked ? false : true,
    });
  };

  return (
    <button
      className={`flex items-center gap-2 mt-4 text-xl px-4 py-2 rounded-lg border border-gray-300 
        ${addLoading || favLoading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}
      `}
      disabled={addLoading || favLoading}
      onClick={handleLike}
    >
      {addLoading || favLoading ? (
        <Loader type="xs" />
      ) : isLiked ? (
        <MdBookmark size={20} color="#EF4444" />
      ) : (
        <MdBookmarkBorder size={20} color="#6B7280" />
      )}
    </button>
  );
};

export default LikeButton;
