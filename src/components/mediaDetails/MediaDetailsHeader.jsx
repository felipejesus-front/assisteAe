import React from "react";
import { useParams } from "react-router-dom";
import apiConfig from "../../api/apiConfig";

import useCatchClassification from "../../hooks/useCatchClassification";
import useMinutesToHour from "../../hooks/useMinutesToHour";
import Container from "../Container";

function MediaDetailsHeader(props) {
	const mediaData = props.mediaData;
	const { category } = useParams();
	const classification = useCatchClassification();
	const movieHour = useMinutesToHour(mediaData.runtime);

	return (
		<>
			{mediaData && (
				<div
					className="flex justify-center relative 
bg-cover bg-no-repeat bg-left lg:bg-center
before:content-[''] before:block before:bg-neutral-900 before:opacity-60 before:h-[90vh] before:w-full
after:content-[''] after:block after:bottom-0 after:h-40 after:w-full after:absolute
after:bg-gradient-to-t from-neutral-900 sm:after:h-20"
					style={{
						backgroundImage: `url(${apiConfig.originalImage(
							mediaData.backdrop_path || mediaData.poster_path
						)})`,
					}}
				>
					<Container className="absolute mt-40">
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
														.join("-")
												: []
										}`}
										{category === "movie" &&
										mediaData.runtime > 0
											? ` - ${movieHour.hours}h ${movieHour.minutes}m`
											: ""}
									</div>
								</div>

								<p
									alt="slide.overview"
									className={`text-2xl leading-8 font-medium max-w-2xl mb-5 max-h-[6ch] overflow-hidden
										duration-300 delay-[600ms] 
										`}
								>
									{mediaData.overview}
								</p>
							</div>
						</div>
					</Container>
				</div>
			)}
		</>
	);
}

export default MediaDetailsHeader;
