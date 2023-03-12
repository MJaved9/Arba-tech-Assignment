import React from 'react'
import { useState,useEffect } from "react";
import {Box,Button,Flex,Image, Img} from "@chakra-ui/react"
const Carousel = () => {
  // here is static images for slider and hooks for changing values
  const [a, setA] = useState(0);
  let slideImageData = [
    {
      image:
        "https://images.unsplash.com/photo-1612852098516-55d01c75769a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60'"
    },
    {
      image:
        "https://images.unsplash.com/photo-1627875764093-315831ac12f7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      image:
        "https://images.unsplash.com/photo-1571432248690-7fd6980a1ae2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDl8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    },
    {
      image:
        "https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
    }
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = slideImageData.length;

  // for next image 
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
  };

  // Login for previous Image
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
  };

  // This autoscroll and auto slide is for auto change image in a particular time..
  const autoScroll = true;
  let slideInterval;
  let intervalTime = 3000;

  const autoSlide = () => {
    slideInterval = setInterval(nextSlide, intervalTime);
  };

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  useEffect(() => {
    if (autoScroll) {
      autoSlide();
    }
    return () => clearInterval(slideInterval);
  }, [currentSlide]);
  return (
    <Box>

    <div style={{position:"relative",width:"100%",maxWidth:"400px"}}>
    <button onClick={prevSlide} style={{position:"absolute",top:"50%",color:"white",fontSize:"40px",left:"5%"}}>{"<"}</button>
    <button onClick={nextSlide} style={{position:"absolute",top:"50%",color:"white",fontSize:"40px",right:"5%"}}>{">"}</button>
      {slideImageData.map((slide, index) => {
        return (
          <Box
            //className={index == currentSlide ? "slide current" : "slide"}
            key={index}
          >
            <Box>
              {index === currentSlide && <Img src={slide.image} alt="img" width={"100%"} height={"auto"} />}
            </Box>
          </Box>
        );
      })}
    </div>
    <div>
    
    </div>
  </Box>
  )
}

export default Carousel