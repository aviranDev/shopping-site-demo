import service from './http';
import config from '../config/server';
const api = `${config.server.url}/sales`;

export const top5 = () => {
	return service.get(`${api}/display-top-sales`);
};

export const distinct = () => {
	return service.get(`${api}/display-distinct`);
};

export const dailyBasis = () => {
	return service.get(`${api}/daily-basis`);
};
