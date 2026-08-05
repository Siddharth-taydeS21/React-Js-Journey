import { useContext } from "react";
import { FromContext } from "../contexts/FormContext";

export default function From() {

    // importing state 
    const [expenses, setExpenses] = useContext(FromContext);

    // submit event handler for form 
    const submitExpense = (e) => {
        e.preventDefault();
        const form = document.querySelector('form');
        const formData = new FormData(form);
        const formObject = Object.fromEntries(formData.entries());
        formObject.id = expenses.length + 1;
        formObject.amount = Number(formObject.amount);
        // set formObject with previous state here 
        setExpenses(prevState => [...prevState, formObject ])
        form.reset();
    }

  return (
    <div>
    <h1 className="section_title">Add Expense</h1>
    <form action="" onSubmit={(e) => {submitExpense(e)}}>
        <label htmlFor="title">
            Title :
            <input type="text" name="title"  id="title" placeholder="Add title" required/>
        </label>

        <label htmlFor="category">
            Category :
            <select name="category" id="category" required>
                <option hidden>Select category</option>
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
            <input type="number"  id="amount" name="amount" placeholder="Add amount" required/>
        </label>

        <button type="submit">Add</button>
    </form>
    </div>
  )
}
