import React, { useState } from "react";

const Search = () => {
  const [qurey, setQurey] = useState("");

  const items = [
    "Apricot",
    "Blackcurrant",
    "Cherimoya",
    "Dragonfruit",
    "Elderberry",
    "Feijoa",
    "Guava",
    "Huckleberry",
    "Ilama",
    "Jabuticaba",
    "Kiwano",
    "Longan",
    "Mangosteen",
    "Nance",
    "Orange",
    "Persimmon",
    "Quince",
    "Rambutan",
    "Sapodilla",
  ];
  const change = () => {
    setQurey(e.target.value);
  };

  const filterItems = items.filter((item) =>
    item.toLocaleLowerCase().includes(qurey.toLocaleLowerCase())
  );

  return (
    <>
      <div className="p-6 text-center">
        <h1 className="font-bold text-bg-secondary  text-center">Search....</h1>
        <input
          type="text"
          name="search"
          id=""
          placeholder="Search Fruit"
          value={qurey}
          onChange={change}
          className="w-50 h-10 fs-5 px-4 border p-2 rounded w-fill mb-4"
        />
        <ul>
        {filterItems.length>0?(
            filterItems.map((item, index)=>(
                <li key={index} className="p-2">
                    {item}
                </li>
            :(
                <p>not found</p>
            ))
        )}
        </ul>
      </div>
    </>
  );
};

export default Search;
