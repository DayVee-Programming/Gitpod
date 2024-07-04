import FeedbackCompany from "./FeedbackCompany";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeedbackSlide from "./FeedbackSlide";

const Feedback = ({ feedback }) => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div id="feedback" className="feedback">
      <div className="container feedback__wrap">
        <h2 className="feedback__title">Used by 400,000+ developers.</h2>
        <Slider {...settings} className="container feedback__slider">
          {feedback?.cards?.map((card) => (
            <FeedbackSlide card={card} key={card.id} />
          ))}
        </Slider>
        <ul className="feedback__companies">
          {feedback?.companies?.map((company) => (
            <FeedbackCompany company={company} key={company.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
