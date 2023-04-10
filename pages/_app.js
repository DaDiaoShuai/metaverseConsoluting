import { NextIntlProvider } from "next-intl";
import Style from "../styles/global.css";
import "../styles/common.css";
import CompStyle from "../styles/components.css";

export default function App({ Component, pageProps }) {
	return (
		<NextIntlProvider messages={pageProps.messages}>
			<Component {...pageProps} />
		</NextIntlProvider>
	);
}
