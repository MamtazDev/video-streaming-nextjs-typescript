import Carousel from "@/components/Auth/Carousel";
import React from "react";
import { Container, Row } from "react-bootstrap";

const Auth = ({children}:any) => {
  return (
    <>
      <section className="login-main-wrapper">
        <Container fluid className="pl-0 pr-0">
          <Row noGutters>
            {children}
            <Carousel />
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Auth;
