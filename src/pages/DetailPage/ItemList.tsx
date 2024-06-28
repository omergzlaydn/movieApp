import React from "react";

interface ProductionCompany {
  id: number;
  logo_path: string | null;
  name: string;
  origin_country: string;
}

interface Language {
  english_name: string;
  iso_639_1: string;
  name: string;
}

interface Country {
  iso_3166_1: string;
  name: string;
}

interface ItemListProps {
  title: string;
  data: ProductionCompany[] | Language[] | Country[];
}

const ItemList: React.FC<ItemListProps> = ({ title, data }) => {
  return (
    <div className="p-4 bg-gray-800 rounded-lg shadow-md">
      <h3 className="font-bold mb-2 text-white">{title}</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index} className="mb-1 text-gray-300">
            {"name" in item ? item.name : ""}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
