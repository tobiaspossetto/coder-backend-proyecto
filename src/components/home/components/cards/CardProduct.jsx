import { Button, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import {MdFavoriteBorder} from 'react-icons/md'
const CardProduct = ({url}) => {
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
  return (
  <Stack borderRadius='15px' spacing={0} bg='negro2' w={isLargerThan450?'200px':'150px'} h='300px'>
      <Stack borderTopRadius='15px' w='100%' h='60%'  backgroundRepeat='no-repeat' backgroundSize='cover' backgroundImage={url}>
          
      </Stack>

      <Stack p='5px' bg='negro2' w='100%' h='20%'>
          <Text fontSize='12px' color='blanco2'>Mango Boy</Text>
          <Text fontWeight='600' color='blanco1'>T-Shirt Sailling</Text>
         
      </Stack>

      <Stack borderRadius='15px' p='5px' direction='row' align='center' justify='space-between' bg='negro2' w='100%' h='20%'>
             <Text fontSize='20px'  color='blanco1'>$230</Text>
             <Button _focus={{bg:'none'}} _hover={{bg:'none'}} bg='' w='auto'>
             <MdFavoriteBorder color='white' size='30px'/>
             </Button>
      </Stack>
  </Stack>
  )
}

export default CardProduct