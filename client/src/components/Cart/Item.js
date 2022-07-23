import React, {useEffect, useState} from 'react';

const Item = ({item, price}) => {
	console.log(item);
	return (
		<div style={{fontSize: '17px'}}>
			<p>
				{item.title} {price}$
			</p>
		</div>
	);
};

export default Item;
