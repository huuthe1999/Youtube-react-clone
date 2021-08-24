import React, { forwardRef } from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';

const PageTitle = forwardRef(({ children, title = '', ...rest }, ref) => {
	return (
		<div ref={ref} {...rest}>
			<Helmet>
				<title>{title}</title>
			</Helmet>
			{children}
		</div>
	);
});

PageTitle.propTypes = {
	children: PropTypes.node.isRequired,
	title: PropTypes.string,
};

export default PageTitle;
