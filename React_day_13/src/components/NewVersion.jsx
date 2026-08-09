import React, { useState } from 'react'
import { useEffect } from 'react'

export default function NewVersion() {
    const [count, setCount] = useState(0)

    useEffect(() => {
        // This action is equivalent to a Life cycle method : componentDidMount =
        console.log('componentDidMount');


        return () => {
            // This action is equivalent to a Life cycle method : componentWillUnMount =
            console.log('componentWillUnMount');
        }
    }, [])

    useEffect(() => {
        // This action is equivalent to a Life cycle method : componentDidUpdate =
        if(count > 0){ // achieved the same behavior to the componentDidUpdate method using a small check  
            console.log('componentDidUpdate');
        }
    }, [count])

    return (

        <div className="my-10 w-full flex gap-4 justify-center items-center">
            {/* This action is equivalent to a Life cycle method : render == */} {console.log('render..')}
            <button className="bg-gray-300 rounded p-[.5rem_1rem]"
                onClick={() => { setCount(count + 1) }}
            >++Increase Count</button>
            <h1 className="text-2xl font-bold">
                Count is :
                <span className="text-indigo-500 font-mono text-3xl"> {count}</span>
            </h1>
            <button className="bg-gray-300 rounded p-[.5rem_1rem]"
                onClick={() => { if (count > 0) setCount(count - 1) }}
            >--Decrease Count</button>
        </div>
    )
}
