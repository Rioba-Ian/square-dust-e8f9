import type { MetaFunction } from "@remix-run/cloudflare";
import Nav from "~/components/molecules/Nav";
import Hero from "~/components/molecules/home/Hero";

export const meta: MetaFunction = () => {
 return [
  { title: "Cats Wiki" },
  {
   name: "description",
   content: "Get to know your cat breed better and other cats.",
  },
 ];
};

export default function Index() {
 return (
  <div className="container mx-auto">
   <Nav />
   <Hero />
  </div>
 );
}
