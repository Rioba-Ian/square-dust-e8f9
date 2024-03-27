import { LoaderFunction, json } from "@remix-run/cloudflare";
import { useLoaderData, Link } from "@remix-run/react";
import { Image } from "@unpic/react";
import { CatBreedsData } from "globals";
import { baseUrl } from "~/lib/api";

export const loader: LoaderFunction = async ({ context }) => {
 const res = await fetch(`${baseUrl}/breeds`, {
  headers: {
   "x-api-key": context.cloudflare.env.CATS_API_KEY,
  },
 });

 const breedsData: CatBreedsData[] = await res.json();
 const topTenBreeds = breedsData.slice(0, 10);

 console.log(topTenBreeds);

 return json(
  { topTenBreeds },
  {
   headers: {
    // cache for one day
    "Cache-Control": "max-age=86400",
   },
  }
 );
};

export default function Mostpopular() {
 const data = useLoaderData<typeof loader>();

 const topTenBreeds: CatBreedsData[] = data?.topTenBreeds || [];

 console.log(topTenBreeds);

 if (!data) {
  return <div>No data found.</div>;
 }

 return (
  <main>
   <h1 className="text-3xl md:text-5xl font-bold text-dark-text">
    Top 10 most searched breeds
   </h1>
   <ol id="most-searched" className=" py-6 md:py-10">
    {topTenBreeds.map((breed, index) => (
     <li
      key={breed.id}
      className="py-2 md:py-8 space-y-4 md:space-y-8 flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12 list-decimal"
     >
      <Link
       to={`/cat/${breed.id}`}
       className="block min-w-[240px] md:min-w-[300px] h-[300px]"
      >
       <Image
        src={breed.image.url}
        className="rounded-3xl w-full"
        alt={breed.name}
        width={300}
        height={300}
       />
      </Link>
      <div>
       <h2 className="text-2xl md:text-4xl text-dark-text">
        {index + 1}. {breed.name}
       </h2>
       <p className="text-sm md:text-lg text-dark-text">{breed.description}</p>
      </div>
     </li>
    ))}
   </ol>
  </main>
 );
}
