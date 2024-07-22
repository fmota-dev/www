import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/global";
import theme from "./styles/theme";

import { AuthProvider } from "./hooks/auth";

import { Routes } from "./routes";
/*usar chaves para criar um import NOMEADO e deixar o código padronizado*/

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<AuthProvider>
				<Routes />
			</AuthProvider>
		</ThemeProvider>
	</React.StrictMode>,
);
