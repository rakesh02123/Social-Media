import AddFriends from "@/components/AddFriends";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageBannerSection from "@/components/HomePageBannerSection";
import HomePostCard from "@/components/HomePostCard";
import MyFriends from "@/components/MyFriends";
import PhotosComp from "@/components/PhotosComp";
import PhotosCompSkeleton from "@/components/skeletonFolder/PhotosCompSkeleton";
import { Divider } from "@nextui-org/react";

const photos = () => {
  return (
    <>
      <Header />
      <HomePageBannerSection />
      {/* body section  */}
      <div className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            {/* // */}

            <div className="col-span-2 ">
              {/* <HomePostCard /> */}
              <div className="">
                <div className="bg-blue-500 mt-5 mb-5 rounded-md">
                  <div className="mx-10 pt-5 pb-5 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl">My Photos</div>
                      <div className="flex gap-1">
                        <Divider className="bg-white w-6 h-0.5" />
                        <Divider className="bg-red-700 w-12 h-0.5" />
                      </div>
                    </div>
                    <div className="grid grid-cols-3">
                      <PhotosComp />
                      <PhotosCompSkeleton />
                      <PhotosCompSkeleton />
                      <PhotosCompSkeleton />
                      <PhotosCompSkeleton />
                      <PhotosComp />
                      <PhotosComp />
                      <PhotosComp />
                      <PhotosComp />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* second column  */}

            <div className="col-span-1 ms-10 ">
              {/*  */}
              {/* Add Friends  */}

              <div className="mt-5 mb-5">
                <div className="bg-blue-700 pt-5 pb-5 rounded-md">
                  <div className="mx-10 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl">Add Friends</div>
                      <div className="flex gap-1">
                        <Divider className="bg-white w-6 h-0.5" />
                        <Divider className="bg-red-700 w-12 h-0.5" />
                      </div>
                    </div>

                    {/* new friend  */}
                    <AddFriends />
                    <AddFriends />
                    <AddFriends />
                  </div>
                </div>
              </div>

              {/* My Friends  */}
              <div className="mt-5 mb-5">
                <div className="bg-blue-700 pt-5 pb-5 rounded-md">
                  <div className="mx-10 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl">My Friends</div>
                      <div className="flex gap-1">
                        <Divider className="bg-white w-6 h-0.5" />
                        <Divider className="bg-red-700 w-12 h-0.5" />
                      </div>
                    </div>

                    {/* Existing Friends  */}
                    <MyFriends />
                    <MyFriends />
                    <MyFriends />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default photos;
