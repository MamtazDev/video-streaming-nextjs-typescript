import React from "react";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import BlogFeed from "@/components/Blog/BlogFeed";
import BlogSidebar from "@/components/Blog/BlogSidebar";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";



const Blog = () => {
	return (
		<>
			<ContentWrapper>
				<Container fluid>
					<section className="blog-page section-padding">
						<Container>
							<Row>
								<BlogFeed />
								<BlogSidebar />
							</Row>
						</Container>
					</section>
				</Container>
				<ThinFooter />
			</ContentWrapper>
		</>
	);
};

Blog.PageLayout = Main

export default Blog;
