import React, { useState } from "react";
import {
  Box,
  SimpleGrid,
  Heading,
  Button,
  Center,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Stack,
  Text,
  ButtonGroup,
  Divider,
  Flex,
  Spacer,
  Select,
} from "@chakra-ui/react";
const Cart = () => {
  // Val hook for use inc and dec try to add..
  const [val,setVal]=useState(1)
  const handleInc=()=>{
    setVal(val+1)
  }
  const handleDec=()=>{
    if(val>1){
      setVal(val-1)
    }
  }
  // cart lS for added cart Item..
  let cart=JSON.parse(localStorage.getItem("cart"))
  return (
    <Box p="15">
      <Box p="25">
      <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
        {/* Fetching all cart data and add in simple grid  */}
            {cart.map((ele, i) => {
              return (
                <Card maxW="sm" key={i}>
                  <CardBody>
                    <Image
                      src={ele.image}
                      alt="Green double couch with wooden legs"
                      borderRadius="sm"
                    />
                    <Stack mt="6" spacing="3" textAlign={"justify"}>
                      <Heading size="md">{ele.title}</Heading>
                      <Text>
                        <b>Rating:{ele.rating.rate}</b>
                      </Text>
                      <Text>
                        <b>category:</b>
                        {ele.category}
                      </Text>
                      <Text color="blue.600" fontSize="2xl">
                        ₹{ele.price}
                      </Text>
                    </Stack>
                  </CardBody>
                  <Divider />
                  <CardFooter>
                    <ButtonGroup spacing="2">
                        <Box alignItems={"center"}>
                          <Button onClick={()=>handleInc(ele,i)}>+</Button>
                          {val}
                          <Button onClick={()=>handleDec(ele,i)}>-</Button>
                        </Box>
                
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
      </Box>
      <Box float="right" p="1">
        <Button bg="black" color="white">Checkout</Button>
      </Box>
    </Box>
  );
};

export default Cart;
