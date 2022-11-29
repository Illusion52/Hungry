import React from 'react';
import { BsFillCartXFill, BsArrowLeftShort } from 'react-icons/bs';
const CartEmpty = ({ onCartToggle }) => {
	return (
		<>
			<div
				style={{
					height: '100%',
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'column',
					justifyContent: 'center',
					textAlign: 'center',
					gap: '10px',
				}}
			>
				<BsFillCartXFill
					style={{ height: '10rem', width: '10rem', color: 'rgb(230, 25, 25)' }}
				/>
				<h1 style={{ fontSize: '2rem', color: '#eee', fontWeight: 'bold' }}>
					Your Cart is Empty!
				</h1>
				<button className="empty-btn" onClick={onCartToggle}>
					<BsArrowLeftShort style={{ fontSize: '2rem' }} />
					Go Back
				</button>
			</div>
		</>
	);
};

export default CartEmpty;
