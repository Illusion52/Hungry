import React from 'react';
import './Cart.css';
import CartCount from './CartCount';
import CartEmpty from './CartEmpty';
import { TiDelete } from 'react-icons/ti';
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import {
	selectCartItems,
	setGetTotals,
	selectTotalAmount,
	selectTotalQTY,
	selectCartState,
	setCloseCart,
	setDecreaseItemQTY,
	setIncreaseItemQTY,
	setRemoveItem,
} from '../../app/CartSlice.js';
import { useSelector } from 'react-redux/es/exports';

const Cart = () => {
	const dispatch = useDispatch();
	const onCartToggle = () => {
		dispatch(setCloseCart({ cartState: false }));
	};

	const ifCartState = useSelector(selectCartState);
	const cartItems = useSelector(selectCartItems);
	const totalAmount = useSelector(selectTotalAmount);
	const totalQTY = useSelector(selectTotalQTY);

	useEffect(() => {
		dispatch(setGetTotals());
	}, [cartItems, dispatch]);

	const onRemoveItm = (cartItems) => {
		dispatch(setRemoveItem(cartItems));
	};

	const onIncreaseQTY = (cartItems) => {
		dispatch(setIncreaseItemQTY(cartItems));
	};

	const onDecreaseQTY = (cartItems) => {
		dispatch(setDecreaseItemQTY(cartItems));
	};

	console.log(cartItems);

	return (
		<>
			<div className={ifCartState ? 'wrapper-cart' : 'wrapper-cart inactive'}>
				<div className="cart-container">
					<CartCount onCartToggle={onCartToggle} totalQTY={totalQTY} />
					{cartItems?.length === 0 ? (
						<CartEmpty onCartToggle={onCartToggle} />
					) : (
						<div
							style={{
								marginTop: '1rem',
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'center',
								width: '100%',
							}}
						>
							{cartItems?.map((item, i) => {
								return (
									<div className="item-wrapper">
										<div style={{ height: '150px' }}>
											<img
												src={item.img}
												alt={item.name}
												className="cart-imgs"
											/>
										</div>
										<div className="ItemText-wrapper">
											<h1>{item.name}</h1>

											<div className="price-div">
												<h2>
													${parseInt(item.price) * parseInt(item.cartQuantity)}
												</h2>
												<div className="quantity-wrapper">
													<button
														className="quantity-btn"
														onClick={() => onDecreaseQTY(item)}
													>
														<AiFillMinusSquare />
													</button>
													<div className="quantity-btn box">
														<h1>{item.cartQuantity}</h1>
													</div>
													<button
														className="quantity-btn"
														onClick={() => onIncreaseQTY(item)}
													>
														<AiFillPlusSquare />
													</button>
												</div>
											</div>
										</div>
										<div>
											<button
												className="delete-btn"
												onClick={() => onRemoveItm(item)}
											>
												<TiDelete className="delete-icon" />
											</button>
										</div>
									</div>
								);
							})}
							<div className="checkout-wrapper">
								<button>Check Out</button>

								<h1>
									Subtotal:<span>${totalAmount}</span>
								</h1>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default Cart;
