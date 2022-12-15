import React from "react";
import IndicationsComponent from "../indicationsComponent/IndicationsComponent";
import HeaderSlide from "./headerSlide/HeaderSlide";
import MainContent from "./mainContent/MainContent";
import MediaSlideGroup from "./mediaSlide/MediaSlideGroup";

function Home() {
	return (
		<>
			<HeaderSlide />
			<MainContent>
				<IndicationsComponent />
				<MediaSlideGroup />
			</MainContent>
		</>
	);
}

export default Home;
