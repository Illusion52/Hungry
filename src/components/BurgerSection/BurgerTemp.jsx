import React, { Component } from 'react';
import { AiFillCaretLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import './Burger.css';
import { useDispatch } from 'react-redux/es/exports';
import Burger from '../../utils/burgers.json';

export class BurgerTemp extends Component {
	render() {
		return (
			<div className="burger-container">
				<div className="left">
					<img src={this.props.src} alt="" className="img-burger" />
				</div>
				<div className="right">
					<h1>{this.props.name}</h1>
					<h2>{this.props.description}</h2>
					<h3>Ingredients: {this.props.ingredients.toString()}</h3>
					<div className="btnWrapper">
						<Link to="/menu">
							<button type="button" className="btn-back">
								<AiFillCaretLeft className="btn-icon" />
							</button>
						</Link>
						<button type="button" className="addCart-btn">
							Add to cart for:
							<span className="price">{this.props.price}!</span>
						</button>
					</div>
				</div>
			</div>
		);
	}
}

export default BurgerTemp;
