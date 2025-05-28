import React from "react";
import {
  Card,
  CardBody,
  User,
  CardFooter,
  CardHeader,
  Image,
} from "@nextui-org/react";
export interface feedCardType {
  src: string;
  altImg: string;
  desc: string;
  caption: string;
  unique?: number;
}
export default function FeedCard(props: feedCardType) {
  return (
    <Card
      key={props.unique}
      shadow="lg"
      className="font-raleway  p-0 m-0 grid grid-rows-12 "
    >
      <CardHeader className="row-span-2 p-2 m-2">
        <User
          name="Dwis Aji"
          description={props.desc}
          avatarProps={{
            src: "/blog/photo/gallery/avatar.jpeg",
            radius: "sm",
            isBordered: true,
          }}
        />
      </CardHeader>
      <CardBody className="row-span-7 p-0 m-0 ">
        <Image
          loading="eager"
          radius="none"
          className="w-full h-full object-cover p-0 m-0 "
          alt={props.altImg}
          src={props.src}
        />
      </CardBody>
      <CardFooter className="row-span-2 m-0 p-0 flex items-start justify-start  ">
        <p className="p-2 m-0 font-light text-tiny lg:text-md overflow-hidden overflow-ellipsis ">
          {props.caption}
        </p>
      </CardFooter>
    </Card>
  );
}
