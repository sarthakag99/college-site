// import React from "react";
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link
// } from "react-router-dom";

// // const Router = () =>{
// //     return(
// //         <div>

// //             <Switch>
// //                 <Route exact path="/" component={Home} />
// //                 <Route exact path="/student" component={Login} />

// //             </Switch>

// //         </div>
// //     );
// // })

// const Router = () => (
//     <BrowserRouter>
//       <div className="sans-serif">
//         {/* <Route path="/" component={Main} /> */}
//         <Route path="/Login" component={Single} />
//       </div>
//     </BrowserRouter>
//   );

//   export default Router;


import React from "react";
// import { BrowserRouter as Router, Switch, Link, Route, Navlink } from "react-router-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
// import Home from "./components/Pages/Achievements/Achievements";
import Achievements from "./components/Pages/Achievements/Achievements";
import Login from "./components/Pages/Login/Login";
import Research from "./components/Pages/Research/Research";
import Home from "./components/Pages/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Lab from "./components/Pages/Lab/Lab";
import Academics from "./components/Pages/Academics/Academics";
// import Research from "./components/Pages/Research";
// function Router() {
//     return (
//         <div>
//             <Switch>
//                 <Route path="/" exact component={Home} />
//                 <Route path="/achievements" exact component={Achievements} />
//                 <Route path="/login" exact component={Login} />
//                 <Route path="/research" exact component={Research} />
//             </Switch>

//         </div>
//     );
// }

const MainRouter = () => (
    <div>
        <Router>
        <Header/>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/achievements" exact component={Achievements} />
                <Route path="/research" exact component={Research} />
                <Route path="/login" exact component={Login} />
                <Route path="/lab" exact component={Lab} />
                <Route path="/academics" exact component={Academics} />
            </Switch>
        <Footer/>
        </Router>
    </div>
);
export default MainRouter;