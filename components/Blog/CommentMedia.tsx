// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

// export default function CommentMedia({
// 	commentAuthor,
// 	commentDate,
// 	commentBody,
// 	children,
// }) {
// 	return (
// 		<>
// 			<div className="media mb-4">
// 				<img alt="" src="img/s2.png" className="d-flex mr-3 rounded" />
// 				<div className="media-body">
// 					<h5 className="mt-0">
// 						{commentAuthor} <small>{commentDate}</small>
// 						<span className="star-rating float-right text-warning">
// 							<FontAwesomeIcon icon={faStar} />
// 							<FontAwesomeIcon icon={faStar} />
// 							<FontAwesomeIcon icon={faStar} />
// 							<FontAwesomeIcon icon={faStarHalf} />
// 							<FontAwesomeIcon icon={faStarHalf} />
// 							<small className="text-success">5/2</small>
// 						</span>
// 					</h5>
// 					<p>{commentBody}</p>
// 					{children}
// 				</div>
// 			</div>
// 		</>
// 	);
// }


import React, { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStarHalf, faStar } from "@fortawesome/free-solid-svg-icons";

interface CommentMediaProps {
  commentAuthor: string;
  commentDate: string;
  commentBody: string;
  children?: ReactNode;
}

const CommentMedia: React.FC<CommentMediaProps> = ({
  commentAuthor,
  commentDate,
  commentBody,
  children,
}) => {
  return (
    <>
      <div className="media mb-4">
        <img alt="" src="img/s2.png" className="d-flex mr-3 rounded" />
        <div className="media-body">
          <h5 className="mt-0">
            {commentAuthor} <small>{commentDate}</small>
            <span className="star-rating float-right text-warning">
              {/* <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalf} />
              <FontAwesomeIcon icon={faStarHalf} /> */}
              <small className="text-success">5/2</small>
            </span>
          </h5>
          <p>{commentBody}</p>
          {children}
        </div>
      </div>
    </>
  );
};

export default CommentMedia;



