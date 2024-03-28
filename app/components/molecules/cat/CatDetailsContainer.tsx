import { Image } from "@unpic/react";
import { ICatBreedsData } from "globals";
import "./CatDetails.css";

type CatDetailsContainerProps = {
 catData: ICatBreedsData;
 catImage: string;
};

export default function CatDetailsContainer({
 catData,
 catImage,
}: CatDetailsContainerProps) {
 return (
  <section className="my-2 md:my-4 flex flex-col md:flex-row gap-4 sm:gap-6 md:gap-12 justify-between">
   <div id="image-section">
    <Image
     width={400}
     height={400}
     src={catImage?.url}
     className="rounded-3xl min-w-[300px]"
    />
   </div>
   <div id="content-section">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold my-[0.75em]">
     {catData.name}
    </h1>
    <p className="my-8">{catData.description}</p>
    <div id="attributes" className="space-y-3 md:space-y-4">
     <p className="font-bold">
      Temparament: <span className="font-normal">{catData.temperament}</span>
     </p>

     <div className="">
      <p className="font-bold">
       Origin: <span className="font-normal">{catData.origin}</span>
      </p>
     </div>

     <div>
      <p className="font-bold">
       Life Span: <span className="font-normal">{catData.life_span} years</span>
      </p>
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center ">
      <p className="basis-1/4 font-bold">Adaptability:</p>
      <CreateAttributeSet attribute={catData.adaptability} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Affection Level:</p>
      <CreateAttributeSet attribute={catData.affection_level} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Child Friendly:</p>
      <CreateAttributeSet attribute={catData.child_friendly} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Grooming:</p>
      <CreateAttributeSet attribute={catData.grooming} />
     </div>
     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Intelligence:</p>
      <CreateAttributeSet attribute={catData.intelligence} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Health Issues:</p>
      <CreateAttributeSet attribute={catData.health_issues} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Social Needs:</p>
      <CreateAttributeSet attribute={catData.social_needs} />
     </div>

     <div className="flex flex-col xl:flex-row flex-wrap items-start xl:items-center">
      <p className="basis-1/4 font-bold">Stranger Friendly:</p>
      <CreateAttributeSet attribute={catData.stranger_friendly} />
     </div>
    </div>
   </div>
  </section>
 );
}

type CreateAttributeSetProps = {
 attribute: number;
};

function CreateAttributeSet({ attribute }: CreateAttributeSetProps) {
 const spans = Array.from({ length: 5 }, (_, index) => {
  const opacityClass = index < attribute ? "opacity-1" : "opacity-4";
  return <span key={index} className={opacityClass}></span>;
 });
 return (
  <div className="basis-3/4  flex flex-wrap gap-4" id="attribute-span-section">
   {spans}
  </div>
 );
}
