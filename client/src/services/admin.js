import httpService from './http';
import config from '../config/server';

export const adminEntery = () => {
	return httpService.get(`${config.server.url}/enter-admin`, {
		withCredentials: true,
	});
};
