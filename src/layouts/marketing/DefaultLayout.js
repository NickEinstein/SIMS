// import node module libraries
import React, { Fragment, useEffect } from 'react';

// import layouts
import NavbarDefault from 'layouts/marketing/navbars/NavbarDefault';
import Footer from 'layouts/marketing/footers/Footer';

const DefaultLayout = (props) => {
	useEffect(() => {
		document.body.style.backgroundColor = '#f5f4f8';
	});
	return (
		<Fragment>
			<NavbarDefault login />
			{props.children}
			<Footer />
		</Fragment>
	);
};

export default DefaultLayout;
