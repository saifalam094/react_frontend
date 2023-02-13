import { Box, VStack ,Stack, Heading, HStack, Button,Input,Text} from '@chakra-ui/react'
import {AiOutlineSend} from 'react-icons/ai'
import React from 'react'

const Footer = () => {
  return (
    <Box bgColor= {"blackAlpha.900"} minH={'40'} p={'16'} color={"white"}>
    <Stack direction={["column","row"]}>
   <VStack alignItems={"stretch"} w={"full"} px={"4"}>
    <Heading size={"md"} textTransform={"uppercase"} textAlign={["center","left"]}>
        Subscribe to get the latest update
    </Heading>
    <HStack borderBottom={'2px solid white'} py={"2"}>
    <Input  placeholder='Enter Email Here' border={"none"} borderRadius={"none"} outline={"none"} focusBorderColor={"none"} />
        <Button
        p={"0"}
        colorScheme={"purple"}
        variant={"ghost"}
        borderRadius={'0 20px 20px 0'}
        >
            <AiOutlineSend size={"20"}/>
        </Button>
    </HStack>
   </VStack>
   <VStack  w={"full"}
   borderLeft={["none","1px solid white"]}
   borderRight={["none","1px solid white"]}

   
   
   >
   <Heading  textTransform={"uppercase"} textAlign={"center"}>
   Video Hub
   </Heading>
   <Text>
    All Right Reserved
   </Text>

   </VStack>
   <VStack w={"full"}>
     <Heading size={"md"} textTransform={"uppercase"}>
       Social Media
     </Heading>
     <Button
     variant={"link"}
     colorScheme={"white"}
     
     >
     <a href="https://www.facebook.com" target={"blank"}>Facebook</a>


     </Button>
     <Button
     variant={"link"}
     colorScheme={"white"}
     
     >
     <a href="https://www.twitter.com" target={"blank"}>Twitter</a>

     

     </Button>
     <Button
     variant={"link"}
     colorScheme={"white"}
     
     >
     <a href="https://www.google.com" target={"blank"}>Google</a>
     

     </Button>
   </VStack>
    </Stack>
    </Box>
  )
}

export default Footer
