import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import MainContent from "../mainContent/MainContent";
import MediaSlide from "../mediaSlide/MediaSlide";
import MediaCast from "./MediaCast";
import MediaDetailsHeader from "./MediaDetailsHeader";
import MediaVideos from "./MediaVideos";
import MediaWatch from "./MediaWatch";

function MediaDetails() {
	const { category, id } = useParams();
	const [media, setMedia] = useState([]);
	useEffect(() => {
		async function getMediaDetails() {
			const params = {};
			try {
				const mediaData = await tmdbApi.detail(category, id, {
					params,
				});
				setMedia(mediaData);

				window.scrollTo(0, 0);
			} catch (error) {
				throw error;
			}
		}
		getMediaDetails();
	}, [category, id]);

	return (
		<>
			<MediaDetailsHeader mediaData={media} />
			<MainContent>
				<MediaWatch category={category} id={id} />
				<MediaCast category={category} id={id} />
				<MediaVideos category={category} id={id} />
				<MediaSlide
					title={"Recomendações"}
					category={category}
					searchType="recommendations"
					id={id}
				/>
			</MainContent>
		</>
	);
}

export default MediaDetails;
