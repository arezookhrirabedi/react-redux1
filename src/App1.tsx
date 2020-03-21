import React from 'react';
import './App.css';
import MobContainer from './components/mobContainer';
import {store} from "./redux/store";

import {Provider} from "react-redux"


function App() {
  return (
    <Provider store={store}>
    <div className="App" >
      <MobContainer />

    </div>
    </Provider>
  );
}

export default App;
