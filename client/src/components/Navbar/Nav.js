import React from 'react';
import styled from 'styled-components';
import DropdownMenu from './DropdownMenu';
import {useDispatch} from 'react-redux';
import {setItemsToCart} from '../../redux/shop/actions';
import {BsCart4} from 'react-icons/bs';

function Nav(props) {
	const {products, totalPrice, totalQty} = props.list;
	const dispatch = useDispatch();
	const testing = () => {
		dispatch(setItemsToCart());
	};
	return (
		<nav className={props.className}>
			<div onClick={testing}>
				<ul>
					<li tabIndex="0" className="nav-item user-options">
						<BsCart4 style={{color: '#000', fontSize: '45px'}} />
						<DropdownMenu
							check={props.check}
							data={products}
							totalPrice={totalPrice}
						/>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default styled(Nav)`
	.nav-item {
		position: relative;
		display: inline-block;
		font-weight: bold;
		background-color: #fee1db;
		&:focus {
			pointer-events: none;
		}
	}

	.nav-item:focus .dropdown {
		opacity: 1;
		visibility: visible;
		pointer-events: auto;
	}
`;
