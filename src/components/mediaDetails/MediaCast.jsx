import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

import NoTitle from "../../assets/no-photo.jpg";

function MediaCast({ category, id }) {
	const [castData, setCastData] = useState([]);

	useEffect(() => {
		async function getCast() {
			const castResult = await tmdbApi.credits(category, id);
			const filtredcast = castResult.cast.slice(0, 20);
			setCastData(filtredcast);
		}
		getCast();
	}, [category, id]);

	return (
		<Container>
			<h2 className="text-3xl leading-9 font-semibold mb-10"> Elenco </h2>

			<Swiper
				className="mb-20"
				slidesPerView={6}
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
			>
				{castData.map((cast, index) => (
					<SwiperSlide
						key={index}
						className="hover:cursor-grab active:cursor-grabbing"
					>
						<div className="w-[167px]">
							<div
								className="py-[58%] bg-cover bg-center rounded-t-lg"
								style={{
									backgroundImage: `url(${
										cast.profile_path
											? apiConfig.w500Image(
													cast.profile_path
											  )
											: NoTitle
									})`,
								}}
							></div>
							<div className="h-28 text-center flex flex-col bg-neutral-50 rounded-b-lg my-auto  px-4 pt-2 pb-8">
								<p className="text-base leading-6 font-semibold text-neutral-900">
									{cast.name}
								</p>
								<div>
									<p className="text-base leading-6 font-normal text-neutral-600">
										{cast.character}
									</p>
								</div>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

export default MediaCast;
