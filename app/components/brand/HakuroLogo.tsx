import {Image} from "@nextui-org/react";
import NextImage from "next/image";
import Link from "next/link";
export const HakuroLogo = () => (
  <Link href={'/'}>
    <Image as={NextImage} width={40} height={40} src='/Sakura Hakuro.svg' alt="Logo Hakuro" />
  
  </Link>
);
