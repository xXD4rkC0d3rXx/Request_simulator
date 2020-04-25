import React, { useState, useEffect } from "react";
import "./App.scss";
import cn from "classnames";

import Spinner from "@atlaskit/spinner";

import TopBar from "./components/TopBar";
import InputModule from "./components/InputModule";
import LoadItem from "./components/LoadItem";
import RunStop from "./components/RunStop";

function App({ loaders, addLoader, removeLoader }) {
  const [freeze, toggleFreeze] = useState(true);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    if (loaders.length >= 3) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  }, [loaders]);

  return (
    <div className="App">
      <TopBar />

      <div className="wrapper">
        <div className="table-container">
          <ul className="table-unit">
            <li>Request name</li>
            <li>Delay (sec)</li>
            <li></li>
          </ul>
          <InputModule addLoader={addLoader} disabled={disabled} />
          <LoadItem loaders={loaders} removeLoader={removeLoader} />
          <RunStop />
        </div>
        <div className="spinner-container">
          <span className={cn({ freeze })}>
            <Spinner size="xlarge" isCompleting={false} />
          </span>
          <span>Loder first</span>
          <span>1 sec left</span>
        </div>
      </div>
    </div>
  );
}

export default App;
