import Logo from "../../assets/Logo.svg";
import Tmdb from "../../assets/tmdb.svg";

function Footer() {
	return (
		<footer className="flex justify-around items-center bg-gradient-to-t from-neutral-900 to-neutral-700 p-5 border border-t-neutral-900 border-x-0 border-b-0 lg:flex-col lg:gap-5 sm:mb-[76px]">
			<div>
				<img src={Logo} alt="" />
			</div>
			<div className="text-base leading-6 font-normal max-w-sm lg:text-xs ">
				<p className="pb-10 lg:pb-5">
					Este website foi desenvolvido por Felipe de Jesus - Sem
					propósitos comerciais, feito apenas para mostrar tecnicas de
					desenvolvimento e portifólio. Este projeto utiliza a API do
					TMDB
				</p>
				<p>
					This website was developed by Felipe de Jesus - Without
					commercial purposes, made only to show development
					techniques and portfolio. This project uses the TMDB API
				</p>
			</div>
			<a href="https://www.themoviedb.org/">
				<img src={Tmdb} alt="" />
			</a>
		</footer>
	);
}

export default Footer;
