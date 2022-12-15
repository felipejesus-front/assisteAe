import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

import Container from "../Container";
import MediaSlideContent from "./MediaSlideContent";
import tmdbApi from "../../api/tmdbApi";

function MediaSlide(props) {
	const [slide, setSlide] = useState([]);

	useEffect(() => {
		async function getSlides() {
			const params = { page: 1 };

			let response = null;
			if (props.mediaType !== "similar") {
				if (props.mediaType === "movie") {
					response = await tmdbApi.getMoviesList(props.searchType, {
						params,
					});

					setSlide(response.results);
				} else {
					response = await tmdbApi.getTvList(props.searchType, {
						params,
					});
					setSlide(response.results);
				}
			}
		}
		getSlides();
	}, [props.mediaType, props.searchType]);

	const results = [
		{
			adult: false,
			backdrop_path: "/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
			genre_ids: [28, 14, 878],
			id: 436270,
			original_language: "en",
			original_title: "Black Adam",
			overview:
				"Quase 5.000 anos depois de ter sido concedido com os poderes onipotentes dos deuses egípcios - e de ter sido preso, - Adão Negro se ergue de seu túmulo, pronto para trazer sua justiça ao mundo moderno.",
			popularity: 5382.38,
			poster_path: "/9z256FFPDsL7kSVJ9oyLELaN1ph.jpg",
			release_date: "2022-10-19",
			title: "Adão Negro",
			video: false,
			vote_average: 7.3,
			vote_count: 2743,
		},
		{
			adult: false,
			backdrop_path: "/53BC9F2tpZnsGno2cLhzvGprDYS.jpg",
			genre_ids: [14, 28, 12],
			id: 736526,
			original_language: "no",
			original_title: "Troll",
			overview:
				"Após ficar aprisionada por mil anos nas profundezas da montanha de Dovre, uma criatura gigantesca chega à superfície. Ela inicia uma jornada rumo à capital da Noruega, deixando destruição e caos em seu rastro. Um grupo de heróis se une para impedi-la. Mas como deter algo que deveria existir apenas no folclore norueguês?",
			popularity: 4159.481,
			poster_path: "/tyv3iU87q5IdTAUVLWJeILJ4Cyf.jpg",
			release_date: "2022-12-01",
			title: "O Troll da Montanha",
			video: false,
			vote_average: 6.8,
			vote_count: 563,
		},
		{
			adult: false,
			backdrop_path: "/7zQJYV02yehWrQN6NjKsBorqUUS.jpg",
			genre_ids: [28, 18, 36],
			id: 724495,
			original_language: "en",
			original_title: "The Woman King",
			overview:
				"Nanisca era a comandante do exército do Reino de Daomé, um dos locais mais poderosos da África nos séculos XVII e XIX. Durante o período, o grupo militar era composto apenas por mulheres, entre as guerreiras está a filha de Nanisca, Nawi, juntas elas combateram os colonizadores franceses, tribos rivais e todos aqueles que tentaram escravizar seu povo e destruir suas terras.",
			popularity: 2772.351,
			poster_path: "/rhsnFSInZRpAfQ4Y1gquwcKtO2I.jpg",
			release_date: "2022-09-15",
			title: "A Mulher Rei",
			video: false,
			vote_average: 7.9,
			vote_count: 714,
		},
		{
			adult: false,
			backdrop_path: "/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg",
			genre_ids: [14, 28, 35, 80],
			id: 1013860,
			original_language: "en",
			original_title: "R.I.P.D. 2: Rise of the Damned",
			overview:
				"O xerife Roy Pulsipher não está muito empolgado por se encontrar morto após um tiroteio com uma notória gangue fora da lei, mas ele tem uma segunda chance de retornar à Terra depois de ser recrutado pelo R.I.P.D. (Departamento Descanse em Paz). Mas vingar seu próprio assassinato pode ter que ficar em segundo plano para salvar o mundo quando uma porta de entrada para o inferno é aberta na antiga cidade mineira de Red Creek, ameaçando não apenas os habitantes locais, mas toda a humanidade.",
			popularity: 1817.563,
			poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
			release_date: "2022-11-15",
			title: "R.I.P.D. 2: Rise of the Damned",
			video: false,
			vote_average: 6.7,
			vote_count: 230,
		},
		{
			adult: false,
			backdrop_path: "/dsWxCsAdsocMNQFbhe39ynAOhBa.jpg",
			genre_ids: [80, 53],
			id: 1049233,
			original_language: "pl",
			original_title: "Plan lekcji",
			overview:
				"Para investigar a morte do melhor amigo, um ex-policial vai trabalhar numa escola para investigar a gangue local.",
			popularity: 1682.876,
			poster_path: "/akK0REohti8YWwGZGD1MHPZvBRh.jpg",
			release_date: "2022-11-23",
			title: "Plano de Aula",
			video: false,
			vote_average: 6.1,
			vote_count: 52,
		},
		{
			adult: false,
			backdrop_path: "/83IYtUhc7Vs8XYi5UYc2lUKuyMo.jpg",
			genre_ids: [28, 12, 80, 9648, 53],
			id: 873126,
			original_language: "it",
			original_title: "Il mio nome è vendetta",
			overview:
				"Sofia era uma adolescente como qualquer outra, que gostava de dividir seu tempo livre entre partidas de hóquei e aulas de direção off-road — até o dia em que ela desobedece às ordens do pai e posta, em segredo, uma foto dele no Instagram. Mal sabia ela que aquele post mudaria as vidas deles para sempre. Seguindo as pistas no mundo online, dois criminosos conseguem encontrar a casa da família e acabam assassinando, a sangue frio, a mãe e o tio da jovem. A tragédia vai dar início a um acerto de contas que estava dormente por quase vinte anos.",
			popularity: 1918.725,
			poster_path: "/tlZGDi8anF7Fcs5HGVaTEMnv1hp.jpg",
			release_date: "2022-11-30",
			title: "Meu Nome é Vingança",
			video: false,
			vote_average: 6.8,
			vote_count: 148,
		},
		{
			adult: false,
			backdrop_path: "/jCY35GkjwWUmoPO9EV1lWL6kuyj.jpg",
			genre_ids: [28, 12, 53],
			id: 855440,
			original_language: "es",
			original_title: "Polar",
			overview: "",
			popularity: 1463.758,
			poster_path: "/efuKHH9LqBZB67AS87kprLgaYO8.jpg",
			release_date: "2022-10-26",
			title: "Polar",
			video: false,
			vote_average: 7.3,
			vote_count: 4,
		},
		{
			adult: false,
			backdrop_path: "/3RJ0B8JnwuOaQf6qmwTILXibcJj.jpg",
			genre_ids: [28, 878, 14],
			id: 941520,
			original_language: "en",
			original_title: "Alien Sniperess",
			overview: "",
			popularity: 1343.622,
			poster_path: "/bI1ZDRkerXrcaFa5kWjEMw80aqE.jpg",
			release_date: "2022-04-08",
			title: "Alien Sniperess",
			video: false,
			vote_average: 3.9,
			vote_count: 8,
		},
		{
			adult: false,
			backdrop_path: "/198vrF8k7mfQ4FjDJsBmdQcaiyq.jpg",
			genre_ids: [878, 28, 12],
			id: 76600,
			original_language: "en",
			original_title: "Avatar: The Way of Water",
			overview:
				"12 anos depois de explorar Pandora e se juntar aos Na'vi, Jake Sully formou uma família com Neytiri e se estabeleceu entre os clãs do novo mundo. Porém, a paz não durará para sempre.",
			popularity: 1646.04,
			poster_path: "/tnmdUnztAYbfJ0jhjpN6oxwP2sb.jpg",
			release_date: "2022-12-14",
			title: "Avatar: O Caminho da Água",
			video: false,
			vote_average: 8.5,
			vote_count: 33,
		},
		{
			adult: false,
			backdrop_path: "/xDMIl84Qo5Tsu62c9DGWhmPI67A.jpg",
			genre_ids: [28, 12, 878],
			id: 505642,
			original_language: "en",
			original_title: "Black Panther: Wakanda Forever",
			overview:
				"Rainha Ramonda, Shuri, M'Baku, Okoye e Dora Milaje, lutam para proteger sua nação das potências mundiais intervenientes após a morte do rei T'Challa. Enquanto os wakandanos se esforçam para abraçar seu próximo capítulo, os heróis devem se unir com a ajuda de War Dog Nakia e Everett Ross e forjar um novo caminho para o reino de Wakanda.",
			popularity: 1597.924,
			poster_path: "/6tb0qiqLN9szHPA4i0kY38oaWew.jpg",
			release_date: "2022-11-09",
			title: "Pantera Negra: Wakanda para Sempre",
			video: false,
			vote_average: 7.5,
			vote_count: 1314,
		},
		{
			adult: false,
			backdrop_path: "/vmDa8HijINCAFYKqsMz0YM3sVyE.jpg",
			genre_ids: [28, 80, 53],
			id: 747803,
			original_language: "en",
			original_title: "One Way",
			overview:
				"Freddy, um pequeno criminoso, está fugindo com um saco cheio de dinheiro e cocaína após um assalto. Gravemente ferido e muito machucado Freddy entra em um ônibus sujo onde conhece uma garota misteriosa e um passageiro assustador.",
			popularity: 1439.769,
			poster_path: "/ihss7lYlG9xON9RnOIy2pwLbdLX.jpg",
			release_date: "2022-09-02",
			title: "Bilhete de Fuga",
			video: false,
			vote_average: 6.9,
			vote_count: 33,
		},
		{
			adult: false,
			backdrop_path: "/sP1ShE4BGLkHSRqG9ZeGHg6C76t.jpg",
			genre_ids: [53, 80],
			id: 934641,
			original_language: "en",
			original_title: "The Minute You Wake Up Dead",
			overview:
				"Um corretor da bolsa em uma pequena cidade do sul que se envolve em um golpe de seguro com um vizinho que leva a vários assassinatos.",
			popularity: 1275.28,
			poster_path: "/pUPwTbnAqfm95BZjNBnMMf39ChT.jpg",
			release_date: "2022-11-04",
			title: "The Minute You Wake Up Dead",
			video: false,
			vote_average: 5.5,
			vote_count: 26,
		},
		{
			adult: false,
			backdrop_path: "/5aSvzECXrtABcIh7fZYkH2K6ttC.jpg",
			genre_ids: [28, 53, 80],
			id: 972313,
			original_language: "en",
			original_title: "Blowback",
			overview:
				"Depois de planejar um assalto perfeito, Nick está pronto para marcar. Um problema, sua garota e a tripulação, têm outras ideias. Eles derrubam Nick em uma saraivada de balas, mas Nick não morre e, em uma corrida por sua vida, busca vingança um alvo de cada vez.",
			popularity: 951.824,
			poster_path: "/4BjZazpKwzrdTVrCRjZSUWJMHJo.jpg",
			release_date: "2022-06-17",
			title: "Roubo Entre Ladrões",
			video: false,
			vote_average: 5.8,
			vote_count: 25,
		},
		{
			adult: false,
			backdrop_path: "/au4HUSWDRadIcl9CqySlw1kJMfo.jpg",
			genre_ids: [80, 28, 53],
			id: 829799,
			original_language: "en",
			original_title: "Paradise City",
			overview:
				"Willis interpreta o caçador de recompensas renegado, Ryan Swan, que deve abrir caminho no mundo do crime havaiano para se vingar do chefão, interpretado por Travolta, que assassinou seu pai.",
			popularity: 1175.833,
			poster_path: "/xdmmd437QdjcCls8yCQxrH5YYM4.jpg",
			release_date: "2022-11-11",
			title: "Paradise City",
			video: false,
			vote_average: 6.2,
			vote_count: 40,
		},
		{
			adult: false,
			backdrop_path: "/2xbuun5NQ1exyvDhxJyXPX2GBsw.jpg",
			genre_ids: [18],
			id: 1041898,
			original_language: "tl",
			original_title: "Pamasahe",
			overview: "",
			popularity: 1066.932,
			poster_path: "/njvam4Ub6rmq8ygjkz34F5NzqA3.jpg",
			release_date: "2022-12-09",
			title: "Pamasahe",
			video: false,
			vote_average: 6,
			vote_count: 2,
		},
		{
			adult: false,
			backdrop_path: "/ggS7TQgu34Lct30MFwNlxVRJOia.jpg",
			genre_ids: [80, 10770],
			id: 937046,
			original_language: "fr",
			original_title: "L'oubliée d'Amboise",
			overview: "",
			popularity: 907.228,
			poster_path: "/n7Per7QRNDcjTyDg8qHvotOBion.jpg",
			release_date: "2022-04-03",
			title: "L'oubliée d'Amboise",
			video: false,
			vote_average: 6.7,
			vote_count: 8,
		},
		{
			adult: false,
			backdrop_path: "/8Tr79lfoCkOYRg8SYwWit4OoQLi.jpg",
			genre_ids: [878, 28],
			id: 872177,
			original_language: "en",
			original_title: "Corrective Measures",
			overview:
				"Situado na penitenciária de segurança máxima mais perigosa do mundo, lar dos criminosos mais traiçoeiros, as tensões entre os presos e funcionários aumentam, levando à anarquia que engole a prisão e a ordem é virada de cabeça para baixo.",
			popularity: 813.277,
			poster_path: "/mIus2B83moSdfIkD4wD7tOaG5Y1.jpg",
			release_date: "2022-04-29",
			title: "Corrective Measures – Fuga da Prisão",
			video: false,
			vote_average: 5.2,
			vote_count: 37,
		},
		{
			adult: false,
			backdrop_path: "/Yc9q6QuWrMp9nuDm5R8ExNqbEq.jpg",
			genre_ids: [28, 12, 14, 878],
			id: 19995,
			original_language: "en",
			original_title: "Avatar",
			overview:
				"Apesar de não ter mais os movimentos da perna, o ex-fuzileiro naval Jake Sully ainda sente que pode ser um guerreiro. Sua intuição começa a se tornar realidade quando ele viaja anos-luz até a estação espacial montada no Planeta Pandora. Habitado por grandes seres azuis, os Na´vi, o local tem uma atmosfera fatal para qualquer terrestre. Por isso, oficiais criaram o programa Avatar, em que um corpo biológico, híbrido de humano e Na´vi, pode ser comandado a distância.",
			popularity: 931.517,
			poster_path: "/2QlRq0MEx8IEODKNbGZyu3Sz5UV.jpg",
			release_date: "2009-12-15",
			title: "Avatar",
			video: false,
			vote_average: 7.5,
			vote_count: 26798,
		},
		{
			adult: false,
			backdrop_path: "/sUuzl04qNIYsnwCLQpZ2RSvXA1V.jpg",
			genre_ids: [35, 28, 53],
			id: 792775,
			original_language: "is",
			original_title: "Leynilögga",
			overview: "",
			popularity: 917.13,
			poster_path: "/h4ODgrg4IcD3frFY45ULgrYpCMA.jpg",
			release_date: "2022-05-23",
			title: "Leynilögga",
			video: false,
			vote_average: 6.3,
			vote_count: 35,
		},
		{
			adult: false,
			backdrop_path: "/c1bz69r0v065TGFA5nqBiKzPDys.jpg",
			genre_ids: [35, 10751, 10402],
			id: 830784,
			original_language: "en",
			original_title: "Lyle, Lyle, Crocodile",
			overview:
				"Quando a família Primm se muda para Nova York, seu filho Josh luta para se adaptar à nova escola e aos novos amigos. Tudo isso muda quando ele descobre Lilo – um crocodilo cantor que adora banhos, caviar e boa música – morando no sótão de sua nova casa. Mas quando a existência de Lilo é ameaçada pelo vizinho malvado Sr. Grumps, os Primms devem se unir para mostrar ao mundo que a família pode vir dos lugares mais inesperados.",
			popularity: 701.859,
			poster_path: "/v4cqxZz2mHS0iyXvladOVltjJLQ.jpg",
			release_date: "2022-10-07",
			title: "Lilo, Lilo, Crocodilo",
			video: false,
			vote_average: 8,
			vote_count: 170,
		},
	];

	return (
		<div className="mb-10 ">
			<Container>
				<h2 className="text-3xl leading-9 font-semibold">
					{props.title}
				</h2>
			</Container>
			<Swiper
				style={{ paddingTop: "30px", paddingBottom: "30px" }}
				className="relative  before:content-[''] before:block before:left-0 before:top-0 before:h-full before:w-[10%] before:absolute
				before:bg-gradient-to-r from-neutral-800 before:z-10  after:content-[''] after:block after:right-0 after:top-0 after:h-full after:w-[10%] after:absolute
				after:bg-gradient-to-l after:from-neutral-800 after:z-[9]"
				slidesPerView={1}
				initialSlide={0}
				navigation={true}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					420: {
						initialSlide: 2,
						slidesPerView: 2,
						spaceBetween: 40,
					},
					640: {
						initialSlide: 3,
						slidesPerView: 3,
						spaceBetween: 40,
					},
					768: {
						initialSlide: 4,
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						initialSlide: 5,
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1280: {
						initialSlide: 5,
						slidesPerView: 6,
						spaceBetween: 40,
					},
					1400: {
						initialSlide: 6,
						slidesPerView: 7,
						spaceBetween: 40,
					},
				}}
			>
				{slide.map((slide, index) => (
					<SwiperSlide key={index}>
						<MediaSlideContent slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MediaSlide;
