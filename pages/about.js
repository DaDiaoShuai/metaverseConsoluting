import React from "react";
import PageLayout from "../components/PageLayout";
import { useTranslations } from "next-intl";
import pick from "lodash/pick";

const About = () => {
	const t = useTranslations("About");
	return (
		<PageLayout title={t("title")}>
			<h1>关于公司：</h1>
			{/* 其他页面内容 */}
		</PageLayout>
	);
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: pick(
				await import(`../messages/${locale}.json`),
				About.messages
			),
		},
	};
}

About.messages = ["About", ...PageLayout.messages];

export default About;
