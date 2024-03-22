import {
 Links,
 Meta,
 Outlet,
 Scripts,
 ScrollRestoration,
} from "@remix-run/react";

import type { LinksFunction, MetaFunction } from "@remix-run/node";

import stylesheet from "~/tailwind.css?url";

export const links: LinksFunction = () => [
 { rel: "stylesheet", href: stylesheet },
 { rel: "icon", href: "/favicon.ico" },
];

export const meta: MetaFunction = () => {
 return [
  {
   charset: "utf-8",
   "og:image":
    "https://res.cloudinary.com/drxurk7lu/image/upload/v1711104100/catswiki/Cats_Wiki_nx0zdh.jpg",
   "og:title": "Cats Wiki, Quick Cats Reference",
   "og:description": "Get to know your cat breed better and other cats.",
   "og:url": "https://square-dust-e8f9.pages.dev/",
   "og:type": "website",
   "twitter:card": "summary_large_image",
   "twitter:site": "@rioba_riri",
   "twitter:creator": "@rioba_riri",
   "twitter:title": "Cats Wiki, Quick Cats Reference",
   title: "Cats Wiki",
   description: "Get to know your cat breed better and other cats.",
   viewport: "width=device-width,initial-scale=1",
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
    {children}
    <ScrollRestoration />
    <Scripts />
   </body>
  </html>
 );
}

export default function App() {
 return <Outlet />;
}
