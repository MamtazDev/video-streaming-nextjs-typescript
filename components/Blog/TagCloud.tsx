import React from "react";

interface TagProps {
	name: string;
	isLastChild?: boolean;
	href?: string;
}

const Tag: React.FC<TagProps> = ({ name, isLastChild = false, href = "#" }) => {
	const tagClass = isLastChild ? "tag-cloud-link" : "tag-cloud-link mr-1";
	return (
		<a className={tagClass} href={href}>
			{name}
		</a>
	);
};

interface TagCloudProps {
	children: React.ReactNode;
	heading?: string;
}

const TagCloud: React.FC<TagCloudProps> = ({ children, heading = "" }) => {
	return (
		<>
			{heading ? <h6>{heading}</h6> : ""}
			<div className="tagcloud">{children}</div>
		</>
	);
};

export { Tag, TagCloud };
