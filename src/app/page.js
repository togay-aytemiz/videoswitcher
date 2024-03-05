"use client";

import Image from "next/image";
import Radio from "@/components/Radio";
import Youtube from "@/components/Youtube";
import { useEffect, useState } from "react";

const videoList = {
  video1: "B91wc5dCEBA",
  video2: "SqcY0GlETPk",
  video3: "s2skans2dP4",
  video4: "ft30zcMlFao",
};

export default function Home() {
  const [selectedRadio, setSelectedRadio] = useState("video1");
  const [selectedVideo, setSelectedVideo] = useState(videoList.video1);

  useEffect(() => {
    setSelectedVideo(videoList[selectedRadio]);
  }, [selectedRadio]);

  return (
    <div className="p-4">
      <div className="mt-10 mx-auto max-w-lg">
        <img
          src="https://www.logomaker.com/api/main/images/1j+ojFVDOMkX9Wytexe43D6kh...GBrRVJmxfOwXs1M3EMoAJtlyAkgPRq9P46"
          width={200}
          height={100}
        />
        <h1 className="text-4xl font-bold py-2">StreamShack</h1>
        <div>
          <Radio
            selectedRadio={selectedRadio}
            setSelectedRadio={setSelectedRadio}
          />
        </div>
      </div>
      <div className="flex justify-center items-center mt-10">
        <Youtube embedId={selectedVideo} />
      </div>
    </div>
  );
}
