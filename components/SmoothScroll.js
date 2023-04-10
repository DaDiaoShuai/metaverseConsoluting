import React, { useEffect } from "react";
import { useRouter } from "next/router";

const smoothScroll = (target) => {
	const currentPosition = window.pageYOffset;
	const targetPosition = target.offsetTop;
	const distance = targetPosition - currentPosition;
	const duration = 1000;
	let start = null;

	const step = (timestamp) => {
		if (!start) start = timestamp;
		const progress = timestamp - start;
		window.scrollTo(
			0,
			easeInOutQuad(progress, currentPosition, distance, duration)
		);
		if (progress < duration) window.requestAnimationFrame(step);
	};

	const easeInOutQuad = (t, b, c, d) => {
		t /= d / 2;
		if (t < 1) return (c / 2) * t * t + b;
		t--;
		return (-c / 2) * (t * (t - 2) - 1) + b;
	};

	window.requestAnimationFrame(step);
};

const scrollToAnchor = (hash) => {
	const target = document.getElementById(hash);
	if (target) {
		smoothScroll(target);
	}
};

const SmoothScroll = ({ children }) => {
	const router = useRouter();

	useEffect(() => {
		const handleHashChange = () => {
			scrollToAnchor(window.location.hash);
		};
		handleHashChange();

		window.addEventListener("hashchange", handleHashChange, false);
		return () => {
			window.removeEventListener("hashchange", handleHashChange, false);
		};
	}, [router]);

	return <>{children}</>;
};

export default SmoothScroll;
