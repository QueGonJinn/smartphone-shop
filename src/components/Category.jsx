import React from 'react';
import { v4 as uuid4 } from 'uuid';

function Category() {
	const [activeCategory, setActiveCategory] = React.useState(0);
	const categories = ['Все', 'Aplle', 'Xiaomi', 'Google', 'Samsung', 'POCO', 'Huawei', 'HONOR'];
	const onClickCategory = (index) => {
		setActiveCategory(index);
	};

	return (
		<div className="categories">
			<ul>
				{categories.map((e, i) => {
					return (
						<li
							key={uuid4()}
							onClick={() => onClickCategory(i)}
							className={activeCategory === i ? 'active' : ''}
						>
							{e}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Category;
