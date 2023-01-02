import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import tmdbApi, { movieTypes, tvTypes } from "../../api/tmdbApi";
import useDebounce from "../../hooks/useDebounce";
import useScrollPosition from "../../hooks/useScrollPosition";
import Container from "../Container";
import MainContent from "../mainContent/MainContent";
import MediaSlideContent from "../mediaSlide/MediaSlideContent";
import MediaListHeader from "./MediaListHeader";

function MediaList() {
	const mediaCategory = useParams();
	const location = useLocation();
	const states = location.state;
	const scrollPosition = useScrollPosition();
	const [mediaData, setMediaData] = useState([]);
	const [keyword, setKeyword] = useState("");
	const debouncedKeyword = useDebounce(keyword, 500);

	useEffect(() => {
		const params = { page: 1 };
		let response = null;
		console.log(debouncedKeyword);

		if (states === null) {
			if (debouncedKeyword !== "") {
				//fazer fetch baseado na keyword
				console.log("entrou em keyword");
				async function catchSearchData() {
					const response = await tmdbApi.search(
						mediaCategory.category,
						{ query: debouncedKeyword }
					);
					setMediaData(response.results);
				}
				catchSearchData();
			} else {
				// fazer um fetch baseado em movie ou tv popular
				//caso digite no input, fazer nova pesquisa.
				console.log("entrou em null");
				async function catchMediaWithStatesNull() {
					if (mediaCategory.category === "movie") {
						response = await tmdbApi.getMoviesList(
							movieTypes.popular,
							{
								params,
							}
						);
						setMediaData(response.results);
					} else {
						response = await tmdbApi.getTvList(tvTypes.popular, {
							params,
						});
						setMediaData(response.results);
					}
				}
				catchMediaWithStatesNull();
			}
		} else if (states && states.searchType === "discover") {
			//fazer fetch com discover
			console.log("entrou em discover");
			async function catchDiscover() {
				response = await tmdbApi.discover(
					states.category,
					states.adicionalParams
				);
				setMediaData(response.results);
			}
			catchDiscover();
		} else {
			//quando nao for discover e os states não vierem null, checar os states pra fazer o fetch
			async function catchMedia() {
				console.log("entrou em gerais");
				if (states.category === "movie") {
					response = await tmdbApi.getMoviesList(states.searchType, {
						params,
					});
					setMediaData(response.results);
				} else {
					response = await tmdbApi.getTvList(states.searchType, {
						params,
					});
					setMediaData(response.results);
				}
			}
			catchMedia();
		}
		window.scrollTo(0, 0);
	}, [mediaCategory, states, debouncedKeyword]);

	return (
		<>
			<MediaListHeader />
			{states === null ? (
				<div
					className={` w-full z-50  ${
						scrollPosition > 0 ? "fixed mt-[112px] " : ""
					}`}
				>
					<input
						className={`w-full h-24 border-none text-neutral-400 pl-[calc(50%-600px)] text-xl leading-7 font-normal appearance-none	
					bg-gradient-to-t from-neutral-700 to-neutral-600
					focus:text-neutral-50 focus:g-gradient-to-t focus:from-neutral-600 focus:to-neutral-700`}
						type="text"
						placeholder="Pesquise o título aqui"
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
				</div>
			) : (
				""
			)}
			<MainContent>
				<Container>
					<div
						className={`grid grid-cols-4 gap-10 mb-20 xl:px-2 md:grid-cols-2 xs:grid-cols-1 duration-300 ${
							scrollPosition > 0 && states === null
								? "mt-[250px]"
								: ""
						} `}
					>
						{mediaData.map((media, index) => (
							<MediaSlideContent
								key={index}
								slide={media}
								category={mediaCategory.category}
							/>
						))}
					</div>
				</Container>
			</MainContent>
		</>
	);
}

export default MediaList;
