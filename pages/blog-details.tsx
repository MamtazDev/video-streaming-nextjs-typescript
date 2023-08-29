import React from 'react';
import BlogSidebar from '@/components/Blog/BlogSidebar';
import SinglePost from '@/components/Blog/SinglePost';
import ThinFooter from '@/components/Footer/ThinFooter';
import { Container, Row } from 'react-bootstrap';
import Main from '@/layouts/Main';



const BlogDetails = () => {
	return (
		<div id="content-wrapper">
			<Container fluid>
				<section className="blog-page section-padding">
					<Container>
						<Row>
							<SinglePost />
							<BlogSidebar showPopularPosts />
						</Row>
					</Container>
				</section>
			</Container>
			<ThinFooter />
		</div>
	);
};

BlogDetails.PageLayout = Main

export default BlogDetails;
