const FeedbackCompany = ({ company }) => {
  return (
    <li className="feedback__companies-item">
      <a className="feedback__companies-item-link">
        <img
          src={company.img}
          alt=""
          className="feedback__companies-item-link-img"
        />
      </a>
    </li>
  );
};

export default FeedbackCompany;
