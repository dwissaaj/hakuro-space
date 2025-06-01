import React from "react";
import { StaticImageData } from "next/image";
import {
  Card,
  CardFooter,
  Image,
  Link,
  CardHeader,
  Button,
  CardBody,
} from "@nextui-org/react";
interface blogCardReadyType {
  imageAlt: string;
  src: string;
  headline: string;
  caption: string;
  link: string;
}
export default function BlogCardReady(props: blogCardReadyType) {
  return (
    <Card
      isPressable
      shadow="lg"
      className="col-span-12 lg:col-span-3 p-0 m-0 border-2 border-gray-700 hover:-translate-y-1 transition ease-in-out hover:text-primary
            "
    >
      <Link href={props.link} className="flex flex-col ">
        <CardBody className=" p-0 m-0">
          <Image
            shadow="sm"
            radius="lg"
            alt={props.imageAlt}
            className="w-full object-cover m-0 p-0"
            src={props.src}
          />
        </CardBody>
        <CardFooter className="bg-black/10 flex flex-col gap-2 my-2 ">
          <p className="p-0 m-0 text-white/70 font-bold ">{props.headline}</p>
          <p className="p-0 m-0 text-sm lg:text-md text-white">
            {props.caption}
          </p>
        </CardFooter>
      </Link>
    </Card>
  );
}
