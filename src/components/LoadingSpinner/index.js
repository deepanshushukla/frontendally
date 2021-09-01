import React from "react";
import ReactDOM from "react-dom";

// Style
import "./index.scss";

const appRoot = document.getElementById("root");

class LoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement("div");
  }

  componentDidMount() {
    appRoot.appendChild(this.el);
  }

  componentWillUnmount() {
    appRoot.removeChild(this.el);
  }

  getLoadingScreen() {
    return (
      <div className="loadingScreenWrapper">
        <div className="loader__position">
          <div className="lds-hourglass"></div>
        </div>
      </div>
    );
  }

  render() {
    return ReactDOM.createPortal(this.getLoadingScreen(), this.el);
  }
}

export default LoadingScreen;

LoadingScreen.propTypes = {};
