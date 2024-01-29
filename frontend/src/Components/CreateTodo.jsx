import { useState } from "react";

export default function CreateTodo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div style={{border: '2px solid #61dafbaa', padding: "50px", borderRadius: "10px"}}>
      <h1>Todo List</h1>
      <br />
      <input
        style={{
          padding: "15px 150px 15px 10px",
          fontFamily: "poppins",
          borderRadius: "10px",
          outline: "none",
          border: "none",
        }}
        type="text"
        placeholder="Todo Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <br />
      <br />
      <input
        style={{
          padding: "15px 150px 15px 10px",
          fontFamily: "poppins",
          borderRadius: "10px",
          outline: "none",
          border: "none",
        }}
        type="text"
        placeholder="Todo Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <br />
      <br />
      <br />
      <br />
      <button
        style={{ padding: "15px 155px 15px 155px" }}
        onClick={() => {
          fetch("http://localhost:3000/create-todo", {
            method: "POST",
            body: JSON.stringify({
              title: title,
              description: description,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }).then(async (res) => {
            await alert("Todo Created");
          });
        }}
      >
        Create Todo
      </button>
    </div>
  );
}
