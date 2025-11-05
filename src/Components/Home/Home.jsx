import React from "react";
import Carousel from "./Carousel";
import Bio from "./Bio";
import History from "./History";
import Navbar from "./Navbar";
import Grid from "./Grids";
import "./Carousel.css";

const Home = () => {
	return (
		<div className="home-container">
			<Navbar />  
			<Carousel />
			<Bio />
			<History />
            <Grid />

		</div>
	);
};

export default Home;
