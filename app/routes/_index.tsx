import { json } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { CatBreedsData } from "globals";
import { useEffect, useState } from "react";
import Hero from "~/components/molecules/home/Hero";
import WhyHaveCat from "~/components/molecules/home/WhyHaveCat";
import { baseUrl } from "~/lib/api";
// import { bulkUploadData, getAllSearchDocuments, client } from "~/lib/search";

const myTopBreeds = [
 "Abyssinian",
 "Savannah",
 "Selkirk Rex",
 "Norwegian Forest Cat",
];

export const loader: LoaderFunction = async ({ context }) => {
 const res = await fetch(`${baseUrl}/breeds`, {
  headers: {
   "x-api-key": context.cloudflare.env.CATS_API_KEY,
  },
 });

 const breedsData: CatBreedsData[] = await res.json();
 const topPickedBreeds = breedsData.filter((item) =>
  myTopBreeds.includes(item.name)
 );
 const topTenBreeds = topPickedBreeds.slice(0, 10);

 //  const docsData = await getAllSearchDocuments(context);

 //  console.log("docsData", docsData);

 //  if (docsData && docsData.hits && docsData.hits.total?.value === 0) {
 //   const dataToUpload = breedsData.map((item) => ({
 //    id: item.id,
 //    name: item.name,
 //   }));

 //   await bulkUploadData(dataToUpload);
 //  }

 return json(
  { topPickedBreeds, topTenBreeds, breedsData },
  {
   headers: {
    // cache for one day
    "Cache-Control": "max-age=86400",
   },
  }
 );
};

export default function Index() {
 // push teh data to localstorage
 const { breedsData } = useLoaderData();
 const [catBreedsLocalStorage, setCatBreedsLocalStorage] = useState<
  string | undefined
 >();

 const dataToLocal = breedsData?.map((item) => ({
  id: item.id,
  name: item.name,
 }));

 useEffect(() => {
  const data = localStorage.getItem("catBreeds");
  setCatBreedsLocalStorage(data);
 }, []);

 useEffect(() => {
  const catBreedsLocalStorageExists = localStorage.getItem("catBreeds");
  if (dataToLocal && !catBreedsLocalStorageExists) {
   localStorage.setItem("catBreeds", JSON.stringify(dataToLocal));
  }
 }, [dataToLocal]);

 console.log(dataToLocal);
 console.log(catBreedsLocalStorage);

 return (
  <div>
   <Hero />
   <WhyHaveCat />
  </div>
 );
}
