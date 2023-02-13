
import { Container, VStack ,Heading,Input,Button,Link,Text,Avatar} from '@chakra-ui/react'
import React from 'react'

const Signup = () => {
  return (
   <Container maxw={"container.xl"} h={"100vh"} p={"16"}>
  <form>
    <VStack alignItems={"stretch"}
    spacing={"8"}
    w={["full","96"]}
    m={"auto"}
    my={"16"}
    
    >
    <Heading textAlign={"center"}>
           Video Hub
    </Heading>
    <Avatar alignSelf={"center" } boxSize={"32"}/>
    <Input placeholder={"Email"} type={"email"} required focusBorderColor={"purple.500"}/>
    <Input placeholder={"Password"} type={"Password"} required focusBorderColor={"purple.500"}/>
   
    <Button colorScheme={"purple"} type={"submit"} >Sign up</Button>
 <Text textAlign={"right"}>Already Sign up? {" "}
 <Button variant={"link"} colorScheme={"purple"} >
 <Link to={"/login"}>  Log In</Link>
  
 </Button>
 </Text>

    </VStack>
  </form>
   </Container>
  )
}

export default Signup
