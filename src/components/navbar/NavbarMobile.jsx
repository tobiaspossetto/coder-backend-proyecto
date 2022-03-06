import { Button, Link, Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {MdFavoriteBorder,MdExitToApp} from 'react-icons/md'
import {BsCart3} from 'react-icons/bs'
const NavbarMobile = () => {
    const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
  return (
    <Stack d={isLargerThan980?'none':'flex'} boxShadow={'md'} direction='row'  justify='center' position='fixed' bottom='0' w='100%'zIndex='6' h='60px' bg='negro1' align='center' justify-content='space-between' spacing='40px'>
        <Stack p='10px' direction='row'   spacing='40px'>
            
             <Stack direction='column'  spacing='7px' align='center' >
                <AiOutlineHome color='white' size='30px'/>
               
            </Stack>

            <Stack direction='column' spacing='7px' align='center' >
                <BiShoppingBag color='white' size='30px'/>
               
            </Stack>


            <Stack direction='column' spacing='7px' align='center' >
                <MdFavoriteBorder color='white' size='30px'/>
            
            </Stack>


            <Stack direction='column' spacing='7px' align='center' >
                <BsCart3 color='white' size='30px'/>
                
            </Stack>
            
        </Stack>
        <Stack direction='column' spacing='7px' align='center'>
          <MdExitToApp  color='red' size='30px'/>
        
          
        </Stack>
    </Stack>
  )
}

export default NavbarMobile