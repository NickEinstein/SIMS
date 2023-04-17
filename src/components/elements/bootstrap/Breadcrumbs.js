// import node module libraries
import { Fragment } from 'react';
import { Col, Row, Card, Breadcrumb, Nav, Tab } from 'react-bootstrap';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import react code data file
import { BasicBreadcrumb } from 'data/code/BreadcrumbCode';

const Breadcrumbs = () => {
	return (
		<Fragment>
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Breadcrumb</h1>
							<p className="mb-0 ">
								Indicate the current page’s location within a navigational
								hierarchy that automatically adds separators via CSS.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="button" className="mb-4">
						<h3>Basic example</h3>
						<p>
							Add <code>active</code> prop to active{' '}
							<code>Breadcrumb.Item</code> . Do not set both <code>active</code>{' '}
							and <code>href</code> attributes. <code>active</code> overrides{' '}
							<code>href</code> and <code>span</code> element is rendered
							instead of <code>a</code>.
						</p>
					</div>
					<Tab.Container defaultActiveKey="all">
						<Card>
							<Card.Header className="border-bottom-0 p-0 bg-white">
								<Nav className="nav-lb-tab">
									<Nav.Item>
										<Nav.Link eventKey="all" className="mb-sm-3 mb-md-0">
											Design
										</Nav.Link>
									</Nav.Item>
									<Nav.Item>
										<Nav.Link eventKey="approved" className="mb-sm-3 mb-md-0">
											React
										</Nav.Link>
									</Nav.Item>
								</Nav>
							</Card.Header>
							<Card.Body className="p-0">
								<Tab.Content>
									<Tab.Pane eventKey="all" className="pb-4 p-4">
										<Breadcrumb>
											<Breadcrumb.Item active>Home</Breadcrumb.Item>
										</Breadcrumb>
										<Breadcrumb>
											<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
											<Breadcrumb.Item active>Library</Breadcrumb.Item>
										</Breadcrumb>
										<Breadcrumb>
											<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
											<Breadcrumb.Item href="#">Library</Breadcrumb.Item>
											<Breadcrumb.Item active>Data</Breadcrumb.Item>
										</Breadcrumb>
									</Tab.Pane>

									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={BasicBreadcrumb} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
		</Fragment>
	);
};
export default Breadcrumbs;
