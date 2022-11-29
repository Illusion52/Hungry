import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useDispatch } from 'react-redux/es/exports';

import { useState, useEffect } from 'react';
import {
	FaGlassMartiniAlt,
	FaTimes,
	FaBars,
	FaShoppingBag,
	FaSearch,
} from 'react-icons/fa';
import { setOpenCart } from '../../app/CartSlice';
import Cart from '../CartSection/Cart';

const Navbar = () => {
	const [click, setClick] = useState(false);
	const handleClick = () => {
		setClick(!click);
	};

	const [color, setColor] = useState(false);
	const changeColor = () => {
		if (window.scrollY >= 70) {
			setColor(true);
		} else {
			setColor(false);
		}
	};

	window.addEventListener('scroll', changeColor);

	const dispatch = useDispatch();
	const onCartToggle = () => {
		dispatch(setOpenCart({ cartState: true }));
	};

	return (
		<>
			<Cart />
			<nav className={color ? 'nav-container bg' : 'nav-container'}>
				<div className="nav-menu">
					<div className="nav-logo">
						<Link to="/" id="navlogo">
							<h1>
								Hungr
								<span>
									<FaGlassMartiniAlt className="icon" />
								</span>
							</h1>
						</Link>
					</div>
					<ul className={click ? 'nav-links active' : 'nav-links'}>
						<li>
							<Link to="/menu">Menu</Link>
						</li>
						<li>
							<Link to="/locations">Restaurants</Link>
						</li>
						<li>
							<Link to="/offers">Today's specials</Link>
						</li>
					</ul>
					<div className="btn-wrapper">
						<button className="nav-btn" onClick={onCartToggle}>
							<FaShoppingBag className="icons" />
						</button>
						<button className="nav-btn">
							<FaSearch className="icons" />
						</button>
					</div>
					<div className="hamburger" onClick={handleClick}>
						{click ? (
							<FaTimes className="icons" />
						) : (
							<FaBars className="icons" />
						)}
					</div>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
