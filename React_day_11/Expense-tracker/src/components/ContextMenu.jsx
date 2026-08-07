import { useContext } from "react";
import { FromContext } from "../contexts/FormContext";

export default function ContextMenu({ positions, setPositions, rowId }) {
    const [expenses, setExpenses] = useContext(FromContext);

    if (!positions.left) return
    return (
        <div className="context_menu" style={positions}>
            <div className="edit_btn" onClick={() => {
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
