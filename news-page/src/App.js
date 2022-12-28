import "./App.css";
// import Card from "./components/Card";
import { useState } from "react";
import Navbar from "./components/NavBar/Navbar";
function App() {
	const [query, setQuery] = useState(""); //Arama verilerini tutabilmek için

	function onChange(e) {
		//Api aratması yapılacağı için fonksiyona bağlanmalı
		setQuery(e.target.value);

		fetch(`https://newsapi.org/v2/everything? q=besiktas&page=1&apiKey=90f78b5e459f4557a6d285161db89387&query=${e.target.value} `)
			.then((res) => res.json())
			.then((data) => console.log(data));
	}

	return (
		<>
			<Navbar />
			<section className="backimage">
				<div>
					<h1 className="text">Güncel Haberler</h1>
					<input className="search-bar" onChange={onChange} value={query} type="text" placeholder="  Search..." />
				</div>
			</section>
		</>
	);
}

export default App;
