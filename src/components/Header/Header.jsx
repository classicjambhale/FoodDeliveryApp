import React from "react";
import "./Header.css";
// add this component into home component
export const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis
          possimus ratione reprehenderit voluptate veritatis velit dolorem
          tempora, voluptatem in ex.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};
