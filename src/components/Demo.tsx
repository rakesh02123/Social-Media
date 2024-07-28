import { Button, Divider, Image, Input } from "@nextui-org/react";
import { Facebook, FileJson, MessageCircle, ThumbsUp } from "lucide-react";
import HomePostCard from "./HomePostCard";
import HomePageBannerSection from "./HomePageBannerSection";
import AddFriends from "./AddFriends";
import MyFriends from "./MyFriends";
import Footer from "./Footer";
import SkeletonHomePageBanner from "./skeletonFolder/SkeletonHomePageBanner";
import HomePostCardSkeleton from "./skeletonFolder/HomePostCardSkeleton";
import AddFriendsSkeleton from "./skeletonFolder/AddFriendsSkeleton";
import MyFriendsSkeleton from "./skeletonFolder/MyFriendsSkeleton";

const Demo = () => {
  return (
    <>
      <div className="">
        {/* banner section  */}

        <HomePageBannerSection />
        {/* <SkeletonHomePageBanner /> */}

        {/* body section  */}
        <div className="">
          <div className="container mx-auto">
            <div className="grid gap-11 sm:grid-cols-1 md:grid-cols-5 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
              <div className="sm:col-span-1 md:col-span-3 lg:col-span-2 xl:col-span-2 2xl:col-span-2">
                <HomePostCard />
                {/* <HomePostCardSkeleton /> */}
                <HomePostCard />
                <HomePostCard />
              </div>
              {/* second column  */}
              <div className="hidden md:col-span-2 md:block lg:col-span-1 xl:col-span-1 2xl:col-span-1">
                {/* Add Friends  */}

                <div className="mb-5 mt-5">
                  <div className="rounded-md bg-blue-700 pb-5 pt-5">
                    <div className="mx-10 space-y-4 sm:mx-5 md:mx-5 lg:mx-10 xl:mx-10 2xl:mx-10">
                      <div className="space-y-2">
                        <div className="text-xl">Add Friends</div>
                        <div className="flex gap-1">
                          <Divider className="h-0.5 w-6 bg-white" />
                          <Divider className="h-0.5 w-12 bg-red-700" />
                        </div>
                      </div>

                      {/* new friend  */}
                      <AddFriends />
                      {/* <AddFriendsSkeleton />
                      <AddFriendsSkeleton />
                      <AddFriendsSkeleton /> */}
                      <AddFriends />
                      <AddFriends />
                    </div>
                  </div>
                </div>

                {/* My Friends  */}
                <div className="mb-5 mt-5">
                  <div className="rounded-md bg-blue-700 pb-5 pt-5">
                    <div className="mx-10 space-y-4 sm:mx-5 md:mx-5 lg:xl:mx-10 xl:mx-10 2xl:xl:mx-10">
                      <div className="space-y-2">
                        <div className="text-xl">My Friends</div>
                        <div className="flex gap-1">
                          <Divider className="h-0.5 w-6 bg-white" />
                          <Divider className="h-0.5 w-12 bg-red-700" />
                        </div>
                      </div>

                      {/* Existing Friends  */}
                      <MyFriends />
                      {/* <MyFriendsSkeleton />
                      <MyFriendsSkeleton />
                      <MyFriendsSkeleton /> */}
                      <MyFriends />
                      <MyFriends />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* footer section  */}

        <Footer />
      </div>
    </>
  );
};

export default Demo;
