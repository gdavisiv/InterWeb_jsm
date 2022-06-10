import React from "react";
import ReactDOM from 'react-dom';

import App from './App'

//This react compenent will be rendered inside the public/index.html file
//with an ID of 'root'
ReactDOM.render(<App />, document.getElementById('root'));