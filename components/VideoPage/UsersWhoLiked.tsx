import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

interface AvatarTooltipProps {
  title: string;
}

const AvatarTooltip: React.FC<AvatarTooltipProps> = ({ title }) => {
  const renderTooltip = (props: any) => {
    return <Tooltip {...props}>{title}</Tooltip>;
  };

  return (
    <OverlayTrigger placement="top" overlay={renderTooltip}>
      <a href="#" title="">
        <img className="total-like-user" src="img/s1.png" alt="" />
      </a>
    </OverlayTrigger>
  );
};

export default AvatarTooltip;

interface UsersWhoLikedProps {}

const UsersWhoLiked: React.FC<UsersWhoLikedProps> = () => {
  return (
    <span dir="rtl" className="total-like-user-main ml-2">
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
      <AvatarTooltip title="Gurdeep Osahan" />
    </span>
  );
};

export { UsersWhoLiked };
