import React, { useEffect, useState } from 'react'
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
import Carousel from './Carousel';
import Products from './Products';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const [data,setData]=useState([])
  let token=JSON.parse(localStorage.getItem("Token"))
  let item = [];
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let welcome1=JSON.parse(localStorage.getItem("Welcome1"))
  if(!welcome1){
    let text="welcome hii this is profile page.."
    if(window.confirm(text) === true) {
      text = "You pressed OK!";
      localStorage.setItem("Welcome1",JSON.stringify("Yes"))
    } else {
      text = "You canceled!";
    }
  }
  function fetchData(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((res) => {
          resolve(res);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }
  const handleCart = (ele, id) => {
    console.log(ele);
    cart.push(ele);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Item Added");
    window.location.reload();
  };
  cart.map((ele, i) => {
    item.push(Number(ele.id));
  });

  useEffect(() => {
    fetchData("https://fakestoreapi.com/products?limit=4")
      .then((res) => {
        setData(res);
        // console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  },[]);

  if(token){
    return (
     <Box p="10">
      <Box alignItems={"center"} marginLeft="37%"  marginRight="10%">
      <Carousel/>
      
     </Box>
     <Box>
        <Box p="4%">
          <SimpleGrid columns={[1, 1, 2, 4]} spacing="40px">
            {data.map((ele, i) => {
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
                    <ButtonGroup spacing="0">
                      {item.includes(ele.id) ? (
                        <Box alignItems={"center"}>
                          <Button>+</Button>
                          {1}
                          <Button>-</Button>
                        </Box>
                      ) : (
                        <Button
                          variant="solid"
                          colorScheme="blue"
                          onClick={() => handleCart(ele, i)}
                        >
                          Add To Cart
                        </Button>
                      )}
                    </ButtonGroup>
                  </CardFooter>
                </Card>
              );
            })}
          </SimpleGrid>
        </Box>
      </Box>
      <Box float={"right"} p="4">
        <Button bg="black" color="white" paddingLeft={"100px"} paddingRight={"100px"}><Link to="/all_products">All Products</Link></Button>
      </Box>
     </Box>
    )
  }
  else{
    return (
      <Box>
        <Box p="16">
          <Heading>Please Login First...</Heading>
        </Box>
      </Box>
    )
  }

}

export default HomePage