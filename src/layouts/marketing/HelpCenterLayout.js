// import node module libraries
import { Fragment, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FooterWithLinks from './footers/FooterWithLinks';
import NavbarHelpCenter from './navbars/NavbarHelpCenter';

const HelpCenterLayout = (props) => {
	const location = useLocation();
	useEffect(() => {
		document.body.style.backgroundColor = 'white';
	});
	return (
		<Fragment>
			{location.pathname === '/marketing/help-center/' ? (
				<NavbarHelpCenter bg="transparent" className="navbar-transparent" />
			) : (
				<NavbarHelpCenter bg="dark" />
			)}
			{props.children}
			<FooterWithLinks />
		</Fragment>
	);
};

export default HelpCenterLayout;
