// import node module libraries
import { Link } from 'react-router-dom';
import { Clock, Video, Users } from 'react-feather';
import {
	Container,
	Image,
	Button,
	Row,
	Col,
	Card,
	Form,
	ListGroup
} from 'react-bootstrap';

// import MDI icons
import Icon from '@mdi/react';
import { mdiFacebook, mdiTwitter, mdiEmail } from '@mdi/js';

// import media files
import DotPattern from 'assets/images/pattern/dots-pattern.svg';

const HeroFormRight = () => {
	return (
		<div className="py-md-20 py-12 bg-dark ">
			<Container>
				<Row>
					<Col xl={6} lg={6} md={12}>
						<div className="mb-4 mb-xl-0 text-center text-md-start">
							{/*  Caption  */}
							<h1 className="display-2 fw-bold mb-3 text-white ls-sm ">
								Become a Vanilla JavaScript Developer{' '}
							</h1>
							<p className="mb-4 lead text-white-50">
								In this tutorial, we are going to learn about JavaScript
								(Vanilla JS) - for building incredible, powerful JavaScript
								applications.
							</p>
							{/*  List  */}
							<div className="mb-6 mb-0">
								<ListGroup bsPrefix="list-unstyled fs-4 ">
									<ListGroup.Item bsPrefix="mb-2 text-white-50">
										<span className="me-2 ">
											<Clock size="18" className="me-1 text-warning" />
										</span>
										<span className="align-top">4 Hours</span>
									</ListGroup.Item>
									<ListGroup.Item bsPrefix="mb-2 text-white-50">
										<span className="me-2 ">
											<Video size="18" className="me-1 text-warning" />
										</span>
										<span className="align-top">12 Videos</span>
									</ListGroup.Item>
									<ListGroup.Item bsPrefix="mb-2 text-white-50">
										<span className="me-2 ">
											<Users size="18" className="me-1 text-warning" />
										</span>
										<span className="align-top">10,234+ Enrolled</span>
									</ListGroup.Item>
								</ListGroup>
							</div>
							<Link to="#" className="popup-youtube btn btn-white btn-lg fs-4">
								Watch Preview
							</Link>
						</div>
					</Col>
					<Col xl={{ span: 5, offset: 1 }} lg={6} md={12}>
						{/*  Card  */}
						<Card style={{ zIndex: 1 }}>
							{/*  Card body  */}
							<Card.Body className="p-6">
								<div className="mb-4">
									<h1 className="mb-4 lh-1 fw-bold h2">Create Free Account</h1>
									<div className="mt-3 mb-5 d-grid d-md-block">
										{/*  btn group  */}
										<div
											className="btn-group mb-2 me-2 mb-md-0"
											role="group"
											aria-label="socialButton"
										>
											<button
												type="button"
												className="btn btn-outline-white shadow-sm"
											>
												<Icon
													path={mdiEmail}
													size={0.7}
													className="text-danger"
												/>{' '}
												Google
											</button>
										</div>
										{/*  btn group  */}
										<div
											className="btn-group mb-2 me-2 mb-md-0"
											role="group"
											aria-label="socialButton"
										>
											<button
												type="button"
												className="btn btn-outline-white shadow-sm"
											>
												<Icon
													path={mdiTwitter}
													size={0.7}
													className="text-info"
												/>{' '}
												Twitter
											</button>
										</div>
										{/*  btn group  */}
										<div
											className="btn-group"
											role="group"
											aria-label="socialButton"
										>
											<button
												type="button"
												className="btn btn-outline-white shadow-sm"
											>
												<Icon
													path={mdiFacebook}
													size={0.7}
													className="text-primary"
												/>{' '}
												Facebook
											</button>
										</div>
									</div>
								</div>
								<div className="mb-4">
									<div className="border-bottom"></div>
									<div className="text-center mt-n2  lh-1">
										<span className="bg-white px-2 fs-6">OR</span>
									</div>
								</div>
								{/*  Form  */}
								<Form>
									{/*  Username  */}
									<Form.Group className="mb-3">
										<Form.Control
											type="email"
											id="email"
											placeholder="Email"
											required=""
										/>
									</Form.Group>
									{/*  Password  */}
									<Form.Group className="mb-3">
										<Form.Control
											type="password"
											id="password"
											placeholder="Password"
											required=""
										/>
									</Form.Group>
									{/*  Button  */}
									<div className="d-grid">
										<Button variant="primary" type="submit">
											Start Courses for Free
										</Button>
									</div>
								</Form>
							</Card.Body>
							{/*  Card Footer  */}
							<Card.Footer className="bg-white px-6 py-4">
								<p className="mb-0">
									By continuing you accept the{' '}
									<Link to="#" className="text-inherit fw-semi-bold">
										Terms of Use
									</Link>
									,
									<Link to="#" className="text-inherit fw-semi-bold">
										{' '}
										Privacy Policy
									</Link>
									, and{' '}
									<Link to="#" className="text-inherit fw-semi-bold">
										Data Policy
									</Link>
								</p>
							</Card.Footer>
						</Card>
						{/*  Pattern  */}
						<div className="position-relative">
							<div className="position-absolute bottom-0 end-0 me-md-n3 mb-md-n6 me-lg-n4 mb-lg-n4 me-xl-n6 mb-xl-n8 d-none d-md-block ">
								<Image src={DotPattern} alt="" />
							</div>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	);
};
export default HeroFormRight;
