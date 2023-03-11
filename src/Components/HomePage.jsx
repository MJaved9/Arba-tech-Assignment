import React from 'react'
import { Heading,Box} from "@chakra-ui/react";
const HomePage = () => {
  let token=JSON.parse(localStorage.getItem("Token"))
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

  if(token){
    return (
      <div>HomePage</div>
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