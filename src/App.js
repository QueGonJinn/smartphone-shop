import './scss/app.scss';
import Header from './components/Header';

function Category() {
	return (
		<div class="categories">
			<ul>
				<li class="active">Все</li>
				<li>Asus</li>
				<li>MSI</li>
				<li>Acer</li>
				<li>HP</li>
				<li>Aplle</li>
			</ul>
		</div>
	);
}

function App() {
	return (
		<div>
			<Header />
			<Category />
		</div>
	);
}

export default App;
