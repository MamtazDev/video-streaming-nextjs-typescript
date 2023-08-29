// import Row from "react-bootstrap/Row";
// import InputGroup from "react-bootstrap/InputGroup";
// import Col from "react-bootstrap/Col";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
// import Button from "react-bootstrap/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Col,
  Form,
  FormControl,
  InputGroup,
  Row,
} from "react-bootstrap";

function TopMobileSearch() {
  return (
    <>
      <div className="top-mobile-search">
        <Row>
          <Col md={12}>
            <Form className="mobile-search">
              <InputGroup>
                <FormControl
                  type="text"
                  placeholder="Search for..."
                  className=""
                />
                <div className="input-group-append">
                  <button className="btn btn-dark" type="button">
                    <FontAwesomeIcon icon={faSearch} /> Search
                  </button>
                </div>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default TopMobileSearch;
