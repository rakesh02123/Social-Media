import { Divider, Image } from "@nextui-org/react";
import AddFriends from "./AddFriends";
import MyFriends from "./MyFriends";
import HomePostCard from "./HomePostCard";
import Footer from "./Footer";

const PhotosComp = () => {
  return (
    <>
      <div className="">
        <Image
          className="rounded-none"
          width={300}
          alt="NextUI hero Image"
          src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
        />
      </div>
    </>
  );
};

export default PhotosComp;
