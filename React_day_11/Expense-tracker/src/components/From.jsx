import { useContext, useState } from "react";
import { FromContext } from "../contexts/FormContext";

export default function From() {
    // importing state 
    const [expenses, setExpenses] = useContext(FromContext);

    // ===================== FORM SUBMISSION LOGIC WITH useState hook ================ 
    //state for all inputs
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
        newExpense.id = crypto.randomUUID();
    
        setExpenses((prevData) => [...prevData, newExpense])
        setAllInputs({
            title: '',
            category: '',
            amount: ''
        })
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
                        value={allInputs.title}
                        onChange={(e) =>
                            setAllInputs((prevData) => ({...prevData, title: e.target.value}))
                        }
                        required />
                </label>

                <label htmlFor="category">
                    Category :
                    <select
                        name="category"
                        id="category"
                        value={allInputs.category}
                        onChange={(e) =>
                            setAllInputs((prevData) => ({...prevData, category: e.target.value}))
                        }
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
                        value={allInputs.amount}
                        onChange={(e) =>
                            setAllInputs((prevData) => ({...prevData, amount: e.target.value}))
                        }
                        required />
                </label>

                <button type="submit">Add</button>
            </form>
        </div>
    )
}
