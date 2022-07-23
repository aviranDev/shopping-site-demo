import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {colors} from '../../styles/styles';

export const FooterContainer = styled.div`
	margin-top: auto;
	background: ${colors.wrapper};
`;

export const FooterWrapper = styled.div`
	max-width: 1280px;
	margin-left: auto;
	margin-right: auto;
`;

export const FooterGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	justify-content: center;
	align-items: center;
`;

export const FooterColumn = styled.div`
	@media screen and (max-width: 999px) {
		align-items: center;
		grid-column: 1/-1;
	}
`;

export const FooterLinkItems = styled.div`
	display: flex;
	flex-direction: column;
	margin: 16px;
	text-align: left;
	box-sizing: border-box;
	color: #f6d1f4;
	@media screen and (max-width: 1000px) {
		align-items: center;
	}
`;

export const FooterLink = styled(Link)`
	color: ${colors.main};
	font-size: 30px;
	text-decoration: none;
	margin-bottom: 0.5rem;
	&:hover {
		color: ${colors.modal};
		transition: 0.3s ease-out;
	}
`;

export const FooterRights = styled.div`
	color: ${colors.main};
	margin-bottom: 16px;
	width: 100%;
	font-size: 2rem;
	text-align: center;
	border-top: 1px solid ${colors.modal};
	padding: 1rem 0;
	margin: 1rem 0 0;
`;
