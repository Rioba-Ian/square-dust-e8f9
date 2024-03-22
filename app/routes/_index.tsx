import { json } from "@remix-run/cloudflare";
import { CatBreedsData } from "globals";
import Nav from "~/components/molecules/Nav";
import Hero from "~/components/molecules/home/Hero";
import { baseUrl } from "~/lib/api";

const myTopBreeds = [
 "Abyssinian",
 "Savannah",
 "Selkirk Rex",
 "Norwegian Forest Cat",
];

export const loader = async () => {
 const res = await fetch(`${baseUrl}/breeds`, {
  headers: {
   "x-api-key": process.env.CATS_API_KEY as string,
  },
 });

 const breedsData: CatBreedsData[] = await res.json();
 const topPickedBreeds = breedsData.filter((item) =>
  myTopBreeds.includes(item.name)
 );
 const topTenBreeds = topPickedBreeds.slice(0, 10);

 return json(
  { topPickedBreeds, topTenBreeds },
  {
   headers: {
    "Cache-Control": "public, max-age=3600 * 10",
   },
  }
 );
};

export default function Index() {
 return (
  <div className="container mx-auto">
   <Nav />
   <Hero />
  </div>
 );
}
