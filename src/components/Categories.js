import {useState} from 'react'
import CategoryItem from './CategoryItem'

function Categories({inspo}) {


  
  function renderInspo() {
    return inspo.map((inspo) => 
    <CategoryItem key={inspo.title} {...inspo} />)
  }

  return (
    <div>
        <h3 className='category'>Categories</h3>
        <ul>
          {inspo && <div>{renderInspo()}</div>}
        </ul>
    </div>
  )
}

export default Categories