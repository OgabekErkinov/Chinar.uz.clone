import { Box, Button, Input, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import useScreenSizes from '../../hooks/ScreenSizes'
import { useTranslation } from 'react-i18next'

const DownloadSection = () => {
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const {t} = useTranslation()
    const [name, setName] = useState('')
    const [number, setNumber] = useState('+998')
    const [isNumber, setIsNumber] = useState(false)

    const handleChangeNumber = (string) => {
      const sanitized = string.replace(/\D/g, '').split('').slice(0);
      console.log(typeof sanitized)
    
    // Faqatgina "+998" prefiksidan keyin raqamlarni qo'shish
    if (sanitized.startsWith('998')) {
        setNumber(`+${sanitized}`);
    } else {
        setNumber(`+998${sanitized.slice(0, 9)}`); // Maksimal uzunlikni cheklash
    }
        
    }

    const handleClick = () => {
      (number.split('').slice(4,8).join('') === '+998' || number.length !== 14) ?  setIsNumber(false) : setIsNumber(true)
      console.log(isNumber, number, number.length)
      console.log(typeof number)
      console.log(number.split('').slice(4,8))

    }
  return (
    <Box width='98%' height={xlgScreen ? '286px' : lgScreen ? '300px' : 'auto'} bgcolor='#FAFAFA'>
        <Box height='100%' width='100%' displayPrint='flex' position='relative'>

            <Stack height='100%' width={smScreen || mdScreen ? '100%' : '60%'} gap='0.5rem' 
                   justifyContent='center' px='2rem'>
                <Typography fontWeight='600' variant='h4' color='#000000'>{t('downloadSection.title')}</Typography>
                <Typography color='#000000'>{t('downloadSection.helperText')}</Typography>
                <Box display='grid' gridTemplateColumns={smScreen || mdScreen ? '1fr' : '1fr 1fr 1fr'} gap='0.5rem'
                     alignItems='center' justifyContent='center'>
                    <Input placeholder={t('downloadSection.name')} disableUnderline
                           sx={{border : '1px solid #D6D6D6', borderRadius : '10px', 
                                width : '100%', height : '3rem', p : '5px'}}
                           onChange={(e) => setName(e.target.value)}/> 
                    <Input placeholder='901234567' disableUnderline
                           sx={{border : '1px solid #D6D6D6', borderRadius : '10px', 
                                width : '100%', height : '3rem', p : '5px'}}
                                value={number}
                                onChange={(e) => handleChangeNumber(e.target.value)}/> 
                    <Box width='100%' height = '3rem' p='5px' mx='auto' bgcolor='#94C11F' borderRadius='6px' >
                       <Button sx={{height : '100%', width : '100%'}} onClick={()=>handleClick()}>
                          <Typography color='#ffffff'>{t('downloadSection.download')}</Typography>
                       </Button>
                    </Box>
                </Box>
            </Stack>

            <Box height={lgScreen ? '110%' : '140%'} width='50%' position='absolute' right='-5%' top ={lgScreen ? '-10%':'-20%'} zIndex='1'
                  display={smScreen || mdScreen ? 'none' : 'block'}>
                <Box component='img' src='/book.png' height='100%' width='100%'/>
            </Box>

        </Box>

    </Box>
  )
}

export default DownloadSection