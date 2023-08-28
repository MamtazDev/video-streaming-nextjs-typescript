import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

interface VideoTitleProps {
  title: string;
  videoHref?: string;
  views: string;
}

const VideoTitle: React.FC<VideoTitleProps> = ({ title, videoHref = "#", views }) => {
  return (
    <div className="single-video-title box mb-3">
      <h2>
        <a href={videoHref}>{title}</a>
      </h2>
      <p className="mb-0">
        {/* <FontAwesomeIcon icon={faEye} />  */}
		{views} 
		views
      </p>
    </div>
  );
};

export default VideoTitle;
