// import node module libraries
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { Col, Row, Image, ProgressBar, Form } from 'react-bootstrap';

// import custom components
import Ratings from 'components/marketing/common/ratings/Ratings';

// import data files
import { Reviews } from 'data/marketing/CourseIndexData';

const ReviewsTab = () => {
	return (
		<Fragment>
			<div className="mb-3">
				<h3 className="mb-4">How students rated this courses</h3>
				<Row className="align-items-center">
					<Col xs="auto" className="text-center">
						<h3 className="display-2 fw-bold">4.5</h3>
						<span className="text-warning">
							<Ratings rating={4.5} />
						</span>
						<p className="mb-0 fs-6">(Based on 27 reviews)</p>
					</Col>
					{/* Progress bar */}
					<Col className="pt-3 order-3 order-md-2">
						<ProgressBar
							variant="warning"
							now={50}
							className="mb-3"
							style={{ height: '6px' }}
						/>
						<ProgressBar
							variant="warning"
							now={36}
							className="mb-3"
							style={{ height: '6px' }}
						/>
						<ProgressBar
							variant="warning"
							now={9}
							className="mb-3"
							style={{ height: '6px' }}
						/>
						<ProgressBar
							variant="warning"
							now={3}
							className="mb-3"
							style={{ height: '6px' }}
						/>
						<ProgressBar
							variant="warning"
							now={2}
							className="mb-3"
							style={{ height: '6px' }}
						/>
					</Col>
					<Col xs={6} md="auto" className="order-2 order-md-3">
						{/* Rating */}
						<div>
							<span className="text-warning">
								<Ratings rating={5} />
							</span>
							<span className="ms-4">50%</span>
						</div>
						<div>
							<span className="text-warning">
								<Ratings rating={4} />
							</span>
							<span className="ms-4">36%</span>
						</div>
						<div>
							<span className="text-warning">
								<Ratings rating={3} />
							</span>
							<span className="ms-4">9%</span>
						</div>
						<div>
							<span className="text-warning">
								<Ratings rating={2} />
							</span>
							<span className="ms-4">3%</span>
						</div>
						<div>
							<span className="text-warning">
								<Ratings rating={1} />
							</span>
							<span className="ms-4">2%</span>
						</div>
					</Col>
				</Row>
			</div>
			{/* hr */}
			<hr className="my-5" />
			<div className="mb-3">
				<div className="d-lg-flex align-items-center justify-content-between mb-5">
					{/* Reviews */}
					<div className="mb-3 mb-lg-0">
						<h3 className="mb-0">Reviews</h3>
					</div>
					<div>
						{/* Form */}
						<Form className="form-inline">
							<Form.Group
								className="d-flex align-items-center me-2"
								controlId="formBasicEmail"
							>
								<span className="position-absolute ps-3">
									<i className="fe fe-search"></i>
								</span>
								<Form.Control
									type="search"
									placeholder="Search Review"
									className=" ps-6"
								/>
							</Form.Group>
						</Form>
					</div>
				</div>
				{/* Rating */}
				{Reviews.map((item, index) => (
					<div className="d-flex border-bottom pb-4 mb-4" key={index}>
						<Image
							src={item.image}
							alt=""
							className="rounded-circle avatar-lg"
						/>
						<div className=" ms-3">
							<h4 className="mb-1">
								{item.student}
								<span className="ms-1 fs-6 text-muted">{item.postedon}</span>
							</h4>
							<div className="fs-6 mb-2 text-warning">
								<Ratings rating={item.rating} />
							</div>
							<div
								dangerouslySetInnerHTML={{
									__html: item.review
								}}
							/>
							<div className="d-lg-flex">
								<p className="mb-0">Was this review helpful?</p>
								<Link to="#" className="btn btn-xs btn-primary ms-lg-3">
									Yes
								</Link>
								<Link to="#" className="btn btn-xs btn-outline-white ms-1">
									No
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</Fragment>
	);
};
export default ReviewsTab;
