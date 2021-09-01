import React from "react";

const ErrorFallback = ({ error }) => {
  return (
    <div role="alert">
      <p>Something went from error boundary :</p>
      <pre style={{ color: "red" }}> {error.message} </pre>
    </div>
  );
};
export default ErrorFallback;
