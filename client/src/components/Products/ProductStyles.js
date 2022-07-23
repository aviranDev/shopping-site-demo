import styled, {keyframes} from 'styled-components';
import {colors} from '../../styles/styles';
import {HashLink} from 'react-router-hash-link';

export const animateOpacity = keyframes`
from {
	transform : scale(0.5);
	opacity   : 0.50;
}
50% {
	transform : scale(0.85);
	opacity   : 0.90;
}
to {
	transform : scale(1);
	opacity   : 1;
}
`;

export const animatePosition = keyframes`
0% , 100%{
	transform: translate(0px);
}
50%{
	transform: rotate(35deg);
}
`;

export const Section = styled.section`
	width: 100%;
	text-align: center;
	margin-right: auto;
	margin-left: auto;
	padding: 2rem 0;
	display: flex;
	flex-direction: column;
`;

export const Products = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	gap: 7rem;
	padding: 0 3rem;

	@media screen and (min-width: 900px) and (max-width: 1400px) {
		grid-template-columns: repeat(3, 1fr);
		padding: 30px;
	}

	@media screen and (min-width: 700px) and (max-width: 900px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 30px;
	}

	@media screen and (min-width: 550px) and (max-width: 850px) {
		grid-template-columns: repeat(2, 1fr);
		padding: 30px;
	}

	@media screen and (min-width: 300px) and (max-width: 600px) {
		grid-template-columns: repeat(1, 1fr);
		padding: 45px;
	}
`;

export const ProductCard = styled.div`
	padding: 1rem;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.1) 50px 30px 15px;
	gap: 0.8rem;
	background-color: ${colors.purple};
	border-radius: 3rem;
	transition: 0.3s ease-in-out;
	&:hover {
		transform: translateX(0.4rem) translateY(-1rem);
		background-color: ${colors.background};
		box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
	}
	img {
		width: 100%;
		border: 5px solid ${colors.black};
		border-radius: 15%;
	}
`;

export const Details = styled.div`
	display: flex;
	align-items: center;
`;

export const Services = styled.div`
	display: flex;
	gap: 0.3rem;
`;

export const Distance = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const AddButton = styled.button`
	color: ${colors.black};
	font-size: 30px;
	outline: none;
	border: 2px solid ${colors.background};
	background-color: ${colors.white};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	border-radius: 4px;
	white-space: nowrap;
	padding: 10px 50px;
	z-index: 2;
	position: relative;
	&:hover:before {
		height: 0%;
	}
	&:hover {
		color: ${colors.white};
		background-color: ${colors.black};
		transition: background-color 0.4s ease-in;
	}
`;

export const LinkView = styled(HashLink)`
	text-decoration: none;
	color: ${({color}) => (color ? color : `${colors.card1}`)};
	&:hover {
		color: ${colors.green};
		opacity: 0.8;
		transition: background-color 0.4s ease-in;
	}
`;

export const ViewImg = styled.img`
	border-radius: 50%;
	animation: ${animateOpacity} 3s;
	width: 700px;
	border: 3px solid #ddd;
	display: flex;
	flex-direction: column;
	box-shadow: rgba(0, 0, 0, 0.1) 55px 30px 5px;
	gap: 0.8rem;

	@media screen and (max-width: 1200px) {
		width: 500px;
	}

	@media screen and (max-width: 900px) {
		width: 300px;
	}
`;

export const P = styled.div`
	color: ${colors.purple};
`;

export const ProductImg = styled.img`
	border: 4px solid #ddd;
	width: ${({width}) => (width ? width : '100%')};
	@media screen and (max-width: 700px) {
		width: 300px;
	}
`;
