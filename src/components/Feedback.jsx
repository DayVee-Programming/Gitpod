import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard";
import FeedbackCompany from "./FeedbackCompany";
import { useRef } from "react";

const Feedback = ({ feedback }) => {
  const feedBackCards = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -414 * (feedback.cards.length - 3)) {
      tx -= 414;
    }
    feedBackCards.current.style.transform = `translateX(${tx}px)`;
  };

  const slideBackward = () => {
    if (tx < 0) {
      tx += 414;
    }
    feedBackCards.current.style.transform = `translateX(${tx}px)`;
  };

  return (
    <div id="feedback" className="feedback">
      <div className="container feedback__wrap">
        <button
          className="feedback__btn left"
          onClick={(e) => slideBackward(e)}
        >
          <FaChevronLeft className="feedback__btn-img" />
        </button>
        <h2 className="feedback__title">Used by 400,000+ developers.</h2>
        <div className="feedback__cards">
          <ul className="feedback__cards-slider" ref={feedBackCards}>
            {feedback.cards.map((card) => (
              <FeedbackCard card={card} key={card.id} />
            ))}
          </ul>
        </div>
        <ul className="feedback__companies">
          {feedback.companies.map((company) => (
            <FeedbackCompany company={company} key={company.id} />
          ))}
        </ul>
        <button className="feedback__btn right">
          <FaChevronRight
            className="feedback__btn-img"
            onClick={(e) => slideForward(e)}
          />
        </button>
      </div>
    </div>
  );
};

export default Feedback;
