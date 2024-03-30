import { TiktokClientResponse } from "@/lib/types";
import Image from "next/image";
import React from "react";

type Props = {
  videoData: TiktokClientResponse;
};

const VideoContainer = ({ videoData }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* video here */}
      <div className="max-h-1/2">
        <video controls className="max-h-[600px]">
          <source src={videoData.data?.videoHd} />
        </video>
      </div>
      {/* video details */}
      <div className="flex gap-4">
        <Image
          width="56"
          height="56"
          className="rounded-full"
          src={videoData.data?.authorAvatar ?? ""}
          alt="Author Image"
        />
        <div className="flex flex-col gap-2">
          <p>{videoData.data?.authorDisplayName}</p>
          <p>{videoData.data?.authorUsername}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
