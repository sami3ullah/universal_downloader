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

interface Window {
  showSaveFilePicker?: (
    options?: SaveFilePickerOptions
  ) => Promise<FileSystemFileHandle>;
}

interface SaveFilePickerOptions {
  suggestedName?: string;
  types?: FilePickerAcceptType[];
  excludeAcceptAllOption?: boolean;
}

interface FilePickerAcceptType {
  description?: string;
  accept: Record<string, string[]>;
}

interface FileSystemFileHandle {
  createWritable: () => Promise<FileSystemWritableFileStream>;
}

interface FileSystemWritableFileStream {
  write: (data: Blob | BufferSource | string) => Promise<void>;
  close: () => Promise<void>;
}

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
      // Set the isLoading state for the clicked button
      setIsLoading((prev) => ({
        ...prev,
        [buttonId]: true,
      }));

      // Check if the File System Access API is available
      if (!window.showSaveFilePicker) {
        throw new Error(
          "File System Access API is not supported in this browser."
        );
      }

      // Prompt the user to choose a location to save the file
      const fileHandle = await window.showSaveFilePicker({
        suggestedName: url.replace(/^.*[\\\/]/, ""),
        types: [
          {
            description: "Video file",
            accept: {
              "video/mp4": [".mp4"],
            },
          },
        ],
      });

      const writableStream = await fileHandle.createWritable();

      // Fetch the file as a stream
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch the file");
      }

      // Get a readable stream from the response
      const readableStream = response.body;

      // Ensure the writableStream and readableStream are not null
      if (!readableStream || !writableStream) {
        throw new Error("Stream creation failed");
      }

      // Create a reader from the readable stream
      const reader = readableStream.getReader();

      // Stream the data to the file
      const streamPump = async () => {
        const pump = async ({ done, value }) => {
          if (done) {
            await writableStream.close();
            return;
          }
          await writableStream.write(value);
          return reader.read().then(pump);
        };
        return reader.read().then(pump);
      };

      await streamPump();

      toast({
        title: "Download complete",
        description: "The file has been downloaded successfully.",
        variant: "success",
      });
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
