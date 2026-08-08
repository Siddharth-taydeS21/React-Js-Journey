import { useEffect, useState } from "react";

export function useLocalStorage(key, initialData) {
    const [data, setData] = useState(initialData);

    // handling if previous data exists in local storage 
    useEffect(() => {
        const existingData = JSON.parse(localStorage.getItem(key));
        if (existingData) {
            localStorage.setItem(key, JSON.stringify(existingData))
            setData(existingData)
        } else {
            localStorage.setItem(key, JSON.stringify(initialData))
            // setData(initialData) // unnecessary step, we already had set the initialData to the state
        }
    }, []);

    const updateData = (newData) => {
        if (typeof newData === 'function') {
            localStorage.setItem(key, JSON.stringify(newData(data)))
            setData(newData);
        } else {
            localStorage.setItem(key, JSON.stringify(newData))
            setData(newData);
        }
    }

    return [data, updateData]
}