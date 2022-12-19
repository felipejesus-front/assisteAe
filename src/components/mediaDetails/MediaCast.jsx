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
				slidesPerView={1}
				initialSlide={0}
				scrollbar={{
					hide: true,
				}}
				modules={[Scrollbar]}
				breakpoints={{
					420: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					640: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1280: {
						slidesPerView: 6,
						spaceBetween: 40,
					},
				}}
			>
				{castData.map((cast, index) => (
					<SwiperSlide
						key={index}
						className="hover:cursor-grab active:cursor-grabbing"
					>
						<div className="w-[167px] sm:mx-auto">
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
				{castData.length === 0 ? (
					<p className="text-2xl leading-8 font-medium ">
						Que pena... mas esta mídia não possui elenco cadastrado.
						😔
					</p>
				) : null}
			</Swiper>
		</Container>
	);
}

export default MediaCast;
