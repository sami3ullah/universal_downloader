import Image from "next/image";
import Header from "./(component)/Header";
import DownloadForm from "./(component)/DownloadForm";
import { Toaster } from "@/components/ui/toaster";

export default function Home() {
  return (
    <main className="h-full">
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
