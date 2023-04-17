// import node module libraries
import { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Image, Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

// import media files
import Logo from 'assets/images/brand/logo/logo.svg';

// import data files
import NavbarDefaultRoutes from 'routes/marketing/NavbarDefault';
import NavDropdownMain from 'layouts/marketing/navbars/NavDropdownMain';

const NavbarLanding = ({ transparent }) => {
	const [expandedMenu, setExpandedMenu] = useState(false);

	return (
		<Fragment>
			<Navbar
				onToggle={(collapsed) => setExpandedMenu(collapsed)}
				expanded={expandedMenu}
				expand="lg"
				className={`navbar navbar-default shadow-none ${
					transparent ? 'navbar-transparent' : ''
				}`}
			>
				<Container className="px-0">
					<Navbar.Brand as={Link} to="/">
						<Image src={Logo} alt="" />
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav">
						<span className="icon-bar top-bar mt-0"></span>
						<span className="icon-bar middle-bar"></span>
						<span className="icon-bar bottom-bar"></span>
					</Navbar.Toggle>
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav>
							{NavbarDefaultRoutes.slice(1, 4).map((item, index) => {
								if (item.children === undefined) {
									return (
										<Nav.Link key={index} as={Link} to={item.link}>
											{item.menuitem}
										</Nav.Link>
									);
								} else {
									return (
										<NavDropdownMain
											item={item}
											key={index}
											onClick={(value) => setExpandedMenu(value)}
										/>
									);
								}
							})}
							<NavDropdown
								title="..."
								id="basic-nav-dropdown"
								bsPrefix="no-dropdown-arrow d-block nav-link fs-3 lh-1 pt-0"
							>
								<NavDropdown.Item
									as={Link}
									to="/dashboard/documentation"
									className="py-2 px-3"
								>
									<div className="d-flex align-items-center">
										<i className="fe fe-file-text fs-3 text-primary"></i>
										<div className="ms-3 lh-3">
											<h5 className="mb-0">Documentations</h5>
											<p className="mb-0 fs-6">Browse the all documentation</p>
										</div>
									</div>
								</NavDropdown.Item>
								<NavDropdown.Item
									as={Link}
									to="/dashboard/changelog"
									className="py-2 px-3"
								>
									<div className="d-flex align-items-center">
										<i className="fe fe-layers fs-3 text-primary"></i>
										<div className="ms-3 lh-3">
											<h5 className="mb-0">
												Changelog{' '}
												<span className="text-primary ms-1">v1.5.1</span>
											</h5>
											<p className="mb-0 fs-6">See what's new</p>
										</div>
									</div>
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Nav className="navbar-nav navbar-right-wrap ms-auto d-flex nav-top-wrap">
							<div className={`mt-3 mt-lg-0`}>
								<Nav.Link
									href="https://themes.getbootstrap.com/store/codescandy/"
									target="_blank"
									bsPrefix="btn"
									className="btn btn-outline-primary"
								>
									Buy Now
								</Nav.Link>
							</div>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</Fragment>
	);
};

// Specifies the default values for props
NavbarLanding.defaultProps = {
	transparent: false
};

// Typechecking With PropTypes
NavbarLanding.propTypes = {
	transparent: PropTypes.bool
};

export default NavbarLanding;
