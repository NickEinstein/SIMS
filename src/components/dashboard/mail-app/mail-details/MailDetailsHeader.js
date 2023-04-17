// import node module libraries
import { Link } from 'react-router-dom';
import { ButtonGroup, Button } from 'react-bootstrap';

// import custom components
import GKTooltip from 'components/elements/tooltips/GKTooltip';

const MailDetailHeader = () => {
	return (
		<div className="d-md-flex justify-content-between align-items-center">
			<div className="d-flex mb-3 mb-md-0">
				<div>
					<GKTooltip tooltipText="Back to inbox">
						<Button
							variant="outline-white"
							size="sm"
							as={Link}
							to="/dashboard/mail"
						>
							<i className="fe fe-arrow-left fs-5"></i>
						</Button>
					</GKTooltip>
				</div>
				{/* <!-- button group --> */}
				<div className="ms-2">
					<ButtonGroup aria-label="Action Button Group" size="sm">
						<GKTooltip tooltipText="Archive">
							<Button variant="outline-white">
								<i className="fe fe-archive fs-5"></i>
							</Button>
						</GKTooltip>
						<GKTooltip tooltipText="Spam">
							<Button variant="outline-white">
								<i className="fe fe-alert-triangle fs-5"></i>
							</Button>
						</GKTooltip>
						<GKTooltip tooltipText="Delete">
							<Button variant="outline-white">
								<i className="fe fe-trash-2 fs-5"></i>
							</Button>
						</GKTooltip>
					</ButtonGroup>
				</div>
				<div className="ms-2">
					<GKTooltip tooltipText="Mark as unread">
						<Button variant="outline-white" size="sm">
							<i className="fe fe-mail fs-5"></i>
						</Button>
					</GKTooltip>
				</div>
			</div>
			{/* <!-- button --> */}
			<div className="d-flex align-items-center">
				<div>
					<span>4 of 437</span>
				</div>
				<div className="ms-3">
					<GKTooltip tooltipText="Newer">
						<Button variant="outline-white" size="sm">
							<i className="fe fe-chevron-left fs-5"></i>
						</Button>
					</GKTooltip>{' '}
					<GKTooltip tooltipText="Older">
						<Button variant="outline-white" size="sm">
							<i className="fe fe-chevron-right fs-5"></i>
						</Button>
					</GKTooltip>
				</div>
			</div>
		</div>
	);
};
export default MailDetailHeader;
