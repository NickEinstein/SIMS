// import node module libraries
import { Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const GKBreadcrumb = ({ breadcrumb }) => {
	return (
		<Breadcrumb>
			{breadcrumb.map((item, index) => {
				return (
					<Breadcrumb.Item
						active={index === breadcrumb.length - 1 ? true : false}
					>
						{index === breadcrumb.length - 1 ? (
							item.page
						) : (
							<Link to={item.link}>{item.page}</Link>
						)}
					</Breadcrumb.Item>
				);
			})}
		</Breadcrumb>
	);
};
export default GKBreadcrumb;
