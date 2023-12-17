import {Component} from "react";
import mainPage1 from "../../../images/home/img.png"

export class Home extends Component {
    render() {
        return (
            // <div className="absolute flex" >
            //     <div className=" h-5 w-5 bg-blue-500 ml-2"></div>
            //     <div className=" h-5 w-5 bg-amber-300-500 ml-6"></div>
            //     <div className="h-5 w-5 bg-green-400-500 ml-12"></div>
            //     <div className="h-5 w-5 bg-amber-800-500 ml-18"></div>
            // </div>
            // m-0 top-30
        // <img className="h-[500px] w-[1500px] mt-[-90px]" src={mainPage1} alt=""/>
            <div className="flex" >
                <img className="md:w-screen mt-[-90px]" src={mainPage1} alt=""/>
            </div>
        );
    }
}