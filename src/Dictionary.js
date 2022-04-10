import React, { useState } from "react";
import "./Dictionary.css";

export default function Dictionary() {
	const [keyword, setKeyword] = useState("");

	function handleKeywordChange(event) {
		setKeyword(event.target.value);
	}

	function search(event) {
		event.preventDefault();
		alert(`Searching for ${keyword}`);
	}

	return (
		<div className="Dictionary">
			<div className="container">
				<form onSubmit={search}>
					<input type="search" onChange={handleKeywordChange} />
				</form>
			</div>
		</div>
	);
}
