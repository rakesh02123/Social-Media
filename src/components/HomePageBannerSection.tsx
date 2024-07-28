import { Image, Link } from "@nextui-org/react";

const HomePageBannerSection = () => {
  return (
    <>
      <div className="">
        <div className="flex min-h-[55dvh] min-w-[100dvh] items-end bg-red-700 sm:bg-orange-500 md:bg-fuchsia-800 lg:bg-green-700 xl:bg-lime-500 2xl:bg-yellow-700">
          <div className="container mx-auto">
            <div className="mb-8 grid grid-cols-3 lg:grid-cols-2 xl:grid-cols-2">
              {/* Col 1 */}
              <div className="col-span-2 ms-3 flex items-center justify-start gap-4 md:ms-0 lg:col-span-1 lg:ms-0 lg:items-center lg:gap-7 xl:col-span-1 xl:ms-0 xl:items-center xl:gap-7">
                <div className="flex h-32 w-32 items-center justify-start rounded-full lg:h-36 lg:w-36 lg:justify-center xl:h-36 xl:w-36 xl:justify-center">
                  <Image
                    className="flex h-32 w-32 items-center justify-start rounded-full lg:h-36 lg:w-36 lg:justify-center xl:h-36 xl:w-36 xl:justify-center"
                    width={300}
                    height={100}
                    alt="NextUI hero Image"
                    src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
                  />
                </div>
                <div className="space-y-3">
                  <div className="">
                    <div className="text-3xl font-bold xl:text-2xl">
                      Rakesh Bhowmick
                    </div>
                    <div className="text-xl xl:text-base">
                      United State of America
                    </div>
                  </div>
                  <div className="flex gap-2.5 xl:gap-3">
                    <Image
                      className="h-10 w-10 rounded-full xl:h-9 xl:w-9"
                      alt="NextUI hero Image"
                      src="/facebook.png"
                    />
                    <Image
                      className="h-10 w-10 rounded-full xl:h-9 xl:w-9"
                      alt="NextUI hero Image"
                      src="/twitter.png"
                    />
                    <Image
                      className="h-10 w-10 rounded-full xl:h-9 xl:w-9"
                      alt="NextUI hero Image"
                      src="/social.png"
                    />
                    <Image
                      className="h-10 w-10 rounded-full xl:h-9 xl:w-9"
                      alt="NextUI hero Image"
                      src="/youtube.png"
                    />
                    <Image
                      className="h-10 w-10 rounded-full xl:h-9 xl:w-9"
                      alt="NextUI hero Image"
                      src="/linkedin.png"
                    />
                  </div>
                </div>
              </div>

              {/* Col 2 */}
              <div className="me-3 flex justify-end sm:me-0 md:me-0 lg:col-span-1 lg:me-0 xl:me-0">
                <div className="grid grid-cols-1 content-center justify-items-end gap-5 text-white lg:grid-cols-3 lg:justify-items-center xl:grid-cols-3 xl:justify-items-center xl:gap-7">
                  <div className="flex gap-2 text-xl xl:text-base">
                    <div className="">Posts :</div>
                    <div className="font-semibold">5</div>
                  </div>

                  <div className="flex gap-2 text-xl xl:text-base">
                    <div className="">Comments :</div>
                    <div className="font-semibold">10</div>
                  </div>

                  <div className="flex gap-2 text-xl xl:text-base">
                    <div className="">Views :</div>
                    <div className="font-semibold">100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* pages section  */}
        <div className="h-12 min-w-[100dvh] bg-yellow-500">
          <div className="">
            <div className="grid grid-cols-6">
              <div className="flex h-12 items-center justify-center border border-l-0 text-center">
                <Link href="/" className="text-lg text-black xl:text-base">
                  Timeline
                </Link>
              </div>
              <div className="flex h-12 items-center justify-center border text-center">
                <Link
                  href="/friends"
                  className="text-lg text-black xl:text-base"
                >
                  Friends
                </Link>
              </div>

              <div className="flex h-12 items-center justify-center border text-center">
                <Link
                  href="/photos"
                  className="text-lg text-black xl:text-base"
                >
                  Photos
                </Link>
              </div>
              <div className="flex h-12 items-center justify-center border text-center">
                <Link
                  href="/videos"
                  className="text-lg text-black xl:text-base"
                >
                  Videos
                </Link>
              </div>
              <div className="flex h-12 items-center justify-center border text-center text-lg xl:text-base">
                Massage
              </div>
              <div className="flex h-12 items-center justify-center border border-r-0 text-center text-lg xl:text-base">
                Notification
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePageBannerSection;
