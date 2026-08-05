import { useState } from "react";
import From from "./components/From";
import Header from "./components/Header";
import Table from "./components/Table";
import { FromContext } from "./contexts/FormContext";

export default function App() {
    // state for form data 
    const [expenses, setExpenses] = useState([
        {id: 1, title: 'Milk', category: 'Grocery', amount: 40},
        {id: 2, title: 'Shirt', category: 'Clothes', amount: 600},
        {id: 3, title: 'Vegetables', category: 'Grocery', amount: 100},
        {id: 4, title: 'Electricity Bill', category: 'Bills', amount: 1100},
    ]);


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
