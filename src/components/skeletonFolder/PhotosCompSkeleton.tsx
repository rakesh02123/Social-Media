import { Image, Skeleton } from "@nextui-org/react";

const PhotosCompSkeleton = () => {
  return (
    <>
      <div className="">
        <Skeleton className="rounded-md">
          <Image
            className="rounded-none"
            width={300}
            alt="NextUI hero Image"
            src="https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg"
          />
        </Skeleton>
      </div>
    </>
  );
};

export default PhotosCompSkeleton;
