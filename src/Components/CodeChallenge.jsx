import { Box, Button, Heading, Input } from '@chakra-ui/react'
import React from 'react'

const CodeChallenge = () => {
  let token=JSON.parse(localStorage.getItem("Token"))
  function smallestPositiveInt(arr) {
    // Sort the array in ascending order
    arr.sort((a, b) => a - b);
  
    // Initialize the smallest positive integer to 1
    let smallestInt = 1;
  
    // Loop through the array
    for (let i = 0; i < arr.length; i++) {
      // If the current element is equal to the smallest positive integer, increment the smallest integer
      if (arr[i] === smallestInt) {
        smallestInt++;
      }
    }
  
    // Return the smallest positive integer
    return smallestInt;
  }
  const arr = [1, 3, 6, 4,1,2];
  const result = smallestPositiveInt(arr);
  console.log(result);


  if(token){
    return (
      <Box>
       <Box>
        <Heading>Code Challenge</Heading>
       </Box>
       <Box p="20">
        Enter Array Value Here...
        <Input type="text" />
       </Box>
       <Button>Check</Button>
      </Box>
     )
  }
  else{
    return (
      <Box>
      <Box p="20"><Heading>Please Login first..</Heading></Box> 
      </Box>
     )
  }
}

export default CodeChallenge