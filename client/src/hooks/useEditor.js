import {useState} from 'react';

const useEditor = (credentials) => {
	const [edit, setEdit] = useState(credentials);

	const handleChangeEdit = ({target}) => {
		setEdit((prevState) => ({...prevState, [target.name]: target.value}));
	};

	return {edit, setEdit, handleChangeEdit};
};

export default useEditor;
