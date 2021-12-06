import { AppProps } from "next/app";
import { NextPage } from "next";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import theme from "utils/theme";

const GlobalStyle = createGlobalStyle`
	
	body {
		padding: 0;
		margin: 0;
		font-family: SpoqaHanSans-kr, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI,  Oxygen,
			Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	}
}
`;

const MyApp: NextPage<AppProps> = ({ Component, pageProps }: AppProps) => {
	return (
		<ThemeProvider theme={theme}>
			<Component {...pageProps} />
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default MyApp;