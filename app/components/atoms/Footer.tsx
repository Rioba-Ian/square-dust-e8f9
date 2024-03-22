import { CatWikiLogo } from "../molecules/Nav";

export default function Footer() {
 return (
  <footer className="bg-black rounded-t-3xl">
   <div
    id="footer-container"
    className="py-4 md:py-6 px-2 md:px-8 text-white flex items-center justify-between"
   >
    <CatWikiLogo fill="#fff" />
    <small>
     © created by
     <a
      href="https://github.com/Rioba-Ian"
      className="text-blue-500 hover:underline"
      target="_blank"
      rel="noreferrer"
     >
      {"   "}
      Rioba Ian
     </a>
     <a href="https://devchallenges.io" target="_blank" rel="noreferrer">
      {"  "}
      devChallenges.io
     </a>
    </small>
   </div>
  </footer>
 );
}
