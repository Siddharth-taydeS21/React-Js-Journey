import { useState } from "react";
import From from "./components/From";
import Header from "./components/Header";
import Table from "./components/Table";
import FormContextState, { FromContext } from "./contexts/FormContext";
import "./App.css";
import EditItemContext from "./contexts/EditItemContext";

export default function App() {
    const [expenses, setExpenses] = FormContextState();
    const { editId, setEditId, allInputs, setAllInputs } = EditItemContext();
    return (
        <FromContext.Provider value={{ expenses, setExpenses, editId, setEditId, allInputs, setAllInputs }}>
            <Header></Header>
            <main>
                <From />
                <Table />
            </main>
        </FromContext.Provider>
    )
}
