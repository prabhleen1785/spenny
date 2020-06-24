import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import HomeComponent from "./HomeComponent";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <HomeComponent />
    </Provider>
  );
}

export default App;
