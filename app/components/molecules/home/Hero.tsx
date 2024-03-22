import InputSearch from "~/components/atoms/InputSearch";
import { CatWikiLogo } from "../Nav";

export default function Hero() {
 return (
  <main className="rounded-3xl">
   <section
    id="hero-container"
    className="bg-black text-white py-[15vmin] md:py-[28vmin]"
   >
    <HeroContainer />
   </section>
   <section></section>
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
