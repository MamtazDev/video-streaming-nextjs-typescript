import React from "react";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import InfoCards from "@/components/Account/InfoCards";
import MyVideos from "@/components/Account/MyVideos";
import MyChannels from "@/components/Account/MyChannels";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";


const Account = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid className="pb-0">
					<Row>
						<InfoCards />
					</Row>

					<hr />

					<MyVideos />
					<hr className="mt-0" />
					<MyChannels />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

Account.PageLayout = Main

export default Account;
