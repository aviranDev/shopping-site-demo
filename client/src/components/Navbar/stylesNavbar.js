import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Container} from '../../styles/styles';
import {colors} from '../../styles/styles';

export const NavbarContainer = styled.nav`
	width: 100%;
	height: 60px;
	display: flex;
	background: ${({background}) => (background ? background : null)};
	flex-direction: column;
	z-index: 1;
	@media (max-width: 700px) {
		height: 80px;
	}
`;

export const DropdownHeader = styled.button`
	color: ${colors.black};
	font-size: 30px;
	font-family: Arial, Helvetica, sans-serif;
	margin: 14px;
	@media (max-width: 700px) {
		display: none;
	}
`;

export const Span = styled.span`
	color: ${colors.black};
	font-size: 30px;
	font-family: Arial, Helvetica, sans-serif;
	margin: 14px;
	@media (max-width: 700px) {
		display: none;
	}
`;

export const LeftContainer = styled.div`
	flex: 70%;
	display: flex;
	padding-left: 5%;
`;

export const RightContainer = styled.div`
	flex: 25%;
	display: flex;
	justify-content: flex-end;
	padding-right: 5%;
`;

export const NavbarInnerContainer = styled.div`
	width: 100%;
	height: 80px;
	display: flex;
	justify-content: flex-end;
`;

export const NavbarLinkContainer = styled(Container)`
	display: flex;
`;

export const NavbarLink = styled(Link)`
	color: ${colors.black};
	font-size: 45px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 14px;
	&:hover {
		color: ${colors.modal};
		transition: 0.5s ease-out;
	}
	@media (max-width: 700px) {
		display: none;
	}
`;

/**
 * Extend
 */

export const OpenLinksButton = styled.button`
	z-index: 50;
	width: 75px;
	position: absolute;
	top: 0;
	right: 0;
	height: 50px;
	background: none;
	border: none;
	color: ${colors.modal};
	font-size: 50px;
	cursor: pointer;

	@media screen and (min-width: 700px) {
		display: none;
	}
`;

export const NavbarExtendedContainer = styled.div`
	display: none;
	flex-direction: column;
	align-items: center;

	@media (max-width: 960px) {
		display: flex;
		z-index: 1;
		flex-direction: column;
		width: 100%;
		height: 100vh;
		position: absolute;
		padding-top: 30%;
		top: 0;
		left: 0;
		opacity: 0.9;
		transition: opacity 0.5s ease;
		background-color: #000;
	}
`;

export const NavbarLinkExtended = styled(Link)`
	color: #fff;
	font-size: 30px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 14px;

	&:hover {
		color: #000;
		transition: 0.5s ease-out;
	}
`;

export const DropdownContent = styled('ul')``;

export const DropLink = styled(Link)`
	color: ${colors.text};
	font-size: 20px;
	font-family: Arial, Helvetica, sans-serif;
	text-decoration: none;
	margin: 14px;
	&:hover ${DropdownContent} {
		display: block;
	}

	&:hover {
		color: ${colors.green};
		transition: 0.5s ease-out;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const Dropdown = styled.div`
	font-size: 30px;
	margin: 14px;
	position: relative;
	display: inline-block;

	&:click ${DropdownContent} {
		display: block;
	}

	@media (max-width: 700px) {
		display: none;
	}
`;

export const DropDownWrapper = styled.div`
	position: relative;
`;

export const DropDownButton = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	background-color: white;

	border-width: 1px;
	border-radius: 0.375rem;
	--tw-border-opacity: 1;
	border-color: rgba(209, 213, 219, var(--tw-border-opacity));

	padding: 0.5rem;

	/* Font */
	font-size: 1rem;
	/* line-height: 1.4rem; */
	--tw-text-opacity: 1;
	color: rgba(55, 65, 81, var(--tw-text-opacity));

	/* Shadow */
	--tw-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
		0 2px 4px -1px rgba(0, 0, 0, 0.06);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

	&:focus {
		outline: none;
	}

	&:hover {
		--tw-bg-opacity: 1;
		background-color: rgba(249, 250, 251, var(--tw-bg-opacity));
	}
`;

export const SVG = styled.svg`
	margin-left: 4px;
	height: 1rem;
	width: 1.2rem;
`;

export const OptionMenu = styled.div`
	transform-origin: top bottom;
	position: absolute;
	right: 3px;
	top: 52px;
	background-color: white;
	margin-top: -0.5rem;
	margin-right: -0.25rem;
	width: 99.8%;
	max-height: 16rem;
	overflow: scroll;
	z-index: 40;

	/* Shadow */
	--tw-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
		0 4px 6px -2px rgba(0, 0, 0, 0.05);
	box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000),
		var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);

	border-width: 0.5px;
	border-style: solid;
	border-radius: 0.375rem;
	--tw-border-opacity: 1;
	border-color: rgba(209, 213, 219, var(--tw-border-opacity));

	&:hover {
		outline: none;
	}
`;

export const OptionRow = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-top: 0.25rem;
	padding-bottom: 0.25rem;

	background-color: green;

	border-top-width: 0px;
	border-left-width: 0px;
	border-right-width: 0px;
	border-bottom-width: 1px;
	border-style: solid;
	--tw-border-opacity: 1;
	border-color: rgba(209, 213, 219, var(--tw-border-opacity));

	&:hover {
		background-color: #73aed4;
	}
`;

export const Label = styled.label`
	display: block;
	padding-left: 1rem;
	padding-right: 1rem;
	padding-top: 0.5rem;
	padding-bottom: 0.5rem;

	/* background-color: pink; */
	/* Font */
	font-size: 0.875rem;
	line-height: 1.25rem;

	--tw-text-opacity: 1;
	color: rgba(55, 65, 81, var(--tw-text-opacity));
`;

export const SvgTest = styled.button`
	width: 30px;
	height: 40px;
	border: none;
	background-color: transparent;

	/* background-color: blue; */
`;
