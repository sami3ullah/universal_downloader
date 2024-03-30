import Image from "next/image";
import Header from "./(component)/Header";
import DownloadForm from "./(component)/DownloadForm";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="h-full bg-[url('/background.png')] bg-no-repeat bg-center">
      {/* <div className="w-[300px] h-[300px] bg-green-400 rounded-full absolute z-1 top-0 left-1/2 -translate-x-1/2 blur-[100px]"></div> */}
      {/* <div className="w-[500px] h-[500px] bg-green-600 rounded-full absolute z-1 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 blur-[200px]"></div> */}
      <div className="flex flex-col h-full">
        <Header />
        <div className="h-full relative">
          <DownloadForm />
        </div>
      </div>
      <Toaster />
    </main>
  );
}
