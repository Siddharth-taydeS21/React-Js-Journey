import { Component } from "react";
import withCounter from "./WithCounter";

class ClickCounter extends Component {
    constructor({props}) {
        super(props)
        // console.log(props)
    }

    render() {
        const { count, increaseCount} = this.props;
        return (
            <>
                <p className="text-xl font-bold mt-10">Click to increase Count:</p>
                <h1 className="text-3xl font-bold font-mono bg-blue-400 w-125 text-center p-2 rounded mx-4" onClick={increaseCount}>{count}</h1>
            </>
        )
    }
}

export default withCounter(ClickCounter)