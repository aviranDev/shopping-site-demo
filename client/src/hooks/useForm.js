import {useState} from 'react';

const useForm = (credentials) => {
	const [state, setState] = useState(credentials);

	const handleChange = ({target}) => {
		setState((prevState) => ({...prevState, [target.name]: target.value}));
	};

	return {state, setState, handleChange};
};

export default useForm;
