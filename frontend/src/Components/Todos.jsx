export default function Todos({todos}){
    return(
        <div>
            {todos.map((todo)=>{
                return(
                    <>
                        <h2>{todo.title}</h2>
                        <h2>{todo.description}</h2>
                        <button onClick={()=>{
                            fetch("http://localhost:3000/completed",{
                                method: "PUT", 
                                headers:{
                                    "Content-Type": "application/json"
                                },
                                body: JSON.stringify({
                                    id: todo._id
                                })
                            })
                            .then(()=>{
                                alert("Todo Completed")
                            })
                        }}>{todo.completed == true ? "Completed" : "Mark as Done"}</button>
                    </>
                    )
                })}
        </div>
    )
}