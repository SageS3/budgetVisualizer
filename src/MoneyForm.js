import React from "react"
import "./MoneyForm.css"

function MoneyForm() {
  // when form submits- updates state -> UI is updated in APP which takes
  // state as props and displays it.
  return (
    <div className="form-body">
      <select>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <input type="money" placeholder="$0.00"></input>
      <input placeholder="Category"></input>
      <button>Submit</button>
    </div>
  )
}

export default MoneyForm
