import { Button, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Ads2 = () => {
    const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  return (
   <Stack direction={isLargerThan980?"row":'column'} spacing={0}>
       <Stack  justify='end' w={!isLargerThan980?'100%':'60%'} h={isLargerThan980?'80vh':'50vh'} backgroundRepeat='no-repeat' backgroundSize='cover' backgroundImage='https://i.imgur.com/LTAiVRG.png'>
           
           <Stack bg='rgba(255, 255, 255, 0.74)'  padding='20px'><Button fontSize='25' bg='none' p='10px' fontWeight='bold' color='black'>NEW COLLECTION</Button></Stack>
        </Stack>

           <Stack justify='center' align='center' d={isLargerThan980?'flex':'none'} bg='negro1' w={!isLargerThan980?'100%':'50%'} h={isLargerThan980?'80vh':'50vh'}>
                    <Text fontSize='70px' fontWeight='bold' color='rojo3'>Summer Sale</Text>
           </Stack>     
   </Stack>
  )
}

export default Ads2