import type { MetaFunction } from "@remix-run/cloudflare";
import Nav from "~/components/Nav";

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
   <h1>Welcome to Remix (with Vite and Cloudflare)</h1>
  </div>
 );
}
