import "./style.css"

export default function App(){
  const [newItem, setNewItem]= useState("")
  //setNewItem("afgae") // causes and infinite loop because of location it reruns over and over 
  const [todos, setTodos] = useState([])

  function handleSumbit(e){
      e.preventDefault()

      setTodos((currentTodos) => {
        return(
          [... currentTodos, {id:crypto.randomUUID(), title: newItem, completed:false},
          ]
        )
      })
      setNewItem("") // c;ears out input box

  }

  function toggleToDo(id, completed){
    setTodos(currentTodos=> {
      return currentTodos.map(todo => {
        if (todo.id === id){
          // todo.complete = completed YOU CANT DO THIS bc its immutable
          return {...todo, completed} // creates a brand new state object
          return todo
        }
      })
    })
  }
  return( 
    <>
    <form onSubmit= {handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item"> New Item</label>
        <input 
        value = {newItem} 
        onChange = {e => setNewitem(e.target.value)} // with no on change the input will always be empty bc we declared it as such with useState
        type="text" 
        id="item" />
      </div>
      <button className="btn"> Add</button>
    </form>
  <ht className="header"> ToDo </ht>
  <ul className="list">
    {todos.map (todo => { // runs it through javascript code
      return (   //don't use index bc it gets tricky when you strat deleting elements
        <li key={todo.id}> 
          <label>
            <input type="checkbox" checked= {todo.completed}
            onChange= {e => toggleToDo(todo.id, e.target.check)}/>
            {todo.title}
          </label>
        <button className="btn btn-danger">Delete</button>
      </li>
      )
    })} 
  </ul>
  </>
  )
}