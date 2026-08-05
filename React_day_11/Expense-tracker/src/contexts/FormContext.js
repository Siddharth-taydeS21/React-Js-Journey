import { createContext, useState } from "react";

export default function FormContextState() {
    // state for form data 
    const [expenses, setExpenses] = useState([
        { id: crypto.randomUUID(), title: 'Milk', category: 'Grocery', amount: 40 },
        { id: crypto.randomUUID(), title: 'Shirt', category: 'Clothes', amount: 600 },
        { id: crypto.randomUUID(), title: 'Vegetables', category: 'Grocery', amount: 100 },
        { id: crypto.randomUUID(), title: 'Electricity Bill', category: 'Bills', amount: 1100 },
    ]);

    return [expenses, setExpenses];
}


// created context for form CURD Operation
export const FromContext = createContext();