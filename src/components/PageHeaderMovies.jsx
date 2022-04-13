import React from "react";

const PageHeaderMovies = (props) => {
  return (
    <div className="header__catalog">
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeaderMovies;
