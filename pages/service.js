import React from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";
import PageLayout from "../components/PageLayout";
import pick from "lodash/pick";

const Services = () => {
	const t = useTranslations("Service");
	return (
		<PageLayout title={t("title")}>
			<Head>
				<title>金融服务咨询公司 - 服务介绍</title>
				<meta
					name="description"
					content="了解金融服务咨询公司所提供的各种服务"
				/>
			</Head>
			<h1>我们提供以下服务：</h1>
			{/* 其他页面内容 */}
		</PageLayout>
	);
};

Services.messages = ["Service", ...PageLayout.messages];

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: pick(
				await import(`../messages/${locale}.json`),
				Services.messages
			),
		},
	};
}

export default Services;
