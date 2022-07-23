import React, {useState, useContext, createContext} from 'react';

const Odering = createContext();

const OrderProvider = ({children}) => {
	const [ordered, setOrdered] = useState(null);
	return (
		<Odering.Provider value={{ordered, setOrdered}}>
			{children}
		</Odering.Provider>
	);
};

export const useOrder = () => useContext(Odering);

export default OrderProvider;
