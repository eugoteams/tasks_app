/** @format */

import { Fragment, useContext } from "react";
import AddForm from "./Component/AddForm/AddForm";
import Header from "./Component/Header/Header";
import DisplayTask from "./Component/DisplayTask/DisplayTask";
import { AppContext } from "./Store/AppContext";
import Search from "./Component/Search/Search";

function App() {
  const { tasksObject, dispatch } = useContext(AppContext);
  let openPopUp = tasksObject["openPopUp"];
  let searchText = tasksObject["searchText"];
  console.log("App Search Text", searchText);

  return (
    <Fragment>
      {/* <Search /> */}
      <Header />
      <DisplayTask />
      {openPopUp && <AddForm />}
    </Fragment>
  );
}

export default App;
