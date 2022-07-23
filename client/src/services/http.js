import axios from 'axios';

axios.interceptors.response.use(null, (err) => {
	const {response} = err;
	if (!response) {
		return console.log('Bad connection to server');
	}

	if (response && response.status >= 403) {
		console.log('An unexpected error occurred');
	}
	return Promise.reject(err);
});

export function setDefaultCommonHeader(header, value) {
	axios.defaults.headers.common[header] = value;
}

const httpService = {
	get: axios.get,
	post: axios.post,
	patch: axios.patch,
	put: axios.put,
	delete: axios.delete,
	setDefaultCommonHeader,
};

export default httpService;
