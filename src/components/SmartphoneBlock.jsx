import React, { useState } from 'react';
import { v4 as uuid4 } from 'uuid';

function SmartphoneBlock({
	imageURL,
	name,
	RAM,
	memory,
	processor,
	date,
	OSversion,
	OS,
	display,
	price,
}) {
	const [ramActive, setRamActive] = useState(0);
	const [memoryActive, setMemoryActive] = useState(0);

	const onClickActive = (index, functionName) => {
		functionName(index);
	};

	return (
		<div className="smartphone-block">
			<img className="smartphone-block__image" src={imageURL} alt="smartphone" />
			<h4 className="smartphone-block__title">{name}</h4>
			<div className="smartphone-block__selector">
				<ul>
					{RAM.map((e, i) => {
						return (
							<li
								key={uuid4()}
								onClick={() => onClickActive(i, setRamActive)}
								className={ramActive === i ? 'active' : ''}
							>
								{e} GB
							</li>
						);
					})}
				</ul>
				<ul>
					{memory.map((e, i) => {
						return (
							<li
								key={uuid4()}
								onClick={() => onClickActive(i, setMemoryActive)}
								className={memoryActive === i ? 'active' : ''}
							>
								{e} GB
							</li>
						);
					})}
				</ul>
			</div>
			<div className="smartphone-block__information">
				<ul>
					<li>
						Processor: <span>{processor}</span>
					</li>
					<li>
						Launch date: <span>{date}</span>
					</li>
					<li>
						OS version: <span>{OSversion}</span>
					</li>
					<li>
						Display: <span>{display}"</span>
					</li>
					<li>
						Operating System: <span>{OS}</span>
					</li>
				</ul>
			</div>
			<div className="smartphone-block__bottom">
				<div className="smartphone-block__price">от {price} р.</div>
				<button className="button button--outline button--add">
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
					<i>0</i>
				</button>
			</div>
		</div>
	);
}

export default SmartphoneBlock;
