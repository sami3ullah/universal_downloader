"use server";

import { TiktokClientResponse, TiktokObj } from "@/lib/types";
import { FormSchema } from "@/lib/utils";
import { z } from "zod";

type FormValues = z.infer<typeof FormSchema>;
export const downloadVideo = async (
  values: FormValues
): Promise<TiktokClientResponse> => {
  // validation
  if (!values.url) {
    return {
      status: 400,
      success: false,
      message: "Please provide the url for the video",
      data: null,
    };
  }
  const videoData: TiktokClientResponse = await tiktokDownloader(values.url);
  return videoData;
};

const tiktokDownloader = async (
  url: string | undefined
): Promise<TiktokClientResponse> => {
  let domain = "https://www.tikwm.com/";
  let params = {
    url: url ?? "",
    count: 12,
    cursor: 0,
    web: 1,
    hd: 1,
  };

  try {
    let response = await fetch(domain + "api/", {
      method: "POST",
      headers: {
        accept: "application/json, text/javascript, */*; q=0.01",
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        // 'cookie': 'current_language=en; _ga=GA1.1.115940210.1660795490; _gcl_au=1.1.669324151.1660795490; _ga_5370HT04Z3=GS1.1.1660795489.1.1.1660795513.0.0.0',
        "sec-ch-ua":
          '"Chromium";v="104", " Not A;Brand";v="99", "Google Chrome";v="104"',
        "user-agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.0.0 Safari/537.36",
      },
      body: JSON.stringify(params),
      redirect: "follow",
    });
    const videoObj = await response.json();
    console.log(videoObj);
    const videoDetails: TiktokObj = videoObj.data;

    if (!videoDetails?.play) {
      return {
        status: 404,
        success: false,
        message: "Video not found",
        data: null,
      };
    }

    return {
      status: 200,
      success: true,
      message: "Video fetched successfully",
      data: {
        videoWithoutWatermark: domain + videoDetails.play.substring(1),
        videoWithWatermark: domain + videoDetails.wmplay.substring(1),
        videoHd: domain + videoDetails.hdplay.substring(1),
        videoMusic: domain + videoDetails.music.substring(1),
        videoCover: domain + videoDetails.cover.substring(1),
        authorAvatar: domain + videoDetails.author.avatar.substring(1),
        authorUsername: videoDetails.author.unique_id,
        authorDisplayName: videoDetails.author.nickname,
        duration: videoDetails.duration,
        fileSize: videoDetails.hd_size,
        title: videoDetails.title,
      },
    };
  } catch (err) {
    throw Error("Something unknown happened");
  }
};
