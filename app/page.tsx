 import { Metadata } from "next";
import { Link } from "@nextui-org/react";
import KaitenOnigiri from "./components/rive/kaitenOnigiri";


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
    <main className="mt-8 flex flex-col items-center justify-center w-screen h-screen gap-4">
      <div className="flex flex-col gap-2 text-4xl text-center">
        <p>This Animation built with <Link className="text-4xl underline"  href="https://rive.app/">Rive</Link></p>
        <h1>このアニメーションRIVE作りますた</h1>
      </div>
      <div className="w-full h-1/2">
      <KaitenOnigiri />
      </div>
      
    </main>
  );
}
