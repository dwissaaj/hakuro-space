 import { Metadata } from "next";
import LoadingOnigiri from "./components/loading/OnigiriHomepage";
import { Link } from "@nextui-org/react";


export const metadata: Metadata = {
  title: 'Sakura Hakuro | ',
  description: 'Hakuro Tech Dwi Aji Personal Website',
  applicationName: 'Hakuro Sakura App ',
  referrer: 'origin-when-cross-origin',
  keywords: ['Dwis Aji', 'Front End Developer','indonesia', 'Japan', 'Data Analyst', 'UI/UX Designer'],
  authors: [{ name: 'Dwis Aji' }, { name: 'Dwis Aji', url: 'https://Hakuro.tech' }],
  creator: 'Dwis Aji',
  publisher: 'Dwis Aji',
 
}
export default function App() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen gap-4">
      <div className="flex flex-col gap-2 text-4xl text-center">
        <h1>This Animation built with Rive</h1>
        <h1>このアニメーションRIVE作りますた</h1>
      </div>
      <div className="w-1/2 h-1/2">
      <LoadingOnigiri />
      </div>
      <div>
        <p>Check Rive <Link href="https://rive.app/">Webpage</Link></p>
      </div>
    </main>
  );
}
