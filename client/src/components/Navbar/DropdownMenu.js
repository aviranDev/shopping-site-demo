import React from 'react';
import styled from 'styled-components';

function DropdownMenu(props) {
	return (
		<div className={props.className}>
			<ul className="dropdown">
				{props.data?.map(({item, qty, price}) => {
					const {title} = item;
					return (
						<div key={item._id}>
							<li className="container-item">
								<span className="dropItem">
									{title}: {price}$
								</span>
							</li>
						</div>
					);
				})}
				<div>
					{props.totalPrice > 0 && <span>Total Price: {props.totalPrice}</span>}
				</div>
				{props.totalPrice > 0 ? (
					<button className="btn" onClick={props.check}>
						Buy
					</button>
				) : (
					<span>Empty cart</span>
				)}
			</ul>
		</div>
	);
}

export default styled(DropdownMenu)`
	.dropdown {
		position: absolute;
		opacity: 0;
		visibility: hidden;
		transition: visibility 0.5s;
		list-style: none;
		margin: 0;
		padding: 0;
		width: 170px;
		text-align: left;
		top: 60px;
		right: 0px;
		border: 1px solid #ededee;
		box-shadow: 0px 1px 1px 1px #ededee;
	}

	.dropdown__item {
		cursor: pointer;
		text-align: left;
		line-height: 24px;
		font-size: 14px;
		a {
			margin: 8px 16px;
			text-decoration: none;
			display: block;
			img {
				margin-right: 12px;
				vertical-align: -24%;
				width: 24px;
			}
			span {
				white-space: nowrap;
				overflow: hidden;
				color: #4a4d55;
			}
		}
	}

	.dropdown__item--large {
		border-bottom: 1px solid #ededee;
		a {
			margin: 16px;
		}
	}

	.btn {
		background-color: #370b30;
		color: #ededee;
		font-size: 20px;
		width: 100%;
	}

	.dropItem {
		color: #ededee;
		font-size: 20px;
	}

	.container-item {
		background-color: #7c00f0;
		margin-bottom: 5px;
	}
`;
