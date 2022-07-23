import React from 'react';
import {MainHeading} from '../../styles/styles';
const Header = ({title, color, width}) => {
	return (
		<MainHeading width={width} color={color}>
			{title}
		</MainHeading>
	);
};

export default Header;
