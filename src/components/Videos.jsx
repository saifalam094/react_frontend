import { Heading, Stack,VStack,Text, Button} from '@chakra-ui/react'
import vid1 from '../assets/video1.webm'
import React,{useState}  from 'react'

const Videos = () => {
  const videosArr=["vid1","vid1","vid1","vid1","vid1"]
  const [videoSrc,setVideoSrc]=useState(videosArr[0])
  return (
   <Stack direction={["column","row"]} h={"100vh"}>
   <VStack w={"full"} >
   <video
   controls
    controlsList="nodownload"
    src={vid1}
    style={{width:"100%"}}
   >

   </video>
  
    <VStack alignItems={"flex-start"} p={"8"} w={"full"} overflowY={"overlay"}>
    <Heading>
      Sample video 1
    </Heading>
    <Text>
      This is a sample video for testing and there are lot of good information here......  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate blanditiis ad porro officiis, quisquam iste atque et nostrum rem odio pariatur minima adipisci explicabo doloribus, commodi dolorum sit tenetur repellat qui ut totam quaerat delectus ullam consectetur? Officia, eveniet provident minima, architecto voluptate nemo facilis suscipit nobis illo error nostrum? Aspernatur ab expedita aut consectetur ipsa quisquam necessitatibus suscipit voluptas aperiam? Incidunt animi laboriosam dolorem neque cupiditate quas fuga dignissimos harum possimus sit, aspernatur quasi voluptate quis, velit totam rem necessitatibus culpa? Recusandae, minima! Ad iste reprehenderit numquam harum. Blanditiis nesciunt, sint unde nam error et doloremque ex qui iure.
    </Text>
    </VStack>
   </VStack>
   <VStack w={["full","xl"] } alignItems={"stretch"} p={"8"} spacing={"8"} overflowY={"auto"}
   >
  {
    videosArr.map((item,index)=>(
      <Button variant={"ghost"} colorScheme={"purple"}
      onClick={()=>setVideoSrc(item)}
      
      >
   Lecture {index+1}
      </Button>
    ))
  }

   </VStack>
   

   </Stack>
  )
}

export default Videos

