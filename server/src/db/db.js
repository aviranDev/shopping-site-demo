import mongoose from 'mongoose';
import config from '../config/config.js';

const mongoDb = async () => {
	try {
		await mongoose.connect(config.mongo.url);
		console.log('Connected to mongoDB');
	} catch (error) {
		console.log('There is sopme error eccured', error);
	}
};

export default mongoDb;
