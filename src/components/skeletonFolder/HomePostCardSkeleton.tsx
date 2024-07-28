import { Button, Divider, Image, Input, Skeleton } from "@nextui-org/react";
import { ThumbsUp, MessageCircle } from "lucide-react";

const HomePostCardSkeleton = () => {
  return (
    <>
      <div className="">
        <div className="bg-blue-500 mt-5 mb-5 rounded-md">
          <div className="space-y-5 pt-5">
            {/* user profile icon  */}
            <div className="flex items-center gap-4 mx-10">
              <Skeleton className="rounded-full h-16 w-16" />

              <div className="">
                <div className="space-y-1">
                  <Skeleton className="rounded-full">
                    <div className="text-lg font-bold">Rakesh Bhowmick</div>
                  </Skeleton>
                  <Skeleton className="rounded-full h-4">
                    <div className="text-sm">3 Years Ago</div>
                  </Skeleton>
                </div>
              </div>
            </div>

            {/* description section  */}

            <div className="mx-10">
              <div className="space-y-2">
                <Skeleton className="rounded-lg h-4">
                  Sed ut perspiciatis unde omnis natus error sit voluptatem
                  accusantium der doloremque laudantium
                </Skeleton>
                <Skeleton className="rounded-lg h-4 w-[50%]">
                  Sed ut perspicia tisery. I’ll be uploading new content every
                  day, improving the quality.
                </Skeleton>
              </div>
            </div>

            {/* image post section  */}

            <div className="mx-10">
              <Skeleton className="rounded-md">
                <div className="grid grid-cols-2">
                  <div className="bg-slate-600 h-64 w-full">Photo</div>
                  <div className="bg-white h-64 w-full">Photo</div>
                  <div className="bg-white h-64 w-full">Photo</div>
                  <div className="bg-slate-600 h-64 w-full">Photo</div>
                </div>
              </Skeleton>
            </div>

            {/* like & comments section  */}

            <div className="flex justify-between mx-10">
              <div className="flex justify-center items-center gap-2">
                <Skeleton className="rounded-xl">
                  <Button className="bg-pink-700" isIconOnly>
                    <ThumbsUp color="white" />
                  </Button>
                </Skeleton>
                <div className="flex">
                  <Skeleton className="bg-white rounded-full h-8 w-8 flex justify-center items-center" />
                  <Skeleton className="bg-white rounded-full h-8 w-8 flex justify-center items-center ml-[-7px]" />
                  <Skeleton className="bg-white rounded-full h-8 w-8 flex justify-center items-center ml-[-7px]" />
                </div>
              </div>
              <div className="">
                <Skeleton className="rounded-xl">
                  <Button className="bg-pink-700" isIconOnly>
                    <MessageCircle color="white" />
                  </Button>
                </Skeleton>
              </div>
            </div>

            {/* comments section  */}

            <Divider className="bg-white w-full" />

            <div className="mx-10 space-y-3 pb-5">
              <Skeleton className="rounded-full w-[30%] h-5" />

              <div className="flex gap-2">
                <Skeleton className="rounded-xl">
                  <Input className="w-[500px]" />
                </Skeleton>
                <Skeleton className="rounded-xl">
                  <Button color="danger" variant="shadow">
                    Submit
                  </Button>
                </Skeleton>
              </div>
              <Skeleton className="rounded-full w-[40%] h-5" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePostCardSkeleton;
