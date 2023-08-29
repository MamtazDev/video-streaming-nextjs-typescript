import React from 'react';
import ContentWrapper from '@/components/Atomics/ContentWrapper/ContentWrapper';
import SectionHeader from '@/components/Atomics/SectionHeader/SectionHeader';
import SubscriptionChannelCard from '@/components/Atomics/SubscriptionChannelCard/SubscriptionChannelCard';
import Paginate from '@/components/Atomics/Paginate/Paginate';
import ThinFooter from '@/components/Footer/ThinFooter';
import { Col, Container, Row } from 'react-bootstrap';
import Main from '@/layouts/Main';


const Subscriptions = () => {
	return (
		<ContentWrapper>
			<Container fluid>
				<div className="video-block section-padding">
					<Row>
						<Col md={12}>
							<SectionHeader heading="Subscriptions" />
						</Col>

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
								success
								verified
							/>
						</Col>

						{/* More SubscriptionChannelCard components... */}

						<Col xl={3} sm={6} className="mb-3">
							<SubscriptionChannelCard
								imgSrc="img/s1.png"
								views="1.4M"
								channelName="Channel Name"
								subscriberCount="382,323"
							/>
						</Col>
					</Row>
					<Paginate />
				</div>
			</Container>
			<ThinFooter />
		</ContentWrapper>
	);
};

Subscriptions.PageLayout = Main

export default Subscriptions;
