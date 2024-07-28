import { Divider, Skeleton } from "@nextui-org/react";

const MyFriendsSkeleton = () => {
  return (
    <>
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
        </div>
        {/* <Divider className="bg-white" /> */}
      </div>
    </>
  );
};

export default MyFriendsSkeleton;
