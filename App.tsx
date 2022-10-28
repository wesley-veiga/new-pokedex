import React from "react";
import { Provider } from "react-redux";
import Routes from "./src/pages/routes";
import store from "./src/reducers";

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
};

export default App;
