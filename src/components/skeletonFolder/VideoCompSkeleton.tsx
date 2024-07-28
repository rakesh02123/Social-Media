import { Skeleton } from "@nextui-org/react";

const VideoCompSkeleton = () => {
  return (
    <>
      <div className="">
        <div className="">
          <Skeleton className="rounded-sm">
            <iframe
              width="370"
              height="215"
              src="https://www.youtube.com/embed/BJAxCfUF-w4?si=GFFfmcOvAS3ky_LB"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </Skeleton>
        </div>
      </div>
    </>
  );
};

export default VideoCompSkeleton;
