import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs';
import burgerDrawing from '../../assets/burgerDrawing.png';
import burgerImg from '../../assets/burgerHero.png';
import './Hero.css';

const Hero = () => {
	const [hover, setHover] = useState(false);

	return (
		<div className="hero-container">
			<div className="hero-text-wrapper">
				<h1 className="title">
					A <span className="span">Juicy Bite</span>
					<br></br>
					You Cannot Forget <br></br>
					For Years!
				</h1>
				<p className="p">
					We made fresh and healthy burgers with our own different<br></br>
					secret ingredients.
				</p>
				<Link to="/menu">
					<button className="btn" type="button">
						View Menu
						<BsArrowRight className="icon-btn" />
					</button>
				</Link>
			</div>
			<div
				className="hero-img-wrapper"
				onMouseEnter={() => setHover(true)}
				onMouseLeave={() => setHover(false)}
			>
				<img
					src={burgerDrawing}
					alt="burger_drawing"
					className={hover ? 'burgerDrawing inactive' : 'burgerDrawing'}
				/>
				<img
					src={burgerImg}
					alt="burgerImg"
					className={hover ? 'burgerImg active' : 'burgerImg'}
				/>
			</div>
		</div>
	);
};

export default Hero;
