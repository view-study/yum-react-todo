import React, { useState } from "react";
import MainPresenter from "./MainPresenter";

function MainContainer() {
  const [screen, setScreen] = useState("todo");
  
  const handleClickTab = (screen) =>()=>{
    setScreen(screen)
  }

  return <MainPresenter screen={screen} onClickTab={handleClickTab}/>;
}

export default MainContainer;
