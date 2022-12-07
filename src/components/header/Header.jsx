import Container from "../Container";
import Logo from "../../assets/Logo.svg";
import useScrollPosition from "../../hooks/useScrollPosition";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const navList = [
	{
		label: "Home",
		path: "/",
	},
	{
		label: "Filmes",
		path: "/movie",
	},
	{
		label: "Séries",
		path: "/tv",
	},
];

function Header() {
	const scrollPosition = useScrollPosition();
	const [active, setActive] = useState("");
	const { pathname } = useLocation();

	useEffect(() => {
		const activeIndex = navList.findIndex((nav) => nav.path === pathname);
		setActive(activeIndex);
	}, [pathname]);

	return (
		<header
			className={`transition-all sticky top-0 p-9${
				scrollPosition > 0 ? " bg-neutral-900 shadow p-5" : " "
			}`}
		>
			<Container>
				<div className="flex justify-between content-center sm:justify-center">
					<Link to="./" className="flex">
						<img src={Logo} alt="Logotipo" />
					</Link>
					<ul className="flex justify-around self-center gap-10 sm:fixed sm:left-0  sm:bottom-0 sm:w-full sm:bg-neutral-900 sm:shadow sm:p-5">
						{navList.map((nav, index) => (
							<Link key={index} to={nav.path} className="flex">
								<li
									className={`text-2xl leading-8 font-semibold hover:text-indigo-400 px-2 py-1 transition ${
										index === active
											? "text-indigo-400"
											: ""
									} `}
								>
									{nav.label}
								</li>
							</Link>
						))}
					</ul>
				</div>
			</Container>
		</header>
	);
}

export default Header;
