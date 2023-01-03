import React, { useState } from 'react';

function LaptopBlock({ price, title, img }) {
	const [laptopCount, setLaptopCount] = useState(0);

	return (
		<div className="laptop-block">
			<img className="laptop-block__image" src={img} alt="laptop" />
			<h4 className="laptop-block__title">{title}</h4>
			<div className="laptop-block__selector">
				<ul>
					<li className="active">Intel</li>
					<li>AMD</li>
				</ul>
				<ul>
					<li className="active">16 GB</li>
					<li>32 GB</li>
					<li>64 GB</li>
				</ul>
			</div>
			<div className="laptop-block__information">
				<ul>
					<li>
						Processor: <span>Intel Core i7-11800H</span>
					</li>
					<li>
						Launch date: <span>February 2021</span>
					</li>
					<li>
						Performance class: <span>Ultrabook</span>
					</li>
					<li>
						Display: <span>4K 16" OLED</span>
					</li>
					<li>
						Operating System: <span>Windows 11 Pro</span>
					</li>
				</ul>
			</div>
			<div className="laptop-block__bottom">
				<div className="pizza-block__price">от {price} $</div>
				<button
					onClick={() => {
						setLaptopCount(laptopCount + 1);
					}}
					className="button button--outline button--add"
				>
					<svg
						width="12"
						height="12"
						viewBox="0 0 12 12"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
							fill="white"
						/>
					</svg>
					<span>Добавить</span>
					<i>{laptopCount}</i>
				</button>
			</div>
		</div>
	);
}

export default LaptopBlock;
