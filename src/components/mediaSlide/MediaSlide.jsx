import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

import Container from "../Container";
import MediaSlideContent from "./MediaSlideContent";
import tmdbApi from "../../api/tmdbApi";

function MediaSlide(props) {
	const [slide, setSlide] = useState([]);

	useEffect(() => {
		async function getSlides() {
			const params = { page: 1 };

			let response = null;
			if (props.searchType === "anime") {
				console.log("chegou aqui");
				response = await tmdbApi.discover(props.category, {
					...params,
					...props.adicionalParams,
				});
				setSlide(response.results);
			} else if (props.mediaType !== "similar") {
				if (props.category === "movie") {
					response = await tmdbApi.getMoviesList(props.searchType, {
						params,
					});

					setSlide(response.results);
				} else {
					response = await tmdbApi.getTvList(props.searchType, {
						params,
					});
					setSlide(response.results);
				}
			}
		}
		getSlides();
	}, [
		props.mediaType,
		props.searchType,
		props.category,
		props.adicionalParams,
	]);

	return (
		<div className="mb-10 ">
			<Container>
				<h2 className="text-3xl leading-9 font-semibold mb-2">
					{props.title}
				</h2>
			</Container>
			<Swiper
				style={{ paddingTop: "30px", paddingBottom: "30px" }}
				className="relative  before:content-[''] before:block before:left-0 before:top-0 before:h-full before:w-[10%] before:absolute
				before:bg-gradient-to-r from-neutral-800 before:z-10  after:content-[''] after:block after:right-0 after:top-0 after:h-full after:w-[10%] after:absolute
				after:bg-gradient-to-l after:from-neutral-800 after:z-[9]"
				slidesPerView={1}
				initialSlide={0}
				navigation={true}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					420: {
						initialSlide: 2,
						slidesPerView: 2,
						spaceBetween: 40,
					},
					640: {
						initialSlide: 3,
						slidesPerView: 3,
						spaceBetween: 40,
					},
					768: {
						initialSlide: 4,
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						initialSlide: 5,
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1280: {
						initialSlide: 5,
						slidesPerView: 6,
						spaceBetween: 40,
					},
					1400: {
						initialSlide: 6,
						slidesPerView: 7,
						spaceBetween: 40,
					},
				}}
			>
				{slide.map((slide, index) => (
					<SwiperSlide key={index}>
						<MediaSlideContent slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MediaSlide;
