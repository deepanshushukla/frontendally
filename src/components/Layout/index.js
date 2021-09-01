import React from "react";
import PropTypes from "prop-types";

import "./index.scss";

const MainLayout = ({ children }) => {
  return (
    <div className="mainLayout">
      <div className="mainLayout__content">
        <section
          className="site-layout-background"
          style={{
            padding: 24,
            height: "100vh",
          }}
        >
          {children}
        </section>
      </div>
    </div>
  );
};

export default MainLayout;

MainLayout.propTypes = {
  children: PropTypes.element,
};
