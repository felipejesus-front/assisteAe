function Container(props) {
	return (
		<div className="max-w-[1200px] mx-auto" {...props}>
			{props.children}
		</div>
	);
}

export default Container;
