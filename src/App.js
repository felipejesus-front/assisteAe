import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
	return (
		<>
			<HashRouter>
				<Header />

				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						{/* Estes caminhos foram feitos para teste e já serão colocados seus componentes corretos */}
						<Route path="movie" element={<div>movie</div>} />
						<Route path="tv" element={<div>series</div>} />
					</Routes>
				</main>

				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
