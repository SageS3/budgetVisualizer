import { useState } from "react"
import "./MoneyForm.css"

function MoneyForm() {
  // when form submits- updates state -> UI is updated in APP which takes
  // state as props and displays it.
  const [formData, setFormData] = useState({
    category: "",
    amount: 0,
    type: "Expense",
  })

  function submitHandler() {}

  function onChangeHandler() {}

  return (
    <form className="form-body">
      <select onChange={() => {}} value={formData.type}>
        <option value={"Expense"}>Expense</option>
        <option value={"Income"}>Income</option>
      </select>
      <input placeholder={"Amount"}></input>
      <input placeholder="Category"></input>
      <button>Submit</button>
    </form>
  )
}

export default MoneyForm
