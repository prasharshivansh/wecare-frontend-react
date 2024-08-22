import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const CoachSuccessPage = ({ coachSuccessMesssage }) => {
  return (
    <Container className="bg-gray-100">
      <Row className="justify-content-center mt-5">
        <Col xs={12} md={6}>
          <Image
          style={{marginLeft:"5rem"}}
            src="data:image/png;base64,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"
            alt="Coach"
            fluid
          />
          <h1 className="text-black text-center mt-3">You are a Coach now!</h1>
          <p className="text-black text-center">{coachSuccessMesssage}</p>
          <div className="text-center mt-3">
            <Button variant="primary" size="lg">
              Login Now
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CoachSuccessPage;
