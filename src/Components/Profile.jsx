import { Box, Heading,Card, CardHeader, CardBody, CardFooter,Image,Stack,Text,Button } from '@chakra-ui/react'
import React from 'react'

const Profile = () => {
  // token is use for check user Login or Not if user Login then token save otherwise token is Empty
  // Profile is for Login user Details
  let token=JSON.parse(localStorage.getItem("Token"))
  let profile=JSON.parse(localStorage.getItem("profile"))
  let welcome=JSON.parse(localStorage.getItem("Welcome"))

  //  Here is for T & C  Logic if user accept then this code will save 
  // if user cancel then it's show on every onload..
  if(!welcome){
    let text="welcome hii this is profile page.."
    if(window.confirm(text) === true) {
      text = "You pressed OK!";
      localStorage.setItem("Welcome",JSON.stringify("Yes"))
    } else {
      text = "You canceled!";
    }
  }
 


// here we check if User Login then he can access the page otherwise 
// he need to Login..
  if(token){
    return (
      <Box>
        {/* <Box>
          <Img src=""/>
        </Box> */}
        <Box>
        <Card
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  {/* I take Dummy profile Image for this.. */}
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src='https://source.unsplash.com/random/200x200?sig=1'
    alt='Caffe Latte'
  />

  <Stack>
    <CardBody>
      <Heading size='md'>{profile.fullName }</Heading>

      <Text py='2'>
      email - {profile.email}
      </Text>
    </CardBody>

    <CardFooter>
      User Name - {profile.userName}
    </CardFooter>
  </Stack>
</Card>
        </Box>
        <Box>

        </Box>
      </Box>
    )
  }
  else{
    return (
      <div>
        <Box p="20">
          <Heading>Please Login First....</Heading>
        </Box>
      </div>
    )
  }

}

export default Profile