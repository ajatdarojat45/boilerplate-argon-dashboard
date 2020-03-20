import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import { Provider } from 'react-redux'

import "./assets/css/argon-dashboard-react.min.css";
import "./assets/plugins/nucleo/css/nucleo.css";

import AdminLayout from './layouts/Admin';

import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <AdminLayout/>
      </Router>
    </Provider>
  );
}

export default App;
