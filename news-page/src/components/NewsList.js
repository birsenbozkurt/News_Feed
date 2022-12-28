import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsItem from "./NewsItem";

const NewsList = () => {
	const [articles, setArticles] = useState([]);
	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get("https://newsapi.org/v2/everything?q=besiktas&apiKey=2ee2bab1660d4548b5504d328bff82c0");
			console.log(response);
			setArticles(response.data.articles);
		};
		getArticles();
	}, []);
	return (
		<div>
			{articles.map((article) => {
				return <NewsItem title={article.title} description={article.description} url={article.url} urlToImage={article.urlToImage} />;
			})}
		</div>
	);
};

export default NewsList;
