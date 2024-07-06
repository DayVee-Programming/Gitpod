const StartConnect = ({ connect }) => {
  return (
    <li className="start__content-connect-list-item">
      <a className="start__content-connect-list-item-link">
        <img
          src={connect.img}
          alt=""
          className="start__content-connect-list-item-link-img"
        />
        <span className="start__content-connect-list-item-link-span">
          Continue with {connect.text}
        </span>
      </a>
    </li>
  );
};

export default StartConnect;
