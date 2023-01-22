import './scss/app.scss';
import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import SmartphoneBlock from './components/SmartphoneBlock';
import smartphones from './assets/smartphone.json';

function App() {
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
						{smartphones.map((item) => {
							return <SmartphoneBlock key={item.id} {...item} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
