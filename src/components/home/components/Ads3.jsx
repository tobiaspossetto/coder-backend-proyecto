import { Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'

const Ads3 = () => {
    const [isLargerThan980] = useMediaQuery('(min-width: 980px)')
    const [isLargerThan1200] = useMediaQuery('(min-width: 1200px)')
    const [isLargerThan420] = useMediaQuery('(min-width: 420px)')
    return (
        <Stack w='100%' direction="row" spacing='0px' >

            <Stack w='60%' spacing='0px'>
                <Stack  d={isLargerThan980?'none':'flex'} padding='5px' spacing='0px' align='center' justify="center" bg='negro1' w='100%' h='25vh'>
                    <Text align='center'  fontSize={isLargerThan420?'35px':'25px'} fontWeight='bold' color='rojo3'>Summer Sale</Text>
                </Stack>
                <Stack paddingBottom='60px' align='center' justify='end' backgroundRepeat='no-repeat' backgroundSize='cover' backgroundImage='https://i.imgur.com/CuGxuvf.png' w='100%' h={isLargerThan980?'70vh':'45vh'}>
                <Text align='center' fontSize={isLargerThan420 && !isLargerThan980?'35px':!isLargerThan420?'25px': '70px'} fontWeight='bold' color='blanco1'>Black</Text>
                    </Stack>
            </Stack>

            <Stack align='center' justify='start' pt='70px' w='50%' h='70vh' backgroundRepeat='no-repeat' backgroundPosition='right' backgroundSize='cover' backgroundImage='https://i.imgur.com/FOufp3R.png'>
            <Text align='center' fontSize={isLargerThan420 && !isLargerThan980?'35px':!isLargerThan420?'25px': '70px'} fontWeight='bold' color='blanco1'>Men's hats</Text>
            </Stack>
        </Stack>
    )
}

export default Ads3