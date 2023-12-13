import React from "react";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";

export default function NewApp() {
  const list = [
    {
      title: "Web Dev",
      img: "man.png",
      price: "$5.50",
    },
    {
      title: "Backend",
      img: "avatar-3.jpg",
      price: "$3.00",
    },
    {
      title: "Frontend Dev",
      img: "avatar.jpg",
      price: "$10.00",
    },
    {
      title: "Admin",
      img: "avatar.jpg",
      price: "$5.30",
    },
    {
      title: "Ui/Ux",
      img: "avatar-3.jpg",
      price: "$15.70",
    },
    {
      title: "Web Designer",
      img: "man.png",
      price: "$8.00",
    },
    {
      title: "Frontend Dev",
      img: "avatar-3.jpg",
      price: "$7.50",
    },
    {
      title: "Mobile Dev",
      img: "avatar-3.jpg",
      price: "$12.20",
    },
  ];

  return (
    <div className="gap-2 grid grid-cols-2 sm:grid-cols-4 ">
        
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-5">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            <p className="text-default-500">{item.price}</p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}