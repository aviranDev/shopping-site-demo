import {useState} from 'react';

const useError = (boolean) => {
	const [error, setError] = useState(boolean);

	const handleError = (errorMessage, input) => {
		setError((prevState) => ({...prevState, [input]: errorMessage}));
	};
	return {error, setError, handleError};
};

export default useError;
