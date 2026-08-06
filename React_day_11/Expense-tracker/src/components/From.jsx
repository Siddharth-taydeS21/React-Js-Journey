import { useContext, useEffect, useRef, useState } from "react";
import { FromContext } from "../contexts/FormContext";

export default function From() {
    // importing state 
    const [expenses, setExpenses] = useContext(FromContext);

    // ===================== FORM VALIDATION LOGIC ================ 
    //state for form Errors Oject
    const [errors, setErrors] = useState({});
    const validateForm = ({amount, title, category}) => {
        let Errors = {}
        // console.log(amount, category, title)
        if (!category) {
            Errors.category = 'Category is required';
        }
        if (!title) {
            Errors.title = 'Title is required';
        }
        if (!amount) {
            Errors.amount = 'Amount is required';
        }
        setErrors(Errors)
        return Errors;
    }

    // ===================== FORM SUBMISSION LOGIC WITH useState hook ================ 
    // state for all inputs
    const [allInputs, setAllInputs] = useState({
        title: '',
        category: '',
        amount: ''
    });

    // submit event handler for form 
    const submitExpense = (e) => {
        e.preventDefault();

        const newExpense = allInputs;
        newExpense.amount = Number(newExpense.amount)

        const ErrorFields = validateForm(newExpense);
        if(Object.keys(ErrorFields).length) return;

        newExpense.id = crypto.randomUUID();

        setExpenses((prevData) => [...prevData, newExpense])
        setAllInputs({
            title: '',
            category: '',
            amount: ''
        })
    }

    const handleInput = (e) => {
        const {name, value} = e.target;
        setAllInputs((prevData) => ({ ...prevData, [name]: value }))
        setErrors({});
    }


    // ===================== FORM SUBMISSION LOGIC WITH useRef hook ================ 
    // const titleRef = useRef(null)
    // const categoryRef = useRef(null)
    // const amountRef = useRef(null)

    // // Important Realization : useEffect code runs at end of its parent component's code!
    // // useEffect(() => {
    // //     console.log(titleRef)
    // //     console.log(categoryRef)
    // //     console.log(amountRef)
    // // }, [])

    // const submitExpense = (e) => {
    //     e.preventDefault();

    //     const newExpense = {
    //         title: titleRef.current.value,
    //         category: categoryRef.current.value,
    //         amount: Number(amountRef.current.value),
    //         id: crypto.randomUUID()
    //     }
    //     // console.log(newExpense)

    //     setExpenses((prevData) => [...prevData, newExpense])
    //     amountRef.current.value = '';
    //     titleRef.current.value = '';
    //     categoryRef.current.value = '';
    // }

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
                        value={allInputs.title}
                        onChange={handleInput}
                        // ref={titleRef}
                         />
                        <p className="errorMsg">{errors.title}</p>
                </label>

                <label htmlFor="category">
                    Category :
                    <select
                        name="category"
                        id="category"
                        value={allInputs.category}
                        onChange={handleInput}
                        // ref={categoryRef}
                        >
                        <option disabled>Select category</option>
                        <option value="Grocery">Grocery</option>
                        <option value="Clothes">Clothes</option>
                        <option value="Bills">Bills</option>
                        <option value="Medicine">Medicine</option>
                        <option value="Education">Education</option>
                    </select>
                    <p className="errorMsg">{errors.category}</p>
                </label>

                <label htmlFor="amount">
                    Amount :
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        placeholder="Add amount"
                        value={allInputs.amount}
                        onChange={handleInput}
                        // ref={amountRef}
                         />
                        <p className="errorMsg">{errors.amount}</p>
                </label>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}
