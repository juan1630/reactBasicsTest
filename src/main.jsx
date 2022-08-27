import './styles.css'

import React from "react";
import ReactDOM from "react-dom/client";
import {App} from './FirstApp'
import { CustomComponent} from './customComponent';
import {CounterApp} from './counterApp/CounterApp'
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
        {/* <CustomComponent /> */}
        <CounterApp value={20} />
    </React.StrictMode>
);

//asi se mandan los numeros en las prosp ={122}