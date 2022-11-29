import React from 'react';
import './Map.css';

const Map = () => {
	return (
		<>
			<div className="map-container">
				<h1>Come to our place!!!</h1>
				<br></br>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1807.1876682158556!2d-0.13172478848532918!3d51.513360829745906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d2e03a3d99%3A0x294e7917910d203b!2sBurger%20%26%20Lobster%20Soho!5e0!3m2!1sro!2sro!4v1669463839008!5m2!1sro!2sro"
					width="600"
					height="450"
					allowfullscreen=""
					loading="lazy"
					referrerpolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</>
	);
};

export default Map;
