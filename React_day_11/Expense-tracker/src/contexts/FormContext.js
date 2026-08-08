import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const data = [
    { id: crypto.randomUUID(), title: 'Milk', category: 'Grocery', amount: 40 },
    { id: crypto.randomUUID(), title: 'Shirt', category: 'Clothes', amount: 600 },
    { id: crypto.randomUUID(), title: 'Vegetables', category: 'Grocery', amount: 100 },
    { id: crypto.randomUUID(), title: 'Electricity Bill', category: 'Bills', amount: 1100 },
    { id: crypto.randomUUID(), title: 'Practical file', category: 'Education', amount: 120 },
    { id: crypto.randomUUID(), title: 'Pain killers', category: 'Medicine', amount: 200 },
    { id: crypto.randomUUID(), title: 'Paracetamol tablets', category: 'Medicine', amount: 850 },
    { id: crypto.randomUUID(), title: 'Water Bill', category: 'Bills', amount: 650 }
]

export default function FormContextState() {
    // state for form data 
    const [expenses, setExpenses] = useLocalStorage('expenses', data);

    return [expenses, setExpenses];
}


// created context for form CURD Operation
export const FromContext = createContext();