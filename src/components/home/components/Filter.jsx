import { Button, Center, Stack } from '@chakra-ui/react'
import React from 'react'

const Filter = () => {
  return (
     

    <Stack p='30px' bg='negro1'  w='100%' direction='row' align='center' justify='space-evenly'>
        <Button  borderRadius='12px' w='100px'>T-shirts</Button>
        <Button borderRadius='12px'  w='100px'>Blouses</Button>
        <Button borderRadius='12px'  w='100px'>Shirts</Button>
        <Button  borderRadius='12px' w='100px'>Pants</Button>
    </Stack>
    
  )
}

export default Filter