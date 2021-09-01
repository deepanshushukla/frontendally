import React from "react";
import PropTypes from 'prop-types';

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went from error boundary :</p>
      <pre style={{ color: "red" }}> {error.message} </pre>
    </div>
  );
};
ErrorFallback.propTypes = {
    error: PropTypes.object.isRequired,
};
export default ErrorFallback;
