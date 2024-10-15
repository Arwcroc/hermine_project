import React from "react";
import { useEffect, useState } from "react";

// https://www.zotero.org/support/dev/web_api/v3/write_requests
// Besoin :
// - Titre
// - Auteurs
// - Année de publication
// - Un indicateur pour marquer comme "lu"
// - Un champ pour ajouter un bref commentaire

function articleCard({ article }) {
	const [isRead, setIsRead] = useState(
		localStorage.getItem(`isRead-${article.key}`) === "true"
	);
	const [comment, setComment] = useState(
		localStorage.getItem(`comment-${article.key}`) || ""
	);

	useEffect(() => {
		localStorage.setItem(`isRead-${article.key}`);
		localStorage.setItem(`isRead-${article.key}`);
	}, [isRead, comment, article.key]);

	return (
		<li>
			<h3>{article.data.title}</h3>
			<p>Auteurs : {article.data.creators.map((author) => `${author.firstName} ${author.lastName}`).join(", ")}</p>
			<p>Date : {article.data.date}</p>
			<label>
				Lu :
				<input
					type="checkbox"
					checked={isRead}
					onChange={() => setIsRead(!isRead)}
				/>
			</label>
			<textarea
				placeholder="Ajouter un commentaire"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
			/>
		</li>
	);
}

export default articleCard;
