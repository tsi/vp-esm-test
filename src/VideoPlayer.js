import React, { useEffect, useRef } from "react";

import "cloudinary-video-player/cld-video-player.min.css";

// import { videoPlayer } from "cloudinary-video-player";

// Or with tree-shaking
import videoPlayer from "cloudinary-video-player/videoPlayer";
import dashjs from "cloudinary-video-player/dash";

function CLDVideoPlayer({ cloud, publicId, playerConfig, sourceConfig }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = videoPlayer(videoRef.current, {
      cloud_name: cloud,
      controls: true,
      // fluid: true,
      width: 400,
      addons: [dashjs],
      ...playerConfig
    });

    player.source(publicId, sourceConfig);

    return () => {
      player && player.dispose();
    };
  }, [cloud, videoRef, playerConfig, publicId, sourceConfig]);

  return <video ref={videoRef} />;
}

export default CLDVideoPlayer;
