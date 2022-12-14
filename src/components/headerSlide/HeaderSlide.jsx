import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";
import apiConfig from "../../api/apiConfig";
import Container from "../Container";
import { useEffect, useState } from "react";
import tmdbApi, { movieTypes } from "../../api/tmdbApi";

function HeaderSlide() {
	const [slide, setSlide] = useState([]);

	useEffect(() => {
		async function getSlides() {
			const params = { page: 1 };
			try {
				const response = await tmdbApi.getMoviesList(
					movieTypes.popular,
					{ params }
				);
				setSlide(response.results.slice(0, 10));
			} catch (error) {
				throw error;
			}
		}
		getSlides();
	}, []);
	return (
		<section>
			<Swiper
				slidesPerView={1}
				spaceBetween={0}
				loop={true}
				pagination={{
					clickable: true,
				}}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				modules={[Pagination, Autoplay]}
			>
				<div>
					{slide.map((slide, index) => (
						<SwiperSlide
							key={index}
							className="flex justify-center relative 
							bg-cover bg-no-repeat bg-center
							before:content-[''] before:block before:bg-neutral-900 before:opacity-60 before:h-[90vh] before:w-full
							after:content-[''] after:block after:bottom-0 after:h-40 after:w-full after:absolute
							after:bg-gradient-to-t from-neutral-900 sm:after:h-20"
							style={{
								backgroundImage: `url(${apiConfig.originalImage(
									slide.backdrop_path
								)})`,
							}}
						>
							{({ isActive }) => (
								<Container className="absolute mt-40">
									<div className="grid grid-cols-[7fr_5fr] px-4 items-center gap-10 lg:grid-cols-[1fr] lg:text-center lg:p-2">
										<div>
											<h1
												className={`text-6xl leading-none font-semibold duration-300 delay-300
											 mb-10 max-w-2xl max-h-[3ch] overflow-hidden sm:text-4xl sm:max-h-[3.5ch]
											 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-24"}`}
											>
												{slide.title}
											</h1>
											<p
												className={`text-2xl leading-8 font-medium max-w-2xl mb-5 max-h-[6ch] overflow-hidden
											duration-300 delay-[600ms] 
											${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"}`}
											>
												{slide.overview}
											</p>
											<a
												href="/"
												className={`inline-block 
				  								text-2xl leading-8 font-semibold  
												py-4 px-8 bg-indigo-600 rounded-lg drop-shadow-button 
												hover:scale-105 transition-[300] duration-300 delay-[600ms] ${
													isActive
														? "opacity-100 scale-100"
														: "opacity-0 scale-0"
												} `}
											>
												Mais Detalhes
											</a>
										</div>
										<div className="lg:hidden">
											<img
												className={`max-w-sm shadow-2xl rounded-2xl mx-auto transition duration-300 ${
													isActive
														? "opacity-100 scale-100"
														: "opacity-0 scale-0"
												}  `}
												src={apiConfig.w500Image(
													slide.poster_path
												)}
												alt={slide.title}
											/>
										</div>
									</div>
								</Container>
							)}
						</SwiperSlide>
					))}
				</div>
			</Swiper>
		</section>
	);
}

export default HeaderSlide;
