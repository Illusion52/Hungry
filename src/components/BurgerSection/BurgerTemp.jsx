import React from 'react';
import './Burger.css';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import BurgerList from '../../utils/burgers.js';
import { AiOutlineLeft } from 'react-icons/ai';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import Navbar from '../NavbarSection/Navbar';
import Footer from '../FooterSection/Footer';
import { setAddItemToCart } from '../../app/CartSlice.js';
import { Link } from 'react-router-dom';

const BurgerTemp = () => {
	const { id } = useParams();
	const item = BurgerList.find((item) => item.id === parseInt(id));

	const { name, img, price, ingredients, description } = item;

	const dispatch = useDispatch();

	const handleAddToCart = (item) => {
		dispatch(setAddItemToCart(item));
	};

	return (
		<>
			<Navbar />
			<div className="burger-container">
				<div className="left">
					<img src={img} alt={name} className="img-burger" />
					<h1 className="price">${price}</h1>
				</div>
				<div className="right">
					<h1 className="title">{name}</h1>
					<h2 className="description">
						Description:{' '}
						{description === 'N/A' ? 'No description yet' : description}
					</h2>
					<h3 className="ingredients">
						Ingredients: {ingredients.join(', ')}.
					</h3>
					<div className="btnWrapper">
						<Link to="/menu">
							<button className="btn-back">
								<AiOutlineLeft />
							</button>
						</Link>
						<button
							className="addCart-btn"
							onClick={() => handleAddToCart(item)}
						>
							Add to <HiOutlineShoppingBag />
						</button>
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default BurgerTemp;
