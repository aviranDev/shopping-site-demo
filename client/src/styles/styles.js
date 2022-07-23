import styled, {createGlobalStyle} from 'styled-components';

export const colors = {
	background: '#FEE1DB',
	black: '#3E3A39',
	white: '#FEF1EE',
	modal: '#A173A6',
	purple: '#FFF8FE',
	green: '#3B983E',
	hover: '#ffffff',
	text: '#F3F8C3',
	input: '#FFFBC3',
	main: '#F8F0AB',
	card1: '#FFF9DA',
	card2: '#FFF7CD',
	card3: '#FFF4BE',
	card4: '#E7DDAC',

	store1: '#F7DFFF',
	store2: '#FAEAFF',
	store3: '#FBF4FD',
	error: '#A62118',
};

export const GlobalStyle = createGlobalStyle`
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Montserrat', sans-serif;
}
body {
	background-color: ${colors.background};
	
}
`;

export const Main = styled.main`
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	overflow: auto;
	padding-bottom: 100px;
`;

export const Section = styled.section`
	padding: ${({padding}) => (padding ? padding : '140px 0')};
	margin: ${({margin}) => (margin ? margin : '')};
	background: ${({inverse}) => (inverse ? 'white' : '#370B30')};
	position: ${({position}) => (position ? position : '')};
	width: ${({width}) => (width ? width : 'auto')};
	min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
	max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
	height: ${({height}) => (height ? height : 'auto')};
	max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
	@media screen and (max-width: 768px) {
		padding: ${({smPadding}) => (smPadding ? smPadding : '70px 0')};
	}
`;

export const Row = styled.div`
	display: flex;
	flex-direction: ${({direction}) => (direction ? direction : 'row')};
	justify-content: ${({justify}) => (justify ? justify : '')};
	align-items: ${({align}) => (align ? align : '')};
	gap: ${({gap}) => (gap ? gap : '')};
	padding: ${({padding}) => (padding ? padding : '')};
	margin: ${({margin}) => (margin ? margin : '')};
	position: ${({position}) => (position ? position : '')};
	width: ${({width}) => (width ? width : 'auto')};
	min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
	max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
	height: ${({height}) => (height ? height : 'auto')};
	max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
	flex-wrap: ${({wrap}) => (wrap ? wrap : '')};
	@media screen and (max-width: 780px) {
		flex-direction: column;
	}
`;

export const Column = styled.div`
	align-content: center;
	display: flex;
	flex-direction: column;
	justify-content: start;
	align-items: center;
	gap: 20px;
	padding: 30px;
	margin: ${({margin}) => (margin ? margin : '10px')};
	position: ${({position}) => (position ? position : '')};
	width: ${({width}) => (width ? width : 'auto')};
	min-width: ${({minWidth}) => (minWidth ? minWidth : 'auto')};
	max-width: ${({maxWidth}) => (maxWidth ? maxWidth : 'auto')};
	height: ${({height}) => (height ? height : 'auto')};
	max-height: ${({maxHeight}) => (maxHeight ? maxHeight : 'auto')};
	min-height: ${({minHeight}) => (minHeight ? minHeight : 'auto')};
	margin-top: ${({top}) => (top ? top : '')};
`;

export const Button = styled.button`
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	padding: 10px 50px;
	font-size: 16px;
	color: ${colors.main};
	outline: none;
	border: 2px solid ${colors.main};
	cursor: pointer;
	overflow: hidden;
	position: relative;
	&:hover {
		color: ${colors.main};
		transition: background-color 0.4s ease-in;
		background-color: ${colors.purple};
	}
`;

export const MainHeading = styled.h1`
	font-size: clamp(2.3rem, 6vw, 4.5rem);
	color: ${({color}) => (color ? color : colors.black)};
	margin-bottom: 2rem;
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const SecondHeading = styled.h2`
	font-size: ${({fontSize}) =>
		fontSize ? fontSize : 'clamp(2.3rem, 6vw, 3.5rem)'};
	color: ${({color}) => (color ? color : `${colors.purple}`)};
	margin-bottom: ${({bottom}) => (bottom ? bottom : '2rem')};
	padding-top: ${({top}) => (top ? top : '20px')};
	margin-left: ${({left}) => (left ? left : 'auto')};
	width: 100%;
	letter-spacing: 4px;
	text-align: center;
`;

export const Container = styled.div`
	width: 100%;
	max-width: 1200px;
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 700px) {
		padding: 0 30px;
		max-width: 900px;
	}
`;

export const MainContainer = styled.div`
	background: ${({background}) =>
		background ? background : `${colors.background}`};
	width: 100%;
	padding-bottom: ${({bottom}) => (bottom ? bottom : '')};
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 700px) {
		padding: 0;
		flex-direction: column;
	}
`;

export const ViewContainer = styled.div`
	background: linear-gradient(85deg, ${colors.main}, ${colors.purple});
	width: 100%;
	padding-bottom: ${({bottom}) => (bottom ? bottom : '')};
	margin-right: auto;
	margin-left: auto;
	@media screen and (max-width: 700px) {
		padding: 0;
		flex-direction: column;
	}
`;

export const BorderImg = styled.img`
	width: 100%;
	align-items: center;
	display: flex;
`;

export const Img = styled.img`
	border-radius: 15px;
	width: ${({width}) => (width ? width : '100%')};
	@media screen and (max-width: 700px) {
		width: 300px;
	}
`;

export const P = styled.p`
font-size: 25px;
space
color: ${colors.purple};
`;

export const H5 = styled.h5`
	color: ${({color}) => (color ? color : `${colors.card2}`)};
	font-size: 20px;
`;
