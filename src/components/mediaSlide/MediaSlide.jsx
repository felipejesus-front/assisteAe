import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

import Container from "../Container";
import MediaSlideContent from "./MediaSlideContent";
import tmdbApi from "../../api/tmdbApi";
import { Link } from "react-router-dom";

function MediaSlide(props) {
	const [slide, setSlide] = useState([]);

	useEffect(() => {
		async function getSlides() {
			const params = { page: 1 };

			let response = null;
			if (props.searchType === "discover") {
				response = await tmdbApi.discover(props.category, {
					...params,
					...props.adicionalParams,
				});
				setSlide(response.results);
			} else if (props.searchType !== "recommendations") {
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
			} else if (props.searchType === "recommendations") {
				response = await tmdbApi.recommendations(
					props.category,
					props.id
				);
				setSlide(response.results);
			}
		}
		getSlides();
	}, [
		props.mediaType,
		props.searchType,
		props.category,
		props.adicionalParams,
		props.id,
	]);

	return (
		<div className="mb-20">
			<Container>
				<div className="flex justify-between items-center mb-2 sm:px-1">
					<h2 className="text-3xl leading-9 font-semibold xs:text-xl">
						{props.title}
					</h2>

					<Link
						to={`/${props.category}`}
						className={`py-2 px-4 text-lg rounded-lg hover:text-indigo-400  underline underline-offset-2 xs:text-sm ${
							props.searchType === "recommendations"
								? "hidden"
								: ""
						}`}
						state={{
							title: props.title,
							category: props.category,
							searchType: props.searchType,
							adicionalParams: props.adicionalParams,
						}}
					>
						Ver mais do tipo
					</Link>
				</div>
			</Container>
			<Swiper
				style={{ paddingTop: "30px", paddingBottom: "30px" }}
				className="relative  before:content-[''] before:block before:left-0 before:top-0 before:h-full before:w-[10%] before:absolute before:pointer-events-none
				before:bg-gradient-to-r from-neutral-800 before:z-10  after:content-[''] after:block after:right-0 after:top-0 after:h-full after:w-[10%] after:absolute
				after:bg-gradient-to-l after:from-neutral-800 after:z-[9] after:pointer-events-none "
				slidesPerView={1}
				initialSlide={1}
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
						<MediaSlideContent
							slide={slide}
							category={props.category}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MediaSlide;
