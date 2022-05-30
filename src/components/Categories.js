import {useState} from 'react'
import CategoryItem from './CategoryItem'

function Categories({inspo}) {


  
  function renderInspo() {
    return inspo.map((inspo) => 
    <CategoryItem key={inspo.title} {...inspo} />)
  }

  return (
    <div>
        <div className='category'>
          <h2>Categories</h2>
          <button className="box">All</button>
          <button className="box1">Venue</button>
          <button className="box2">Dresses</button>
          <button className="box3">Hair/Makeup</button>
          <button className="box4">Decorations</button>
        </div>
        <ul>
          {inspo && <div>{renderInspo()}</div>}
        </ul>
    </div>
  )
}

export default Categories