import { Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import NavbarDesktop from '../../navbar/NavbarDesktop'
import Ads from '../components/Ads'
import Ads2 from '../components/Ads2'
import Ads3 from '../components/Ads3'
import Filter from '../components/Filter'
import Products from '../components/Products'

const Home = () => {
  const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
  return (
   <Stack pb='100px' bg='negro1'  spacing={0} pt={isLargerThan980 &&'100px'}>

       <Ads/>
       <Ads2/>
       <Ads3/>
     

       <Filter w='100%'/>
       <Products maxWidth='100%'>

       </Products>
   </Stack>
  )
}

export default Home