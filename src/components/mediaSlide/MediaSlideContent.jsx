import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import apiConfig from "../../api/apiConfig";
import NoTitle from "../../assets/notitle.jpg";

function MediaSlideContent(props) {
	const [rateColor, setRateColor] = useState("");
	const slide = props.slide;
	const rate = Math.round(slide.vote_average * 10);

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
		<div className="md:mx-auto group ">
			<a href="/" className="relative">
				<div className="mb-2 group-hover:scale-105 duration-300">
					<div
						className="flex justify-center items-center relative py-[80%] rounded-md bg-cover 
						md:mx-auto  md:h-[300px] md:w-[200px] md:pt-0 group-hover:border-2 group-hover:border-neutral-200
						after:content-['Detalhes'] after:absolute after:py-2 after:px-4 after:bg-indigo-600 after:rounded-lg
						after:drop-shadow-button after:hidden group-hover:after:block
						before:h-full before:rounded before:w-full before:bg-neutral-900 before:absolute before:opacity-60 before:hidden group-hover:before:block"
						style={{
							backgroundImage: `url(${
								slide.poster_path
									? apiConfig.w500Image(slide.poster_path)
									: NoTitle
							})`,
						}}
					></div>
					<div className="h-9 w-9 absolute -top-4 right-1">
						<CircularProgressbar
							strokeWidth={8}
							background={"#171717"}
							backgroundPadding={5}
							value={rate}
							text={rate ? `${rate}%` : "SV"}
							styles={{
								path: {
									// Path color
									stroke: `${rateColor}`,
									// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
									strokeLinecap: "round",
									// Customize transition animation
									transition: "stroke-dashoffset 3s ease 0s",
								},
								trail: {
									// Trail color
									stroke: "#171717",
									// Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
									strokeLinecap: "round",
								},
								text: {
									// Text color
									fill: "#F5F5F5",
									// Text size
									fontSize: "1.5rem",
								},
								background: {
									fill: "#171717",
								},
							}}
						/>
					</div>
				</div>
				<h3 className="text-xl leading-7 font-medium max-h-[4.5ch] md:text-center overflow-hidden ">
					{slide.title || slide.name}
				</h3>
			</a>
		</div>
	);
}

export default MediaSlideContent;
