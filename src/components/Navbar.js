import { Link } from "react-router-dom"

function Navbar() {
  return (
    <div className='navbar'>
        {/* <h2 className='title'>Our Wedding</h2> */}
        <Link to="/add-inspiration">
          <button className="box">Add Inspiration!</button>
        </Link>

        <Link to="/categories">
          <button className="box1">Categories!</button>
        </Link>
    </div>
  )
}

export default Navbar