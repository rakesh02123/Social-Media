import { Tooltip, Button, Divider, Image } from "@nextui-org/react";
import { MessageCircle, MessageSquareText, Plus } from "lucide-react";

const MyFriends = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        <Divider className="bg-white" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4 md:gap-2.5 xl:gap-4">
            <div className="rounded-full h-12 w-12 flex justify-center items-center">
              <Image
                className="rounded-full h-12 w-12 flex justify-center items-center"
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
            </div>
            <div className="">
              <div className="space-y-1">
                <div className="text-base font-bold">Rakesh Bhowmick</div>
                <div className="text-xs">Active 3 Years Ago</div>
              </div>
            </div>
          </div>
          <div className="">
            <Tooltip content="Send Message" closeDelay={100}>
              <Button isIconOnly className="bg-white ">
                <MessageSquareText className="bg-none" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyFriends;
