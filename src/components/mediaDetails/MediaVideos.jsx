import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import Container from "../Container";
import tmdbApi from "../../api/tmdbApi";

function MediaVideos({ category, id }) {
	const [videos, setVideos] = useState([]);

	useEffect(() => {
		async function getMediaVideos() {
			const catchVideos = await tmdbApi.getVideos(category, id);

			setVideos(catchVideos.results);
		}
		getMediaVideos();
	}, [category, id]);

	return (
		<div className="px-5">
			<Container>
				<h2 className="text-3xl leading-9 font-semibold mb-10">
					Trailers/Previews
				</h2>
				<div>
					<Swiper
						className="mb-20"
						slidesPerView={1}
						initialSlide={0}
						modules={[Navigation, Autoplay]}
						navigation={true}
						breakpoints={{
							1024: {
								slidesPerView: 2,
								spaceBetween: 40,
							},
						}}
					>
						{videos.map((video, index) => (
							<SwiperSlide key={index}>
								<iframe
									className="mx-auto w-[480px] h-80 lg:w-full lg:h-[500px] sm:h-[320px] xs:h-[240px]"
									src={`http://www.youtube.com/embed/${video.key}?rel=0&enablejsapi=1`}
									title={video.name}
								></iframe>
							</SwiperSlide>
						))}

						{videos.length === 0 ? (
							<p className="text-2xl leading-8 font-medium ">
								Sinto muito, mas esta mídia não possui videos
								anexados. 😔
							</p>
						) : null}
					</Swiper>
				</div>
			</Container>
		</div>
	);
}

export default MediaVideos;
