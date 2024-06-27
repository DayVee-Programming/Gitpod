import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import FeedbackCard from "./FeedbackCard";
import FeedbackCompany from "./FeedbackCompany";

const Feedback = ({ feedback }) => {

  return (
    <div id="feedback" className="feedback">
      <div className="container feedback__wrap">
        <h2 className="feedback__title">Used by 400,000+ developers.</h2>
        <ul className="feedback__companies">
          {feedback.companies.map((company) => (
            <FeedbackCompany company={company} key={company.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Feedback;
