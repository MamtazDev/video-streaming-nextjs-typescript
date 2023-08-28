import React from 'react';
import CommentsWrapper from './CommentsWrapper';
import CommentMedia from './CommentMedia';
import CommentForm from './CommentForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faCalendar,
	faFolder,
	faTag,
	faComment,
} from '@fortawesome/free-solid-svg-icons';

interface PostProps {
	postTitle?: string;
	postHref?: string;
	publishedOn?: string;
	postBody?: string;
	imgSrc?: string;
	category?: string;
	commentCount?: number | string;
	children?: React.ReactNode;
}

const Post: React.FC<PostProps> = ({
	postTitle,
	postHref,
	publishedOn,
	postBody,
	imgSrc,
	category,
	commentCount,
	children,
}) => {
	const tags = (
		<>
			<a rel="tag" href="#">
				envato
			</a>
			,{' '}
			<a rel="tag" href="#">
				sale
			</a>
			,{' '}
			<a rel="tag" href="#">
				shop
			</a>
		</>
	);
	return (
		<div className="card blog mb-4">
			<div className="blog-header">
				<a href="#">
					<img className="card-img-top" src={imgSrc} alt="" />
				</a>
			</div>
			<div className="card-body">
				<h5 className="card-title">
					<a href={postHref}>{postTitle}</a>
				</h5>
				<div className="entry-meta">
					<ul className="tag-info list-inline">
						<li className="list-inline-item">
							<a href="#">
								<span>
									{/* <FontAwesomeIcon icon={faCalendar} /> */}
								</span>{' '}
								{publishedOn}
							</a>
						</li>
						<li className="list-inline-item">
							<span>
								{/* <FontAwesomeIcon icon={faFolder} /> */}
							</span>{' '}
							<a rel="category tag" href="#">
								{category}
							</a>
						</li>
						<li className="list-inline-item">
							<span>
								{/* <FontAwesomeIcon icon={faTag} /> */}
							</span>{' '}
							{tags}
						</li>
						<li className="list-inline-item">
							<span>
								{/* <FontAwesomeIcon icon={faComment} /> */}
							</span>{' '}
							<a href="#">{commentCount} Comments</a>
						</li>
					</ul>
				</div>

				<>{children}</>

				<footer className="entry-footer">
					<div className="blog-post-tags">
						<ul className="list-inline">
							<li className="list-inline-item">
								{/* <FontAwesomeIcon icon={faTag} />  */}
								Tags:{' '}
							</li>
							<li className="list-inline-item">
								<a rel="tag" href="#">
									envato
								</a>{' '}
							</li>
							<li className="list-inline-item">
								<a rel="tag" href="#">
									sale
								</a>{' '}
							</li>
							<li className="list-inline-item">
								<a rel="tag" href="#">
									shop
								</a>{' '}
							</li>
						</ul>
					</div>
				</footer>
			</div>
		</div>
	);
};

export default Post;
