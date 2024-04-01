"use client";

import { TiktokClientResponse } from "@/lib/types";
import Image from "next/image";
import React from "react";
import VideoActions from "./VideoActions";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

type Props = {
  videoData: TiktokClientResponse;
  setVideoData: React.Dispatch<React.SetStateAction<TiktokClientResponse>>;
};

const VideoContainer = ({ videoData, setVideoData }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {/* back button */}
      <Button
        className="w-fit"
        variant="link"
        onClick={() => setVideoData({} as TiktokClientResponse)}
      >
        <ArrowLeft /> Back
      </Button>
      {/* video here */}
      <div className="max-h-1/2 rounded-md w-full bg-black flex justify-center">
        <video controls className="max-h-[500px]">
          <source src={videoData.data?.videoHd} />
        </video>
      </div>
      {/* video details */}
      <div className="flex justify-between">
        {/* Uploader details */}
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
        {/* Action buttons */}
        <div>
          <VideoActions videoData={videoData} />
        </div>
      </div>
    </div>
  );
};

export default VideoContainer;
