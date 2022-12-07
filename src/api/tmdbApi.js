import axiosClient from "./axiosClient";

export const category = {
	movie: "movie",
	tv: "tv",
};

export const movieTypes = {
	upcoming: "upcoming",
	popular: "popular",
	top_rated: "top_rated",
};

export const tvTypes = {
	popular: "popular",
	top_rated: "top_rated",
	on_the_air: "on_the_air",
};

const tmdbApi = {
	getMoviesList: (type, params) => {
		const url = "movie/" + movieTypes[type];
		return axiosClient.get(url, params);
	},
	getTvList: (type, params) => {
		const url = "tv/" + tvTypes[type];
		return axiosClient.get(url, params);
	},
	getVideos: (categ, id) => {
		const url = category[categ] + "/" + id + "/videos";
		return axiosClient.get(url, { params: {} });
	},
	search: (categ, params) => {
		const url = "search/" + category[categ];
		return axiosClient.get(url, params);
	},
	detail: (categ, id, params) => {
		const url = category[categ] + "/" + id;
		return axiosClient.get(url, params);
	},
	credits: (categ, id) => {
		const url = category[categ] + "/" + id + "/credits";
		return axiosClient.get(url, { params: {} });
	},
	similar: (categ, id) => {
		const url = category[categ] + "/" + id + "/similar";
		return axiosClient.get(url, { params: {} });
	},
};

export default tmdbApi;
