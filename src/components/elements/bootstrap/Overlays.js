// import node module libraries
import { Fragment, useState, useRef } from 'react';
import {
	Col,
	Row,
	Card,
	Overlay,
	OverlayTrigger,
	Button,
	Tooltip,
	Nav,
	Tab,
	Image
} from 'react-bootstrap';

// import code syntax highlighter
import HighlightCode from 'components/elements/highlight-code/HighlightCode';

// import media files
import Avatar1 from 'assets/images/avatar/avatar-1.jpg';

// import react code data file
import {
	OverlayBasicCode,
	OverlayTriggerCode,
	TriggerBehaviorCode
} from 'data/code/OverlaysCode';

const Overlays = () => {
	const [show, setShow] = useState(false);
	const target = useRef(null);

	return (
		<Fragment>
			<Row>
				<Col lg={12} md={12} sm={12}>
					<div className="border-bottom pb-4 mb-4 d-md-flex align-items-center justify-content-between">
						<div className="mb-3 mb-md-0">
							<h1 className="mb-1 h2 fw-bold">Overlays</h1>
							<p className="mb-0 ">
								Overlay is the fundamental component for positioning and
								controlling tooltip visibility. It's a wrapper around Popper.js,
								that adds support for transitions, and visibility toggling.
							</p>
						</div>
					</div>
				</Col>
			</Row>

			{/*  basic  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="basic-example" className="mb-4">
						<h3>Basic </h3>
						<p>
							Overlays consist of at least two elements, the "overlay", the
							element to be positioned, as well as a "target", the element the
							overlay is positioned in relation to. You can also also have an
							"arrow" element, like the tooltips and popovers, but that is
							optional.
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
										{/* basic offcanvas code started */}
										<Button
											variant="primary"
											ref={target}
											onClick={() => setShow(!show)}
										>
											Click me to see
										</Button>
										<Overlay
											target={target.current}
											show={show}
											placement="right"
										>
											{({
												placement,
												arrowProps,
												show: _show,
												popper,
												...props
											}) => (
												<div
													{...props}
													style={{
														backgroundColor: 'rgba(117, 79, 254, 0.50)',
														padding: '2px 10px',
														color: 'white',
														borderRadius: 3,
														...props.style
													}}
												>
													Simple tooltip
												</div>
											)}
										</Overlay>
										{/* end of basic offcanvas code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={OverlayBasicCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of basic */}

			<hr className="mb-5 mt-7" />

			{/*  overlay-trigger  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="overlay-trigger" className="mb-4">
						<h3>OverlayTrigger </h3>
						<p>
							Since the above pattern is pretty common, but verbose, we've
							included <code>&lt;OverlayTrigger&gt;</code> component to help
							with common use-cases. It even has functionality to delayed show
							or hides, and a few different "trigger" events you can mix and
							match.
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
										{/* basic offcanvas code started */}
										<OverlayTrigger
											placement="right"
											delay={{ show: 250, hide: 400 }}
											overlay={
												<Tooltip id="button-tooltip">Simple tooltip</Tooltip>
											}
										>
											<Button variant="primary">Hover me to see</Button>
										</OverlayTrigger>
										{/* end of basic offcanvas code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={OverlayTriggerCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of overlay-trigger */}

			<hr className="mb-5 mt-7" />

			{/*  trigger behavior  */}
			<Row>
				<Col xl={12} lg={12} md={12} sm={12}>
					<div id="trigger-behavior" className="mb-4">
						<h3>Customizing trigger behavior</h3>
						<p>
							For more advanced behaviors <code>&lt;OverlayTrigger&gt;</code>{' '}
							accepts a function child that passes in the injected{' '}
							<code>ref</code> and event handlers that correspond to the
							configured <code>trigger</code> prop.
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
										{/* trigger behavior code started */}
										<OverlayTrigger
											placement="bottom"
											overlay={
												<Tooltip id="button-tooltip-2">
													Check out this avatar
												</Tooltip>
											}
										>
											{({ ref, ...triggerHandler }) => (
												<Button
													variant="light"
													{...triggerHandler}
													className="d-inline-flex align-items-center"
												>
													<Image
														ref={ref}
														roundedCircle
														src={Avatar1}
														width={30}
													/>
													<span className="ms-1">Hover to see</span>
												</Button>
											)}
										</OverlayTrigger>
										{/* end of trigger behavior code */}
									</Tab.Pane>
									<Tab.Pane eventKey="approved" className="pb-4 p-4 react-code">
										<HighlightCode code={TriggerBehaviorCode} />
									</Tab.Pane>
								</Tab.Content>
							</Card.Body>
						</Card>
					</Tab.Container>
				</Col>
			</Row>
			{/* end of trigger behavior */}
		</Fragment>
	);
};

export default Overlays;
