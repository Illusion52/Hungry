import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux/es/exports';
import './Menu.css';

import { setAddItemToCart } from '../../app/CartSlice.js';

const Menu = ({ endpoint }) => {
	const dispatch = useDispatch();

	const handleAddToCart = (item) => {
		dispatch(setAddItemToCart(item));
	};

	return (
		<div className="menuContainer">
			<h1 className="containerTitle">
				Our <span> Menu </span>
			</h1>
			<div className="menuGrid">
				{endpoint.map((item, i) => {
					return (
						<div key={i}>
							<div className="burgerCard" id={item.id}>
								<Link to={`/menu/${item.id}`}>
									<img
										src={item.img}
										alt={item.name}
										className="burger-img"
										key={i}
									/>
									<h1>{item.name}</h1>
									<h2>{item.ingredients.join(', ')};</h2>
								</Link>
								<button
									className="menu-btn"
									id={item.id}
									onClick={() => handleAddToCart(item)}
								>
									${item.price}
								</button>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};
export default Menu;
