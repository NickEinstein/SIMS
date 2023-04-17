import { Nav, Button } from 'react-bootstrap';

const GridListViewButton = ({ keyGrid, keyList }) => {
	return (
		<div className="me-2">
			<Nav className="float-end flex-nowrap">
				<Nav.Item className="btn-group">
					<Nav.Link eventKey={keyGrid} className="mb-sm-3 mb-md-0 p-0">
						<Button
							variant="outline-primary"
							className="btn-outline-white btn-tab-left"
						>
							<span className="fe fe-grid"></span>
						</Button>
					</Nav.Link>
				</Nav.Item>
				<Nav.Item className="btn-group">
					<Nav.Link eventKey={keyList} className="mb-sm-3 mb-md-0 p-0">
						<Button
							variant="outline-primary"
							className="btn-outline-white btn-tab-right"
						>
							<span className="fe fe-list"></span>
						</Button>
					</Nav.Link>
				</Nav.Item>
			</Nav>
		</div>
	);
};

export default GridListViewButton;
