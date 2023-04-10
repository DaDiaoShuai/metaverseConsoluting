import React from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";
import Style from "../styles/Contact.module.css";
import {
	SiTwitter,
	SiLinkedin,
	SiInstagram,
	SiFacebook,
	SiTelegram,
} from "react-icons/si";
import { contacts, socials } from "../config/contacts";

const Contact = () => {
	const t = useTranslations("Contact");

	return (
		<div
			style={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
			}}
			className={Style.contact}
		>
			<div className={Style.topSocials}>
				<Link href={socials.twitter}>
					<SiTwitter className={Style.socialIcon} />
				</Link>
				<Link href={socials.linkedin}>
					<SiLinkedin className={Style.socialIcon} />
				</Link>
				<Link href={socials.ins}>
					<SiInstagram className={Style.socialIcon} />
				</Link>
				<Link href={socials.fb}>
					<SiFacebook className={Style.socialIcon} />
				</Link>
				<Link href={socials.tg}>
					<SiTelegram className={Style.socialIcon} />
				</Link>
			</div>
			<div className={Style.contacts}>
				<span>{/* placeholder*/}</span>
				<span>{/*contacts.phone*/}</span>
				<Link
					href="mailto:jingshuai7687@gmail.com?subject=[Website] Interested in knowing more about Metaverse Consoluting"
					target="_blank"
				>
					<span>{contacts.email}</span>
				</Link>
			</div>
		</div>
	);
};

Contact.messages = ["Contact"];

export default Contact;
