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
        className="w-fit text-md"
        variant="link"
        onClick={() => setVideoData({} as TiktokClientResponse)}
      >
        <ArrowLeft /> Back
      </Button>
      {/* video here */}
      <div className="max-h-1/2 rounded-md w-full bg-black flex justify-center">
        <video controls className="max-h-[400px] md:max-h-[500px]">
          <source src={videoData.data?.videoHd} />
        </video>
      </div>
      {/* video details */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between">
        {/* Uploader details */}
        <div className="flex gap-4">
          <Image
            width="56"
            height="56"
            className="rounded-full w-[42px] h-[42px] md:w-[56px] md:h-[56px]"
            src={videoData.data?.authorAvatar ?? ""}
            alt="Author Image"
          />
          <div className="flex flex-col gap-1">
            <p className="text-sm md:text-md">
              {videoData.data?.authorDisplayName}
            </p>
            <p className="font-light text-sm md:text-md">
              {videoData.data?.authorUsername}
            </p>
          </div>
        </div>
        {/* Action buttons */}
        <VideoActions videoData={videoData} />
      </div>
    </div>
  );
};

export default VideoContainer;
