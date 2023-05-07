import React from 'react';
import Category from '../components/Category';
import Sort from '../components/Sort';
import SmartphoneBlock from '../components/SmartphoneBlock';
import Skeleton from '../components/SmartphoneBlock/Skeleton';

const Home = () => {
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
		window.scrollTo(0, 0);
	}, []);

	return (
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
	);
};

export default Home;
