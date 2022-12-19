import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MediaDetails from "./components/mediaDetails/MediaDetails";

function App() {
	return (
		<>
			<HashRouter>
				<Header />

				<main className="-mt-[112px] min-h-screen">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route
							path="/:category/:id"
							element={<MediaDetails />}
						/>
					</Routes>
				</main>

				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
