// import node module libraries
import React, { Fragment } from 'react';
import { Col, Row, Container } from 'react-bootstrap';

// import custom components
import GKBreadcrumb from 'components/marketing/common/breadcrumb/GKBreadcrumb';

const HeaderBreadcrumb = ({ title, breadcrumb }) => {
	return (
		<Fragment>
			{/* page title  */}
			<div className="py-8 bg-colors-gradient">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<h1 className="fw-bold mb-0 display-4">{title}</h1>
						</Col>
					</Row>
				</Container>
			</div>

			{/* breadcrumb  */}
			<div className="pt-3">
				<Container>
					<Row>
						<Col md={{ offset: 2, span: 8 }} xs={12}>
							<GKBreadcrumb breadcrumb={breadcrumb} />
						</Col>
					</Row>
				</Container>
			</div>
		</Fragment>
	);
};
export default HeaderBreadcrumb;
