import React from "react";

const HomePage = async () => {
	await new Promise((r) => setTimeout(r, 2000));
	return (
		<main>
			<p>stuff going on here</p>
		</main>
	);
};

export default HomePage;
