import { Link } from "@remix-run/react";
import { useEffect, useRef, useState } from "react";

interface CatBreedsLocallySaved {
 id: string;
 name: string;
}

export default function InputSearch() {
 const [catBreedsData, setCatBreedsData] = useState<
  CatBreedsLocallySaved[] | undefined
 >();
 const [searchQuery, setSearchQuery] = useState("");
 const [filteredBreeds, setFilteredBreeds] = useState<CatBreedsLocallySaved[]>(
  []
 );
 const [showList, setShowList] = useState(false);
 const inputRef = useRef<HTMLInputElement>(null);

 useEffect(() => {
  const data = localStorage.getItem("catBreeds");
  if (data) {
   setCatBreedsData(JSON.parse(data));
  }
 }, []);

 useEffect(() => {
  if (catBreedsData) {
   const results = catBreedsData.filter((breed) =>
    breed.name.toLowerCase().includes(searchQuery.toLowerCase())
   );
   setFilteredBreeds(results);
  }
 }, [searchQuery, catBreedsData]);

 const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  setSearchQuery(e.target.value);
 };

 const handleFocus = () => setShowList(true);
 const handleBlur = () => {
  setShowList(false);
 };

 return (
  <>
   <div className="relative">
    <input
     ref={inputRef}
     type="text"
     placeholder="Enter Cat Breed"
     className="rounded-full py-2 md:py-4 px-2 md:px-6 w-4/5 cursor-pointer text-black active:border-dark-text"
     value={searchQuery}
     onChange={handleSearchChange}
     onFocus={handleFocus}
     onBlur={handleBlur}
    />
    <div
     aria-hidden={!showList}
     className="absolute bg-white text-dark-text overflow-y-auto px-6 py-4 w-4/5 max-h-72 top-16 rounded-2xl"
    >
     <ul className="overflow-y-auto space-y-3 divide-y-2">
      {filteredBreeds.map((breed) => (
       <li key={breed.id}>
        <Link to={`/cat/${breed.id}`}>{breed.name}</Link>
       </li>
      ))}
     </ul>
    </div>
   </div>
  </>
 );
}
