// import node module libraries
import React from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const GKTooltip = ({ children, tooltipText }) => {
	return (
		<OverlayTrigger
			key="top"
			placement="top"
			overlay={<Tooltip id="tooltip-top">{tooltipText}</Tooltip>}
		>
			{children}
		</OverlayTrigger>
	);
};
export default GKTooltip;
