import React from 'react';
import BurgerList from '../../utils/burgers';
import './Specials.css';
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { setAddItemToCart } from '../../app/CartSlice';
import { Link } from 'react-router-dom';

const Specials = () => {
	var getMeRandomElements = function (sourceArray, neededElements) {
		var result = [];
		for (var i = 0; i < neededElements; i++) {
			result.push(sourceArray[Math.floor(Math.random() * sourceArray.length)]);
		}

		return result;
	};

	const ThreeRandomItems = getMeRandomElements(BurgerList, 3);

	const dispatch = useDispatch();

	const handleAddToCart = (item) => {
		dispatch(setAddItemToCart(item));
	};

	return (
		<>
			<div className="specials-container">
				<h1 className="page-title">Special Offers</h1>
				<div>
					{ThreeRandomItems.map((item, i) => {
						return (
							<div className="offers-wrapper" key={i}>
								<Link to={`/menu/${item.id}`} className="Link-offers">
									<div className="image-wrapper">
										<img
											src={item.img}
											alt={item.name}
											className="offers-img"
										/>
										<h1 className="discount-price">${item.price}</h1>
									</div>
								</Link>
								<div className="info-wrapper">
									<h1>{item.name}</h1>
									<h2>Ingredients: {item.ingredients.join(', ')}</h2>
								</div>
								<div className="button-wrapper">
									<button
										className="addCart-btn small"
										onClick={() => handleAddToCart(item)}
									>
										Add to <HiOutlineShoppingBag />
									</button>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Specials;
