import { Box, Typography } from '@mui/material'
import useScreenSizes from '../../hooks/ScreenSizes'

const Category = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const images = ['/category/complekt.png','/category/osma.png','/category/sofakreslo.png','/category/lounger.png']
  return (
    <Box width='70%' height='rem' px='12px' color='black'>
      <Box height='100%' width='100%' display='flex' flexDirection='column' justifyContent='space-between'>

        {/* .................categories heading............................................... */}
        <Box width='40%' height='40%' display='flex' flexDirection='column' justifyContent='space-evenly' mx='auto' >
            <Typography variant='h4' fontSize={xlgScreen ? '40px' : lgScreen ? '32px' : '20px'} 
                        textAlign='center' fontWeight='600'>
                    Производим 4 основных категории мебели
            </Typography>
            <Typography textAlign='center' fontSize='12px'>более 200 видов продуктов во всем ассортименте</Typography>
        </Box>

        {/* ........categories with images ................................................... */}

        <Box height = '60%' width = '100%' display='flex' alignItems='center' justifyContent='center'>
           <Box width='90%' height='100%' display='flex'  gap='1rem'>
           {
                images.map((image, idx) => {
                    return ( 
                        <Box component='img' src={image} height='100%' width='100%' borderRadius='10px' /> 
                    )
                })
            }

           </Box>


        </Box>

      </Box>
    </Box>
    
  )
}

export default Category