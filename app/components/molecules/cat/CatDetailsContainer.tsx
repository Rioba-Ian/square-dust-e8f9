import { Image } from "@unpic/react";
import { ICatBreedsData } from "globals";

type CatDetailsContainerProps = {
 catData: ICatBreedsData;
 catImage: string;
};

export default function CatDetailsContainer({
 catData,
 catImage,
}: CatDetailsContainerProps) {
 return (
  <section className="flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 justify-between">
   <div id="image-section">
    <Image
     width={400}
     height={400}
     src={catImage?.url}
     className="rounded-3xl"
    />
   </div>
   <div id="content-section">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold my-[0.75em]">
     {catData.name}
    </h1>
    <p className="my-8">{catData.description}</p>
    <p className="font-bold">
     Temparament: <span className="font-normal">{catData.temperament}</span>
    </p>

    <p className="font-bold">
     Origin: <span className="font-normal">{catData.origin}</span>
    </p>

    <p className="font-bold">
     Life Span: <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Adaptability: <span className="font-normal">{catData.adaptability}</span>
    </p>

    <p className="font-bold">
     Affection Level:
     <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Child Friendly:
     <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Grooming: <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Intelligence:
     <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Health Issues:
     <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Social Needs:
     <span className="font-normal">{catData.life_span} years</span>
    </p>

    <p className="font-bold">
     Stranger Friendly:
     <span className="font-normal">{catData.life_span} years</span>
    </p>
   </div>
  </section>
 );
}
