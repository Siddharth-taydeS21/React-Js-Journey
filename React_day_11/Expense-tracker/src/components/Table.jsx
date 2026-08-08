import { useContext, useEffect, useState } from "react"
import { FromContext } from "../contexts/FormContext";
import { useFilter } from "../hooks/useFilter";
import ContextMenu from "./ContextMenu";
import EditItemContext from "../contexts/EditItemContext";

export default function Table() {
    // state for context menu
    const [contextMenuPosition, setContextMenuPosition] = useState({});

    // state for getting clicked row id
    const [rowId, setRowId] = useState('');

    const { expenses, setExpenses } = useContext(FromContext);

    const [filteredData, setQuery] = useFilter(expenses, (item) => item.category.toLowerCase())

    const [sortCallBack, setSortCallBack] = useState(() => () => { })

    return (
        <div className="table_parent" onClick={() => { setContextMenuPosition({}) }}>
            <h1 className="section_title">
                Your Expenses
                <small style={{ fontWeight: "normal" }}> (Right click on the item for edit or delete)</small>
            </h1>
            <ContextMenu positions={contextMenuPosition} setPositions={setContextMenuPosition} rowId={rowId} />
            <table>
                <thead>
                    <tr>
                        <th>
                            <div className="header-content">
                                Title
                                <div>
                                    <i title="Sort by A-Z" className="ri-arrow-up-box-fill up-arrow" onClick={() => { setSortCallBack(() => (a, b) => a.title.localeCompare(b.title)) }}></i>
                                    <i title="Sort by Z-A" className="ri-arrow-down-box-fill down-arrow" onClick={() => { setSortCallBack(() => (a, b) => b.title.localeCompare(a.title)) }}></i>
                                </div>
                            </div>
                        </th>
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
                                    <i title="Sort by ascending" className="ri-arrow-up-box-fill up-arrow" onClick={() => { setSortCallBack(() => (a, b) => (a.amount - b.amount)) }}></i>
                                    <i title="Sort by descending" className="ri-arrow-down-box-fill down-arrow" onClick={() => { setSortCallBack(() => (a, b) => (b.amount - a.amount)) }}></i>
                                </div>
                            </div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        filteredData.sort(sortCallBack).map(({ id, title, category, amount }) => {
                            return (
                                <tr id={id} key={id} onContextMenu={(e) => {
                                    e.preventDefault();
                                    setRowId(id);
                                    setContextMenuPosition({ left: e.clientX + window.scrollX + 4, top: e.clientY + window.scrollY })
                                }}>
                                    <td>{title}</td>
                                    <td>{category}</td>
                                    <td id="amount">₹{parseInt(amount).toLocaleString('en-IN')}</td>
                                </tr>
                            )
                        })
                    }

                    <tr className="total-row">
                        <td>Total</td>
                        <td onClick={() => { setSortCallBack(() => () => { }) }} style={{ cursor: 'pointer' }}>Clear sort</td>
                        <td>₹{filteredData.map(item => item.amount).reduce((acc, currentVal) => { return acc + parseInt(currentVal) }, 0).toLocaleString('en-IN')}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
