import { useEffect, useState } from "react";

interface CatBreedsLocallySaved {
 id: string;
 name: string;
}

export default function InputSearch() {
 const [catBreedsData, setCatBreedsData] = useState<
  CatBreedsLocallySaved | undefined
 >();

 useEffect(() => {
  const data = localStorage.getItem("catBreeds");
  if (data) {
   setCatBreedsData(JSON.parse(data));
  }
 }, []);

 console.log(catBreedsData);

 return (
  <>
   <input
    type="search"
    name="breed"
    id="breed"
    placeholder="Enter your breed"
    className="rounded-full py-2 md:py-4 px-2 md:px-6 w-4/5 cursor-pointer text-black active:border-dark-text"
   />
  </>
 );
}
