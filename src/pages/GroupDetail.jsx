import React, { useEffect ,useState} from 'react'
import { Navbar } from "../components/Navbar";
import axios from 'axios';
import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Text, VStack ,Spacer, Button, HStack} from '@chakra-ui/react';
import { useNavigate ,useParams} from "react-router-dom";
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'

// import {default} from '../assets/default.png';

const GroupDetail = () => {
  const {id} = useParams()
  const [detail,setDetail] = useState([])
  const [communityList,setCommunityList] = useState([])
  const [community,setCommunity] = useState([]);
  useEffect(()=>{
    axios.get(`http://localhost:8000/groups/community-users/${id}`).then((res)=>{
      console.log(res.data);
      setDetail(res.data);
    })
  },[])

  useEffect(()=>{
    axios.get('http://localhost:8000/groups/community-list').then((res)=>{
      console.log(res.data);
      setCommunityList(res.data);

      setCommunity(res.data[id-1])
      console.log(res.data[id-1])
      
      

    })
  },[id])

  
  return (
    <>
      <Navbar/>
      <HStack minHeight='60vh' width='100%' justify='center'>
       <VStack>

        <Box>
        <Heading fontSize='4xl' fontWeight='semibold' mb='50px'>
            Group {community.location} ({community.start_date} to {community.end_date})
        </Heading>
        </Box>
       <Flex gap={30}>

       {
        detail.map((item)=>(
          <div class="max-w-xs">
    <div class="bg-white shadow-xl rounded-lg py-3 w-64">
        <div class="photo-wrapper p-2">
            <img class="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
        </div>
        <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">{item.user.name}</h3>
            <div class="text-center text-gray-400 text-xs font-semibold">
                {/* <p>Web Developer</p> */}
            </div>
            <table class="text-xs my-3">
                <tbody><tr>
                    {/* <td class="px-2 py-2 text-gray-500 font-semibold">Address</td> */}
                    {/* <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td> */}
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                    <td class="px-2 py-2">{item.user.phone_no}</td>
                </tr>
                <tr>
                    <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                    <td class="px-2 py-2">{item.user.email}</td>
                </tr>
            </tbody></table>

            {/* <div class="text-center my-3">
                <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
            </div> */}

        </div>
    </div>
</div>
        ))
       }

       </Flex>
          
       </VStack>
       
      </HStack>
    </>
  )
}

export default GroupDetail





