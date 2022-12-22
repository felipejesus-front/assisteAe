import { useLocation, useParams } from "react-router-dom";
import { category } from "../../api/tmdbApi";
import Container from "../Container";
import { ReactComponent as MovieIcon } from "../../assets/movie-icon-lg.svg";
import { ReactComponent as TvIcon } from "../../assets/remote-icon-lg.svg";
import useScrollPosition from "../../hooks/useScrollPosition";

function MediaListHeader() {
	const mediaCategory = useParams();
	const scrollPosition = useScrollPosition();
	const location = useLocation();
	const params = location.state;

	return (
		<div
			className={`pt-40 bg-neutral-900 
		${scrollPosition > 0 && params === null ? "hidden" : ""}`}
		>
			<Container>
				<div className="flex flex-col pb-10 lg:items-center lg:text-center">
					<span className="text-4xl leading-10 font-semibold text-neutral-600 ">
						{params
							? ""
							: mediaCategory.category === category.movie
							? "Encontre aqui o seu"
							: "Encontre aqui a sua"}
					</span>
					<div className="flex pb-10 ">
						<h1 className="text-6xl leading-none font-semibold text-indigo-400 mr-2">
							{params
								? params.title
								: mediaCategory.category === category.movie
								? "Filme"
								: "Série"}
						</h1>
						{mediaCategory.category === category.movie ? (
							<MovieIcon className="rotate-45 lg:hidden " />
						) : (
							<TvIcon className="rotate-45 lg:hidden" />
						)}
					</div>
				</div>
			</Container>
		</div>
	);
}

export default MediaListHeader;
