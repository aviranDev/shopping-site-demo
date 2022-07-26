import styledComponents from 'styled-components';

//colors
export const Colors = {
	primary: '#575757',
	secondary: '#6B6B6B',
	tertiary: '#FFF4C3',
	darkLight: '#FFF4C3',
	brand: '#FFF2CC',
	green: '#10B981',
	red: '#EF4444',

	bright: '#FFF2CC',
	brightText: '#000000',
	dark: '#6B6B6B',
	darkText: '#FFF4C3',
	border: '#D6B656',
};

const {primary, secondary, tertiary, darkLight, brand} = Colors;

export const StyledContainer = styledComponents.View`
flex: 1;
padding: 25px;

background-color: ${primary};
`;

export const InnerContainer = styledComponents.View`
flex: 1;
width: 100%;
align-items: center;
`;

export const WelcomeContainer = styledComponents(InnerContainer)`
padding: 25px;
padding-top: 10px;
justify-content: center;
`;

export const PageLogo = styledComponents.Image`
width: 250px;
height: 200px;
`;

export const Avatar = styledComponents.Image`
width: 100px;
height:100px;
margin: auto;
border-radius: 50px;
border-width: 2px;
border-color: ${secondary};
margin-bottom: 10px;
margin-top: 10px;
`;

export const WelcomeImage = styledComponents.Image`
height: 50%;
min-width: 100%;
`;

export const PageTitle = styledComponents.Text`
font-size: 30px;
text-align: center;
font-weight: bold;
color: ${brand};
padding: 10px;

${(props) =>
	props.welcome &&
	`
font-size: 40px;
`}
`;

export const SubTitle = styledComponents.Text`
font-size: 18px;
margin-bottom: 20px;
letter-spacing: 1px;
font-weight: bold;
color: ${tertiary};

${(props) =>
	props.welcome &&
	`
margin-bottom: 5px;
font-weight: normal;
`}
`;

export const StyledFormArea = styledComponents.View`
width: 90%;
`;

export const StyledTextInput = styledComponents.TextInput`
background-color: ${secondary};
padding: 15px;
padding-left: 55px;
padding-right: 55px;
border-radius: 5px;
font-size: 16px;
height: 60px;
margin-vertical: 3px;
margin-bottom: 10px;
color: ${tertiary};
border-width: 1px;
border-color: ${({borderColor}) => (borderColor ? borderColor : '#D6B656')} 
`;

export const StyledInputLabel = styledComponents.Text`
color: ${tertiary};
font-size: 13px;
text-align: left;
`;

export const LeftIcon = styledComponents.View`
left: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const RightIcon = styledComponents.TouchableOpacity`
right: 15px;
top: 38px;
position: absolute;
z-index: 1;
`;

export const StyledButton = styledComponents.TouchableOpacity`
padding: 15px;
background-color: ${({background}) => (background ? background : brand)};
justify-content: center;
align-items: center;
border-radius: 5px;
margin-vertical: ${({marginVertical}) =>
	marginVertical ? marginVertical : '5px'};
height: 60px;
`;

export const ButtonText = styledComponents.Text`
margin: 4px;
margin: auto 0;
color: ${({color}) => (color ? color : primary)};
font-size: ${({fontSize}) => (fontSize ? fontSize : '16px')};
letter-spacing: ${({space}) => (space ? space : '0')};
font-weight: bold;
`;

export const MsgBox = styledComponents.Text`
text-align: center;
font-size: 13px;
`;

export const Line = styledComponents.View`
height: 1px;
width: 100%;
background-color: ${darkLight};
margin-vertical: 10px;
`;

export const ExtraView = styledComponents.View`
justify-content: center;
flex-direction: row;
align-items: center;
padding: 10px;
`;

export const ExtraText = styledComponents.Text`
justify-content: center;
color: ${tertiary};
font-size: 15px;
`;

export const TextLink = styledComponents.TouchableOpacity`
justify-content: center;
align-items: center;
`;

export const TextLinkContent = styledComponents.Text`
color: ${brand};
font-size: 15px;
`;

export const Error = styledComponents.Text`
color: ${brand};
font-size: 15px;
`;
