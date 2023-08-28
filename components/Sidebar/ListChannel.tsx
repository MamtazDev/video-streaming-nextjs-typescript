// import { Link } from "react-router-dom";

// const ListChannel = ({
// 	href,
// 	imgSrc,
// 	imgAlt,
// 	label,
// 	labelBadge = null,
// 	badgeValue = "",
// }) => {
// 	const labelVariant = `badge badge-${labelBadge}`;

// 	const labelWithBadge = (
// 		<>
// 			{label} <span className={labelVariant}>{badgeValue}</span>
// 		</>
// 	);

// 	return (
// 		<>
// 			<li>
// 				<Link to={href}>
// 					<img
// 						className="img-fluid"
// 						alt={imgAlt ? imgAlt : ""}
// 						src={imgSrc}
// 					/>{" "}
// 					{labelBadge ? labelWithBadge : label}
// 				</Link>
// 			</li>
// 		</>
// 	);
// };

// export default ListChannel;


import Link from "next/link";
import React from "react";
// import { Link } from "react-router-dom";

interface ListChannelProps {
  href: string;
  imgSrc: string;
  imgAlt?: string;
  label: string;
  labelBadge?: string | null;
  badgeValue?: string;
}

const ListChannel: React.FC<ListChannelProps> = ({
  href,
  imgSrc,
  imgAlt,
  label,
  labelBadge = null,
  badgeValue = "",
}) => {
  const labelVariant = `badge badge-${labelBadge}`;

  const labelWithBadge = (
    <>
      {label} <span className={labelVariant}>{badgeValue}</span>
    </>
  );

  return (
    <>
      <li>
        <Link href={href}>
          <img
            className="img-fluid"
            alt={imgAlt ? imgAlt : ""}
            src={imgSrc}
          />{" "}
          {labelBadge ? labelWithBadge : label}
        </Link>
      </li>
    </>
  );
};

export default ListChannel;
