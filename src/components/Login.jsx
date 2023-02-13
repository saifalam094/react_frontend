import { Container, VStack ,Heading,Input,Button,Link,Text} from '@chakra-ui/react'
import React from 'react'

const Login = () => {
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
            Welcome Back
    </Heading>
    <Input placeholder={"Email"} type={"email"} required focusBorderColor={"purple.500"}/>
    <Input placeholder={"Password"} type={"Password"} required focusBorderColor={"purple.500"}/>
    <Button variant={"link"}  alignSelf={"flex-end"} ><Link to="/forgetpassword">Forget Password?</Link></Button>
    <Button colorScheme={"purple"} type={"submit"} >Log In</Button>
 <Text textAlign={"right"}>New User? {" "}
 <Button variant={"link"} colorScheme={"purple"} >
 <Link to="/signup">  Sign Up</Link>
  
 </Button>
 </Text>

    </VStack>
  </form>
   </Container>
  )
}

export default Login
