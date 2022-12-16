import React, { useEffect, useState } from "react";
import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";
import Container from "../Container";

function MediaWatch(props) {
	const [providers, setProviders] = useState([]);

	useEffect(() => {
		async function catchProviders() {
			const resultProvider = await tmdbApi.getProviders(
				props.category,
				props.id
			);
			const providerBR = resultProvider.results["BR"];
			if (providerBR) {
				delete providerBR.link;
				setProviders(providerBR);
			}
		}
		catchProviders();
	}, [props.category, props.id]);

	return (
		<Container>
			<div className="-mt-20 mb-20 sm:mt-0">
				<h2 className="text-3xl leading-9 font-semibold mb-10">
					Onde Assistir?
				</h2>

				{providers.length === 0 ? (
					<p className="text-2xl leading-8 font-medium ">
						Ops. Essa mídia não possui provedores em português 😔
					</p>
				) : null}

				{providers["buy"] ? (
					<div className="border-b-2 border-indigo-300 p-4 last:border-b-0 ">
						<p className="text-2xl leading-8 font-medium mb-6 ">
							Comprar
						</p>
						<div className="flex flex-wrap gap-x-10 gap-y-5 xs:justify-center ">
							{providers["buy"].map((provide, index) => (
								<div
									key={index}
									className="flex flex-col text-center items-center hover:scale-105 duration-150"
								>
									<img
										className="max-w-[100px] rounded-3xl mb-3 lg:max-w-[60px] lg:rounded-xl "
										src={apiConfig.w500Image(
											provide.logo_path
										)}
										alt={provide.provider_name}
									/>
									<p className="text-2xl leading-8 font-medium max-w-[150px] lg:text-lg">
										{provide.provider_name}
									</p>
								</div>
							))}
						</div>
					</div>
				) : null}

				{providers["rent"] ? (
					<div className="border-b-2 border-indigo-300 p-4 last:border-b-0 ">
						<p className="text-2xl leading-8 font-medium mb-6 ">
							Alugar
						</p>
						<div className="flex flex-wrap gap-x-10 gap-y-5 xs:justify-center ">
							{providers["rent"].map((provide, index) => (
								<div
									key={index}
									className="flex flex-col text-center items-center hover:scale-105 duration-150"
								>
									<img
										className="max-w-[100px] rounded-[26px] mb-3 lg:max-w-[60px] lg:rounded-xl"
										src={apiConfig.w500Image(
											provide.logo_path
										)}
										alt={provide.provider_name}
									/>
									<p className="text-2xl leading-8 font-medium max-w-[150px] lg:text-lg">
										{provide.provider_name}
									</p>
								</div>
							))}
						</div>
					</div>
				) : null}

				{providers["flatrate"] ? (
					<div className="border-b-2 border-indigo-300 p-4 last:border-b-0">
						<p className="text-2xl leading-8 font-medium mb-6 ">
							Streaming
						</p>
						<div className="flex flex-wrap gap-x-10 gap-y-5 xs:justify-center ">
							{providers["flatrate"].map((provide, index) => (
								<div
									key={index}
									className="flex flex-col text-center items-center hover:scale-105 duration-150"
								>
									<img
										className="max-w-[100px] rounded-[26px] mb-3 lg:max-w-[60px] lg:rounded-xl"
										src={apiConfig.w500Image(
											provide.logo_path
										)}
										alt={provide.provider_name}
									/>
									<p className="text-2xl leading-8 font-medium max-w-[150px] lg:text-lg">
										{provide.provider_name}
									</p>
								</div>
							))}
						</div>
					</div>
				) : null}
			</div>
		</Container>
	);
}

export default MediaWatch;
