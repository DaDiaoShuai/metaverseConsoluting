import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRouter } from "next/router";
import Style from "../styles/Navgation.module.css";
import { contacts } from "../config/contacts";
import { emitEvent } from "../utils/eventBus";

const Navigation = () => {
	const t = useTranslations("Navigation");

	const { locale, locales, route } = useRouter();
	const otherLocale = locales?.find((cur) => cur !== locale);

	const handleClick = (e) => {
		e.preventDefault();
		emitEvent("navClick", e);
	};
	return (
		<div
			style={{ display: "flex", justifyContent: "space-between" }}
			className={Style["nav-container"]}
		>
			<div className={Style.logo}>
				<Link href="/" className={Style.brand}>
					{t("brand")}
				</Link>
			</div>
			<div style={{ display: "flex", gap: 15 }} className={Style.menu}>
				<Link href="/" onClick={handleClick}>
					{t("index")}
				</Link>
				<Link href="services" onClick={handleClick}>
					{t("service")}
				</Link>
				<Link href="team" onClick={handleClick}>
					{t("team")}
				</Link>
			</div>
			<Link href={route} locale={otherLocale}>
				{/* {t("switchLocale", { locale: otherLocale })} */}
			</Link>
			<Link
				href="mailto:jingshuai7687@gmail.com?subject=[Website] Interested in knowing more about Metaverse Consoluting"
				target="_blank"
			>
				<span>{contacts.email}</span>
			</Link>
		</div>
	);
};

Navigation.messages = ["Navigation"];

export default Navigation;
