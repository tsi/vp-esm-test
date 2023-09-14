import React from "react";
import VideoPlayer from "./VideoPlayer";

export default function App() {
  return (
    <div className="App">
      <VideoPlayer
        publicId="elephants"
        cloud="demo"
        playerConfig={{}}
        sourceConfig={{
          sourceTypes: ["dash/vp9", "hls/h265", "mp4"],
          transformation: {
            streaming_profile: "full_hd"
          }
        }}
      />
    </div>
  );
}
