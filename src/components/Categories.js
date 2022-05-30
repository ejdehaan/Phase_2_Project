import {useState} from 'react'
import CategoryItem from './CategoryItem'

function Categories({inspo}) {


  
  function renderInspo() {
    return inspo.map((inspo) => 
    <CategoryItem key={inspo.id} {...inspo} />)
  }

  return (
    <div>
        <div className='category'>
          <h4>Categories</h4>
          <button>All</button>
          <div/>
          <button>Venue</button>
          <div/>
          <button>Dresses</button>
          <div/>
          <button>Hair/Makeup</button>
          <div/>
          <button>Decorations</button>
        </div>
        <br/>
        <ul>
          {inspo && <div>{renderInspo()}</div>}
        </ul>
    </div>
  )
}

export default Categories