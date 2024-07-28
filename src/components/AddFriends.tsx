import { Button, Divider, Image, Tooltip } from "@nextui-org/react";
import { Plus } from "lucide-react";

const AddFriends = () => {
  return (
    <>
      {/* new friend  */}
      <div className="flex flex-col gap-4">
        <Divider className="bg-white" />
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 md:gap-2.5 xl:gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full md:h-12 md:w-12 lg:h-12 lg:w-12 xl:h-12 xl:w-12">
              <Image
                className="flex h-12 w-12 items-center justify-center rounded-full md:h-12 md:w-12 lg:h-12 lg:w-12 xl:h-12 xl:w-12"
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
            <Tooltip content="Add Friend" closeDelay={100}>
              <Button isIconOnly className="bg-white">
                <Plus className="bg-none" />
              </Button>
            </Tooltip>
          </div>
        </div>
      </div>
      {/* <Divider className="bg-white" /> */}
    </>
  );
};

export default AddFriends;
