import React from "react";
import Slider from "react-slick";

import Col from "react-bootstrap/Col";

interface SlideProps {
	imgSrc: string;
	imgAlt: string;
	heading: string;
	children: React.ReactNode;
}

function Slide({ imgSrc, imgAlt, heading, children }: SlideProps) {
	return (
		<div className="item">
			<div className="carousel-login-card text-center">
				<img src={imgSrc} className="img-fluid" alt={imgAlt} />
				<h5 className="mt-5 mb-3">{heading}</h5>
				<p className="mb-4">{children}</p>
			</div>
		</div>
	);
}

function AuthScreenSlider() {
	var settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		initialSlide: 0,
		swipeToSlide: true,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
	};
	return (
		<Slider {...settings}>
			<Slide
				heading="Watch videos offline"
				imgSrc="/img/login.png"
				imgAlt="LOGO"
			>
				When an unknown printer took a galley of type and scrambled
				<br /> it to make a type specimen book. It has survived not only
				five centuries
			</Slide>

			<Slide
				heading="Download videos effortlessly"
				imgSrc="/img/login.png"
				imgAlt="LOGO"
			>
				When an unknown printer took a galley of type and scrambled
				<br /> it to make a type specimen book. It has survived not only
				five centuries
			</Slide>

			<Slide heading="Create GIFs" imgSrc="/img/login.png" imgAlt="LOGO">
				When an unknown printer took a galley of type and scrambled
				<br /> it to make a type specimen book. It has survived not only
				five centuries
			</Slide>
		</Slider>
	);
}

function Carousel() {
	return (
		<Col md={7}>
			<div className="login-main-right bg-white p-5 mt-5 mb-5">
				<AuthScreenSlider />
			</div>
		</Col>
	);
}

export default Carousel;
