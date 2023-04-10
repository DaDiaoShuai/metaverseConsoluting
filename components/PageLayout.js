import { useTranslations } from "next-intl";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Contact from "./Contact";
import { NextSeo } from "next-seo";
import Style from "../styles/PageLayout.module.css";

const PageLayout = ({ children, title }) => {
	const t = useTranslations("PageLayout");
	return (
		<>
			<NextSeo
				title={[title, t("pageTitle")].join(" - ")}
				description="金融服务咨询公司官网，提供投资咨询、风险评估、财务规划等服务。"
				canonical="https://www.example.com/"
				openGraph={{
					url: "https://www.example.com/",
					title: title,
					description:
						"金融服务咨询公司官网，提供投资咨询、风险评估、财务规划等服务。",
					images: [
						{
							url: "https://www.example.com/images/og-image.jpg",
							alt: "金融服务咨询公司官网",
						},
					],
				}}
				twitter={{
					cardType: "summary_large_image",
				}}
			/>
			<div className={Style.app}>
				<header className={Style.header}>
					{/* <Contact /> */}
					<Navigation />
				</header>
				<div className={Style.main}>{children}</div>
				<footer className={Style.footer}>
					<Footer />
				</footer>
			</div>
		</>
	);
};

PageLayout.messages = [
	"PageLayout",
	...Navigation.messages,
	...Contact.messages,
];

export default PageLayout;
