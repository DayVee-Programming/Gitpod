const BannerImage = ({ image }) => {
  return (
    <li className="banner__content-bottom-try-list-item">
      <a href={image.to} className="banner__content-bottom-try-list-item-link">
        <img
          src={image.value}
          alt=""
          className="banner__content-bottom-try-list-item-link-img"
        />
      </a>
    </li>
  );
};

export default BannerImage;
