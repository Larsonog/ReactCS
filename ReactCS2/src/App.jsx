import "./style.css"

export default function App(){
  return( 
    <>
    <form className="new-item-form">
    <div className="form-row">
      <label htmlFor="item"> New Item</label>
      <input type="text" id="item"/>
    </div>
    <button className="btn"> Add</button>
  </form>
  <ht className="header"> ToDo </ht>
  <ul className="list">
    <li>
      <lable>
        <input type="checkbox"/>
        Item 1
      </lable>
      <button className="btn btn-danger">Delete</button>
    </li>
  </ul>
  </>
  )
}