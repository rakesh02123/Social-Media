import { Button, Divider, Image, Input } from "@nextui-org/react";
import { ThumbsUp, MessageCircle } from "lucide-react";

const HomePostCard = () => {
  return (
    <>
      <div className="">
        <div className="mb-5 mt-5 rounded-md bg-blue-500">
          <div className="space-y-5 px-10 pt-5 sm:space-y-3 sm:px-7 sm:pt-4 md:space-y-3 md:px-7 md:pt-4 lg:space-y-5 lg:px-10 lg:pt-5 2xl:space-y-5">
            {/* user profile icon  */}
            <div className="flex items-center gap-4">
              <Image
                className="h-16 w-16 rounded-full"
                width={300}
                alt="NextUI hero Image"
                src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
              />
              <div className="">
                <div className="space-y-1">
                  <div className="text-lg font-bold">Rakesh Bhowmick</div>
                  <div className="text-sm">3 Years Ago</div>
                </div>
              </div>
            </div>

            {/* description section  */}

            <div className="">
              <div className="text-base md:text-sm lg:text-base xl:text-base 2xl:text-base">
                Sed ut perspiciatis unde omnis natus error sit voluptatem
                accusantium der doloremque laudantium Sed ut perspicia tisery.
                I’ll be uploading new content every day, improving the quality.
              </div>
            </div>

            {/* image post section  */}

            <div className="">
              <div className="grid grid-cols-2">
                <Image
                  className="w-ful h-64 rounded-none md:h-32 lg:h-64 xl:h-64 2xl:h-80"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                  className="w-ful h-64 rounded-none md:h-32 lg:h-64 xl:h-64 2xl:h-80"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                  className="w-ful h-64 rounded-none md:h-32 lg:h-64 xl:h-64 2xl:h-80"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
                <Image
                  className="w-ful h-64 rounded-none md:h-32 lg:h-64 xl:h-64 2xl:h-80"
                  alt="NextUI hero Image"
                  src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                />
              </div>
            </div>

            {/* like & comments section  */}

            <div className="flex justify-between">
              <div className="flex items-center justify-center gap-2">
                <Button className="bg-pink-700" isIconOnly>
                  <ThumbsUp color="white" />
                </Button>
                <div className="flex">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                    P
                  </div>
                  <div className="ml-[-7px] flex h-8 w-8 items-center justify-center rounded-full bg-red-700">
                    P
                  </div>
                  <div className="ml-[-7px] flex h-8 w-8 items-center justify-center rounded-full bg-green-700">
                    P
                  </div>
                </div>
              </div>
              <div className="">
                <Button className="bg-pink-700" isIconOnly>
                  <MessageCircle color="white" />
                </Button>
              </div>
            </div>

            {/* comments section  */}

            <Divider className="w-full bg-white" />

            <div className="space-y-3 pb-5 md:space-y-1.5 md:pb-4 lg:space-y-3 lg:pb-5">
              <div className="">Create Comments</div>
              <div className="flex gap-2">
                <Input className="w-[500px]" />
                <Button color="danger" variant="shadow">
                  Submit
                </Button>
              </div>

              <div className="">Show Comments Here : </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePostCard;
