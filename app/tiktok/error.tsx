"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex items-center justify-center mt-20">
      <div className="w-[90%] md:w-1/2 flex flex-col justify-center">
        <h2>Oops! Something went wrong :(</h2>
        <Button onClick={() => reset()}>Try again</Button>
      </div>
    </div>
  );
}
