import React, {useState, useEffect} from 'react';
import {top5, distinct} from '../../services/sales';
import {Tops5, TopsUnique, SalsList} from './Tops';
import {dailyBasis} from '../../services/sales';
import './saleStyle.css';

const Slaes = () => {
	const [tops, setTops] = useState(null);
	const [uniqe, setUniqe] = useState(null);
	const [list, setList] = useState(null);

	useEffect(() => {
		const displayDailyBasis = async () => {
			const {data} = await dailyBasis();
			setList(data);
		};
		displayDailyBasis();
	}, []);

	useEffect(() => {
		const displayTops = async () => {
			const response = await top5();
			setTops(response.data);
		};
		const displayDistinct = async () => {
			const response = await distinct();
			setUniqe(response.data);
		};
		displayTops();
		displayDistinct();
	}, []);

	console.log(uniqe);
	return (
		<div className="container-1">
			<div className="box-1">
				<h2>Top 5 Sales Products</h2>
				<table>
					<thead>
						<tr>
							<th>Product Name:</th>
							<th>Sales</th>
						</tr>
					</thead>
					<tbody>
						{tops &&
							tops?.map((product) => (
								<Tops5 key={product._id} product={product} />
							))}
					</tbody>
				</table>
			</div>

			<div className="box-2">
				<h2>Top 5 Unique Products</h2>
				<table>
					<thead>
						<tr>
							<th>Product:</th>
						</tr>
					</thead>
					<tbody>
						{uniqe &&
							uniqe?.map((item) => (
								<TopsUnique key={item.id} item={item.item} />
							))}
					</tbody>
				</table>
			</div>

			<div className="box-3">
				<h2>Last 5 daily basis prices</h2>
				<table>
					<thead>
						<tr>
							<th>Date</th>
							<th>Sales amount</th>
						</tr>
					</thead>
					<tbody>
						{list &&
							list.map((val) => <SalsList key={val._id} listItems={val} />)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Slaes;
