import { useContext, useEffect, useRef, useState } from "react";
import { FromContext } from "../contexts/FormContext";
import InputField from "./InputField";
import SelectField from "./SelectField";

export default function From() {
    // importing state 
    const [expenses, setExpenses] = useContext(FromContext);

    // ===================== FORM VALIDATION LOGIC ================ 
    //state for form Errors Oject
    const [errors, setErrors] = useState({});

    // ======================= ALL FORM INPUT VALIDATION RULES WRITTEN IN A SINGLE SOURCE =========================
    const formValidationConfigs = {
        title: [
            { required: true, massage: 'Title can not be empty' },
            { minLength: 4, massage: 'Title must have more than 4 letters' }
        ],
        category: [
            { required: true, massage: 'Please select an option form category' },
        ],
        amount: [
            { required: true, massage: 'Amount can not be empty' },
            { minValue: true, massage: 'Amount must be greater than 0' }
        ]
    }



    const validateForm = (formData) => {
        let Errors = {}
        // console.log(formData);
        Object.entries(formData).forEach(([key, value]) => (
            formValidationConfigs[key].some(check => {
                if (check.required && !value) {
                    Errors[key] = check.massage;
                    return true
                }
                if (check.minLength && value.length < 4) {
                    Errors[key] = check.massage;
                    return true
                }
                if (check.minValue && Number(value) === 0) {
                    Errors[key] = check.massage;
                    return true
                }
            })
        ))

        setErrors(Errors)
        return Errors;
    }

    // ===================== FORM SUBMISSION LOGIC WITH useState hook ================ 
    // state for all inputs
    const [allInputs, setAllInputs] = useState({
        title: '',
        category: '',
        amount: ''
    });

    // submit event handler for form 
    const submitExpense = (e) => {
        e.preventDefault();

        const newExpense = allInputs;

        const ErrorFields = validateForm(newExpense);
        if (Object.keys(ErrorFields).length) return;

        newExpense.amount = Number(newExpense.amount)
        newExpense.id = crypto.randomUUID();

        setExpenses((prevData) => [...prevData, newExpense])
        setAllInputs({
            title: '',
            category: '',
            amount: ''
        })
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setAllInputs((prevData) => ({ ...prevData, [name]: value }))
        setErrors({});
    }


    // ===================== FORM SUBMISSION LOGIC WITH useRef hook ================ 
    // const titleRef = useRef(null)
    // const categoryRef = useRef(null)
    // const amountRef = useRef(null)

    // // Important Realization : useEffect code runs at end of its parent component's code!
    // // useEffect(() => {
    // //     console.log(titleRef)
    // //     console.log(categoryRef)
    // //     console.log(amountRef)
    // // }, [])

    // const submitExpense = (e) => {
    //     e.preventDefault();

    //     const newExpense = {
    //         title: titleRef.current.value,
    //         category: categoryRef.current.value,
    //         amount: Number(amountRef.current.value),
    //         id: crypto.randomUUID()
    //     }
    //     // console.log(newExpense)

    //     setExpenses((prevData) => [...prevData, newExpense])
    //     amountRef.current.value = '';
    //     titleRef.current.value = '';
    //     categoryRef.current.value = '';
    // }

    return (
        <div>
            <h1 className="section_title">Add Expense</h1>
            <form action="" onSubmit={(e) => { submitExpense(e) }}>
                <InputField
                    label="Title"
                    id="title"
                    type="text"
                    value={allInputs.title}
                    eventHandler={handleInput}
                    errorMsg={errors.title}
                />

                <SelectField
                    key='category'
                    id="category"
                    value={allInputs.category}
                    label="Category"
                    eventHandler={handleInput}
                    placeHolder='Select category'
                    options={['Grocery', 'Clothes', 'Bills', 'Medicine', 'Education']}
                    errorMsg={errors.category}
                />

                <InputField
                    label="Amount"
                    id="amount"
                    type="number"
                    value={allInputs.amount}
                    eventHandler={handleInput}
                    errorMsg={errors.amount}
                />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
