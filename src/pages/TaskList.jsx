import React from 'react'
import axios from 'axios'
import { useState,useEffect } from 'react' 


const TaskList = () => {
     const [todo,setTodo] = useState([])

     useEffect(()=>{
        axios.get('http://127.0.0.1:8000/accounts/todos/').then((res)=>{
            console.log(res)
        })
     },[])

  return (
    <>
      <div className="w-full text-center flex items-center flex-col gap-5">
      <h1 className=" uppercase font-semibold text-2xl">Packing List</h1>
      <div className="w-1/2 bg-slate-300 backdrop-blur-lg px-3 py-5 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <li className="list-none w-2/3 text-left break-normal">Item 1</li>
            <div className="flex gap-3">
                <button className="bg-emerald-500 text-white px-2 py-2 font-medium rounded-md">Completed</button>
                <button className=" bg-white px-2 py-2 font-medium rounded-md">Delete</button>
            </div>
          </div>
      </div>
    </div>

      <div className="w-full text-center flex items-center flex-col gap-5">
      {/* <h1 className="text-blue-600 uppercase font-semibold text-2xl">Task List</h1> */}
      <div className="w-1/2 bg-slate-100 backdrop-blur-lg px-3 py-5 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <li className="list-none w-2/3 text-left break-normal">Item 2</li>
            <div className="flex gap-3">
                <button className="bg-emerald-500 text-white px-2 py-2 font-medium rounded-md">Not Complete</button>
                <button className="bg-white bg-emerald-500 px-2 py-2 font-medium rounded-md">Delete</button>
            </div>
          </div>
      </div>
    </div>

      <div className="w-full text-center flex items-center flex-col gap-5">
      {/* <h1 className="text-blue-600 uppercase font-semibold text-2xl">Task List</h1> */}
      <div className="w-1/2 bg-slate-100 backdrop-blur-lg px-3 py-5 rounded-md">
          <div className="flex justify-between items-center mb-5">
            <li className="list-none w-2/3 text-left break-normal">Item 3</li>
            <div className="flex gap-3">
                <button className="bg-emerald-500 text-white px-2 py-2 font-medium rounded-md">Not Complete</button>
                <button className="bg-white bg-emerald-500 px-2 py-2 font-medium rounded-md">Delete</button>
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default TaskList