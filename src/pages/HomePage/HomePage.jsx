import clsx from "clsx";

import style from "./HomePage.module.css";

const HomePage = () => {
  return (
    <div className={clsx(style.homeContainer)}>
      <h1>Trending</h1>
    </div>
  );
};

export default HomePage;