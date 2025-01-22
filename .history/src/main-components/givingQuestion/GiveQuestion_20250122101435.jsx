import { Box, Button, Portal, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import useScreenSizes from '../../hooks/ScreenSizes'
import GiveQuestionModal from '../modals/GiveQuestionModal'

const GiveQuestion = ({root}) => {
    const {t} = useTranslation()
    const {smScreen, mdScreen, lgScreen, xlgScreen} = useScreenSizes()
    const [isModal, setIsModal] = useState(false)
  return (
    <Box height='auto' width='100%'>
        <Stack height='auto' width='auto' alignItems='flex-start' gap='1rem'>
      {/* ................................................................... */}
            <Box height='auto' width='100%'>
                <Typography fontSize={xlgScreen ? '40px' : lgScreen ? '36px' : mdScreen ? '28px' : '24px'}
                            fontWeight='600' color='#000000' width='100%' textAlign='left'>
                    {t('givingQuestion.giveQuestion')}
                </Typography>
            </Box>
      {/* .................................................................... */}

            <Box height='60px' width='240px' bgcolor='#94C11F' borderRadius='2px'>
               <Button sx={{height : '100%', width : '100%', p : 'auto'}} onClick={()=> setIsModal(!isModal)}>
                  <Typography fontSize='18px' color='#ffffff'>
                    {t('givingQuestion.buttonText')}
                  </Typography>
               </Button>
            </Box>
            

        </Stack>
        {
          isModal && <Portal container={root}>
                           <GiveQuestionModal/>>
                     </Portal>
        }

    </Box>
  )
}

export default GiveQuestion