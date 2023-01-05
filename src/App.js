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
						{smartphones.map((item, i) => {
							return (
								<SmartphoneBlock
									img={item.imageURL}
									title={item.name}
									price={item.price}
									RAM={item.RAM}
									CPU={item.processor}
									memory={item.memory}
									date={item.date}
									OS={item.OS}
									OSversion={item.OSversion}
									display={item.display}
									key={item.id}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
