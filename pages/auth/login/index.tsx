import React from "react";
import Auth from "@/layouts/Auth";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

function Login() {
	return (
		<>
			<Col md={5} className=" p-5 bg-white full-height">
				<div className="login-main-left">
					<div className="text-center mb-5 login-main-left-header pt-4">
						<img
							src="/img/favicon.png"
							className="img-fluid"
							alt="LOGO"
						/>
						<h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
						<p>
							It is a long established fact that a reader <br />{" "}
							will be distracted by the readable.
						</p>
					</div>
					<Form>
						<Form.Group>
							<Form.Label>Mobile Number</Form.Label>
							<Form.Control
								type="text"
								placeholder="Enter mobile number"
							/>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Password"
							/>
						</Form.Group>

						<div className="mt-4">
							<Row>
								<Col>
									<Button
										variant="outline-primary"
										size="lg"
										className="d-block"
									>
										Sign In
									</Button>
								</Col>
							</Row>
						</div>
					</Form>

					<div className="text-center mt-5">
						<p className="light-gray">
							Don’t have an account?{" "}
							<Link href="/auth/register">Sign Up</Link>
						</p>
					</div>
				</div>
			</Col>
		</>
	);
}

Login.PageLayout = Auth

export default Login;
