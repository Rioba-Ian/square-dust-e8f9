import type { MetaFunction } from "@remix-run/cloudflare";
import Nav from "~/components/molecules/Nav";
import Hero from "~/components/molecules/home/Hero";

export const meta: MetaFunction = () => {
 return [
  { title: "New Remix App" },
  {
   name: "description",
   content: "Welcome to Remix! Using Vite and Cloudflare!",
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
