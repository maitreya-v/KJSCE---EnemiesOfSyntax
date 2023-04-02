
import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const CreateTrip = () => {
    const navigate = useNavigate()
    const [start,setStart] = useState();
    const [end,setEnd] = useState();
    const [location,setLocation] = useState();
    const onSubmitHandler = () =>{
        const postObj={
            'location':location,
            'start_date':start,
            'end_date':end
        }
        const token = localStorage.getItem('token');
        // const headers={
        //     'Authorization': `Token ${token}`
        // }

        axios.post('http://127.0.0.1:8000/groups/community-post/',postObj, {
            headers: {
              'Authorization': `Token ${token}`
            }
          }).then((res)=>{
             console.log(res);
             navigate('/')
        })
         
    }
  return (
    <>
      {/* <p class="text-xl ">Create Trip</p> */}
      <div class="flex justify-center items-center h-screen">
        <form class="w-1/4">
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="start-date">
              Start Date:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="start-date" type="date" onChange={(e)=>setStart(e.target.value)}/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="end-date">
              End Date:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="end-date" type="date" onChange={(e)=>setEnd(e.target.value)}/>
          </div>
          <div class="mb-4">
            <label class="block text-gray-700 text-sm font-bold mb-2" for="location">
              Location:
            </label>
            <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="location" type="text" onChange={(e)=>setLocation(e.target.value)}/>
          </div>
          <div class="flex justify-center">
            <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={onSubmitHandler}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default CreateTrip;
