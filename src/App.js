import './scss/app.scss';
import Header from './components/Header';
import Category from './components/Category';
import Sort from './components/Sort';
import LaptopBlock from './components/LaptopBlock';

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
					<h2 className="content__title">All Laptop</h2>
					<div className="content__items">
						<LaptopBlock
							price={1200}
							title="Huawei MateBook D 15"
							img="https://content2.onliner.by/catalog/device/main/56587377c4b9d5de1b73f521f42e40ce.jpeg"
						/>
						<LaptopBlock
							price={1500}
							title="Apple Macbook Air 13"
							img="https://content2.onliner.by/catalog/device/main/dced3c38dbb7067687bb1f766396eeb0.jpeg"
						/>
						<LaptopBlock
							price={1600}
							title="ASUS ROG Strix G15"
							img="https://content2.onliner.by/catalog/device/main/3db1d78bf0a7735b064fa2dd0882fa84.jpeg"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
