import React from "react";
import { useState } from "react";

// - Filtrage des papiers (Tous / Lus / Non lus)
// - Recherche simple par titre ou auteur - pas eu le temps
// - Sauvegarde locale des statuts "lu" et des commentaires

function ArticleList({ articles }) {
	const [filter, setFilter] = useState("all");

	const filteredArticles = articles.filter((article) => {
		const isRead = localStorage.getItem(`isRead-${article.key}`) === "true";
		if (filter === "all") return true;
		if (filter === "read") return isRead;
		if (filter === "unread") return !isRead;
	});

	return (
		<div>
			<h2>Liste des Articles</h2>
			<input
				type="text"
				placeholder="Rechercher par titre ou auteur"
			/>
			<div className="form-group">
				<label>Filtrer par :</label>
				<select
					name="filter"
					onChange={(e) => setFilter(e.target.value)}
				>
					<option value="all">Tous</option>
					<option value="read">Lus</option>
					<option value="unread">Non lus</option>
				</select>
			</div>
			<ul>
				{filteredArticles.map((article) => (
					<ArticleCard key={article.key} article={article} />
				))}
			</ul>
		</div>
	);
}

export default ArticleList;
