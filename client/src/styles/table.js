import styled from 'styled-components';

const colors = {
	//buttons
	save: '#6881E6',
	cancel: '#000000',
	edit: '#7CBD88',
	delete: '#B12920',
	add: '#374B8F',

	//table
	thead: '#33154F',
	theadText: '#C6CFE3',
	tbody: '#623989',
	text: '#1C1D21',

	//errors
	error: '#B13737',
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 4rem;
`;

export const Table = styled.table`
	border-collapse: collapse;
	width: 100%;
`;

export const Th = styled.th`
	border: 5px solid #fee1db;
	text-align: left;
	padding: 8px;
	font-size: 40px;
	color: ${colors.theadText};
	background-color: ${colors.thead};
`;

export const Td = styled.td`
	background-color: ${colors.tbody};
	border: 5px solid #fee1db;
	color: ${colors.theadText};
	text-align: left;
	padding: 8px;
	font-size: 32px;
`;

export const Form = styled.form``;

export const Heading = styled.h2`
	margin-bottom: ${({bottom}) => (bottom ? bottom : '24px')};
	text-align: ${({align}) => (align ? align : 'center')};
	font-size: 48px;
	color: ${({color}) => (color ? color : '#000')};
	line-height: 1.1;
	font-weight: 600;
`;

export const EditButton = styled.button`
	position: absolute;
	color: #fff;
	left: 20%;
	margin-top: 0;
	margin-right: 5%;
	margin-bottom: 0;
	margin-left: 0;
	border-radius: 4px;
	background: none;
	white-space: nowrap;
	outline: none;
	position: absolute;
	width: 25%;
	font-size: 1.5rem;
	padding: 20px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${({inverse}) => (inverse ? '#7CBD88' : '#7CBD88')};
	}
`;

export const DeleteButton = styled.button`
	color: #fff;
	position: absolute;
	left: 25%;
	margin-top: 0;
	margin-right: 0;
	margin-left: 5px;
	margin-bottom: 0;
	border-radius: 4px;
	background: none;
	position: absolute;
	white-space: nowrap;
	outline: none;
	width: 25%;
	font-size: 1.5rem;
	padding: 20px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.delete};
	}
`;

export const SaveButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.save};
	}
`;

export const CancelButton = styled.button`
	border-radius: 4px;
	background: none;
	margin-top: 0.5rem;
	white-space: nowrap;
	outline: none;
	width: 100%;
	font-size: 1.4rem;
	padding: 5px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.cancel};
	}
`;

export const Span = styled.span`
	color: ${colors.error};
`;

export const Label = styled.label`
	display: inline-block;
	font-size: 1.5rem;
	margin-bottom: 0.7rem;
	color: ${({color}) => (color ? color : '#000')};
`;

export const ButtonModal = styled.div`
	text-align: right;
`;

export const AddButton = styled.button`
	color: ${({color}) => (color ? color : '#000')};
	border-radius: 4px;
	background: none;
	margin-top: 0.4rem;
	white-space: nowrap;
	outline: none;
	width: ${({width}) => (width ? width : '27%')};
	height: 100%;
	font-size: 1.2rem;
	padding: 10px 15px;
	border: 2px solid black;
	cursor: pointer;
	position: relative;
	float: right;
	overflow: hidden;
	&:hover {
		color: white;
		transition: background-color 0.4s ease-in;
		background-color: ${colors.tbody};
	}
`;

export const FormInput = styled.input`
	display: block;
	width: 300%;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 50px;
	width: 100%;
	border: none;
	border-bottom: 1px solid #cfcfcf;
	font-size: 1rem;
`;

export const TableInput = styled.input`
	display: block;
	padding-left: 10px;
	outline: none;
	border-radius: 2px;
	height: 50px;
	width: 100%;
	border: none;
	font-size: 1rem;
`;

export const Div = styled.div`
	width: 300px;
	padding: 10px;
	margin: 10px;
	text-align: justify;
`;
