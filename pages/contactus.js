import React from "react";
import Head from "next/head";
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import PageLayout from "../components/PageLayout";
import pick from "lodash/pick";

const ContactUs = () => {
	const t = useTranslations("Contact");
	const { locale } = useRouter();
	return (
		<PageLayout title={t("title")}>
			<div>
				<h1>请填写以下表格联系我们：</h1>
				{/* 其他页面内容 */}
			</div>
		</PageLayout>
	);
};

ContactUs.messages = ["Contact", ...PageLayout.messages];

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: pick(
				await import(`../messages/${locale}.json`),
				ContactUs.messages
			),
		},
	};
}

export default ContactUs;
