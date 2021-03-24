import React from 'react'
import ReactDOM from 'react-dom'

import Myheader from "./components/header";
import Myinput from "./components/input";

ReactDOM.render(
    <div>
        <Myheader/> 
        <Myinput mylabel="label1"  /><br/>
        <Myinput mylabel="label2"  />
    </div>
    ,document.getElementById('root')
)