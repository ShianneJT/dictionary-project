import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<main>
					<Dictionary defaultKeyword="sunset" />
				</main>
				<footer>
					<div className="text-center">
						<a
							href="https://github.com/ShianneJT/dictionary-project"
							target="_blank"
							rel="noreferrer"
						>
							Open-source code
						</a>{" "}
						by Shianne Taylor
					</div>
				</footer>
			</div>
		</div>
	);
}
