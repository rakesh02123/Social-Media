import AddFriends from "@/components/AddFriends";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HomePageBannerSection from "@/components/HomePageBannerSection";
import MyFriends from "@/components/MyFriends";
import PhotosComp from "@/components/PhotosComp";
import AddFriendsSkeleton from "@/components/skeletonFolder/AddFriendsSkeleton";
import MyFriendsSkeleton from "@/components/skeletonFolder/MyFriendsSkeleton";
import PhotosCompSkeleton from "@/components/skeletonFolder/PhotosCompSkeleton";
import { Button, Divider, Image, Tooltip } from "@nextui-org/react";
import { Plus } from "lucide-react";

const friends = () => {
  return (
    <>
      <Header />
      <HomePageBannerSection />
      <div className="">
        <div className="container mx-auto">
          <div className="grid grid-cols-3">
            <div className="col-span-2">
              {/* add friends  */}

              <div className="bg-blue-500 mt-5 mb-5 rounded-md">
                <div className="mx-10 space-y-4 pt-5 pb-5">
                  <div className="space-y-2">
                    <div className="text-xl">Add Friends</div>
                    <div className="flex gap-1">
                      <Divider className="bg-white w-6 h-0.5" />
                      <Divider className="bg-red-700 w-12 h-0.5" />
                    </div>
                  </div>

                  {/* new friend  */}
                  <AddFriends />
                  {/* <AddFriendsSkeleton />
                  <AddFriendsSkeleton />
                  <AddFriendsSkeleton /> */}
                  <AddFriends />
                  <AddFriends />
                  <AddFriends />
                </div>
              </div>

              {/* My Friends  */}

              <div className="bg-blue-500 mt-5 mb-5 rounded-md">
                <div className="mx-10 space-y-4 pt-5 pb-5">
                  <div className="space-y-2">
                    <div className="text-xl">My Friends</div>
                    <div className="flex gap-1">
                      <Divider className="bg-white w-6 h-0.5" />
                      <Divider className="bg-red-700 w-12 h-0.5" />
                    </div>
                  </div>

                  {/* My friend  */}

                  <MyFriends />
                  {/* <MyFriendsSkeleton />
                  <MyFriendsSkeleton />
                  <MyFriendsSkeleton /> */}
                  <MyFriends />
                  <MyFriends />
                </div>
              </div>
            </div>

            {/* second column  */}

            <div className="col-span-1 ms-10 ">
              {/*  */}
              {/* Add Friends  */}

              <div className="mt-5 mb-5">
                <div className="bg-blue-700 pt-5 pb-5 rounded-md ">
                  <div className="mx-10 space-y-4">
                    <div className="space-y-2">
                      <div className="text-xl">My Photos</div>
                      <div className="flex gap-1">
                        <Divider className="bg-white w-6 h-0.5" />
                        <Divider className="bg-red-700 w-12 h-0.5" />
                      </div>
                    </div>

                    {/* new friend  */}
                    <div className="grid grid-cols-3">
                      <PhotosComp />
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
          </div>
        </div>
      </div>

      {/* footer section  */}

      <Footer />
    </>
  );
};

export default friends;
