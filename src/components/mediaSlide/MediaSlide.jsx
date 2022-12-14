import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css/navigation";

import Container from "../Container";
import MediaSlideContent from "./MediaSlideContent";

const results = [
	{
		backdrop_path: "/5DUMPBSnHOZsbBv81GFXZXvDpo6.jpg",
		first_air_date: "2022-10-12",
		genre_ids: [16, 10759, 10765, 35],
		id: 114410,
		name: "Chainsaw Man",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "チェンソーマン",
		overview:
			"Denji tem um sonho simples - viver uma vida feliz e pacífica, passando um tempo com uma garota de quem gosta. Isso está muito longe da realidade, no entanto, já que Denji é forçado pela yakuza a matar demônios para pagar suas dívidas esmagadoras. Usando seu demônio de estimação Pochita como arma, ele está pronto para fazer qualquer coisa por um pouco de dinheiro.",
		popularity: 951.723,
		poster_path: "/aPfMRlMwHwpnep8l4sScdBeGRpu.jpg",
		vote_average: 8.6,
		vote_count: 388,
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
		popularity: 2605.73,
		poster_path: "/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg",
		release_date: "2022-11-15",
		title: "R.I.P.D. 2: Rise of the Damned",
		video: false,
		vote_average: 6.7,
		vote_count: 227,
	},
	{
		backdrop_path: "/yreuPT1RYFvWkQ3gjnjRP8vAq3o.jpg",
		first_air_date: "2022-04-09",
		genre_ids: [16, 35, 10759],
		id: 120089,
		name: "SPY×FAMILY",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "SPY×FAMILY",
		overview:
			'Há décadas, as nações de Ostania e Westalis promovem uma guerra fria sem fim. Para investigar os movimentos do presidente de um importante partido político, Westalis mobiliza Twilight, seu melhor agente, a montar uma família falsa e se infiltrar nos eventos sociais promovidos pela escola do filho do político. Mas por um acaso do destino, Twilight acaba adotando Anya, uma jovem com poderes telepáticos, e se "casando" com Yor, uma assassina profissional! Sem saberem das identidades uns dos outros, este trio incomum vai embarcar em aventuras cheias de surpresas para garantir a paz mundial.',
		popularity: 538.813,
		poster_path: "/mvl25OIlKNIT3gRdf3oyy8HFopt.jpg",

		vote_count: 986,
	},
	{
		backdrop_path: "/kJHEPw3itVz3RmVh4B2PwIVjn3b.jpg",
		first_air_date: "2022-10-29",
		genre_ids: [16, 10759, 18, 10765],
		id: 137065,
		name: "Arknights: Reimei Zensou",
		origin_country: ["CN", "JP"],
		original_language: "ja",
		original_name: "アークナイツ 黎明前奏",
		overview:
			"Na terra da Terra, desastres naturais de causas desconhecidas vêm ocorrendo de forma irregular em muitas áreas. Portanto, a maioria das pessoas, para escapar desses desastres naturais, passou a viver em cidades móveis desenvolvidas ao longo dos anos. O Originium deixado para trás no local de tais Catástrofes, levou ao rápido progresso da civilização devido à sua imensa energia. Mas também trouxe algo mais – uma doença incurável chamada Oripatia. Como os corpos das pessoas com Oripatia gradualmente se cristalizam e se tornam uma nova fonte de infecção no momento da morte, em muitos países, os infectados estão sujeitos a perseguição sob regimes de segregação e trabalho forçado. Aqueles que foram oprimidos pelos governos estão começando a se rebelar. Rhodes Island, uma empresa farmacêutica que pesquisa a cura para a Oripatia, pega em armas e inicia uma conquista tentando salvar todas as pessoas da doença.",
		popularity: 240.23,
		poster_path: "/yvNkvdYNS8Pzyu4Rsiflvdg8ogh.jpg",
		vote_average: 7,
		vote_count: 3,
	},
	{
		backdrop_path: "/gjbwA1mdAWA78UuIQPTRtXmpv5a.jpg",
		first_air_date: "2005-10-07",
		genre_ids: [18, 35],
		id: 45490,
		name: "嬢王",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "嬢王",
		overview: "",
		popularity: 192.784,
		poster_path: "/uaiApxIgfsKyVnYenEm1xivmXKm.jpg",
		vote_average: 5.5,
		vote_count: 2,
	},
	{
		backdrop_path: "/xuJ0F9RfKvVSJNDg2usurQ9WvY5.jpg",
		first_air_date: "2002-10-03",
		genre_ids: [16, 10759, 10765],
		id: 46260,
		name: "Naruto",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "ナルト",
		overview:
			"Momentos antes do nascimento de Naruto Uzumaki, um enorme demônio conhecido como o Kyuubi, a Raposa de Nove Caudas, atacou o vilarejo da folha oculta Konoha, causando destruição. Para pôr fim à devastação de Kyuubi, o líder da aldeia, o quarto Hokage, sacrificou sua vida e selou o monstruoso animal dentro do recém-nascido Naruto. Agora, Naruto é um ninja hiperativo e cabeça dura que ainda vivem em Konoha. Evitado pelos demais habitantes por causa da Kyuubi dentro dele, Naruto se esforça para encontrar seu lugar na aldeia, enquanto o seu ardente desejo de se tornar o Hokage de Konoha o leva a conhecer alguns grandes novos amigos, e também alguns inimigos mortais.",
		popularity: 179.843,
		poster_path: "/xppeysfvDKVx775MFuH8Z9BlpMk.jpg",
		vote_average: 8.4,
		vote_count: 4858,
	},
	{
		backdrop_path: "/qtfMr08KQsWXnCHY0a96N8NpQ2l.jpg",
		first_air_date: "2004-10-05",
		genre_ids: [10759, 16, 10765],
		id: 30984,
		name: "Bleach",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "ブリーチ",
		overview:
			"Ichigo Kurosaki é um garoto de 15 anos que tem uma estranha capacidade  de ver, tocar e falar com espíritos de pessoas mortas. Logo que a  shinigami Rukia Kuchiki toma conhecimento dos poderes de Ichigo, vai  atrás dele para investigar, e acaba em uma luta com um Hollow que foi  atraído pelo forte poder espiritual de Ichigo. Antes de ser derrotada  pela criatura, Rukia passa seus poderes a Ichigo, o qual se torna um  shinigami, e após derrotar o Hollow ingressa em uma jornada para  proteger os humanos e os espíritos da ameaça dos Hollows.",
		popularity: 167.621,
		poster_path: "/bkbnR1Vi2S8pTVwt3M4wCpnVWNM.jpg",
		vote_average: 8.4,
		vote_count: 1384,
	},
	{
		backdrop_path: "/qsjFoAc3Y5JlsSPsOY84bt82OzN.jpg",
		first_air_date: "2018-12-23",
		genre_ids: [16, 10762],
		id: 87247,
		name: "Bakugan: Guerreiros da Batalha",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "爆丸バトルプラネット",
		overview:
			"Dan Kouzo e seus amigos se unem a criaturas misteriosas enquanto lutam contra forças sinistras que pretendem controlar o mundo.",
		popularity: 150.748,
		poster_path: "/lYeRLxT1zO2JPo3jVDdv2bJeI0R.jpg",
		vote_average: 2.3,
		vote_count: 7,
	},
	{
		backdrop_path: "/z6ES1hCbLozoquj5wilidrtKBPp.jpg",
		first_air_date: "2007-02-15",
		genre_ids: [16, 10759, 10765],
		id: 31910,
		name: "Naruto Shippuden",
		origin_country: ["JP"],
		original_language: "ja",
		original_name: "ナルト 疾風伝",
		overview:
			"Naruto Shippuden ocorre 2 anos e meio após Naruto ter ficado para  treinar com Jiraiya. Após seu retorno, Naruto descobre que seus amigos  shinobi's o superaram na classificação, e ele caiu para trás. No  entanto, com apenas 6 meses para resgatar Sasuke, Naruto tem de  enfrentar inimigos ainda mais perigosos. O plano da Akatsuki se revela  lentamente e os perigos surgem mais do que nunca!",
		popularity: 145.491,
		poster_path: "/qOxedwaJzdms2alAmIEHEnDeDzg.jpg",
		vote_average: 8.6,
		vote_count: 7250,
	},
];

function MediaSlide(props) {
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
				navigation={true}
				initialSlide={-1}
				spaceBetween={40}
				pagination={{
					clickable: true,
				}}
				loop={true}
				modules={[Navigation]}
				breakpoints={{
					640: {
						slidesPerView: 3,
						spaceBetween: 40,
					},
					768: {
						slidesPerView: 4,
						spaceBetween: 40,
					},
					1024: {
						slidesPerView: 5,
						spaceBetween: 40,
					},
					1280: {
						slidesPerView: 6,
						spaceBetween: 40,
					},
					1400: {
						slidesPerView: 7,
						spaceBetween: 40,
					},
				}}
			>
				{results.map((slide, index) => (
					<SwiperSlide key={index}>
						<MediaSlideContent slide={slide} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
}

export default MediaSlide;
