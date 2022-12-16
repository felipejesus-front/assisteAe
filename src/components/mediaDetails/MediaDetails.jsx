import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../../api/tmdbApi";
import MainContent from "../mainContent/MainContent";
import MediaDetailsHeader from "./MediaDetailsHeader";
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
			</MainContent>
		</>
	);
}

export default MediaDetails;
