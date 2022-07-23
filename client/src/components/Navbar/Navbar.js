import React, {useState, useEffect, useRef} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {setItemsToCart} from '../../redux/shop/actions';
import {checkout} from '../../services/cart';
import Nav from './Nav';

import {
	NavbarContainer,
	LeftContainer,
	RightContainer,
	NavbarInnerContainer,
	NavbarLinkContainer,
	NavbarLink,
	NavbarLinkExtended,
	OpenLinksButton,
	NavbarExtendedContainer,
} from './stylesNavbar';

const Navbar = () => {
	useEffect(() => {
		dispatch(setItemsToCart());
	}, []);

	const check = async () => {
		await checkout();
		dispatch(setItemsToCart());
	};

	const list = useSelector((state) => state.shop.cart);
	const {totalPrice, totalQty} = list;
	const [extendNavbar, setExtendNavbar] = useState(false);
	const dispatch = useDispatch();
	return (
		<NavbarContainer>
			<NavbarInnerContainer>
				<LeftContainer>
					<NavbarLinkContainer>
						<NavbarLink to="/admin">Admin</NavbarLink>
						<NavbarLink to="/">Home</NavbarLink>
						<NavbarLink to="/state">State</NavbarLink>
					</NavbarLinkContainer>
				</LeftContainer>
				<RightContainer>
					<NavbarLinkContainer>
						<OpenLinksButton
							onClick={() => {
								setExtendNavbar((curr) => !curr);
							}}
						>
							{extendNavbar ? <>&#10005;</> : <> &#8801;</>}
						</OpenLinksButton>
					</NavbarLinkContainer>
					<span style={{fontSize: '30px'}}>{totalQty ? totalQty : null}</span>
					<Nav check={check} list={list} totalPrice={totalPrice} />
				</RightContainer>
			</NavbarInnerContainer>
			{extendNavbar && (
				<NavbarExtendedContainer>
					<NavbarLinkExtended to="/">Home</NavbarLinkExtended>
					<NavbarLinkExtended to="/admin">Admin</NavbarLinkExtended>
					<NavbarLinkExtended to="/state">State</NavbarLinkExtended>
				</NavbarExtendedContainer>
			)}
		</NavbarContainer>
	);
};

export default Navbar;

/* 




	<DropdownContent>
							<DropdownHeader>
								<BsCart4 />
								<Span>{totalQty >= 1 ? totalQty : ''}</Span>
							</DropdownHeader>
							{
								<Dropdown>
									{products?.map(({item, qty, price}) => {
										return (
											<Item
												key={item._id}
												item={item}
												qty={qty}
												price={price}
											/>
										);
									})}
									<p>totalPrice: {totalPrice}</p>
									<button onClick={check}>Check</button>
								</Dropdown>
							}
							<Dropdown>sdsds</Dropdown>
							<Dropdown>sdsds</Dropdown>
							<Dropdown>sdsds</Dropdown>
							<Dropdown>sdsds</Dropdown>
						</DropdownContent>

*/
