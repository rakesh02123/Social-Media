import { Image } from "@nextui-org/react";

const VideoComp = () => {
  return (
    <>
      <div className="">
        <div className="">
          <iframe
            width="370"
            height="215"
            src="https://www.youtube.com/embed/BJAxCfUF-w4?si=GFFfmcOvAS3ky_LB"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default VideoComp;
