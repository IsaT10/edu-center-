import React from "react";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  return (
    <div>
      <h1>terms and conditions</h1>
      <Link to="/signup" className="link no-underline text-primary">
        Go to sign up
      </Link>
    </div>
  );
};

export default TermsAndCondition;
