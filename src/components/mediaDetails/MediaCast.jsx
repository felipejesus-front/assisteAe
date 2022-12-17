import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";

import { Scrollbar } from "swiper";

import React, { useEffect, useState } from "react";
import Container from "../Container";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

import NoTitle from "../../assets/no-photo.jpg";

const response = [
	{
		adult: false,
		gender: 2,
		id: 18918,
		known_for_department: "Acting",
		name: "Dwayne Johnson",
		original_name: "Dwayne Johnson",
		popularity: 33.202,
		profile_path: "/cgoy7t5Ve075naBPcewZrc08qGw.jpg",
		cast_id: 0,
		character: "Black Adam / Teth Adam",
		credit_id: "59e392f39251410b67000225",
		order: 0,
	},
	{
		adult: false,
		gender: 2,
		id: 83860,
		known_for_department: "Acting",
		name: "Aldis Hodge",
		original_name: "Aldis Hodge",
		popularity: 14.798,
		profile_path: "/jPpnaAGFXaIeOrRNUHIHxk3fIJL.jpg",
		cast_id: 22,
		character: "Hawkman / Carter Hall",
		credit_id: "5f6e562f7aecc60037cf27ae",
		order: 1,
	},
	{
		adult: false,
		gender: 2,
		id: 1253353,
		known_for_department: "Acting",
		name: "Noah Centineo",
		original_name: "Noah Centineo",
		popularity: 20.088,
		profile_path: "/p1bcst401RyxfDGykx2iQLI7CV5.jpg",
		cast_id: 21,
		character: "Atom Smasher / Al Rothstein",
		credit_id: "5f10aba72495ab003535d231",
		order: 2,
	},
	{
		adult: false,
		gender: 1,
		id: 164945,
		known_for_department: "Acting",
		name: "Sarah Shahi",
		original_name: "Sarah Shahi",
		popularity: 47.733,
		profile_path: "/jD9ClkkpxwjL5da16m8yDedVA9k.jpg",
		cast_id: 25,
		character: "Adrianna Tomaz",
		credit_id: "5f8721efd4b9d9003726be92",
		order: 3,
	},
	{
		adult: false,
		gender: 3,
		id: 2042690,
		known_for_department: "Acting",
		name: "Quintessa Swindell",
		original_name: "Quintessa Swindell",
		popularity: 24.508,
		profile_path: "/xKUFfFJR6o5Ka7AmetGMYjSmBGO.jpg",
		cast_id: 27,
		character: "Cyclone / Maxine Hunkel",
		credit_id: "5fd7cca0b0ba7e003f2db197",
		order: 4,
	},
	{
		adult: false,
		gender: 2,
		id: 935235,
		known_for_department: "Acting",
		name: "Marwan Kenzari",
		original_name: "Marwan Kenzari",
		popularity: 6.757,
		profile_path: "/66903sgNtyzHN0Mi3D88UYgbH86.jpg",
		cast_id: 32,
		character: "Ishmael / Sabbac / King Ahk-Ton",
		credit_id: "602d7334d5569700415a6279",
		order: 5,
	},
	{
		adult: false,
		gender: 2,
		id: 1293978,
		known_for_department: "Acting",
		name: "Mo Amer",
		original_name: "Mo Amer",
		popularity: 3.21,
		profile_path: "/vA78SdELZxQCLt7BF3OOHMxlh87.jpg",
		cast_id: 36,
		character: "Karim",
		credit_id: "6076469fb76cbb00593ad2cb",
		order: 6,
	},
	{
		adult: false,
		gender: 2,
		id: 2426321,
		known_for_department: "Acting",
		name: "Bodhi Sabongui",
		original_name: "Bodhi Sabongui",
		popularity: 5.015,
		profile_path: "/eSsi0SrWwp3TfXeUo7HfXqlROjG.jpg",
		cast_id: 35,
		character: "Amon Tomaz",
		credit_id: "60704edc924ce5003f33de9c",
		order: 7,
	},
	{
		adult: false,
		gender: 2,
		id: 517,
		known_for_department: "Acting",
		name: "Pierce Brosnan",
		original_name: "Pierce Brosnan",
		popularity: 38.221,
		profile_path: "/dzXVwwJLPwiZeXOnf7YxorqVEEM.jpg",
		cast_id: 33,
		character: "Dr. Fate / Kent Nelson",
		credit_id: "605bb655cedac4006bc75348",
		order: 8,
	},
	{
		adult: false,
		gender: 2,
		id: 2430192,
		known_for_department: "Acting",
		name: "James Cusati-Moyer",
		original_name: "James Cusati-Moyer",
		popularity: 4.531,
		profile_path: "/hzdNg0B4iyslssXP0FuYXIS3P7I.jpg",
		cast_id: 34,
		character: "Samir",
		credit_id: "606e29a46b5fc200575e5186",
		order: 9,
	},
	{
		adult: false,
		gender: 2,
		id: 1925441,
		known_for_department: "Acting",
		name: "Jalon Christian",
		original_name: "Jalon Christian",
		popularity: 2.566,
		profile_path: "/4LERZ6t9aQdze9Kw8yoGSTZsLES.jpg",
		cast_id: 171,
		character: "Hurut",
		credit_id: "635db3301dbc880079b5fb24",
		order: 10,
	},
];

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
