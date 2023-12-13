import {Component} from "react";
import {Route, Routes} from "react-router-dom";
import {Home} from "../../pages/home/Home";
import {About} from "../../pages/about/About";
import {Contact} from "../../pages/contact/Contact";

export class MainContent extends Component {
    render() {
        return (
            <div className="pt-28 pb-28 mx-auto bg-amber-100">
                {/*<h1 className="text-4xl text-center text-tertiary">*/}
                {/*    This is Main Content!</h1>*/}

                <Routes>
                    <Route path="/" Component={Home}></Route>
                    <Route path="/about" Component={About}></Route>
                    <Route path="/contact" Component={Contact}></Route>
                </Routes>
            </div>
        );
    }
}
