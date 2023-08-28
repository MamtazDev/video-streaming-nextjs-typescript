import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

 const VideoUploadForm: React.FC = () => {
	return (
		<>
			<Row>
				<Col lg={12}>
					<div className="osahan-form">
						<Row>
							<Col lg={12}>
								<Form.Group controlId="video-title">
									<Form.Label>Video Title</Form.Label>
									<Form.Control
										type="text"
										placeholder="Contrary to popular belief, Lorem Ipsum (2020) is not."
									/>
								</Form.Group>
							</Col>
							<Col lg={12}>
								<Form.Group controlId="video-description">
									<Form.Label>About</Form.Label>
									<Form.Control
										as="textarea"
										rows={3}
										placeholder="Description"
									/>
								</Form.Group>
							</Col>
						</Row>

						{/* Rest of the form elements... */}

						<Row>
							<Col lg={12}>
								<div className="main-title">
									<h6>
										Category (you can select up to 6
										categories)
									</h6>
								</div>
							</Col>
						</Row>

						{/* Rest of the form elements... */}

						<Row>
							<Col lg={12}>
								<div className="osahan-area text-center mt-3">
									<Button variant="outline-primary">
										Save Changes
									</Button>
								</div>
							</Col>
						</Row>
					</div>
					<Terms />
				</Col>
			</Row>
		</>
	);
};

const Terms: React.FC = () => {
	return (
		<>
			<hr />
			<div className="terms text-center">
				<p className="mb-0">
					There are many variations of passages of Lorem Ipsum
					available, but the majority <a href="#">Terms of Service</a>{" "}
					and <a href="#">Community Guidelines</a>.
				</p>
				<p className="hidden-xs mb-0">
					Ipsum is therefore always free from repetition, injected
					humour, or non
				</p>
			</div>
		</>
	);
};

export default VideoUploadForm
