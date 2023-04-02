import {React, useState} from 'react'
import TaskList from "./TaskList";
import { Link } from 'react-router-dom';
const Task = () => {
    const [todo, setTodo] = useState("");
  return (
    <>
      <div className="h-screen flex justify-center items-center flex-col gap-8">
      <div className="flex justify-center items-center gap-6">
        <input
          className="w-72 border-2  rounded-md px-3 py-3 bg-[#E8ECF4] backdrop-blur-lg"
          //set value of input field
          value={todo}
          onChange={(e) => {
            //update state on changes to text
            setTodo(e.target.value);
          }}
          placeholder="Enter a new item"
        />
        <button
          className="h-full px-5 py-2 bg-emerald-500 text-white font-medium rounded-md"
          onClick={() => {
            //execute function to add new todo to the list
          }}
        >
          Add Item
        </button>
        <button
          className="h-full px-5 py-2 bg-emerald-500 text-white font-medium rounded-md"
          onClick={() => {
            //execute function to add new todo to the list
          }}
        >
          <Link to ='/profile'>Back</Link>
        </button>
      </div>
      <TaskList />
    </div>
    </>
  )
}

export default Task

