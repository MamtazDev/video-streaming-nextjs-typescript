import "./Slide.css"
import React from "react";
import { VerifiedTooltip } from "../CustomCheckTooltips/CustomCheckTooltips";

interface SlideProps {
	href?: string;
	imgSrc?: string;
	imgAlt?: string;
	label?: string;
	views?: string;
	verified?: boolean | null;
}

const Slide: React.FC<SlideProps> = ({
	href,
	imgSrc,
	imgAlt = "",
	label,
	views,
	verified = null,
}) => {
	const verifyLabel = verified ? <VerifiedTooltip /> : null;

	return (
		<div className="item">
			<div className="category-item">
				<a href={href || "#"}>
					<img
						className="img-fluid custom-slick-img"
						src={imgSrc}
						alt={imgAlt}
					/>
					<h6>
						{label} {verifyLabel}
					</h6>
					<p>{views} views</p>
				</a>
			</div>
		</div>
	);
};

export default Slide;
