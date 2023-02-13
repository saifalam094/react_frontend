import React from 'react'
import {Box, Image, Heading, Container,Stack,Text} from '@chakra-ui/react'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'

import img4 from '../assets/4.jpg'
import img5 from '../assets/5.png'

 const headingOption={
    pos:"absolute",
    left: "50%",
    top:"50%",
    transform:"translate(-50%,-50%)",
    textTransform:"uppercase",
    p: '4',
    size:'4xl'

}

const Home = () => {
  return (
    <Box>
    <MyCarousel/>
    <Container maxW={'container.xl'} minH={'100vh'} p='16'>
   <Heading textTransform={"uppercase"}py="2" w={'fit-content'} borderBottom="2px solid" m={"auto"}>
     services 
   </Heading>
   <Stack 
   h="full"
   p={'4'}
   alignItems={"center"}
   direction= {["column","row"]}
   
   
   
   
   >
<Image src={img5} h={['40','400']}     filter={'hue-rotate(-130deg)'}/>
<Text letterSpacing={"widest"} lineHeight={"190%"} p={  ["4","16"]} textAlign={"center"}>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti illum quis explicabo? Tenetur, unde et animi minima alias molestias fugiat eaque non aperiam accusantium nam magnam distinctio eligendi repellendus ducimus odio tempore placeat omnis ipsam? Ipsam incidunt magni soluta suscipit placeat ad eveniet assumenda, possimus deleniti, doloremque nisi corrupti ab.
</Text>
   </Stack>
    </Container>
    </Box>
  )
}

function MyCarousel(){
    return(
        <Carousel
        autoPlay
        infiniteLoop
        interval={1000}
        showStatus={false}
        showThumb={false}
        showArrows={false}
        >
           <Box
           w={"full"}
           h={"100vh"}
           >
           <Image src={img1}

           />
           <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOption}>
            watch the future
           </Heading>

           </Box>
           <Box
           w={"full"}
           h={"100vh"}
           >
           <Image src={img2}

           />
           <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOption}>
            Future is Gaming
           </Heading>

           </Box>
           <Box
           w={"full"}
           h={"100vh"}
           >
           <Image src={img3}

           />
           <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
          Gaming on Console
           </Heading>

           </Box>
           <Box
           w={"full"}
           h={"100vh"}
           >
           <Image src={img4}

           />
           <Heading bgColor={"whiteAlpha.600"} color={"black"} {...headingOption}>
            Night Life is Cool
           </Heading>

           </Box>
        </Carousel>
    )
}


export default Home
