import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import LoginAPI from "./components/LoginAPI/loginAPI";
import ArticleList from "./pages/articleList";
import "./App.css";

function App() {
	const [apiKey, setApiKey] = useState("");
	const [userId, setUserId] = useState("");
	const [article, setArticle] = useState([]);

	useEffect(() => {
		const fetchArticles = async () => {
			if (apiKey && userId) {
				try {
					const response = await axios.get(
						`https://api.zotero.org/users/${userId}/items?key=${apiKey}`
					);
					console.log(response.data);
					setArticle(response.data);
				} catch (error) {
					console.error("Error fetching articles:", error);
				}
			}
		};
		fetchArticles();
	}, [apiKey, userId]);

	return (
		<div>
			{!apiKey || !userId ? (
				<LoginAPI setApiKey={setApiKey} setUserId={setUserId} />
			) : (
				<ArticleList article={article} />
			)}
		</div>
	);
}

export default App;
