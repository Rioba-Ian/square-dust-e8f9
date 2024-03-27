import { json, LoaderFunction } from "@remix-run/cloudflare";
import { useLoaderData } from "@remix-run/react";
import { ICatBreedsData, ICatBreedsImageData } from "globals";
import { baseUrl } from "~/lib/api";
import CatDetailsContainer from "~/components/molecules/cat/CatDetailsContainer";
import { Image } from "@unpic/react";

export const loader: LoaderFunction = async ({ context, params }) => {
 const { id } = params;
 console.log(id);

 const res = await fetch(`${baseUrl}/breeds/${id}`, {
  headers: {
   "x-api-key": context.cloudflare.env.CATS_API_KEY,
  },
 });

 // make another fetch to get all images of the cat breed from the id
 const imgRes = await fetch(
  `${baseUrl}/images/search?limit=20&breed_ids=${id}&${context.cloudflare.env.CATS_API_KEY}`
 );

 const catData: ICatBreedsData = await res.json();
 const catImageData: ICatBreedsImageData = await imgRes.json();

 const mainCatImageRes = await fetch(
  `${baseUrl}/images/${catData.reference_image_id}`,
  {
   headers: {
    "x-api-key": context.cloudflare.env.CATS_API_KEY,
   },
  }
 );

 const mainCatImage = await mainCatImageRes.json();
 console.log(catData);

 console.log(catImageData);

 console.log(mainCatImage);

 return json({ catData, catImageData, mainCatImage });
};

function CatDetails() {
 const data = useLoaderData<typeof loader>();

 const catData = data?.catData;
 const catdataImages = data?.catImageData;
 const catImage = data?.mainCatImage;
 console.log(catData);

 console.log(catdataImages);

 console.log(catImage);

 if (!catData) {
  return <div>No cat data found</div>;
 }

 // Display cat details (name, image, description, etc.) using catData

 return (
  <main className="min-h-full my-4">
   <CatDetailsContainer catData={catData} catImage={catImage} />
   <MoreCatPhotos catPhotos={catdataImages} />
  </main>
 );
}

function MoreCatPhotos({ catPhotos }) {
 if (catPhotos.length === 0 || !catPhotos) {
  return <p>No photos found</p>;
 }
 return (
  <section className="py-4 md:py-10">
   <div className="grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
    {catPhotos.map((catPhoto, index) => (
     <Image
      key={index}
      src={catPhoto.url}
      width={300}
      height={300}
      className="rounded-3xl"
     />
    ))}
   </div>
  </section>
 );
}

export default CatDetails;
