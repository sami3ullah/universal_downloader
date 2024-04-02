"use client";

import { Button } from "@/components/ui/button";
import { TiktokClientResponse } from "@/lib/types";
import { Loader2, EllipsisVertical } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import React from "react";
import { toast } from "@/components/ui/use-toast";

type Props = {
  videoData: TiktokClientResponse;
};

const VideoActions = ({ videoData }: Props) => {
  const [isLoading, setIsLoading] = React.useState({
    "download-hd": false,
    "download-non-hd": false,
    "with-watermark": false,
    "download-mp3": false,
    "video-cover": false,
  });

  const downloadVideo = async (url: string, buttonId: string) => {
    try {
      // setting the isLoading state for only the button on which we clicked on
      setIsLoading((prev) => ({
        ...prev,
        [buttonId]: true,
      }));
      // making the url downloadable
      const res = await fetch(url);
      const file = await res.blob();
      let tempUrl = URL.createObjectURL(file);
      const aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = url.replace(/^.*[\\\/]/, "");
      document.body.appendChild(aTag);
      aTag.click();
      URL.revokeObjectURL(tempUrl);
      aTag.remove();
    } catch (err) {
      toast({
        title: (err as Error).message,
        description: "There was a problem with your request",
        variant: "destructive",
      });
    } finally {
      setIsLoading((prev) => ({
        ...prev,
        [buttonId]: false,
      }));
    }
  };

  return (
    <div className="flex align-center justify-between md:justify-center gap-4">
      {/* Download HD */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button
          className="text-black md:text-md font-bold"
          onClick={() =>
            downloadVideo(videoData.data?.videoHd ?? "", "download-hd")
          }
        >
          {isLoading?.["download-hd"] ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Download HD (mp4)"
          )}
        </Button>
        {/* Download with watermark */}
        <Button
          className="text-black font-bold md:text-md"
          onClick={() =>
            downloadVideo(
              videoData.data?.videoWithWatermark ?? "",
              "with-watermark"
            )
          }
        >
          {isLoading?.["with-watermark"] ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Download with Watermark (mp4)"
          )}
        </Button>
      </div>
      {/* More Download Option */}
      <div className="flex">
        <Popover>
          <PopoverTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <EllipsisVertical size={30} />
                </TooltipTrigger>
                <TooltipContent>
                  <p>More Download Options</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </PopoverTrigger>
          <PopoverContent className="flex flex-col align-center gap-4">
            {/* Download non-hd */}
            <Button
              className="text-black font-bold"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoWithoutWatermark ?? "",

                  "download-non-hd"
                )
              }
            >
              {isLoading?.["download-non-hd"] ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Download Non-HD (mp4)"
              )}
            </Button>
            {/* Download just the music */}
            <Button
              className="text-black font-bold"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoMusic ?? "",

                  "download-mp3"
                )
              }
            >
              {isLoading?.["download-mp3"] ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Download (mp3)"
              )}
            </Button>
            {/* Download the video cover */}
            <Button
              className="text-black font-bold"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoCover ?? "",

                  "video-cover"
                )
              }
            >
              {isLoading?.["video-cover"] ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Download cover"
              )}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default VideoActions;
