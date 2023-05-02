import React from "react";
import classes from "../style/components/Loader.module.css";

const Loader = () => {
  return (
    <div className="text-center">
      <div className={classes['lds-ellipsis']}>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default Loader;
