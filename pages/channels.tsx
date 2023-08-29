import React from "react";
// import Container from "react-bootstrap/Container";
// import ChannelList from "./ChannelList";
// import FeaturedVideos from "./FeaturedVideos";
// import ThinFooter from "../Footer/ThinFooter";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import { Container } from "react-bootstrap";
import ChannelList from "@/components/Channels/ChannelList";
import FeaturedVideos from "@/components/Channels/FeaturedVideos";
import ThinFooter from "@/components/Footer/ThinFooter";
import Main from "@/layouts/Main";
// import ContentWrapper from "../Atomics/ContentWrapper/ContentWrapper";

const Channels = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<ChannelList />
					<hr />
					<FeaturedVideos />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

Channels.PageLayout = Main

export default Channels;