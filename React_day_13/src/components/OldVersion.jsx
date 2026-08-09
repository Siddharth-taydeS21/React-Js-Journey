import { Component } from "react";

class OldVersion extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
            count2: 0
        }
    }

    render() {
        const { count, count2 } = this.state;
        return (
            <div>
            <h1 className="text-xl text-center">Old class component: Count 1</h1>
            <div className="my-5 w-full flex gap-4 justify-center items-center">
                <button className="bg-blue-300 rounded p-[.5rem_1rem]"
                    onClick={() =>  this.setState({count: count + 1})}
                >++Increase Count</button>
                <h1 className="text-2xl font-bold">
                    Count is : 
                    <span className="text-indigo-500 font-mono text-3xl"> {count}</span>
                </h1>
                <button className="bg-blue-300 rounded p-[.5rem_1rem]"
                    onClick={() => this.setState({count: count - 1})}
                >--Decrease Count</button>
            </div>

            <h1 className="text-xl text-center">Old class component: Count 2</h1>
            <div className="my-5 w-full flex gap-4 justify-center items-center">
                <button className="bg-blue-300 rounded p-[.5rem_1rem]"
                    onClick={() => this.setState({count2: count2 + 1})}
                >++Increase Count</button>
                <h1 className="text-2xl font-bold">
                    Count is : 
                    <span className="text-indigo-500 font-mono text-3xl"> {count2}</span>
                </h1>
                <button className="bg-blue-300 rounded p-[.5rem_1rem]"
                    onClick={() => this.setState({count2: count2 - 1})}
                >--Decrease Count</button>
            </div>
            </div>
        )
    }
}

export default OldVersion