import React from 'react';
import './scss/app.scss';
import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import SmartphoneBlock from './components/SmartphoneBlock';
import Skeleton from './components/SmartphoneBlock/Skeleton';

function App() {
	const [items, setItems] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		fetch('https://6421688034d6cd4ebd72620f.mockapi.io/items')
			.then((data) => {
				return data.json();
			})
			.then((arr) => {
				setItems(arr);
				setIsLoading(false);
			});
	}, []);

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
						{isLoading
							? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
							: items.map((item) => <SmartphoneBlock key={item.id} {...item} />)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
