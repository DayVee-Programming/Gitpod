const FeedbackCard = ({ card }) => {
  return (
    <li className="feedback__cards-slider-item">
      <a href="#" className="feedback__cards-slider-item-link">
        <p className="feedback__cards-slider-item-link-text">{card.comment}</p>
        <div className="feedback__cards-slider-item-link-profile">
          <div className="feedback__cards-slider-item-link-profile-pic">
            <img
              src={card.img}
              alt=""
              className="feedback__cards-slider-item-link-profile-pic-img"
            />
          </div>
          <div className="feedback__cards-slider-item-link-profile-desc">
            <h3 className="feedback__cards-slider-item-link-profile-desc-title">
              {card.author}
            </h3>
            <p className="feedback__cards-slider-item-link-profile-desc-text">
              {card.position}
            </p>
          </div>
        </div>
      </a>
    </li>
  );
};

export default FeedbackCard;
