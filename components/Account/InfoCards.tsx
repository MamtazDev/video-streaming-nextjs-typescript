import React from "react";
import InfoCard from "../Atomics/InfoCard/InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faAngleRight,
  faVideo,
  faListAlt,
  faCloudUploadAlt,
} from "@fortawesome/free-solid-svg-icons";

const InfoCards: React.FC = () => {
  return (
    <>
      <InfoCard label="26 Channels" icon={faUsers} bg="primary" />
      <InfoCard label="156 Videos" icon={faVideo} bg="warning" />
      <InfoCard label="123 Categories" icon={faListAlt} bg="success" />
      <InfoCard label="13 New Videos" icon={faCloudUploadAlt} bg="danger" />
    </>
  );
};

export default InfoCards;
