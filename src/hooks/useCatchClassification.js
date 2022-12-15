import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdbApi from "../api/tmdbApi";

function useCatchClassification() {
	const [classification, setClassification] = useState("");
	const { category, id } = useParams();

	useEffect(() => {
		async function getClassification() {
			const params = {};
			try {
				if (category === "movie") {
					const classificationData =
						await tmdbApi.getMovieClassification(id, {
							params,
						});

					const classificationBR = classificationData.results.filter(
						(i) => i.iso_3166_1 === "BR"
					)[0].release_dates[0].certification;

					setClassification(classificationBR);
				} else {
					const classificationData =
						await tmdbApi.getTvClassification(id, {
							params,
						});
					const classificationBR = classificationData.results.filter(
						(i) => i.iso_3166_1 === "BR"
					)[0].rating;

					setClassification(classificationBR);
				}

				window.scrollTo(0, 0);
			} catch (error) {
				throw error;
			}
		}
		getClassification();
	}, [category, id]);
	return classification;
}

export default useCatchClassification;
