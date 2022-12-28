import "./App.css";
import Navbar from "./components/NavBar/Navbar";
import NewsList from "./components/NewsList";
function App() {
	return (
		<>
			<Navbar />
			<section className="backimage">
				<div>
					<h1 className="text">Güncel Haberler</h1>
					<input className="search-bar" type="text" placeholder="  Search..." />
					<NewsList />
				</div>
			</section>
			{}
		</>
	);
}

export default App;
