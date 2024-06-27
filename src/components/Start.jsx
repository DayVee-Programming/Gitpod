import StartConnect from "./StartConnect";
import StartWorkspace from "./StartWorkspace";

const Start = ({ start }) => {
  return (
    <div id="start" className="start">
      <div className="container start__wrap">
        <h2 className="start__title">Get started now</h2>
        <div className="start__content">
          <div className="start__content-connect">
            <div className="start__content-connect-desc">
              <h3 className="start__content-connect-desc-title">
                Connect Git repository
              </h3>
              <p className="start__content-connect-desc-text">
                Select a Git provider to start with an existing project from any
                Git context.
              </p>
            </div>
            <ul className="start__content-connect-list">
              {start.connects.map((connect) => (
                <StartConnect connect={connect} key={connect.id} />
              ))}
            </ul>
            <p className="start__content-connect-url">
              Or prefix any GitLab, GitHub or Bitbucket URL with <br />
              <span className="start__content-connect-url-span">
                gitpod.io/#
              </span>
            </p>
          </div>
          <div className="start__workspaces">
            <h2 className="start__workspaces-title">
              Launch an example workspace
            </h2>
            <p className="start__workspaces-text">
              Dive into one of our example workspaces
            </p>
            <ul className="start__workspaces-cards">
              {start.workspaces.map((workspace) => (
                <StartWorkspace workspace={workspace} key={workspace.id} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
