import IndicationsComponent from "../../indicationsComponent/IndicationsComponent";
import MediaSlideGroup from "../mediaSlide/MediaSlideGroup";

function MainContent() {
	return (
		<main
			className="before:content-[''] before:block before:top-0 before:h-40 before:w-full 
		before:bg-gradient-to-b from-neutral-900 sm:before:h-20"
		>
			<IndicationsComponent />
			<MediaSlideGroup />
		</main>
	);
}

export default MainContent;
