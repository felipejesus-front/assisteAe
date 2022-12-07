const apiConfig = {
	baseUrl: "https://api.themoviedb.org/3/",
	apiKey: "563f5eb3b45a0bc0dd78658c3f090ce3",
	originalImage: (imgPath) =>
		`https://image.tmdb.org/t/p/original/${imgPath}`,
	w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
