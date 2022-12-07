import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import apiConfig from "./api/apiConfig";

console.log(apiConfig.apiKey);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
