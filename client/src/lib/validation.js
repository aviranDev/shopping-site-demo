const rejex = {
	PRICE: /^[0-9]*$/,
};

export const validateInput = (state, handleError) => {
	const {title, price, description} = state;
	let error = false;
	if (!title) {
		error = true;
		handleError('title is required', 'title');
	} else if (title.length < 2) {
		error = true;
		handleError('title must be at least 2 characters long', 'title');
	} else if (title.length > 20) {
		error = true;
		handleError('title must be no more then 70 characters long', 'title');
	}

	if (!price) {
		error = true;
		handleError('price is required', 'price');
	} else if (!rejex.PRICE.test(price)) {
		error = true;
		handleError('price is invalid', 'price');
	} else if (price < 1) {
		error = true;
		handleError('price must be at least 1.00$', 'price');
	} else if (price > 400) {
		error = true;
		handleError('price must be no more then least 400.00$', 'price');
	}

	if (!description) {
		error = true;
		handleError('description is rrquired', 'description');
	} else if (description.length < 2) {
		error = true;
		handleError(
			'description must be at least 2 characters long',
			'description'
		);
	} else if (description > 70) {
		error = true;
		handleError(
			'description must be no more then 70 characters long',
			'description'
		);
	}
	return error;
};
