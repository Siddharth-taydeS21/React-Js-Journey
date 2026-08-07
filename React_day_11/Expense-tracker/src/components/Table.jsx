import { useContext, useState } from "react"
import { FromContext } from "../contexts/FormContext";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";

export default function Table() {
    // state for context menu
    const [contextMenuPosition, setContextMenuPosition] = useState({});

    // state for getting clicked row id
    const [rowId, serRowId] = useState('');

    const [expenses, setExpenses] = useContext(FromContext);

    const [filteredData, setQuery] = useFilter(expenses, (item) => item.category.toLowerCase())

    return (
        <div className="table_parent" onClick={() => {setContextMenuPosition({})}}>
            <h1 className="section_title">Your Expenses</h1>
            <ContextMenu positions={contextMenuPosition} setPositions={setContextMenuPosition} rowId={rowId}/>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>
                            <div className="header-content">
                                <select name="table_category" id="table_category" onChange={(e) => { setQuery(e.target.value.toLowerCase()) }}>
                                    <option disabled>Select category</option>
                                    <option value="">All</option>
                                    <option value="Grocery">Grocery</option>
                                    <option value="Clothes">Clothes</option>
                                    <option value="Bills">Bills</option>
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
                        filteredData.map(({ id, title, category, amount }) => {
                            return (
                                <tr id={id} key={id} onContextMenu={(e) => {
                                    e.preventDefault();
                                    serRowId(id)
                                    setContextMenuPosition({left: e.clientX + window.scrollX + 4, top: e.clientY + window.scrollY})
                                }}>
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
                        <td>₹{filteredData.map(item => item.amount).reduce((acc, currentVal) => { return acc + currentVal }, 0).toLocaleString('en-IN')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
