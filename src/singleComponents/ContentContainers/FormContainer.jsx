/* eslint-disable react/prop-types */
import { Box, Stack } from '@chakra-ui/react'
import { bgElement } from '../../utils/ChakraTheme/ColorPalette'

export default function FormContainer ({ children }) {
  return (
    <Box
      rounded='lg'
      bg={bgElement}
      shadow='lg'
      height='sm'
      p={8}
    >
      <Stack spacing={7}>
        {children}
      </Stack>
    </Box>
  )
}
