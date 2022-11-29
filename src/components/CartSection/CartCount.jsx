import React from 'react';
import { BsArrowLeftSquareFill } from 'react-icons/bs';

import './Cart.css';
const CartCount = ({ onCartToggle, totalQTY }) => {
	return (
		<>
			<div
				style={{
					background: '#000',
					display: 'flex',
					justifyContent: 'space-between',
					padding: '0 30px',
					position: 'sticky',
					top: '0',
					left: '0',
					right: '0',
					width: '100%',
					paddingTop: '10px',
				}}
			>
				<div className="cartCount">
					<div
						style={{ display: 'grid', alignItems: 'center', cursor: 'pointer' }}
						onClick={onCartToggle}
					>
						<BsArrowLeftSquareFill className="icon-cart" />
					</div>
					<div
						style={{ display: 'grid', alignItems: 'center', cursor: 'pointer' }}
					>
						<h1 style={{ fontSize: '1rem', color: '#eee' }}>
							Your Cart<span> </span>
							<span
								style={{
									background: '#911616b5',
									border: 'none',
									borderRadius: '5px',
									padding: '0 5px',
								}}
							>
								Items: {totalQTY}
							</span>
						</h1>
					</div>
				</div>
			</div>
		</>
	);
};
export default CartCount;
