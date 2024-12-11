import { useState } from "react"
import "./MoneyForm.css"

function MoneyForm({ formTotal }) {
  // when form submits- updates state -> UI is updated in APP which takes
  // state as props and displays it.

  return (
    <form className="form-body">
      <select>
        <option>Income</option>
        <option>Expense</option>
      </select>
      <input type="money" placeholder={formTotal}></input>
      <input placeholder="Category"></input>
      <button>Submit</button>
    </form>
  )
}

export default MoneyForm
