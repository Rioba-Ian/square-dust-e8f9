import { Link } from "@remix-run/react";
import { Image } from "@unpic/react";

export default function WhyHaveCat() {
 return (
  <section className="my-8 md:my-24 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-20">
   <div id="section-content" className="space-y-6 basis-5/12">
    <div id="title-cta">
     <pre></pre>
     <h3 className="text-3xl md:text-4xl text-dark-text font-bold">
      Why should you have a cat?
     </h3>
    </div>
    <p className="text-dark-text text-sm md:text-lg my-4 md:my-6">
     Having a cat around you can actually trigger the release of calming
     chemicals in your body which lower your stress and anxiety levels
    </p>
    <Link
     to="/"
     className="text-dark-text block uppercase opacity-60 hover:opacity-100 transition-opacity"
    >
     Read More →
    </Link>
   </div>

   <div id="images-article" className="basis-7/12 self-end">
    <div id="image-articles-container" className="flex items-start gap-6">
     <div id="one-two" className="basis-2/3 flex flex-col items-end gap-6">
      <Image src="/image 2.png" alt="why have cat" width={273} height={167} />
      <Image src="/image 1.png" alt="why have cat" width={196} height={300} />
     </div>
     <Image
      src="/image 3.png"
      alt="why have cat"
      className="basis-1/3 rounded-3xl w-[160px] md:w-[240px]"
      width={160}
      height={400}
     />
    </div>
   </div>
  </section>
 );
}
