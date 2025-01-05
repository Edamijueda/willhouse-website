import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import './Testimonials.css';

export default class Testimonials extends Component {
  render() {
    return (
      <div className="testimonials">
        <h2>Testimonials</h2>
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={6100}
        >
          <div className="carousel">
            <div className="myCarousel">
              <h3>Tobi Omorubore</h3>
              <h4>An Engineer</h4>
              <p>
              Transformed my perspective, inspiring clarity and compassion in both my personal and professional life.
            </p>
            </div>
          </div>

          <div>
            <div className="myCarousel">
              <h3>Kloee Keystone</h3>
              <h4>A Mother-of-Two</h4>
              <p>
                The simple and intuitive customized program & schedule makes me trust that WillHouse cares so much about people.
            </p>
            </div>
          </div>

          <div>
            <div className="myCarousel">
              <h3>Theo Sorel</h3>
              <h4>Doctrine Researcher</h4>
              <p>
              Offered well-researched perspectives that deepen understanding and encourage critical thinking. Thank you William!
            </p>
            </div>
          </div>
        </Carousel>
      </div>
    );
  }
}