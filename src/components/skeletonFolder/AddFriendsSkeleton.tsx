import { Divider, Tooltip, Button, Skeleton } from "@nextui-org/react";
import { Plus } from "lucide-react";

const AddFriendsSkeleton = () => {
  return (
    <>
      {/* new friend  */}
      <div className="flex flex-col gap-4">
        <Divider className="bg-white" />
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <Skeleton className="rounded-full h-12 w-12 flex justify-center items-center" />

            <div className="">
              <div className="space-y-1">
                <Skeleton className="rounded-full">
                  <div className="text-base font-bold">Rakesh Bhowmick</div>
                </Skeleton>
                <Skeleton className="rounded-full">
                  <div className="text-xs">Active 3 Years Ago</div>
                </Skeleton>
              </div>
            </div>
          </div>
          <div className="">
            <Skeleton className="rounded-xl">
              <Tooltip content="Add Friend" closeDelay={100}>
                <Button isIconOnly className="bg-white">
                  <Plus className="bg-none" />
                </Button>
              </Tooltip>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddFriendsSkeleton;
