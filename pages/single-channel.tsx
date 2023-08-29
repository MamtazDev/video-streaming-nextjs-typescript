import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
// import "./SingleChannel.css";
import SingleChannelHero from "@/components/SingleChannel/SingleChannelHero";
import SingleChannelNav from "@/components/SingleChannel/SingleChannelNav";
import { Container } from "react-bootstrap";
import ChannelVideos from "@/components/SingleChannel/ChannelVideos";
import ThinFooter from "@/components/Footer/ThinFooter";
import Main from "@/layouts/Main";


const SingleChannel = () => {
	return (
		<>
			<ContentWrapper className="single-channel-page">
				<SingleChannelHero />
				<SingleChannelNav />
				<Container fluid>
					<ChannelVideos />
				</Container>
			</ContentWrapper>
			<ThinFooter />
		</>
	);
};

SingleChannel.PageLayout = Main

export default SingleChannel;
