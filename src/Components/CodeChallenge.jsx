import {
  Box,
  Button,
  Heading,
  Input,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Flex,
} from "@chakra-ui/react";
import React, { useState } from "react";

const CodeChallenge = () => {
  // Token for checking user Login or Not
  let token = JSON.parse(localStorage.getItem("Token"));
  const [number, setNumber] = useState(Number);
  // Number hooks for use to convert input number into array
  let answer=""
  // Answer is for Output
  const [show,setShow]=useState("")

  // Print function for Calling output
const print=()=>{
  setShow(answer)
}

  const handleCheck = () => {

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

   let s=number.split("").map(Number);
  //  check function for checking value is under Range or Not
   function check(){
    let n=number.length;
    for(let i=0;i<number.length;i++){
      if(!(n>=1 && n<=1000000)){
        alert("Out of Range")
        return false
      }
      else if(s[i]<=-1000000 && s[i]>=1000000){
        alert("Given value too Long")
        return false
      }
      else{
        return true
      }
   }


    }
    if(check){
      const arr =s;
      console.log(s)
      const result = smallestPositiveInt(arr);
      answer=result
      console.log(result);
    }
  };
  

  if (token) {
    return (
      <Box p="2">
        <Box p="2">
          <Heading>Code Challenge</Heading>
        </Box>
        <Box p="15" bg="blue" color={"white"}>
          <Card align="center" bg="blue" color={"white"} textAlign="justify">
            <CardHeader>
              <Heading size="md">Function </Heading>
            </CardHeader>
            <CardBody textAlign={"justify"}>
              <Text>
                Write A Function that, given a Array A of N Integers , return
                the Smallest Positive Integer (Greater than 0) That does not
                Match Occur in A.
              </Text>
            </CardBody>
            <CardFooter textAlign={"justify"}>
              Example :{" "}
              <Text>
                Given A=[1,3,6,4,1,2] that function should Return 5. Given
                A=[1,2,3] that function return 4.
              </Text>
            </CardFooter>
            Write an efficient algorithm for the following assumptions{" "}
            <Text>N is a Integer within the range [1...100,000]</Text>
            Each Element or Array A is an Integer within the Range
            [-1,000,000...1,000,000]
          </Card>
          <Box p="5">
            <Flex gap="5px">
              <Box>
                <Input
                  type="number"
                  bg="white"
                  color="black"

                  onChange={(e) => setNumber(e.target.value)}
                  onBlur={handleCheck}
                />
              </Box>
              <Box>
                <Button bg="black" color="white" onClick={print}>
                  Print Result
                </Button>
              </Box>
            </Flex>
            <Flex p="5">
              OUTPUT: &nbsp;  {show}
            </Flex>
          </Box>
        </Box>
      </Box>
    );
  } else {
    return (
      <Box>
        <Box p="20">
          <Heading>Please Login first..</Heading>
        </Box>
      </Box>
    );
  }
};

export default CodeChallenge;
