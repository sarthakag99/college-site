import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import MainRouter from "../MainRouter";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <div>
            {/* <Header /> */}
            <Router>
            <MainRouter />
            {/* <h1>hello</h1> */}

            {/* <Footer /> */}
           </Router>
        </div>
    );
}
export default App;