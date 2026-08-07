import { useState } from "react";

export default function EditItemContext() {
  // state for edit item id 
  const [editId, setEditId] = useState('')
  // console.log(editId)

  //state for all input values 
  // state for all inputs
  const [allInputs, setAllInputs] = useState({
    title: '',
    category: '',
    amount: ''
  });

  return { editId, setEditId, allInputs, setAllInputs };
}
