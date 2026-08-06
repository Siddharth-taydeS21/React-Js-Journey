import { useContext } from "react"
import { FromContext } from "../contexts/FormContext";

export default function Table() {
    const [expenses, setExpenses] = useContext(FromContext);
    return (
        <div>
            <h1 className="section_title">Your Expenses</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>
                            <div className="header-content">
                                <select name="table_category" id="table_category">
                                    <option disabled>Select category</option>
                                    <option value="all">All</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Clothes">Bills</option>
                                    <option value="Medicine">Medicine</option>
                                    <option value="Education">Education</option>
                                </select>
                            </div>
                        </th>
                        <th>
                            <div className="header-content">
                                <span>Amount</span>
                                <div>
                                    <i className="ri-arrow-up-box-fill up-arrow"></i>
                                    <i className="ri-arrow-down-box-fill down-arrow"></i>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenses.map(({id, title, category, amount}) => {
                            return (
                                <tr id={id} key={id}>
                                    <td>{title}</td>
                                    <td>{category}</td>
                                    <td id="amount">₹{amount.toLocaleString('en-IN')}</td>
                                </tr>
                            )
                        })
                    }

                    <tr className="total-row">
                        <td>Total</td>
                        <td />
                        <td>₹{expenses.map(item => item.amount).reduce((acc, curVal) => { return acc + curVal }, 0).toLocaleString('en-IN')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
