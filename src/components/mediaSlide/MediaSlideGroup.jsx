import React from "react";
import { category, movieTypes, tvTypes } from "../../api/tmdbApi";
import MediaSlide from "./MediaSlide";

function MediaSlideGroup() {
	return (
		<div className="last:mb-20">
			<MediaSlide
				title={"Filmes em alta"}
				category={category.movie}
				searchType={movieTypes.popular}
			/>
			<MediaSlide
				title={"Séries em alta"}
				category={category.tv}
				searchType={tvTypes.popular}
			/>
			<MediaSlide
				title={"Filmes mais bem avaliados"}
				category={category.movie}
				searchType={tvTypes.top_rated}
			/>
			<MediaSlide
				title={"Séries mais bem avaliadas"}
				category={category.tv}
				searchType={tvTypes.top_rated}
			/>
			<MediaSlide
				title={"Animes"}
				category={category.tv}
				searchType={tvTypes.anime}
				adicionalParams={{ with_keywords: 210024 }}
			/>
		</div>
	);
}

export default MediaSlideGroup;
