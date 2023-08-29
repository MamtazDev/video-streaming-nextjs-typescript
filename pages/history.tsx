import React from "react";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import SectionHeader from "@/components/Atomics/SectionHeader/SectionHeader";
import WatchedVideos from "@/components/History/WatchedVideos";
import Paginate from "@/components/Atomics/Paginate/Paginate";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Col, Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";



const History = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<div className="video-block section-padding">
					<Row>
						<Col md={12}>
							<SectionHeader heading="Watch History" />
						</Col>

						<WatchedVideos />
					</Row>
				</div>

				<Paginate />
			</Container>
			<ThinFooter />
		</ContentWrapper>
	);
};

History.PageLayout=Main

export default History;
