import React from "react";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import SectionHeader from "@/components/Atomics/SectionHeader/SectionHeader";
import CategoryCard from "@/components/Atomics/CategoryCard/CategoryCard";
import Paginate from "@/components/Atomics/Paginate/Paginate";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Col, Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";


const Categories = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<div className="video-block section-padding">
						<Row>
							<Col md={12}>
								<SectionHeader heading="Categories" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Your Life"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Unboxing Cool"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Service Reviewing"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Gaming"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Technology Tutorials"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Singing"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Cooking" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Traveling" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard name="Education" views="74,853" />
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Noodles, Sauces & Instant Food"
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Comedy"
									verified
									views="74,853"
								/>
							</Col>
							<Col xl={3} sm={6} className="mb-3">
								<CategoryCard
									name="Lifestyle Advic"
									views="74,853"
								/>
							</Col>
						</Row>
					</div>
					<Paginate />
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

Categories.PageLayout = Main

export default Categories;
