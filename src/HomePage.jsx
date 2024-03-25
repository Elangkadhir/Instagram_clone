import React from "react";
import SideNav from "./Navigation/SideNav";
import TimeLine from "./TimeLine/TimeLine";
import "./HomePage.css"

function HomePage() {
  return (
    <div className="homepage">
      <div className="homepage__nav">
        <SideNav />
      </div>
      <div className="homepage__timeline">
        <TimeLine />
      </div>
    </div>
  );
}

export default HomePage;
