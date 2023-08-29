// import "./VideoPage.css";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import VideoCardList from "@/components/VideoPage/VideoCardList";
import SingleVideoLeft from "@/components/VideoPage/SingleVideoLeft";
import SingleVideoRight from "@/components/VideoPage/SingleVideoRight";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Col, Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";



const VideoPage = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block-right-list section-padding">
						<Row className="mb-4">
							<Col md={8}>
								<div className="single-video">
									<iframe
										title="Youtube Video"
										width="100%"
										height="315"
										src="https://www.youtube-nocookie.com/embed/8LWZSGNjuF0?rel=0&amp;controls=0&amp;showinfo=0"
										frameBorder={0}
										allow=" encrypted-media"
										allowFullScreen
									></iframe>
								</div>
							</Col>

							<Col md={4}>
								<div className="video-slider-right-list">
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Here are many variati of passages of Lorem"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Duis aute irure dolor in reprehenderit in."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
				
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Culpa qui officia deserunt mollit anim"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Deserunt mollit anim id est laborum."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="Exercitation ullamco laboris nisi ut."
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
									<VideoCardList
										imgSrc="img/v1.png"
										time="3:50"
										videoTitle="There are many variations of passages of Lorem"
										views="1.8M"
										timeAgo="11 Months"
										videoCategory="Education"
										verified
									/>
								</div>
							</Col>
						</Row>
					</div>

					<div className="video-block section-padding">
						<Row>
							<Col md={8}>
								<SingleVideoLeft />
							</Col>

							<Col md={4}>
								<SingleVideoRight />
							</Col>
						</Row>
					</div>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

VideoPage.PageLayout = Main

export default VideoPage;
