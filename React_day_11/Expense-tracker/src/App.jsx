import { useState } from "react";
import From from "./components/From";
import Header from "./components/Header";
import Table from "./components/Table";
import FormContextState, { FromContext } from "./contexts/FormContext";
import "./App.css";

export default function App() {
    const [expenses, setExpenses] = FormContextState();
    return (
        <FromContext.Provider value={[expenses, setExpenses]}>
            <Header></Header>
            <main>
                <From />
                <Table />
            </main>
        </FromContext.Provider>
    )
}
