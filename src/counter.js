import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap"

function App() {
  const [count, setCount] = React.useState(0);
  return(
    <div className="container">
      <div className="min-vh-100 d-flex flex-row justify-content-center align-item-center">
        <div>
        <Button className="btn btn-success mx-3" onClick={()=> setCount(count +1)}>+</Button>
        </div>
        <div>
          <h2> {count}</h2>
        </div>
        <div>
          <Button className="btn btn-danger mx-3" onClick={()=> setCount(count -1)}>-</Button>
        </div>
      </div>
    </div>
  )
}

export default App