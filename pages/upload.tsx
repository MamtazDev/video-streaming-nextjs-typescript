import React from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileUpload } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import ContentWrapper from "@/components/Atomics/ContentWrapper/ContentWrapper";
import ThinFooter from "@/components/Footer/ThinFooter";
import { Col, Container, Row } from "react-bootstrap";
import Main from "@/layouts/Main";

const Upload = () => {
  return (
    <>
      <ContentWrapper>
        <Container fluid className=" pt-5 pb-5">
          <Row>
            <Col md={8} className="mx-auto text-center upload-video pt-5 pb-5">
              <h1 className="text-primary">
                {/* <FontAwesomeIcon icon={faFileUpload} /> */}
              </h1>
              <h4 className="mt-5">Select Video files to upload</h4>
              <p className="land">or drag and drop video files</p>
              <div className="mt-4">
                <Link className="btn btn-outline-primary" href="/upload-video">
                  Upload Video
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
        <ThinFooter />
      </ContentWrapper>
    </>
  );
};

Upload.PageLayout = Main
export default Upload;
