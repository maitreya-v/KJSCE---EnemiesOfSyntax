import React, { useEffect ,useState} from 'react'
import { Navbar } from "../components/Navbar";
import axios from 'axios';
import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Text, VStack ,Spacer, Button, InputGroup, InputLeftAddon} from '@chakra-ui/react';
import { useNavigate } from "react-router-dom";
import { Input } from '@chakra-ui/react'
const Groups = () => {
  const [communityArray,setCommunityArray] = useState([])
  const [createGroupInput,setCreateGroupInput] = useState()
  const navigate = useNavigate(); 
  useEffect(()=>{
    axios.get('http://127.0.0.1:8000/groups/community-list/').then((res)=>{
      console.log(res.data)
      setCommunityArray(res.data)
    })
  },[])


  // const onSubmitHandler = () =>{
  //   axios.post('http://localhost:8000/groups/community-post/').then((res)=>{
      
  //   })
  // }




  const onViewHandler = (id) => {
   navigate(`/groupdetail/${id}`)
  }
  // const onJoinHandler = () =>{
    // axios.post('http://127.0.0.1:8000/groups/join-community/')
  // }

  return (
    <>
      <Navbar/>
      <Grid templateColumns='repeat(6,1fr)' gap={10} minWidth='80vw' minHeight='100vh'>
      {/* <Box> */}
      {/* </Box> */}
  <VStack gridColumn="2 / span 4">
    <GridItem height={50} width='100%'>
      <Flex w='100%'>

    <h2 class="mt-0 mb-2 text-3xl font-medium leading-tight text-primary">
  Join or Create Groups
</h2>
<Spacer></Spacer>



      </Flex>

    </GridItem>
    {/* <GridItem height={50} width='100%' bg='tomato'>
    </GridItem>
    <GridItem height={50} width='100%' bg='tomato'>
    </GridItem>
    <GridItem height={50} width='100%' bg='tomato'>
    </GridItem>
    <GridItem height={50} width='100%' bg='tomato'>
    </GridItem> */}
    {
      communityArray.map((item)=>(
        <GridItem height={50} width='100%' className='bg-slate-300' mb={100} >
          <Flex ms={6} align='center'>
              <Text mt={4}>{item.location}</Text>
              <Spacer>
              </Spacer>
              <Button variant='filled' className='bg-emerald-500' mt={11} me={10} px={2} py={2} onClick={()=>onViewHandler(item.id)}>View Group</Button>
              <Button variant='filled' className='bg-emerald-500'  mt={11} me={10} px={2} py={2} onClick={()=>console.log(item.id)}>Join</Button>
          </Flex>
    </GridItem>
      ))
    }
  </VStack>
</Grid>

    </>
  )
}

export default Groups