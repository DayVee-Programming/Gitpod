const FeedbackSlide = ({ card }) => {
  return (
    <li className="feedback__slider-item">
      <a href="#" className="feedback__slider-item-link">
        <p className="feedback__slider-item-link-text">{card.comment}</p>
        <div className="feedback__slider-item-link-profile">
          <div className="feedback__slider-item-link-profile-pic">
            <img
              src={card.img}
              alt=""
              className="feedback__slider-item-link-profile-pic-img"
            />
          </div>
          <div className="feedback__slider-item-link-profile-desc">
            <h3 className="feedback__slider-item-link-profile-desc-title">
              {card.author}
            </h3>
            <p className="feedback__slider-item-link-profile-desc-text">
              {card.position}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FeedbackSlide;
