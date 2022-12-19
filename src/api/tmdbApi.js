import apiConfig from "./apiConfig";
import axiosClient from "./axiosClient";

export const category = {
	movie: "movie",
	tv: "tv",
};

export const movieTypes = {
	upcoming: "upcoming",
	popular: "popular",
	top_rated: "top_rated",
	discover: "discover",
};

export const tvTypes = {
	popular: "popular",
	top_rated: "top_rated",
	on_the_air: "on_the_air",
	discover: "discover",
};

export const indications = [
	{
		logo: apiConfig.w500Image("q9rPBG1rHbUjII1Qn98VG2v7cFa.png"),
		category: category.tv,
		params: {
			language: "pt-BR",
			sort_by: "popularity.desc",
			page: 1,
			with_networks: 43,
		},
	},
	{
		logo: apiConfig.w500Image("jTPNzDEn7eHmp3nEXEEtkHm6jLg.png"),
		category: category.tv,
		params: {
			language: "pt-BR",
			sort_by: "popularity.desc",
			page: 1,
			with_companies: 3475,
		},
	},
	{
		logo: apiConfig.w500Image("837VMM4wOkODc1idNxGT0KQJlej.png"),
		category: category.movie,
		params: {
			language: "pt-BR",
			sort_by: "popularity.desc",
			page: 1,
			with_companies: 7505,
		},
	},
	{
		logo: apiConfig.w500Image("kGRavMqgyx4p2X4C96bjRCj50oI.png"),
		category: category.tv,
		params: {
			language: "pt-BR",
			sort_by: "popularity.desc",
			page: 1,
			with_networks: 98,
		},
	},
];

const tmdbApi = {
	getMoviesList: (type, params) => {
		const url = "movie/" + movieTypes[type];
		return axiosClient.get(url, params);
	},
	getTvList: (type, parametro) => {
		const url = "tv/" + tvTypes[type];
		return axiosClient.get(url, parametro);
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
	recommendations: (categ, id) => {
		const url = category[categ] + "/" + id + "/recommendations";
		return axiosClient.get(url, { params: {} });
	},
	discover: (categ, params) => {
		const url = "discover/" + category[categ];
		return axiosClient.get(url, { params });
	},
	getMovieClassification: (id) => {
		const url = "movie/" + id + "/release_dates";
		return axiosClient.get(url, { params: {} });
	},
	getTvClassification: (id) => {
		const url = "tv/" + id + "/content_ratings";
		return axiosClient.get(url, { params: {} });
	},
	getProviders: (categ, id) => {
		const url = category[categ] + "/" + id + "/watch/providers";
		return axiosClient.get(url, { params: {} });
	},
};

export default tmdbApi;
