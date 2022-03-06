import { Button, Link, Stack, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { NavLink } from 'react-router-dom'
import {AiOutlineHome} from 'react-icons/ai'
import {BiShoppingBag} from 'react-icons/bi'
import {MdFavoriteBorder,MdExitToApp} from 'react-icons/md'
import {BsCart3} from 'react-icons/bs'

const NavbarDesktop = () => {
    const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
  return (
    <Stack zIndex={5} position='fixed' w='100%'d={isLargerThan980?'flex':'none'} justify='space-between' p='20px' align='center' direction='row' boxShadow={'md'} h='100px' bg='negro2'>
        <Stack direction='row' align='center' spacing={8}>

            <Stack direction='row' align='center' >
                <AiOutlineHome color='white' size='30px'/>
                <Link  variant='nd'>HOME</Link>
            </Stack>

            <Stack direction='row' align='center' >
                <BiShoppingBag color='white' size='30px'/>
                <Link  variant='nd'>ORDERS</Link>
            </Stack>


            <Stack direction='row' align='center' >
                <MdFavoriteBorder color='white' size='30px'/>
                <Link  variant='nd'>FAVORITES</Link>
            </Stack>


            <Stack direction='row' align='center' >
                <BsCart3 color='white' size='30px'/>
                <Link  variant='nd'>CART</Link>
            </Stack>
        </Stack>

        <Stack direction='row' align='center' spacing={0}>
            
            <Button leftIcon={<MdExitToApp  color='red' size='30px'/>}  variant='nd'>EXIT</Button>
        </Stack>
    </Stack>
  )
}

export default NavbarDesktop