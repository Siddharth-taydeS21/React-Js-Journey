import { Component } from "react";
import withCounter from "./WithCounter";

class HoverCounter extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { count, increaseCount } = this.props;
        return (
            <>
                <p className="text-xl font-bold mt-10">Hover on this to increase Count:</p>
                <h1 className="text-3xl font-bold font-mono bg-green-400 w-125 text-center p-2 rounded mx-4" onMouseEnter={increaseCount}>{count}</h1>
            </>
        )
    }
}

export default withCounter(HoverCounter)