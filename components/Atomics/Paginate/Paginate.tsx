import React from "react";
// import "./Paginate.css";

const Paginate: React.FC = () => {
	return (
		<>
			<nav aria-label="Page navigation example">
				<ul className="pagination justify-content-center pagination-sm mb-4">
					<li className="page-item disabled">
						<a className="page-link" href="#" tabIndex={-1}>
							Previous
						</a>
					</li>
					<li className="page-item active">
						<a className="page-link" href="#">
							1
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							2
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							3
						</a>
					</li>
					<li className="page-item">
						<a className="page-link" href="#">
							Next
						</a>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Paginate;
