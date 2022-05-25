import { useState } from 'react'
import AddInspiration from "./AddInspiration"

function Categories() {
  
  const [inspo, setInspo] = useState({})

  function handleAddInspo(newInspo) {
      setInspo({...inspo, newInspo})
  }
  
  return (
    <div className="category">
        <h4>Blah</h4>
        <AddInspiration handleAddInspo={handleAddInspo}/>
    </div>
  )
}

export default Categories