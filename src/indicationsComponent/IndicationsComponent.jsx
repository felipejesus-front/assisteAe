import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { indications } from "../api/tmdbApi";
import Container from "../components/Container";
import { Link } from "react-router-dom";

function IndicationsComponent() {
	return (
		<Container>
			<Swiper
				style={{ paddingLeft: "40px", paddingRight: "40px" }}
				className="pl-[40px] pr-10  -mt-40 sm:-mt-20 mx-20"
				slidesPerView={1}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				breakpoints={{
					640: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
				}}
				modules={[Pagination]}
			>
				{indications.map((indication, index) => (
					<SwiperSlide key={index} className="my-20">
						<Link
							to={"/"}
							key={index}
							className="bg-neutral-500 flex justify-center items-center h-40 max-w-[270px] hover:scale-105 rounded-lg duration-300 relative
							 hover:drop-shadow-button hover:bg-neutral-400  lg:mx-auto border-2 border-neutral-400 "
						>
							<img
								className="max-w-[200px] z-10 pointer-events-none"
								src={indication.logo}
								alt=""
							/>
							<div className="absolute hover:bg-indication-bg top-0 h-40 w-full box-border rounded-lg flex justify-center items-center hover:animate-pulse"></div>
						</Link>
					</SwiperSlide>
				))}
			</Swiper>
		</Container>
	);
}

export default IndicationsComponent;
