import React from "react";
import ReactDOM from "react-dom/client";

function Hello(paras){
    return
    <h1> welcome! </h1>
}

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<Hello />);