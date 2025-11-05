import React from "react";
import Carousel from "./Carousel";
import Bio from "./Bio";
import History from "./History";
import Navbar from "./Navbar";
import "./Carousel.css";

const Home = () => {
	return (
		<div className="home-container">
			{/* <Navbar />   */}
			<Carousel />
			<Bio />
			<History />

		</div>
	);
};

export default Home;
