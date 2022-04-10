import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<header>
				<h1 className="text-center">Dictionary 📖</h1>
			</header>
			<Dictionary />
			<div className="text-center">
				<a href="https://github.com/ShianneJT/dictionary-project" target="_blank" rel="noreferrer">
					Open-source code
				</a>{" "}
				by Shianne Taylor
			</div>
		</div>
	);
}
