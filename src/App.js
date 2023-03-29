import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import SmartphoneBlock from './components/SmartphoneBlock';

const smartphones = [];
function App() {
	const [items, SetItems] = React.useState([]);

	return (
		<div className="wrapper">
			<Header />
			<div className="content">
				<div className="container">
					<div className="content__top">
						<Category />
						<Sort />
					</div>
					<h2 className="content__title">All Smartphone</h2>
					<div className="content__items">
						{items.map((item) => {
							return <SmartphoneBlock key={item.id} {...item} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
