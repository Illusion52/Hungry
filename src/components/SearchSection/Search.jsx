import React from 'react';
import './Search.css';
import BurgerList from '../../utils/burgers';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useSelector } from 'react-redux/es/exports';
import { setCloseSearch } from '../../app/SearchSlice.js';
import { selectSearchState } from '../../app/SearchSlice.js';
import { BsArrowLeftSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Search = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const ifSearchState = useSelector(selectSearchState);

	const dispatch = useDispatch();

	const offSearchToggle = () => {
		dispatch(setCloseSearch({ searchState: false }));
	};

	return (
		<>
			<div
				className={
					ifSearchState ? 'search-container' : 'search-container inactive'
				}
			>
				<div className="input-wrapper">
					<BsArrowLeftSquareFill
						className="icon-cart"
						onClick={offSearchToggle}
					/>

					<input
						className="search-input"
						type="text"
						placeholder="Search..."
						onChange={(event) => {
							setSearchTerm(event.target.value);
						}}
					/>
				</div>
				<div className="search-items">
					{BurgerList.filter((val) => {
						if (searchTerm === '') {
							return val;
						} else if (
							val.name.toLowerCase().includes(searchTerm.toLowerCase())
						) {
							return val;
						}
						return false;
					}).map((val, i) => {
						return (
							<Link to={`/menu/${val.id}`} className="Link" key={i}>
								<div className="items-container">
									<div className="image-container">
										<img src={val.img} alt={val.name} className="items-img" />
									</div>
									<div className="name-container">
										<h1 className="items-name">{val.name}</h1>
									</div>
								</div>
							</Link>
						);
					})}
				</div>
			</div>
		</>
	);
};

export default Search;
