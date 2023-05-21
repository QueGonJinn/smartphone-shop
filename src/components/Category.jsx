import React from 'react';
import { v4 as uuid4 } from 'uuid';

function Category({ value, onClickCategory }) {
	const categories = ['Все', 'Aplle', 'Xiaomi', 'Google', 'Samsung', 'POCO', 'Huawei', 'HONOR'];

	return (
		<div className="categories">
			<ul>
				{categories.map((categoryName, i) => {
					return (
						<li
							key={uuid4()}
							onClick={() => onClickCategory(i)}
							className={value === i ? 'active' : ''}
						>
							{categoryName}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Category;
