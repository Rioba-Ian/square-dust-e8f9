import InputSearch from "~/components/atoms/InputSearch";
import { CatWikiLogo } from "../Nav";
import { Link } from "@remix-run/react";

export default function Hero() {
 return (
  <main className="rounded-3xl">
   <section
    id="hero-container"
    className="bg-black text-white py-[15vmin] md:py-[28vmin]"
   >
    <HeroContainer />
   </section>
   <section className="bg-beige">
    <HeroMostSearched />
   </section>
  </main>
 );
}

function HeroContainer() {
 return (
  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-2">
   <div id="content" className="space-y-4 md:space-y-8 md:w-3/5 mx-auto">
    <div
     id="cat-wiki-logo"
     className="md:scale-[2] xl:scale-[3] md:ml-[33%] xl:ml-[50%] "
    >
     <CatWikiLogo fill="#fff" />
    </div>
    <h1 className="text-lg md:text-2xl">
     Get to know more about your car breed.
    </h1>
    <InputSearch />
   </div>
  </div>
 );
}

function HeroMostSearched() {
 return (
  <div id="most-searched" className="w-4/5 mx-auto py-6 md:py-10">
   <div className="py-2">
    <p className="text-sm md:text-lg text-dark-text">Most Searched Breeds</p>
   </div>
   <div className="flex items-end justify-between py-4 sm:py-6">
    <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold w-2/3">
     66+ Breeds for you to discover
    </h2>
    <Link
     to="/"
     className="text-sm md:text-lg text-dark-text opacity-60 uppercase hover:opacity-100 hover:font-bold"
    >
     See More
    </Link>
   </div>
  </div>
 );
}
