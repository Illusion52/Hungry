import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import './Menu.css';
import { Link } from 'react-router-dom';
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
						<>
							<div className="burgerCard" id={item.id} key={i}>
								<img src={item.img} alt={item.name} className="burger-img" />
								<h1>{item.name}</h1>
								<h2>{item.ingredients}</h2>
								<button
									className="menu-btn"
									id={item.id}
									onClick={() => handleAddToCart(item)}
								>
									${item.price}
								</button>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};
export default Menu;
