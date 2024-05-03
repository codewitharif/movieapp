import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = ({ items }) => {
  // Configuring the carousel settings
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  // Custom left arrow function
  const CustomLeftArrow = ({ onClick }) => {
    return null; // Returning null to hide the default left arrow
  };

  // Custom right arrow function
  const CustomRightArrow = ({ onClick }) => {
    return null; // Returning null to hide the default right arrow
  };

  return (
    <div
      className="flex justify-center items-center " // Center the div horizontally and vertically
      style={{ width: "100%", height: "100%" }}
    >
      <Carousel
        swipeable={false}
        draggable={true}
        showDots={false}
        responsive={responsive}
        infinite={true} // Enabling infinite scrolling
        autoPlay={true}
        autoPlaySpeed={2000}
        keyBoardControl={false}
        customTransition="transform 300ms ease-out"
        transitionDuration={300}
        className="carousel carousel-center max-w-md p-4 space-x-4 rounded-box"
        customLeftArrow={<CustomLeftArrow />} // Hiding the default left arrow
        customRightArrow={<CustomRightArrow />} // Hiding the default right arrow
      >
        {items.map((item, index) => (
          <div key={index} className="px-9">
            {/* Your carousel item content */}
            <img
              src={item.imageUrl}
              alt={item.title}
              width={100}
              height={100}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
