import React from "react";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlayCircle,
  faTimesCircle,
  faCalendarAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  VerifiedTooltip,
  UnverifiedTooltip,
} from "../CustomCheckTooltips/CustomCheckTooltips";

interface WatchedVideoCardProps {
  iconHref?: string;
  imgHref?: string;
  imgSrc: string;
  imgAlt?: string;
  time?: string;
  videoTitle?: string;
  videoTitleHref?: string;
  views: string;
  timeAgo: string;
  videoCategory: string;
  verified?: boolean | null;
  progressTime?: string;
  progress?: string;
}

interface IDiv {
  children: string;
   className: string;
    role: "progressbar";
     style: { width: string; }; 
     "aria-valuenow": string; 
     "aria-valuemin:String": string;
      "aria-valuemax:String": string;
}

const WatchedVideoCard: React.FC<WatchedVideoCardProps> = ({
  iconHref = "#",
  imgHref = "#",
  imgSrc,
  imgAlt = "",
  time = "-:-",
  videoTitle = "#",
  videoTitleHref = "#",
  views,
  timeAgo,
  videoCategory,
  verified = null,
  progressTime = "-:-",
  progress = "0",
}) => {
  return (
    <Col xl={3} sm={6} className="mb-3">
      <div className="video-card history-video">
        <div className="video-card-image">
          <a className="video-close" href={iconHref}>
            {/* <FontAwesomeIcon icon={faTimesCircle} /> */}
          </a>
          <a className="play-icon" href={iconHref}>
            {/* <FontAwesomeIcon icon={faPlayCircle} /> */}
          </a>
          <a href={imgHref}>
            <img className="img-fluid" src={imgSrc} alt={imgAlt} />
          </a>
          <div className="time">{time}</div>
        </div>
        <div className="progress">
          <div 
            className="progress-bar"
            role="progressbar"
            style={{ width: progress + "%" }}
            // aria-valuenow={progress}
            // aria-valuemin="0"
            // aria-valuemax="100"
          >
            {progressTime}
          </div>
        </div>
        <div className="video-card-body">
          <div className="video-title">
            <a href={videoTitleHref}>{videoTitle}</a>
          </div>
          <div
            className={
              verified
                ? "video-page text-success-custom"
                : "video-page text-danger-custom"
            }
          >
            {videoCategory}{" "}
            {verified ? <VerifiedTooltip /> : <UnverifiedTooltip />}
          </div>
          <div className="video-view">
            {views} views &nbsp;
            {/* <FontAwesomeIcon icon={faCalendarAlt} />  */}
            {timeAgo} ago
          </div>
        </div>
      </div>
    </Col>
  );
};

export default WatchedVideoCard;
