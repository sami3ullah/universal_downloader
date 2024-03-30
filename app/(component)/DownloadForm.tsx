"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FormSchema } from "@/lib/utils";
import { downloadVideo } from "@/server/actions/download-video";
import { TiktokClientResponse } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";
import VideoContainer from "./VideoContainer";

type Props = {};

const DownloadForm = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [videoData, setVideoData] = React.useState<TiktokClientResponse>(
    {} as TiktokClientResponse
  );
  const { toast } = useToast();
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      const video = await downloadVideo(data);
      // if there's an error
      if (!video.success) {
        console.log("inside");
        toast({
          title: `Uh oh! ${video.message}`,
          description: "There was a problem with your request",
          variant: "destructive",
        });
        return;
      }
      // videos is fetched successfully here
      setVideoData(video);
    } catch (err) {
      toast({
        title: (err as Error).message,
        description: "There was a problem with your request",
        variant: "destructive",
      });
      throw Error((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="absolute w-1/2 rounded-xl left-1/2 top-[45%] -translate-x-1/2 -translate-y-[45%]">
      {!videoData.data ? (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6 flex flex-col "
          >
            <h1 className="text-4xl text-center mb-10">
              Download Tiktok Videos
            </h1>
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  {/* <FormLabel>Tiktok URL</FormLabel> */}
                  <FormControl>
                    <Input
                      placeholder="Enter url for the tiktok video"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="w-[160px] mx-auto h-12 text-sm"
            >
              {!!isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Download Now
            </Button>
          </form>
        </Form>
      ) : (
        // video actions
        <VideoContainer videoData={videoData} />
      )}
    </div>
  );
};

export default DownloadForm;
