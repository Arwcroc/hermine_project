import React from "react";
import { useState } from "react";
import "./loginAPI.css";

function LoginAPI({ setApiKey, setUserId }) {
	const [inputKey, setInputKey] = useState("");
	const [inputUserId, setInputUserId] = useState("");

	//localstorage pour l'avenir, setapikey pour usage immediat
	const handleSubmit = (e) => {
		e.preventDefault();
		if (!inputKey || !inputUserId) {
			alert("API Key and User ID are required.");
			return;
		}
		try {
			localStorage.setItem("ApiKey", inputKey);
			localStorage.setItem("UserId", inputUserId);
			setApiKey(inputKey);
			setUserId(inputUserId);
		} catch (error) {
			console.error("Erreur:", error);
			alert("Une erreur est survenue. Veuillez réessayer.");
		}
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<label>API KEY :</label>
			<input
				type="text"
				value={inputKey}
				onChange={(e) => setInputKey(e.target.value)}
				required
			/>
			<label>USER ID :</label>
			<input
				type="text"
				value={inputUserId}
				onChange={(e) => setInputUserId(e.target.value)}
				required
			/>
			<button type="submit">Connexion</button>
		</form>
	);
}

export default LoginAPI;
