import { Image, Link, Skeleton } from "@nextui-org/react";

const SkeletonHomePageBanner = () => {
  return (
    <>
      <div className="">
        <div className="bg-red-700 h-[55dvh] items-end flex">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 mb-8">
              {/* Col 1 */}
              <div className="flex items-center gap-7">
                <div className="bg-white rounded-full h-36 w-36 flex justify-center items-center">
                  <div className="rounded-full h-36 w-36 flex justify-center items-center">
                    <Skeleton className="rounded-full h-36 w-36 flex justify-center items-center">
                      <Image
                        className="rounded-full h-36 w-36 flex justify-center items-center"
                        width={300}
                        height={100}
                        alt="NextUI hero Image"
                        src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                      />
                    </Skeleton>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="space-y-3">
                    <Skeleton className="rounded-full h-7" />
                    <Skeleton className="rounded-full h-5" />
                  </div>
                  <div className="flex gap-3">
                    <Skeleton className="rounded-full h-9 w-9" />
                    <Skeleton className="rounded-full h-9 w-9" />
                    <Skeleton className="rounded-full h-9 w-9" />
                    <Skeleton className="rounded-full h-9 w-9" />
                    <Skeleton className="rounded-full h-9 w-9" />
                  </div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="flex justify-end gap-7 text-white items-center">
                <div className="flex gap-2">
                  <Skeleton className="h-5 rounded-full">
                    <div className="">Posts :</div>
                    <div className="font-semibold">5</div>
                  </Skeleton>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-5 rounded-full">
                    <div className="">Comments :</div>
                    <div className="font-semibold">10</div>
                  </Skeleton>
                </div>
                <div className="flex gap-2">
                  <Skeleton className="h-5 rounded-full">
                    <div className="">Views :</div>
                    <div className="font-semibold">100</div>
                  </Skeleton>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pages section  */}
        <div className="bg-yellow-500 h-12 ">
          <div className="">
            <div className="grid grid-cols-6">
              <div className="border border-l-0 h-12  flex justify-center items-center text-center border-b-red-700 border-b-3">
                <Link href="/" className="text-black">
                  Timeline
                </Link>
              </div>
              <div className="border h-12  flex justify-center items-center text-center ">
                <Link href="/friends" className="text-black">
                  Friends
                </Link>
              </div>

              <div className="border h-12  flex justify-center items-center text-center ">
                <Link href="/photos" className="text-black">
                  Photos
                </Link>
              </div>
              <div className="border h-12  flex justify-center items-center text-center ">
                <Link href="/videos" className="text-black">
                  Videos
                </Link>
              </div>
              <div className="border h-12  flex justify-center items-center text-center ">
                Massage
              </div>
              <div className="border border-r-0 h-12  flex justify-center items-center text-center">
                Notification
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonHomePageBanner;
