import { json } from "@remix-run/cloudflare";
import type { LoaderFunction } from "@remix-run/cloudflare";
import { CatBreedsData } from "globals";
import Hero from "~/components/molecules/home/Hero";
import WhyHaveCat from "~/components/molecules/home/WhyHaveCat";
import { baseUrl } from "~/lib/api";
import { bulkUploadData, getAllSearchDocuments } from "~/lib/search";

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

 const docsData = await getAllSearchDocuments();

 if (docsData && docsData.hits && docsData.hits.total?.value === 0) {
  const dataToUpload = breedsData.map((item) => ({
   id: item.id,
   name: item.name,
  }));

  await bulkUploadData(dataToUpload);
 }

 console.log(topTenBreeds);

 return json(
  { topPickedBreeds, topTenBreeds },
  {
   headers: {
    // cache for one day
    "Cache-Control": "max-age=86400",
   },
  }
 );
};

export default function Index() {
 return (
  <div>
   <Hero />
   <WhyHaveCat />
  </div>
 );
}
