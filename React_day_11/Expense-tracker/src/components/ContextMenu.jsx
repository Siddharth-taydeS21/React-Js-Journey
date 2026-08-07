import { useContext } from "react";
import { FromContext } from "../contexts/FormContext";
import EditItemContext from "../contexts/EditItemContext";

export default function ContextMenu({ positions, setPositions, rowId }) {
    const { expenses, setExpenses, editId, setEditId, allInputs, setAllInputs } = useContext(FromContext);

    if (!positions.left) return
    return (
        <div className="context_menu" style={positions}>
            <div className="edit_btn" onClick={() => {
                const editItem = expenses.find(item => item.id === rowId)
                setAllInputs({
                    title: editItem.title,
                    category: editItem.category,
                    amount: editItem.amount
                })
                setEditId(rowId)
                setPositions({});
            }}>Edit</div>
            <div className="delete_btn" onClick={() => {
                const newExpense = expenses.filter(item => item.id !== rowId)
                setExpenses(newExpense)
                setPositions({})
            }}>Delete</div>
        </div>
    )
}
