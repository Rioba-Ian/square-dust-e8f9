import { json, LoaderFunction } from "@remix-run/cloudflare";
import { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ICatBreedsData, ICatBreedsImageData } from "globals";
import { baseUrl } from "~/lib/api";
import CatDetailsContainer from "~/components/molecules/cat/CatDetailsContainer";
import { Image } from "@unpic/react";

// meta content to change og:title and og:description
export const meta: MetaFunction = ({ data }) => {
 const { mainCatImage, catData } = data;

 return [
  {
   title: `Cats Wiki | ${catData?.name}`,
   description: `Get to know your cat breed better and other cats. ${catData?.description}`,
  },
  {
   property: "og:title",
   content: `Cats Wiki | ${catData?.name}`,
  },
  {
   property: "og:description",
   content: `Get to know your cat breed better and other cats. ${catData?.description}`,
  },
  {
   property: "og:image",
   content: `${mainCatImage?.url}`,
  },
 ];
};

export const loader: LoaderFunction = async ({ context, params }) => {
 const { id } = params;

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

 return json({ catData, catImageData, mainCatImage });
};

function CatDetails() {
 const data = useLoaderData<typeof loader>();

 const catData = data?.catData;
 const catdataImages = data?.catImageData;
 const catImage = data?.mainCatImage;

 if (!catData) {
  return <div>No cat data found</div>;
 }

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
     <div key={index} className="relative">
      <Image
       key={index}
       src={catPhoto.url}
       width={300}
       height={300}
       className="rounded-3xl"
      />
     </div>
    ))}
   </div>
  </section>
 );
}

export default CatDetails;
