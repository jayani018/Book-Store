import {Component} from "react";
import {Link} from "react-router-dom";
import logo from "../../../images/books.png"


export class NavBar extends Component {
    render() {
        return (
            <div className="p-2 bg-blend-screen flex justify-between">
                {/*    text-4xl text-center text-primary*/}
                <div className="flex">
                    <h1 className="text-1xl text-green-700 ">
                        Organic Shop
                    </h1>
                    <img className="h-5 w-5 ml-1 pt-1" src={logo} alt=""/>
                </div>

                <ul className="list-none flex mt-1">
                    <li className="mr-2 text-[11px] text-[#e6f0e6] ">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6]">
                        <Link to="/book">Books</Link>
                    </li>
                    <li className="mr-2 text-[11px] text-[#e6f0e6]">
                        <Link to="/contact">Contact</Link>
                    </li>

                </ul>


            </div>
        );
    }
}