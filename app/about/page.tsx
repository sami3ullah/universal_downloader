import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[90%] md:w-1/2 flex flex-col gap-4 text-lg">
        <p>
          Universal Downloader is an online TikTok Downloader tool, through
          which you can easily download TikTok videos with or without watermark
          and Tiktok music in mp3 format.
        </p>
        <p>
          The videos are on TikTok servers and not ours, we do not host or save
          videos on our servers and we do not keep any data on our servers.
        </p>
        <p>
          Universal Downloader is 100% anonymous and safe. If you have any
          trouble using Universal Downloader or just wanna say hi, reach to us
          on{" "}
          <a
            href="https://www.linkedin.com/in/samidev/"
            className="text-primary underline"
            target="_blank"
          >
            Linkedin
          </a>{" "}
          or through{" "}
          <a
            href="mailto:msami398@gmail.com"
            className="text-primary underline"
            target="_blank"
          >
            email.
          </a>
        </p>
        <p>
          If you love using our TikTok Video Downloader tool, please share it
          with your friends!
        </p>
      </div>
    </div>
  );
};

export default page;
