import { useState } from "react"
import "./TotalDisplay.css"

function TotalDisplay() {
  const [total, setTotal] = useState(0.0)
  return (
    <div className="total-display-body">
      <h1>
        <span>$</span>
        {total}
      </h1>
    </div>
  )
}

export default TotalDisplay
