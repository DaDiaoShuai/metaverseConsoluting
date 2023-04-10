import pick from "lodash/pick";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import SmoothScroll from "../components/SmoothScroll";
import Style from "../styles/Home.module.css";
import PageLayout from "../components/PageLayout";
import { useTranslations } from "next-intl";
import SectionHead from "../components/SectionHead";
import JayJi from "../images/jayji.jpeg";
import Image from "next/image";
import { BsArrowDownCircle } from "react-icons/bs";
import Link from "next/link";
import { onEvent, offEvent } from "../utils/eventBus";

const Index = () => {
	const [showMenu, setShowMenu] = useState(false);
	const { locale } = useRouter();

	const t = useTranslations("Index");

	const handleClickMenu = () => {
		setShowMenu(!showMenu);
	};

	const handleClickLink = (e) => {
		e.preventDefault();
		const target =
			(locale === "en"
				? e.currentTarget.getAttribute("href").substring(1)
				: e.currentTarget.getAttribute("href").substring(4)) || "home";
		const element = document.getElementById(target);
		const offset = element.offsetTop - 80;
		window.scrollTo({
			top: offset,
			behavior: "smooth",
		});
		setShowMenu(false);
	};

	useEffect(() => {
		onEvent("navClick", handleClickLink);
		return () => {
			offEvent("navClick", handleClickLink);
		};
	}, []);

	return (
		<PageLayout title={t("title")}>
			<SmoothScroll>
				<main className={`${Style.container}`}>
					<section
						className={`${Style["index-screen"]} ${Style["bg-banner"]}`}
						id="home"
					>
						<div className={Style.fcContent}>
							<h1 className={Style.brand + " " + Style.title}>
								{t("brand")}
							</h1>
							<div>{t("overview")}</div>
						</div>
						<Link href="services" onClick={handleClickLink}>
							<BsArrowDownCircle
								style={{
									position: "absolute",
									left: "0",
									right: "0",
									margin: "0 auto",
									bottom: "30px",
								}}
								size={30}
								className="animate-bounce"
							/>
						</Link>
					</section>
					<section className={Style["services-screen"]} id="services">
						<section className={`${Style.card} ${Style.flexBox}`}>
							<section style={{ flex: "1" }}>
								<div>
									<SectionHead title={t("titles.service")} />
									<div className={Style["services-content"]}>
										{t.rich("contents.service", {
											p: (children) => <p>{children}</p>,
											ul: (children) => (
												<ul>{children}</ul>
											),
											li: (children) => (
												<li>{children}</li>
											),
										})}
									</div>
								</div>
							</section>
						</section>
						<section
							className={`${Style.card} ${Style.flexBox}`}
							id="team"
						>
							<section style={{ flex: "1" }}>
								<div>
									<SectionHead title={t("titles.team")} />
									<div className={Style.teamContent}>
										<Image
											src={JayJi}
											style={{ width: "200px" }}
										/>
										<div
											style={{
												marginLeft: "10px",
											}}
										>
											{t.rich("contents.team.jayji", {
												em: (children) => (
													<em>{children}</em>
												),
												ul: (children) => (
													<ul>{children}</ul>
												),
												li: (children) => (
													<li>{children}</li>
												),
											})}
										</div>
									</div>
									<div className={Style.teamContent}>
										<Image
											src={JayJi}
											style={{ width: "200px" }}
										/>
										<div
											style={{
												marginLeft: "10px",
											}}
										>
											{t.rich(
												"contents.team.MichelleBi",
												{
													em: (children) => (
														<em>{children}</em>
													),
													ul: (children) => (
														<ul>{children}</ul>
													),
													li: (children) => (
														<li>{children}</li>
													),
												}
											)}
										</div>
									</div>
								</div>
							</section>
						</section>
					</section>
				</main>
			</SmoothScroll>
		</PageLayout>
	);
};

Index.messages = ["Index", ...PageLayout.messages];

export async function getStaticProps({ locale }) {
	return {
		props: {
			messages: pick(
				await import(`../messages/${locale}.json`),
				Index.messages
			),
		},
	};
}

export default Index;
