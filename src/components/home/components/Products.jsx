import { Center, Container, SimpleGrid, Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import CardProduct from './cards/CardProduct'

const Products = () => {
    const [isLargerThan450] = useMediaQuery('(min-width: 450px)')
  return (
    <Center  w='100%' >
  
        <SimpleGrid columns={[2, null, 3]} spacing={isLargerThan450?'50px':'30px'}  >
        
            <CardProduct url='https://i.imgur.com/3X29wr8.png'/>
            <CardProduct url='https://i.imgur.com/EWrRyuS.png'/>
            <CardProduct url='https://i.imgur.com/3X29wr8.png'/>
            <CardProduct url='https://i.imgur.com/EWrRyuS.png'/>
            
        </SimpleGrid>
        </Center> 
  )
}

export default Products