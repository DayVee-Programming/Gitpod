const StartWorkspace = ({ workspace }) => {
  return (
    <li className="start__workspaces-cards-item">
      <a href={workspace.to} className="start__workspaces-cards-item-link">
        <div className="start__workspaces-cards-item-link-desc">
          <img
            src={workspace.img}
            alt=""
            className="start__workspaces-cards-item-link-desc-img"
          />
          <p className="start__workspaces-cards-item-link-desc-text">
            {workspace.title}
          </p>
        </div>
        <span className="start__workspaces-cards-item-link-span">
          Launch workspace
        </span>
      </a>
    </li>
  );
};

export default StartWorkspace;
