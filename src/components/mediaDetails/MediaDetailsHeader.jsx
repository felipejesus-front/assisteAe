import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

import useCatchClassification from "../../hooks/useCatchClassification";
import useMinutesToHour from "../../hooks/useMinutesToHour";
import Container from "../Container";

function MediaDetailsHeader(props) {
	const [rateColor, setRateColor] = useState("");

	const mediaData = props.mediaData;
	const { category } = useParams();
	const classification = useCatchClassification();
	const movieHour = useMinutesToHour(mediaData.runtime);
	const rate = Math.round(mediaData.vote_average * 10);

	useEffect(() => {
		const getColor = () => {
			if (rate > 69) {
				setRateColor("#10B981");
			} else if (rate > 39) {
				setRateColor("#FBBF24");
			} else if (rate > 0) {
				setRateColor("#EF4444");
			} else {
				setRateColor("#171717");
			}
		};
		getColor();
	}, [rate]);

	return (
		<>
			{mediaData && (
				<div
					className="flex justify-center relative bg-cover bg-no-repeat bg-left  
					before:content-[''] before:block before:bg-neutral-900 before:opacity-60 before:h-[90vh] before:w-full
					after:content-[''] after:block after:bottom-0 after:h-40 after:w-full after:absolute after:bg-gradient-to-t 
					from-neutral-900 sm:after:h-20 lg:bg-center"
					style={{
						backgroundImage: `url(${apiConfig.originalImage(
							mediaData.backdrop_path || mediaData.poster_path
						)})`,
					}}
				>
					<Container className="absolute mt-40 xs:mt-28">
						<div className="grid grid-cols-[4fr_8fr] px-4 items-center gap-10 lg:grid-cols-[1fr] lg:text-center lg:p-2">
							<div className="lg:hidden">
								{mediaData.poster_path ? (
									<img
										className={`max-w-sm shadow-2xl rounded-2xl mx-auto transition duration-300`}
										src={
											apiConfig.w500Image(
												mediaData.poster_path
											)
												? apiConfig.w500Image(
														mediaData.poster_path
												  )
												: ""
										}
										alt={mediaData.title}
									/>
								) : null}
							</div>
							<div>
								<div className="mb-10">
									<h1
										className={`text-6xl leading-[4.5rem] font-semibold duration-300 delay-300 max-w-2xl overflow-hidden sm:text-4xl`}
									>
										{mediaData.title || mediaData.name}
										<span className="text-neutral-300 font-medium">
											{`(${
												mediaData.release_date
													? mediaData.release_date.slice(
															0,
															4
													  )
													: []
											}${
												mediaData.first_air_date
													? mediaData.first_air_date.slice(
															0,
															4
													  )
													: []
											})`}
										</span>
									</h1>
									<div className="text-base leading-6, font-medium">
										{classification && (
											<span className="border-2 border-neutral-300 text-neutral-300 p-[1px] mr-6">
												{classification}
											</span>
										)}
										{`${
											mediaData.release_date
												? mediaData.release_date
														.split("-")
														.reverse()
														.join("/")
												: []
										}${
											mediaData.first_air_date
												? mediaData.first_air_date
														.split("-")
														.reverse()
														.join("/")
												: []
										}`}
										{category === "movie" &&
										mediaData.runtime > 0
											? ` - ${movieHour.hours}h ${movieHour.minutes}m`
											: ""}
									</div>
								</div>
								<h3 className="text-2xl leading-8 fonrt-semibold mb-1">
									Sinopse
								</h3>
								{mediaData.overview ? (
									<p
										alt={mediaData.title || mediaData.name}
										className={`text-base leading-6 font-medium max-w-3xl mb-5`}
									>
										{mediaData.overview}
									</p>
								) : (
									<p
										alt={mediaData.title || mediaData.name}
										className={`text-base leading-6 font-medium max-w-3xl mb-5`}
									>
										Esta mídia não possui sinopse em
										português
									</p>
								)}

								<div className="flex content-center lg:justify-center mb-10">
									<div className="h-24 w-24 mr-3 md:h-14 md:w-14">
										<CircularProgressbar
											strokeWidth={8}
											background={"#171717"}
											backgroundPadding={2}
											value={rate}
											text={rate ? `${rate}%` : "SV"}
											styles={{
												path: {
													stroke: `${rateColor}`,
													strokeLinecap: "round",
													transition:
														"stroke-dashoffset 3s ease 0s",
												},
												trail: {
													stroke: "#171717",
													strokeLinecap: "round",
												},
												text: {
													fill: "#F5F5F5",
													fontSize: "1.5rem",
												},
												background: {
													fill: "#171717",
												},
											}}
										/>
									</div>
									<div className="w-24 flex items-center md:w-14 md:text-sm">
										Avaliação dos usuários
									</div>
								</div>
								<div className="flex gap-6 content-center flex-wrap justify-start lg:justify-center ">
									{mediaData.genres
										? mediaData.genres.map(
												(item, index) => (
													<span
														key={index}
														className="px-4 py-2 rounded-lg bg-indigo-600 text-base leading-6 text-neutral-50"
													>
														{item.name}
													</span>
												)
										  )
										: ""}
								</div>
							</div>
						</div>
					</Container>
				</div>
			)}
		</>
	);
}

export default MediaDetailsHeader;
