// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Card, Form, Button, Image } from 'react-bootstrap';

// import media files
import Logo from "assets/images/brand/logo/logo-icon.svg";
import Logo1 from "assets/images/navHeader/LOGO BLK.png";
import bgimage from "assets/images/signup/pexels-max-fischer-5212667.jpg";

const SignUp = () => {
	return (
    <Fragment>
      <div
        className="w-full g-0 relative"
        style={{ display: "flex", minHeight: "100vh" }}
      >
        <Link to="/">
          <Image
            src={Logo1}
            style={{ width: "6%", position: "absolute", top: "10px", left:'60px' }}
            className="mb-4 absolute "
            alt=""
          />
        </Link>
        <Col>
          <Image
            src={bgimage}
            style={{ width: "100%" }}
            className="max-vh-100"
            alt=""
          />
        </Col>

        <Col md={6} className=" py-xl-0">
          <Card className="">
            <Card.Body className="p-6 px-10">
              <div className="">
                <h1 className="mb-1 fw-bold text-center">Welcome To SIMS</h1>
                {/* <span>
                  Already have an account?{" "}
                  <Link to="/authentication/sign-in" className="ms-1">
                    Sign in
                  </Link>
                </span> */}
                <h3 className="mb-1 fw-bold text-left mt-3">
                  Create A School
                  {/* (
                  <span className="py-8" style={{fontSize:'14px'}}>
                    Enter details to create your account
                  </span>
                  ) */}
                </h3>
              </div>
              {/* Form */}
              <Form>
                <Row>
                  <Col lg={12} md={12} className="mb-3">
                    {/* User Name */}
                    <Form.Label>Name Of Owner</Form.Label>
                    <Form.Control
                      type="text"
                      id="username"
                      placeholder="Name Of Owner"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* email */}
                    <Form.Label>Year Founded </Form.Label>
                    <Form.Control
                      type="text"
                      id="email"
                      placeholder="Year Founded "
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* email */}
                    <Form.Label>Phone No. </Form.Label>
                    <Form.Control
                      type="text"
                      id="phone"
                      placeholder="Phone No."
                      required
                    />
                  </Col>

                  <Col lg={12} md={12} className="mb-3">
                    {/* email */}
                    <Form.Label>Email </Form.Label>
                    <Form.Control
                      type="email"
                      id="email"
                      placeholder="Email address here"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Password */}
                    <Form.Label>Password </Form.Label>
                    <Form.Control
                      type="password"
                      id="password"
                      placeholder="**************"
                      required
                    />
                  </Col>
                  <Col lg={12} md={12} className="mb-3">
                    {/* Checkbox */}
                    <Form.Check type="checkbox" id="check-api-checkbox">
                      <Form.Check.Input type="checkbox" />
                      <Form.Check.Label>
                        I agree to the
                        <Link to="/pages/terms-and-conditions">
                          Terms of Service{" "}
                        </Link>{" "}
                        and{" "}
                        <Link to="/pages/terms-and-conditions">
                          Privacy Policy.
                        </Link>
                      </Form.Check.Label>
                    </Form.Check>
                  </Col>
                  <Col lg={12} md={12} className="mb-0 d-grid gap-2">
                    {/* Button */}
                    <Button variant="primary" type="submit">
                      Sign Up
                    </Button>
                  </Col>
                </Row>
              </Form>
              <hr className="my-4" />
              <div className="mt-4 text-center">
                {/* Facebook */}
                <Link
                  to="#"
                  className="btn-social btn-social-outline btn-facebook"
                >
                  <i className="fab fa-facebook"></i>
                </Link>{" "}
                {/* Twitter */}
                <Link
                  to="#"
                  className="btn-social btn-social-outline btn-twitter"
                >
                  <i className="fab fa-twitter"></i>
                </Link>{" "}
                {/* LinkedIn */}
                <Link
                  to="#"
                  className="btn-social btn-social-outline btn-linkedin"
                >
                  <i className="fab fa-linkedin"></i>
                </Link>{" "}
                {/* GitHub */}
                <Link
                  to="#"
                  className="btn-social btn-social-outline btn-github"
                >
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </div>
    </Fragment>
  );
};

export default SignUp;
