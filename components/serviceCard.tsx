"use client";;
import { Card, CardHeader, CardBody, User, Image, Tooltip } from "@heroui/react";
import { Link } from "@heroui/link";
import { FiExternalLink } from "react-icons/fi";

export default function Service({
  serviceImage
}: {
  serviceImage: React.ReactNode;
}) {

  return (
    <Card className="m-2 py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {serviceImage}
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <p className="text-[#1fa6a6] text-base font-bold">Mobile</p>
        <div className="flex flex-row justify-between">
          <small className="text-default-500">De Zéro à Expert : <br/> Maîtrisez le développement Cross-Platform</small>
          <Tooltip content="Visit course page" placement="bottom-start" size="sm" className="bg-black/50 text-white">
            <FiExternalLink onClick={() => window.open("https://heroui.com", "_blank")} color="#737373" size={25}/>
          </Tooltip>
        </div>
        <h4 className="font-bold text-large">React Native</h4>
        <div className="flex flex-col items-start gap-2 mt-4">
            <p className="text-sm"> With Mr : </p>
            <div className="flex items-center">
            <User
                avatarProps={{
                src: "https://avatars.githubusercontent.com/u/30373425?v=4",
                }}
                description={
                <Link isExternal href="https://x.com/jrgarciadev" size="sm">
                    @jrgarciadev
                </Link>
                }
                name="Junior Garcia"
            />
            <div className="ml-12">
                <p className="font-bold text-lg">$50.25</p>
            </div>
            </div>
        </div>
      </CardBody>
    </Card>
  );
}