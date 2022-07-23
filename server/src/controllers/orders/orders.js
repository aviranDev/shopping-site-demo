import Order from '../../Models/Order.js';
import Sum from '../../Models/Sum.js';
const today = new Date();
const getDate = today.toISOString().slice(0, 10);
const yesterday = new Date(new Date().setDate(today.getDate() - 1));
let totalPrice = 0;
let expired = true;

const dailySum = async (req, res) => {
	const orders = await Order.find();
	orders.map(async (order) => {
		if (order.createAt > yesterday) {
			order.cart.map(async (item) => {
				totalPrice += item.totalPrice;
			});
		}
	});

	const find = await Sum.find();
	find.map(async (val) => {
		if (val.date > yesterday) {
			expired = false;
			await Sum.findOneAndUpdate(
				{date: val.date},
				{total: totalPrice},
				{new: true}
			);
		}
	});

	const dailySumResult = new Sum({
		total: totalPrice,
		fullDate: getDate,
	});

	if (expired) {
		await dailySumResult.save();
	}
	totalPrice = 0;
	res.status(200).send('Total sum has been sent to the Database');
};

export default dailySum;
