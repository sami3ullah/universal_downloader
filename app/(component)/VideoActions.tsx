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

type Props = {
  videoData: TiktokClientResponse;
};

const VideoActions = ({ videoData }: Props) => {
  const [isLoading, setIsLoading] = React.useState({
    "download-hd": false,
    "download-non-hd": false,
    "with-watermark": false,
    "download-mp3": false,
  });

  const downloadVideo = async (
    url: string,
    videoName: string,
    buttonId: string
  ) => {
    try {
      // setting the isLoading state for only the button on which we clicked on
      setIsLoading((prev) => ({
        ...prev,
        [buttonId]: true,
      }));
      const res = await fetch(url);
      const file = await res.blob();
      let tempUrl = URL.createObjectURL(file);
      const aTag = document.createElement("a");
      aTag.href = tempUrl;
      aTag.download = videoName;
      document.body.appendChild(aTag);
      aTag.click();
      URL.revokeObjectURL(tempUrl);
      aTag.remove();
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading((prev) => ({
        ...prev,
        [buttonId]: false,
      }));
    }
  };

  return (
    <div className="flex align-center justify-center gap-4">
      {/* Download HD */}
      <Button
        className="text-black"
        onClick={() =>
          downloadVideo(
            videoData.data?.videoHd ?? "",
            videoData.data?.title.replaceAll(" ", "_") ?? "",
            "download-hd"
          )
        }
      >
        {isLoading?.["download-hd"] ? (
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          "Download HD (mp4)"
        )}
      </Button>
      {/* More Download Option */}
      <div className="flex">
        <Popover>
          <PopoverTrigger>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <EllipsisVertical />
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
              className="text-black"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoWithoutWatermark ?? "",
                  videoData.data?.title.replaceAll(" ", "_") ?? "",
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
            {/* Download with watermark */}
            <Button
              className="text-black"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoWithWatermark ?? "",
                  videoData.data?.title.replaceAll(" ", "_") ?? "",
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
            {/* Download just the music */}
            <Button
              className="text-black"
              onClick={() =>
                downloadVideo(
                  videoData.data?.videoMusic ?? "",
                  videoData.data?.title.replaceAll(" ", "_") ?? "",
                  "download-mp3"
                )
              }
            >
              {isLoading?.["download-mp3"] ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : (
                "Download (Mp3)"
              )}
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default VideoActions;
