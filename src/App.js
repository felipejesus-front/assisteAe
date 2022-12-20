import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import MediaDetails from "./components/mediaDetails/MediaDetails";
import MediaList from "./components/mediaList/MediaList";

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
						<Route path="/:category/" element={<MediaList />} />
					</Routes>
				</main>

				<Footer />
			</HashRouter>
		</>
	);
}

export default App;
