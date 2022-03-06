import { Button, Image, Stack, Text, useDisclosure, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Ads = () => {
  const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
  const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
  return (
    <Stack spacing={0} w='100%' h={isLargerThan980?'100vh':'70vh'} direction={isLargerThan980 && 'row'} align={isLargerThan980 &&'center'}>
      <Stack d={isLargerThan980 ? 'flex' : 'none'} align='center' justify='center' p='15px' h='100%' bg='negro1' w='60%'>
        <Text textAlign='start' fontWeight='bold' fontSize={isLargerThan1200 ? '80px' : '60px'} color='blanco1'>Fashion  sale</Text>

        <Button p='15px 20px' w='180px' variant='btnBold'>Check</Button>
      </Stack>
      <Stack w={isLargerThan980 ? '50%' : '100%'} h={isLargerThan980 ? '100%' : '100%'}>

        <Stack paddingBottom='45px' align='center' justify='end' w='100%' h='100%' backgroundImage={'https://i.imgur.com/qFHzuQA.png'} backgroundRepeat='no-repeat' backgroundSize='cover'>
          <Text d={isLargerThan980 ? 'none' : 'block'} textAlign='start' fontWeight='bold' fontSize={'50px'} color='blanco1'>Fashion  sale</Text>

          <Button p='10px 20px' d={isLargerThan980 ? 'none' : 'block'} w='auto' h='auto' variant='btnBold'>Check</Button>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Ads