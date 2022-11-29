import React from 'react';
import {
	FaGlassMartiniAlt,
	FaFacebook,
	FaInstagram,
	FaPinterest,
} from 'react-icons/fa';
import './Footer.css';
const Footer = () => {
	return (
		<div className="footer">
			<div className="footerContainer">
				<h1>
					Hungr
					<FaGlassMartiniAlt className="iconFooter" />
				</h1>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam nobis
					libero voluptatum quam consectetur fuga ducimus
				</p>
				<div className="socialWrapper">
					<FaFacebook className="socialIcon" />
					<FaInstagram className="socialIcon" />
					<FaPinterest className="socialIcon" />
				</div>
				<div className="copyrights">
					<h3>
						Copyright ©2022 Hungry. Design by <span>Illusion</span>
					</h3>
				</div>
			</div>
		</div>
	);
};

export default Footer;
