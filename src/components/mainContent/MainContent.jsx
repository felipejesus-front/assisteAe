function MainContent(props) {
	return (
		<main
			className="before:content-[''] before:block before:top-0 before:h-40 before:w-full 
		before:bg-gradient-to-b from-neutral-900 sm:before:h-20"
		>
			{props.children}
		</main>
	);
}

export default MainContent;
