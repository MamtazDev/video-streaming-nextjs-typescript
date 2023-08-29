import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function InfoCard({ label, icon, bg }) {
	const splitLabel = label.split(" ");
	const firstItem = splitLabel[0];

	let secondItem;
	if (splitLabel.length > 2) {
		secondItem = splitLabel.slice(1).join(" ");
	} else {
		secondItem = splitLabel[1];
	}

	const classes = `card text-white bg-${bg} o-hidden h-100 border-none`;

	return (
		<>
			<div className="col-xl-3 col-sm-6 mb-3">
				<div className={classes}>
					<div className="card-body">
						<div className="card-body-icon">
							<FontAwesomeIcon icon={icon} fixedWidth />
						</div>
						<div className="mr-5">
							<b>{firstItem}</b> {secondItem}
						</div>
					</div>
					<Link
						className="card-footer text-white  small z-1 d-flex justify-content-between w-100"
						href="#details"
					>
						<span className="d-block">View Details</span>
					
							<FontAwesomeIcon icon={faAngleRight} />
					
					</Link>
				</div>
			</div>
		</>
	);
}
