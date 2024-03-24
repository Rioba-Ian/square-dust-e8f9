import {
 Links,
 Meta,
 Outlet,
 Scripts,
 ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css?url";
import Nav from "./components/molecules/Nav";
import Footer from "./components/atoms/Footer";

export const links: LinksFunction = () => [
 { rel: "stylesheet", href: stylesheet },
 { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => {
 const imageElements = [
  {
   name: "twitter:image",
   content: `https://res.cloudinary.com/drxurk7lu/image/upload/v1711286520/catswiki/Cats_Wiki_4.13pm_03-24_1_ahmalz.jpg`,
  },
  {
   property: "og:image",
   content: `https://res.cloudinary.com/drxurk7lu/image/upload/v1711286520/catswiki/Cats_Wiki_4.13pm_03-24_1_ahmalz.jpg`,
  },
  {
   name: "twitter:card",
   content: "summary",
  },
 ];
 return [
  {
   charset: "utf-8",
   title: "Cats Wiki",
   description: "Get to know your cat breed better and other cats.",
   viewport: "width=device-width,initial-scale=1",
  },
  ...imageElements,
  { property: "og:type", content: "article" },
  { property: "og:title", content: "Cats Wiki" },
  { property: "og:site_name", content: "Cats Wiki" },
  {
   property: "og:description",
   content:
    "Get to know your cat breed better and other cats. Developed by Ian Rioba(www.riobaian.dev)",
  },
  {
   property: "og:url",
   content: "https://square-dust-e8f9.pages.dev/",
  },
 ];
};

export function Layout({ children }: { children: React.ReactNode }) {
 return (
  <html lang="en">
   <head>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <Meta />
    <Links />
   </head>
   <body>
    <div className="container mx-auto">
     <Nav />
     {children}
     <Footer />
    </div>
    <ScrollRestoration />
    <Scripts />
   </body>
  </html>
 );
}

export default function App() {
 return <Outlet />;
}
