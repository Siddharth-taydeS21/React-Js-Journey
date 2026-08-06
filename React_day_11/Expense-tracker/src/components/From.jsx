import { useContext, useEffect, useRef, useState } from "react";
import { FromContext } from "../contexts/FormContext";

export default function From() {
    // importing state 
    const [expenses, setExpenses] = useContext(FromContext);

    // ===================== FORM SUBMISSION LOGIC WITH useState hook ================ 
    //state for all inputs
    // const [allInputs, setAllInputs] = useState({
    //     title: '',
    //     category: '',
    //     amount: ''
    // }); 

    // // submit event handler for form 
    // const submitExpense = (e) => {
    //     e.preventDefault();

    //     const newExpense = allInputs;
    //     newExpense.amount = Number(newExpense.amount)
    //     newExpense.id = crypto.randomUUID();

    //     setExpenses((prevData) => [...prevData, newExpense])
    //     setAllInputs({
    //         title: '',
    //         category: '',
    //         amount: ''
    //     })
    // }

    // ===================== FORM SUBMISSION LOGIC WITH useRef hook ================ 
    const titleRef = useRef(null)
    const categoryRef = useRef(null)
    const amountRef = useRef(null)

    // Important Realization : useEffect code runs at end of its parent component's code!
    // useEffect(() => {
    //     console.log(titleRef)
    //     console.log(categoryRef)
    //     console.log(amountRef)
    // }, [])

    const submitExpense = (e) => {
        e.preventDefault();

        const newExpense = {
            title: titleRef.current.value,
            category: categoryRef.current.value,
            amount: Number(amountRef.current.value),
            id: crypto.randomUUID()
        }
        // console.log(newExpense)

        setExpenses((prevData) => [...prevData, newExpense])
        amountRef.current.value = '';
        titleRef.current.value = '';
        categoryRef.current.value = '';
    }

    return (
        <div>
            <h1 className="section_title">Add Expense</h1>
            <form action="" onSubmit={(e) => { submitExpense(e) }}>
                <label htmlFor="title">
                    Title :
                    <input
                        type="text"
                        name="title"
                        id="title"
                        placeholder="Add title"
                        // value={allInputs.title}
                        // onChange={(e) =>
                        //     setAllInputs((prevData) => ({...prevData, title: e.target.value}))
                        // }
                        ref={titleRef}
                        required />
                </label>

                <label htmlFor="category">
                    Category :
                    <select
                        name="category"
                        id="category"
                        // value={allInputs.category}
                        // onChange={(e) =>
                        //     setAllInputs((prevData) => ({...prevData, category: e.target.value}))
                        // }
                        ref={categoryRef}
                        required>
                        <option disabled>Select category</option>
                        <option value="all">All</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Bills">Bills</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Education">Education</option>
                    </select>
                </label>

                <label htmlFor="amount">
                    Amount :
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Add amount"
                        // value={allInputs.amount}
                        // onChange={(e) =>
                        //     setAllInputs((prevData) => ({...prevData, amount: e.target.value}))
                        // }
                        ref={amountRef}
                        required />
                </label>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}
