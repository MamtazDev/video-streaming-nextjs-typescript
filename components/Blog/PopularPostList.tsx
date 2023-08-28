import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';

interface PostItemProps {
	postTitle: string;
	publishedOn: string;
	postHref?: string;
}

const PostItem: React.FC<PostItemProps> = ({ postTitle, publishedOn, postHref = '#' }) => {
	return (
		<>
			<a href={postHref}>
				<h6>{postTitle}</h6>
			</a>
			<p className="mb-0">
				{/* <FontAwesomeIcon icon={faCalendar} />  */}
				{publishedOn}
			</p>
		</>
	);
};

const PopularPostList: React.FC = () => {
	return (
		<>
			<PostItem
				postTitle="Possimus aut mollitia eum ipsum"
				publishedOn="April 05, 2020"
			/>
			<hr />
			<PostItem
				postTitle="Nulla malesuada mauris non nulla imperdiet ullamcorper"
				publishedOn="June 20, 2020"
			/>
			<hr />
			<PostItem
				postTitle="Focus on creating and growing your projects and websites"
				publishedOn="June 29, 2020"
			/>
			<hr />
			<PostItem
				postTitle="Vestibulum lobortis urna eu mauris viverra porttitor. Cras consequat"
				publishedOn="October 10, 2020"
			/>
			<hr />
			<PostItem
				postTitle="Sed lacinia varius nisi et euismod."
				publishedOn="April 05, 2020"
			/>
		</>
	);
};

export default PopularPostList;
