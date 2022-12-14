import IndicationsComponent from "../../indicationsComponent/IndicationsComponent";
import MediaSlide from "../mediaSlide/MediaSlide";

function MainContent() {
	return (
		<main
			className="before:content-[''] before:block before:top-0 before:h-40 before:w-full 
		before:bg-gradient-to-b from-neutral-900 sm:before:h-20"
		>
			<IndicationsComponent />
			<MediaSlide title={"Filmes em alta"} />
		</main>
	);
}

export default MainContent;
