import React from "react";
import Carousel from "./Carousel";
import Bio from "./Bio";
import History from "./History";
import Highlights from "./Highlights";
import "./Carousel.css";

const Home = () => {
	return (
		<div className="home-container">
			<Carousel />
			<Bio />
			<History />
            <Highlights />
		</div>
	);
};

export default Home;
