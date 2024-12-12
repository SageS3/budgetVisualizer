import "./App.css"
import MoneyForm from "./MoneyForm"
import TotalDisplay from "./TotalDisplay"
import { useState } from "react"

function App() {
  const [formData, setFormData] = useState({})

  function formSubmitHandler() {}

  return (
    <div className="App">
      <MoneyForm />
      <TotalDisplay formData={formData} />
    </div>
  )
}

export default App
