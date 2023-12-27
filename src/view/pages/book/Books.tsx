import {Component} from "react";

export class Books extends Component {
    render() {
        return (
            <div className="h-screen w-screen mt-[-90px] bg-lime-600">Hi
                <div className="flex flex-wrap justify-center">
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        01
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        02
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        03
                    </div>
                    {/* Second Row */}
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        04
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        05
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        06
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        07
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        08
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        09
                    </div>
                    {/* Second Row */}
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        10
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        11
                    </div>
                    <div className="w-32 h-40 bg-blue-300 mr-5 mb-10 flex justify-center items-center">
                        12
                    </div>
                </div>
            </div>
        );
    }
}