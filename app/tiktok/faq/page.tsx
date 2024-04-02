import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[90%] md:w-1/2">
        <Accordion type="single" collapsible>
          {/* question 1 */}
          <AccordionItem value="item-1">
            <AccordionTrigger>
              How to download TikTok videos without watermark?
            </AccordionTrigger>
            <AccordionContent>
              1. Find a TikTok video you wish to download by using TikTok App or
              TikTok&apos;s website.
            </AccordionContent>
            <AccordionContent>
              2. Click on the &quot;Share Option&quot; of the TikTok video and
              select &quot;Copy Link&quot; to copy the video&apos;s link.
            </AccordionContent>
            <AccordionContent>
              3. Open Universal Downloader website and Paste the copied TikTok
              Link above and click &quot;Get Video&quot; button.
            </AccordionContent>
            <AccordionContent>
              4. Wait a few seconds, it&apos;ll get the video. Then click
              Download HD button to download video in HD and without watermark.
            </AccordionContent>
          </AccordionItem>
          {/* question 2 */}
          <AccordionItem value="item-2">
            <AccordionTrigger>How to download a non-HD video?</AccordionTrigger>
            <AccordionContent>
              1. Find a TikTok video you wish to download by using TikTok App or
              TikTok&apos;s website.
            </AccordionContent>
            <AccordionContent>
              2. Click on the &quot;Share Option&quot; of the TikTok video and
              select &quot;Copy Link&quot; to copy the video&apos;s link.
            </AccordionContent>
            <AccordionContent>
              3. Open Universal Downloader website and Paste the copied TikTok
              Link above and click &quot;Get Video&quot; button.
            </AccordionContent>
            <AccordionContent>
              4. Wait a few seconds, it will get the video. Then click 3 dots in
              the bottom right corner. More options will appear.
            </AccordionContent>
            <AccordionContent>
              5. Click on Download Non-HD (mp4) button. It will download the the
              tiktok video without watermark in non-hd.
            </AccordionContent>
          </AccordionItem>
          {/* question 3 */}
          <AccordionItem value="item-3">
            <AccordionTrigger>How to download TikTok MP3?</AccordionTrigger>
            <AccordionContent>
              1. Find a TikTok video you wish to download by using TikTok App or
              TikTok&apos;s website.
            </AccordionContent>
            <AccordionContent>
              2. Click on the &quot;Share Option&quot; of the TikTok video and
              select &quot;Copy Link&quot; to copy the video&apos;s link.
            </AccordionContent>
            <AccordionContent>
              3. Open Universal Downloader website and Paste the copied TikTok
              Link above and click &quot;Get Video&quot; button.
            </AccordionContent>
            <AccordionContent>
              4. Wait a few seconds, it will get the video. Then click 3 dots in
              the bottom right corner. More options will appear.
            </AccordionContent>
            <AccordionContent>
              5. Click on (Download mp3) button. It will download the mp3 file.
            </AccordionContent>
          </AccordionItem>
          {/* question 3 */}
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Does MusicallyDown works on Mobile devices?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can use Universal Downloader to Download TikTok video
              without watermark & TikTok MP3 directly to your mobile devices.
            </AccordionContent>
          </AccordionItem>
          {/* question 4 */}
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Where are downloaded videos are saved?
            </AccordionTrigger>
            <AccordionContent>
              It depends on the Browser you are using, by the way all videos &
              MP3 songs are saved in &quot;Downloads&quot; folder on Windows and
              Mac or Mobile. You can also press CTRL+J to view your download
              history in the chrome.
            </AccordionContent>
          </AccordionItem>
          {/* question 5 */}
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Does MusicallyDown store downloaded videos?
            </AccordionTrigger>
            <AccordionContent>
              No, Universal Downloader do not store downloaded videos. All
              videos are hosted on TikTok servers. Also, we also do not store
              users.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
};

export default page;
