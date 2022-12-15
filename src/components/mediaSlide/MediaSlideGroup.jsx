import React from "react";
import { category, movieTypes, tvTypes } from "../../api/tmdbApi";
import MediaSlide from "./MediaSlide";

function MediaSlideGroup() {
	return (
		<div>
			<MediaSlide
				title={"Filmes em alta"}
				mediaType={category.movie}
				searchType={movieTypes.popular}
			/>
			<MediaSlide
				title={"Séries em alta"}
				mediaType={category.tv}
				searchType={tvTypes.popular}
			/>
		</div>
	);
}

export default MediaSlideGroup;
