import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
	return (
		<div className="App">
			<div className="container">
				<main>
					<Dictionary defaultKeyword="waterfall" />
				</main>
				<footer>
					<div className="text-center mt-1">
						This project was coded by{" "}
						<a href="https://github.com/ShianneJT" target="_blank" rel="noreferrer">
							Shianne Taylor
						</a>{" "}
						and is{" "}
						<a
							href="https://github.com/ShianneJT/dictionary-project"
							target="_blank"
							rel="noreferrer"
						>
							open-sourced
						</a>
						.
					</div>
				</footer>
			</div>
		</div>
	);
}
