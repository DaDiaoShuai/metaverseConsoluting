import React from "react";
import PageLayout from "../components/PageLayout";
import { useTranslations } from "next-intl";
import pick from "lodash/pick";

const Team = () => {
	const t = useTranslations("Team");
	return (
		<PageLayout title={t("title")}>
			<h1>我们的团队成员：</h1>
			{/* 其他页面内容 */}
		</PageLayout>
	);
};

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: pick(
				await import(`../messages/${locale}.json`),
				Team.messages
			),
		},
	};
}

Team.messages = ["Team", ...PageLayout.messages];

export default Team;
